/**
 * BGField descriptor must has a default value
 * @param type
 * @param dynamic
 * @param snapshot
 * @param rankKey
 * @constructor
 */
import * as ByteBuffer from "bytebuffer";

export function BGField(type: EBGValueType, dynamic: boolean = false, snapshot: boolean = false, rankKey: any = null) {
    return (target: Object, key: string): void => {
        Object.defineProperty(target, key, {
            get: function () {
                return this.__fields[key].value;
            },
            set: function (newValue) {
                // bind self key in parent field map
                if (newValue instanceof BGObject) {
                    newValue.key = key;
                }

                // specified value type for BGArray and BGMap
                if ((newValue instanceof BGArray) || (newValue instanceof BGMap)) {
                    newValue.valueT = type;
                }

                // first init then register meta info of field
                if (this.__fields[key] === undefined) {
                    const valueType = typeof newValue;
                    if (!(newValue instanceof BGObject) && valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') {
                        throw new Error('BGField only be add to number, string or BGObject, key=' + key + ', type=' + valueType);
                    }

                    this.__fields[key] = {
                        type: type,
                        value: newValue,
                        dirty: EDirtyType.EDT_OK,
                        dynamic: dynamic,
                        uid: ++this.__nextUid
                    };
                }
                // set dirty flag when value changed
                else if (this.__fields[key].value !== newValue) {
                    this.__fields[key].value = newValue;
                    this.__fields[key].dirty = EDirtyType.EDT_DIRTY_MOD;
                    this.makeDirty();
                }
            }
        });
    };
}

export enum EDirtyType {
    EDT_OK = 0,
    EDT_DIRTY_MOD,     // 增量更新
    EDT_DIRTY_FULL     // 全量更新
}

export enum EBGValueType {
    boolean = 0,
    uint8,
    int8,
    uint16,
    int16,
    uint32,
    int32,
    uint64,
    int64,
    string,
    bytes,
    object
}

interface IField {
    type: EBGValueType;
    value: number | string | BGObject;
    dirty: EDirtyType;
    uid: number;
    dynamic?: boolean;
}

function encodeDefaultType(o: IField, buffer: ByteBuffer) {
    // write default uid 0
    buffer.writeUint32(o.uid);
    switch (o.type) {
        case EBGValueType.boolean:
            buffer.writeUint8(o.value ? 1 : 0);
            break;
        case EBGValueType.uint8:
            buffer.writeUint8(o.value as number);
            break;
        case EBGValueType.int8:
            buffer.writeInt8(o.value as number);
            break;
        case EBGValueType.uint16:
            buffer.writeInt16(o.value as number);
            break;
        case EBGValueType.int16:
            buffer.writeUint16(o.value as number);
            break;
        case EBGValueType.uint32:
            buffer.writeUint32(o.value as number);
            break;
        case EBGValueType.int32:
            buffer.writeInt32(o.value as number);
            break;
        case EBGValueType.uint64:
            buffer.writeUint64(o.value as number);
            break;
        case EBGValueType.int64:
            buffer.writeInt64(o.value as number);
            break;
        case EBGValueType.string:
            buffer.writeString(o.value as string);
            break;
        case EBGValueType.bytes:
            buffer.writeBytes(o.value as string);
            break;
        default:
            break;
    }
}

export abstract class BGObject {
    protected __fields: { [key: string]: IField } = {};
    protected __dirty: EDirtyType = EDirtyType.EDT_OK;
    protected __key: string = undefined;
    protected __parent: BGObject = null;
    protected __nextUid: number = 0;

    constructor(parent?: BGObject, key?: string) {
        this.__parent = parent;
        this.__key = key;
    }

    set parent(p: BGObject) {
        this.__parent = p;
    }

    get dirty() {
        return this.__dirty;
    }

    set dirty(p: EDirtyType) {
        this.__dirty = p;
    }

    set key(p: string) {
        this.__key = p;
    }

    dirtyFields(): string[] {
        if (!this.__dirty) {
            return [];
        }

        let ret = [];
        for (let k in this.__fields) {
            if (this.__fields[k].dirty) {
                ret.push(k);
            }
        }
        return ret;
    }

    makeDirty() {
        if (this.__dirty !== EDirtyType.EDT_OK) {
            return;
        }
        this.__dirty = EDirtyType.EDT_DIRTY_MOD;
        let parent = this.__parent, self: BGObject = this;
        while (parent && parent.__dirty === EDirtyType.EDT_OK) {
            parent.__dirty = EDirtyType.EDT_DIRTY_MOD;
            if (self.__key !== undefined) {
                parent.__fields[self.__key].dirty = EDirtyType.EDT_DIRTY_MOD;
            }
            self = parent;
            parent = parent.__parent;
        }
    }

    clearDirty() {
        if (this.__dirty === EDirtyType.EDT_OK) {
            return;
        }
        this.__dirty = EDirtyType.EDT_OK;
        for (let k in this.__fields) {
            let field = this.__fields[k];
            if (field.dirty) {
                field.dirty = EDirtyType.EDT_OK;
                let value = field.value;
                if (value instanceof BGObject) {
                    value.clearDirty();
                }
            }
        }
    }

    /**
     * interact with client
     * @param buffer
     * @param selfUid
     */
    encodeFull(buffer: ByteBuffer, selfUid?: number) {
        if (selfUid !== undefined) {
            buffer.writeUint32(selfUid);
        }
        buffer.writeUint32(Object.keys(this.__fields).length);
        for (let k in this.__fields) {
            const o: IField = this.__fields[k];
            if (o.value instanceof BGObject) {
                o.value.encodeFull(buffer, o.uid);
            }
            else {
                encodeDefaultType(o, buffer);
            }
        }
        this.clearDirty();
    }

    /**
     * interact with client
     * @param buffer
     * @param selfUid
     */
    encodeDelta(buffer: ByteBuffer, selfUid?: number) {
        if (this.__dirty === EDirtyType.EDT_OK) {
            return;
        }
        if (selfUid !== undefined) {
            buffer.writeUint32(selfUid);
        }
        let modBuffer = new ByteBuffer();
        let modCnt = 0;
        for (let k in this.__fields) {
            const o: IField = this.__fields[k];
            if (o.dirty === EDirtyType.EDT_DIRTY_MOD) {
                ++modCnt;
                if (o.value instanceof BGObject) {
                    o.value.encodeDelta(modBuffer, o.uid);
                }
                else {
                    encodeDefaultType(o, modBuffer);
                }
            }
            else if (o.dirty === EDirtyType.EDT_DIRTY_FULL) {
                ++modCnt;
                if (o.value instanceof BGObject) {
                    o.value.encodeFull(modBuffer);
                }
                else {
                    encodeDefaultType(o, modBuffer);
                }
            }
        }
        buffer.writeUint32(modCnt);
        buffer.append(modBuffer.slice(0, modBuffer.offset));
        this.clearDirty();
    }

    toObject(bAll?: boolean): { [key: string]: any } {
        let reply: { [key: string]: any } = {};
        for (let k in this.__fields) {
            let o: IField = this.__fields[k];
            if (!bAll && o.dirty === EDirtyType.EDT_OK) {
                continue;
            }
            if (o.value instanceof BGObject) {
                reply[k] = o.value.toObject(bAll);
            }
            else {
                reply[k] = o.value;
            }
        }
        return reply;
    }

    fromObject(reply: { [key: string]: any }): void {
        for (let k in reply) {
            let d = reply[k];
            let o = this.__fields[k];
            if (!o) {
                console.warn(`${k} is missing with in fields`);
                continue;
            }

            if (o.type === EBGValueType.object) {
                (o.value as BGObject).fromObject(d);
            }
            else {
                o.value = d;
            }
        }
    }

    public decodeDB(reply: { [key: string]: any }): void {
        for (let k in reply) {
            let o = reply[k];
            if (typeof o === 'string') {
                reply[k] = JSON.parse(o);
            }
        }
        this.fromObject(reply);
    }

    public encodeDB(bAll?: boolean): { [key: string]: any } {
        if (!bAll && this.dirty === EDirtyType.EDT_OK) {
            return;
        }
        let reply = this.toObject(bAll);
        for (let k in reply) {
            let o = reply[k];
            if (typeof o === 'object' || typeof o === 'string') {
                reply[k] = JSON.stringify(o);
            }
        }
        return reply;
    }
}

enum EDeltaOpt {
    INSERT = 1,
    DELETE = 2,
    UPDATE_DELTA = 3,
    UPDATE_FULL = 4,
}

export class BGMap<T extends BGObject | string | number> extends BGObject {
    private _data: { [key: string]: T } = {};
    private _valueT: EBGValueType = undefined;
    private readonly _typeT: (new () => T) = undefined;
    private _binlogCnt: number = 0;
    private _binlog: ByteBuffer = new ByteBuffer();
    private _length: number = 0;

    /**
     * @param parent
     * @param type must be (new () => T), Function type is just for compile through
     * @param data
     */
    constructor(parent: BGObject, type?: (new () => T) | Function, data ?: { [key: string]: T }) {
        super(parent);
        if (type) {
            this._typeT = type as (new () => T);
        }

        if (data) {
            for (let k in data) {
                this.set(k, data[k]);
            }
        }
    }

    set valueT(p: EBGValueType) {
        this._valueT = p;
    }

    get length() {
        return this._length;
    }

    /**
     * insert or update
     * @param k
     * @param v
     */
    set(k: number | string, v: T) {
        let data = this._data[k];
        if (v instanceof BGObject) {
            v.parent = this;
            v.dirty = EDirtyType.EDT_DIRTY_FULL;
        }

        if (data === undefined) {
            ++this._length;
            this._data[k] = data;
            this.addBinlog(EDeltaOpt.INSERT, k);
        }
        else if (!(v instanceof BGObject) && data === v) {
            return;
        }
        else {
            this.addBinlog(EDeltaOpt.INSERT, k);
        }
        this._data[k] = v;
    }

    /**
     * return reference of value for BGObject type, for number, string return value copy
     * @param k
     */
    get(k: number | string) {
        return this._data[k];
    }

    remove(k: number | string) {
        if (this._data[k] !== undefined) {
            this.addBinlog(EDeltaOpt.DELETE, k);
            delete this._data[k];
            --this._length;
        }
        return this;
    }

    entries(): [string, T][] {
        return Object.entries(this._data);
    }

    clear() {
        for (let k in this._data) {
            delete this._data[k];
            this.addBinlog(EDeltaOpt.DELETE, k);
        }
        this._length = 0;
        return this;
    }

    private addBinlog(opt: EDeltaOpt, k?: number | string) {
        this.makeDirty();

        if (typeof k !== 'string') {
            k = k.toString();
        }

        ++this._binlogCnt;

        switch (opt) {
            case EDeltaOpt.DELETE:
            case EDeltaOpt.INSERT:
            case EDeltaOpt.UPDATE_FULL:
                this._binlog.writeUint32(opt);
                this._binlog.writeString(k);
                break;
            default:
                break;
        }
    }

    clearDirty() {
        if (this.__dirty === EDirtyType.EDT_OK) {
            return;
        }
        this.__dirty = EDirtyType.EDT_OK;
        for (let i in this._data) {
            let v = this._data[i];
            if (v instanceof BGObject) {
                v.clearDirty();
            }
        }
    }

    encodeFull(buffer: ByteBuffer, selfUid?: number) {
        if (selfUid !== undefined) {
            buffer.writeUint32(selfUid);
        }
        buffer.writeUint32(this.length);
        buffer.writeUint32(0);
        for (let k in this._data) {
            let o = this._data[k];
            if (o instanceof BGObject) {
                o.encodeFull(buffer, 0);
            }
            else {
                encodeDefaultType({
                    value: o,
                    type: this._valueT as EBGValueType,
                    uid: 0,
                    dirty: EDirtyType.EDT_DIRTY_FULL
                }, buffer);
            }
        }
        this.clearDirty();
    }

    encodeDelta(buffer: ByteBuffer, selfUid?: number) {
        if (selfUid !== undefined) {
            buffer.writeUint32(selfUid);
        }

        if (typeof this._valueT === 'function') {
            for (let k in this._data) {
                let value = this._data[k] as BGObject;
                if (value.dirty === EDirtyType.EDT_DIRTY_FULL) {
                    ++this._binlogCnt;
                    this._binlog.writeUint32(EDeltaOpt.UPDATE_FULL);
                    this._binlog.writeString(k);
                    value.encodeFull(this._binlog, 0);
                }
                else if (value.dirty === EDirtyType.EDT_DIRTY_MOD) {
                    ++this._binlogCnt;
                    this._binlog.writeUint32(EDeltaOpt.UPDATE_DELTA);
                    this._binlog.writeString(k);
                    value.encodeDelta(this._binlog, 0);
                }
            }
        }
        buffer.writeUint32(this._binlogCnt);
        buffer.append(this._binlog.slice(0, this._binlog.offset));
        this.clearDirty();
    }

    toObject(): { [key: string]: any } {
        let reply: { [key: string]: any } = {};
        for (let k in this._data) {
            let d = this._data[k];
            if (this._valueT === EBGValueType.object) {
                reply[k] = (d as BGObject).toObject(true);
            }
            else {
                reply[k] = d;
            }
        }
        return reply;
    }

    fromObject(reply: { [key: string]: any }): void {
        for (let k in reply) {
            let d = reply[k];
            if (this._valueT === EBGValueType.object) {
                let t = new this._typeT();
                (t as BGObject).fromObject(d);
                this._data[k] = t;
                this._length++;
            }
            else {
                this._data[k] = d;
            }
        }
    }
}

export class BGArray<T extends BGObject | string | number> extends BGObject {
    private _data: T[] = [];
    private _valueT: EBGValueType = undefined;
    private readonly _typeT: (new () => T) = undefined;
    private _binlogCnt: number = 0;
    private _binlog: ByteBuffer = new ByteBuffer();

    /**
     * @param parent
     * @param type must be (new () => T), Function type is just for compile through
     * @param data
     */
    constructor(parent: BGObject, type?: (new () => T) | Function, data ?: T[]) {
        super(parent);
        if (type) {
            this._typeT = type as (new () => T);
        }

        if (data) {
            for (let a of data) {
                this.push(a);
            }
        }
    }

    set valueT(p: EBGValueType) {
        this._valueT = p;
    }

    push(e: T) {
        this.insert(this._data.length, e);
        return this;
    }

    get length() {
        return this._data.length;
    }

    insert(pos: number, e: T) {
        if (e instanceof BGObject) {
            e.parent = this;
            e.dirty = EDirtyType.EDT_DIRTY_FULL;
        }
        if (pos === this._data.length) {
            this._data.push(e);
        }
        else {
            this.checkPos(pos);
            this._data = this._data.slice(0, pos).concat([e, ...this._data.slice(pos)]);
        }
        this.addBinlog(EDeltaOpt.INSERT, pos);
        return this;
    }

    find(d: T, compare ?: (a: T, b: T) => number): T[] {
        let ret = [];
        for (let i = 0; i < this._data.length; ++i) {
            if ((compare && compare(d, this._data[i]) === 0) || this._data[i] === d) {
                ret.push(this._data[i]);
            }
        }
        return ret;
    }

    clear() {
        for (let i = 0; i < this._data.length; ++i) {
            this.addBinlog(EDeltaOpt.DELETE, i);
        }
        this._data = [];
    }

    // removeByValue(v: T) {
    //     let idx = this.indexOf(v);
    //     this.remove(idx);
    // }

    remove(pos: number) {
        if (pos < 0 || pos >= this._data.length) {
            return;
        }

        this._data.splice(pos, 1);
        this.addBinlog(EDeltaOpt.DELETE, pos);
        return this;
    }

    get(pos: number): T {
        this.checkPos(pos);
        return this._data[pos];
    }

    set(pos: number, v: T) {
        this.checkPos(pos);
        if (v instanceof BGObject) {
            v.parent = this;
            v.dirty = EDirtyType.EDT_DIRTY_FULL;
        }
        else {
            if (v === this._data[pos]) {
                return;
            }
            else {
                this.addBinlog(EDeltaOpt.UPDATE_FULL, pos);
            }
        }
        this._data[pos] = v;
        this.makeDirty();
    }

    private checkPos(pos: number) {
        if (pos >= this._data.length || pos < 0) {
            throw new Error("insert bingo array error, out of bound, pos=" + pos);
        }
    }

    private addBinlog(opt: EDeltaOpt, pos?: number) {
        this.makeDirty();

        ++this._binlogCnt;

        switch (opt) {
            case EDeltaOpt.DELETE:
            case EDeltaOpt.INSERT:
            case EDeltaOpt.UPDATE_FULL:
                this._binlog.writeUint32(opt);
                this._binlog.writeUint32(pos);
                break;
            default:
                break;
        }
    }

    clearDirty() {
        if (this.__dirty === EDirtyType.EDT_OK) {
            return;
        }
        this.__dirty = EDirtyType.EDT_OK;
        for (let i in this._data) {
            let v = this._data[i];
            if (v instanceof BGObject) {
                v.clearDirty();
            }
        }
    }

    encodeFull(buffer: ByteBuffer, selfUid?: number) {
        if (selfUid !== undefined) {
            buffer.writeUint32(selfUid);
        }
        buffer.writeUint32(this.length);
        buffer.writeUint32(0);
        for (let k in this._data) {
            let o = this._data[k];
            if (o instanceof BGObject) {
                o.encodeFull(buffer, 0);
            }
            else {
                encodeDefaultType({
                    value: o,
                    type: this._valueT as EBGValueType,
                    uid: 0,
                    dirty: EDirtyType.EDT_DIRTY_FULL
                }, buffer);
            }
        }
        this.clearDirty();
    }

    encodeDelta(buffer: ByteBuffer, selfUid?: number) {
        if (selfUid !== undefined) {
            buffer.writeUint32(selfUid);
        }

        if (this._valueT === EBGValueType.object) {
            for (let k in this._data) {
                let value = this._data[k] as BGObject;
                if (value.dirty === EDirtyType.EDT_DIRTY_FULL) {
                    ++this._binlogCnt;
                    this._binlog.writeUint32(EDeltaOpt.UPDATE_FULL);
                    this._binlog.writeString(k);
                    value.encodeFull(this._binlog, 0);
                }
                else if (value.dirty === EDirtyType.EDT_DIRTY_MOD) {
                    ++this._binlogCnt;
                    this._binlog.writeUint32(EDeltaOpt.UPDATE_DELTA);
                    this._binlog.writeString(k);
                    value.encodeDelta(this._binlog, 0);
                }
            }
        }
        buffer.writeUint32(this._binlogCnt);
        buffer.append(this._binlog.slice(0, this._binlog.offset));
        this.clearDirty();
    }

    toObject(): any[] {
        let reply = [];
        for (let k in this._data) {
            let d = this._data[k];
            if (this._valueT === EBGValueType.object) {
                reply.push((d as BGObject).toObject(true));
            }
            else {
                reply.push(d);
            }
        }
        return reply;
    }

    fromObject(reply: []): void {
        for (let k in reply) {
            let d = reply[k];
            if (this._valueT === EBGValueType.object) {
                let t = new this._typeT();
                (t as BGObject).fromObject(d);
                this._data.push(t);
            }
            else {
                this._data.push(d);
            }
        }
    }
}