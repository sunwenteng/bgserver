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
                        uid: ++this.__uid
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
    type?: EBGValueType;
    value: number | string | BGObject;
    dirty?: EDirtyType;
    dynamic?: boolean;
    uid?: number;
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
    protected __uid: number = 0;

    constructor(parent?: BGObject, key?: string) {
        this.__parent = parent;
        this.__key = key;
    }

    set parent(p: BGObject) {
        this.__parent = p;
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

    encodeFull(buffer: ByteBuffer) {
        // buffer.BE();
        for (let k in this.__fields) {
            const o: IField = this.__fields[k];
            if (o.value instanceof BGObject) {
                o.value.encodeFull(buffer);
            }
            else {
                encodeDefaultType(o, buffer);
            }
        }
    }

    encodeDelta(buffer: ByteBuffer) {
        let modBuffer = new ByteBuffer();
        let modCnt = 0;
        for (let k in this.__fields) {
            const o: IField = this.__fields[k];
            if (o.dirty === EDirtyType.EDT_DIRTY_MOD) {
                ++modCnt;
                if (o.value instanceof BGObject) {
                    o.value.encodeDelta(modBuffer);
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
        buffer.append(modBuffer);
    }
}

enum EDeltaOpt {
    INSERT = 1,
    DELETE = 2,
    UPDATE_DELTA = 3,
    UPDATE_FULL = 4,
}

export class BGMap<T> extends BGObject {
    private _data: { [key: string]: T } = {};
    private _delta: any = {};
    private _length: number = 0;

    constructor(parent: BGObject, data ?: { [key: string]: T }) {
        super(parent);
        if (data) {
            this._data = data;
            this._length = Object.keys(data).length;
        }
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
        if (v instanceof BGObject) {
            v.parent = this;
            v.dirty = EDirtyType.EDT_DIRTY_FULL;
        }

        if (this._data[k] === undefined) {
            ++this._length;
            this.updateDelta(EDeltaOpt.INSERT, k);
        }
        else {
            this.updateDelta(EDeltaOpt.INSERT, k);
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
            this.updateDelta(EDeltaOpt.DELETE, k);
        }
        delete this._data[k];
        --this._length;
        return this;
    }

    entries(): [string, T][] {
        return Object.entries(this._data);
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

    private updateDelta(opt: EDeltaOpt, k: number | string) {
        this.makeDirty();

        // TODO
        if (!this._delta[opt]) {
            this._delta[opt] = [];
        }

        switch (opt) {
            case EDeltaOpt.INSERT:
                break;
            case EDeltaOpt.DELETE:
                break;
            case EDeltaOpt.UPDATE_DELTA:
                break;
            case EDeltaOpt.UPDATE_FULL:
                break;
            default:
                break;
        }
    }

    clear() {
        for (let k in this._data) {
            delete this._data[k];
            this.updateDelta(EDeltaOpt.DELETE, k);
        }
        this._length = 0;
        return this;
    }
}

export class BGArray<T extends BGObject | string | number> extends BGObject {
    private _array: T[] = [];
    private _binlogCnt: number = 0;
    private _binlog: ByteBuffer = null;

    constructor(parent: BGObject, data ?: T[]) {
        super(parent);
        if (data) {
            this._array.concat(data);
        }
    }

    push(e: T) {
        this.insert(this._array.length, e);
        return this;
    }

    get length() {
        return this._array.length;
    }

    insert(pos: number, e: T) {
        if (e instanceof BGObject) {
            e.parent = this;
            e.dirty = EDirtyType.EDT_DIRTY_FULL;
        }
        if (pos === this._array.length) {
            this._array.push(e);
        }
        else {
            this.checkPos(pos);
            this._array = this._array.slice(0, pos).concat([e, ...this._array.slice(pos)]);
        }
        this.addBinlog(EDeltaOpt.INSERT, pos);
        return this;
    }

    find() {

    }

    findIndex() {

    }

    clear() {
        for (let i = 0; i < this._array.length; ++i) {
            this.addBinlog(EDeltaOpt.DELETE, i);
        }
        this._array = [];
    }

    // removeByValue(v: T) {
    //     let idx = this.indexOf(v);
    //     this.remove(idx);
    // }

    remove(pos: number) {
        if (pos < 0 || pos >= this._array.length) {
            return;
        }

        this._array.splice(pos, 1);
        this.addBinlog(EDeltaOpt.DELETE, pos);
        return this;
    }

    get(pos: number): T {
        this.checkPos(pos);
        return this._array[pos];
    }

    set(pos: number, v: T) {
        this.checkPos(pos);
        if (v instanceof BGObject) {
            v.parent = this;
            v.dirty = EDirtyType.EDT_DIRTY_FULL;
        }
        this._array[pos] = v;
        this.makeDirty();
    }

    private checkPos(pos: number) {
        if (pos >= this._array.length || pos < 0) {
            throw new Error("insert bingo array error, out of bound, pos=" + pos);
        }
    }

    private addBinlog(opt: EDeltaOpt, pos?: number) {
        this.makeDirty();

        if (!this._binlog) {
            this._binlog = new ByteBuffer();
        }

        ++this._binlogCnt;

        switch (opt) {
            case EDeltaOpt.DELETE:
            case EDeltaOpt.INSERT:
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
        this._binlog.clear();
        this._binlogCnt = 0;
        for (let i of this._array) {
            if (i instanceof BGObject) {
                i.clearDirty();
            }
        }
    }

    encodeFull(buffer: ByteBuffer) {
        // buffer.BE();
        buffer.writeUint32(this._array.length);
        buffer.writeUint32(0);
        for (let o of this._array) {
            // buffer.writeUint32();
        }
    }
}