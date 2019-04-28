/**
 * BGField descriptor must has a default value
 * @param dynamic
 * @param snapshot
 * @param rankKey
 * @constructor
 */
import {ByteArray} from "./byte_array";

export function BGField(type?: EBGValueType, dynamic: boolean = false, snapshot: boolean = false, rankKey: any = null) {
    return (target: Object, key: string): void => {
        Object.defineProperty(target, key, {
            get: function () {
                return this.__fields[key].value;
            },
            set: function (newValue) {
                if (this.__fields[key] === undefined) {
                    const valueType = typeof newValue;
                    if (!(newValue instanceof BGObject) && valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') {
                        throw new Error('BGField only be add to number, string or BGObject, key=' + key + ', type=' + valueType);
                    }
                    this.__fields[key] = {type: type, value: newValue, dirty: EDirtyType.EDT_OK, dynamic: dynamic};
                }
                else if (this.__fields[key].value !== newValue) {
                    this.__fields[key].value = newValue;
                    this.__fields[key].dirty = EDirtyType.EDT_DIRTY_MODIFIED;
                    this.makeDirty();
                }
            }
        });
    };
}

enum EDirtyType {
    EDT_OK = 0,
    EDT_DIRTY_MODIFIED,     // 增量更新
    EDT_DIRTY_NEWLY_ADDED   // 全量更新
}

export enum EBGValueType {
    uint8 = 0,
    int8,
    uint16,
    int16,
    uint32,
    int32,
    uint64,
    int64,
    string,
    bytes
}

interface IField {
    type?: EBGValueType;
    value: number | string | BGObject;
    dirty?: EDirtyType;
    dynamic?: boolean;
    uid?: number;
}

export abstract class BGObject {
    protected __fields: { [key: string]: IField } = {};
    protected __dirty: EDirtyType = EDirtyType.EDT_OK;
    protected __key: string = undefined;
    protected __parent: BGObject = null;

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
        this.__dirty = EDirtyType.EDT_DIRTY_MODIFIED;
        let parent = this.__parent, self: BGObject = this;
        while (parent && parent.__dirty === EDirtyType.EDT_OK) {
            parent.__dirty = EDirtyType.EDT_DIRTY_MODIFIED;
            if (self.__key !== undefined) {
                parent.__fields[self.__key].dirty = EDirtyType.EDT_DIRTY_MODIFIED;
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

    encodeFull(buffer: ByteArray) {
        for (let k in this.__fields) {
            const o = this.__fields[k];
            if (o instanceof BGObject) {
                o.encodeFull(buffer);
            }
            else {
                if (typeof o === 'string') {
                    buffer.writeUTF(o);
                }

            }
        }
    }

    encodeDelta(buffer: ByteArray) {

    }

    serializeDirtyData() {
        // TODO
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

    constructor(parent: BGObject, key: string, data ?: { [key: string]: T }) {
        super(parent, key);
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
            v.dirty = EDirtyType.EDT_DIRTY_NEWLY_ADDED;
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
    private _delta: any = {};

    constructor(parent: BGObject, key: string, data ?: T[]) {
        super(parent, key);
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
            e.dirty = EDirtyType.EDT_DIRTY_NEWLY_ADDED;
        }
        if (pos === this._array.length) {
            this._array.push(e);
        }
        else {
            this.checkPos(pos);
            this._array = this._array.slice(0, pos).concat([e, ...this._array.slice(pos)]);
        }
        this.updateDelta(EDeltaOpt.INSERT, pos);
        return this;
    }

    find() {

    }

    findIndex() {

    }

    clear() {
        for (let i = 0; i < this._array.length; ++i) {
            this.updateDelta(EDeltaOpt.DELETE, i);
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
        this.updateDelta(EDeltaOpt.DELETE, pos);
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
            v.dirty = EDirtyType.EDT_DIRTY_NEWLY_ADDED;
        }
        this._array[pos] = v;
        this.makeDirty();
    }

    private checkPos(pos: number) {
        if (pos >= this._array.length || pos < 0) {
            throw new Error("insert bingo array error, out of bound, pos=" + pos);
        }
    }

    private updateDelta(opt: EDeltaOpt, pos?: number) {
        this.makeDirty();

        // TODO
        if (!this._delta[opt]) {
            this._delta[opt] = [];
        }

        switch (opt) {
            case EDeltaOpt.DELETE:
                break;
            case EDeltaOpt.INSERT:
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
        for (let i of this._array) {
            if (i instanceof BGObject) {
                i.clearDirty();
            }
        }
    }
}