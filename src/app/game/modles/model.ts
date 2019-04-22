export abstract class Model {
    fields: any = {};

    has(key: string) {
        return this.fields.hasOwnProperty(key);
    }

    serialize(): any {
        return JSON.stringify(this['fields']);
    }

    deserialize(str: any) {
        let t = JSON.parse(str);
        for (let k in t) {
            if (!this['fields'].hasOwnProperty(k)) {
                continue;
            }
            this['fields'][k] = t[k];
        }
    }
}

export abstract class DirtyModel extends Model {
    dirtyFields: { [key: string]: string } = {};

    public makeDirty(key: string) {
        if (!this.has(key)) {
            throw new Error(key + ' not exist within model');
        }

        this.dirtyFields[key] = null;
    }
}