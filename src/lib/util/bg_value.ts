export function BGField(dynamic: boolean = false, snapshot:boolean = false, rankKey:any = null) {
    return (target: Object, key: string): void => {
        Object.defineProperty(target, key, {
            get: function () {
                return this.__fields[key].value;
            },
            set: function (newValue) {
                if (this.__fields[key] === undefined) {
                    this.__fields[key] = {value: newValue, dirty: false, dynamic: dynamic};
                }
                else if (this.__fields[key].value !== newValue) {
                    this.__fields[key].value = newValue;
                    this.__fields[key].dirty = true;
                    this.makeDirty();
                }
            }
        });
    };
}

interface IField {
    value: number | string | BGValue;
    dirty?: boolean;
    dynamic?: boolean;
    uid?: number;
}

export abstract class BGValue {
    __fields: { [key: string]: IField } = {};
    __dirty = false;
    __parent: BGValue = null;
    __key: string = undefined;

    constructor(parent?: BGValue, key?: string) {
        this.__parent = parent;
        this.__key = key;
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
        this.__dirty = true;
        let parent = this.__parent, self: BGValue = this;
        while (parent && !parent.__dirty !== false) {
            parent.__dirty = true;
            if (self.__key !== undefined) {
                parent.__fields[self.__key].dirty = true;
            }
            self = parent;
            parent = parent.__parent;
        }
    }

    clearDirty() {
        if (!this.__dirty) {
            return;
        }
        this.__dirty = false;
        for (let k in this.__fields) {
            let field = this.__fields[k];
            if (field.dirty) {
                field.dirty = false;
                let value = field.value;
                if (value instanceof BGValue) {
                    value.clearDirty();
                }
            }
        }
    }

    serializeDirtyData() {
        // TODO
    }
}

enum EDeltaOpt {
    APPEND = 1,
    DELETE = 2,
    UPDATE = 3,
    INSERT = 4
}

export class BGMap<T> extends BGValue {
    private _data: { [key: string]: T } = {};
    private _delta: any = {};
    private _length: number = 0;

    constructor(parent: BGValue, key: string, data ?: { [key: string]: T }) {
        super(parent, key);
        if (data) {
            this._data = data;
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
        if (v instanceof BGValue) {
            v.__parent = this;
        }

        this._data[k] = v;

        if (this._data[k] !== undefined) {
            ++this._length;
            this.updateDelta(EDeltaOpt.INSERT, k);
        }
        else {
            this.updateDelta(EDeltaOpt.UPDATE, k);
        }
    }

    get(k: number | string) {
        return this._data[k];
    }

    remove(k: number | string) {
        if (this._data[k] !== undefined) {
            this.updateDelta(EDeltaOpt.DELETE, k);
        }
        delete this._data[k];
        --this._length;
    }

    entries(): [string, T][] {
        return Object.entries(this._data);
    }

    clearDirty() {
        this.__dirty = false;
        for (let i in this._data) {
            let v = this._data[i];
            if (v instanceof BGValue) {
                v.clearDirty();
            }
        }
    }

    private updateDelta(opt: EDeltaOpt, k?: number | string) {
        this.makeDirty();

        // TODO
        if (!this._delta[opt]) {
            this._delta[opt] = [];
        }

        switch (opt) {
            case EDeltaOpt.APPEND:
                break;
            case EDeltaOpt.DELETE:
                break;
            case EDeltaOpt.UPDATE:
                break;
            case EDeltaOpt.INSERT:
                break;
            default:
                break;
        }
    }
}

export class BGArray<T extends BGValue | string | number> extends BGValue {
    private _array: T[] = [];
    private _delta: any = {};

    constructor(parent: BGValue, key: string, data ?: T[]) {
        super(parent, key);
        if (data) {
            this._array.concat(data);
        }
    }

    push(e: T) {
        if (e instanceof BGValue) {
            e.__parent = this;
        }

        this._array.push(e);
        this.updateDelta(EDeltaOpt.APPEND, e);
    }

    get length() {
        return this._array.length;
    }

    insert(pos: number, e: T) {
        this.checkPos(pos);
        if (e instanceof BGValue) {
            e.__parent = this;
        }
        this._array = this._array.slice(0, pos).concat([e, ...this._array.slice(pos)]);
        this.updateDelta(EDeltaOpt.INSERT, e);
    }

    print() {

    }

    find() {

    }

    findIndex() {

    }

    clear() {
        for (let i = 0; i < this._array.length; ++i) {
            this.updateDelta(EDeltaOpt.DELETE, null, i);
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
        this.updateDelta(EDeltaOpt.DELETE, null, pos);
    }

    /**
     * return new array not modify original
     */
    reverse(): T[] {
        return this._array.reverse();
    }

    get(pos: number): T {
        this.checkPos(pos);
        return this._array[pos];
    }

    set(pos: number, v: T) {
        if (v instanceof BGValue) {
            v.__parent = this;
        }
        this.checkPos(pos);
        this._array[pos] = v;
        this.updateDelta(EDeltaOpt.UPDATE, v, pos);
    }

    private checkPos(pos: number) {
        if (pos >= this._array.length || pos < 0) {
            throw new Error("insert bingo array error, out of bound, pos=" + pos);
        }
    }

    private updateDelta(opt: EDeltaOpt, obj?: T, pos?: number) {
        this.makeDirty();

        // TODO
        if (!this._delta[opt]) {
            this._delta[opt] = [];
        }

        switch (opt) {
            case EDeltaOpt.APPEND:
                break;
            case EDeltaOpt.DELETE:
                break;
            case EDeltaOpt.UPDATE:
                break;
            case EDeltaOpt.INSERT:
                break;
            default:
                break;
        }
    }

    clearDirty() {
        this.__dirty = false;
        for (let i of this._array) {
            if (i instanceof BGValue) {
                i.clearDirty();
            }
        }
    }
}