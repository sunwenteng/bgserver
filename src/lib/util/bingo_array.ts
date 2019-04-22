import {BingoObject} from "./bingo_object";

enum EDeltaOpt {
    APPEND = 1,
    DELETE = 2,
    UPDATE = 3,
    INSERT = 4
}

export class BingoArray<T extends BingoObject> {
    private _array: T[] = [];
    private _delta: any = {};

    constructor(data ?: T[]) {
        if (data) {
            this._array.concat(data);
        }
    }

    push(e: T) {
        this._array.push(e);
        this.updateDelta(EDeltaOpt.APPEND, e);
    }

    size() {
        return this._array.length;
    }

    insert(pos: number, e: T) {
        this.checkPos(pos);
        this.updateDelta(EDeltaOpt.INSERT, e);
    }

    indexOf(e: T) {
        return this._array.indexOf(e);
    }

    lastIndexOf(e: T) {
        return this._array.lastIndexOf(e);
    }

    sort(fn: (a: T, b: T) => number) {
        this._array.sort(fn);
    }

    clear() {
        this._array = [];
        this.updateDelta(EDeltaOpt.DELETE);
    }

    remove(pos: number) {
        this.checkPos(pos);
        this.updateDelta(EDeltaOpt.DELETE, null, pos);
    }

    reverse(): BingoArray<T> {
        return new BingoArray<T>(this._array.reverse());
    }

    toString(): string {
        return this._array.toString();
    }

    get(pos: number) {
        this.checkPos(pos);
        return this._array[pos];
    }

    private checkPos(pos: number) {
        if (pos >= this._array.length) {
            throw new Error("insert bingo array error, out of bound");
        }
    }

    private updateDelta(opt: EDeltaOpt, obj?: T, pos?: number) {
        // TODO
        if (!this._delta(opt)) {
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