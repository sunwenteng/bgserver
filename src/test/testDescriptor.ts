export function BGField() {
    return (target: Object, key: string): void => {
        Object.defineProperty(target, key, {
            get: function () {
                return this['__fields'][key].value;
            },
            set: function (newValue) {
                if (this['__fields'][key] === undefined) {
                    this['__fields'][key] = {value: newValue, dirty: false};
                }
                else if (this['__fields'][key].value !== newValue) {
                    this['__fields'][key].value = newValue;
                    this['__fields'][key].dirty = true;

                    let parent:DirtyModel = this['__parent'], self = this;
                    while (parent) {
                        parent['__dirty'] = true;
                        parent['__fields'][self['__key']].dirty = true;
                        self = parent;
                        parent = parent['__parent'];
                    }
                }
                else {
                    this['__fields'][key].value = newValue;
                }

            }
        });
    };
}

interface IField {
    value: any;
    dirty: boolean;
}

class DirtyModel {
    protected __fields: { [key: string]: IField } = {};
    protected __dirty = false;
    protected __parent: DirtyModel = null;
    protected __key: string = '';

    constructor(parent?: DirtyModel, key?: string) {
        this.__parent = parent;
        this.__key = key;
    }

    fields() {
        return this.__fields;
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

    isDirty() {
        return this.__dirty;
    }

    serializeDirtyData() {
    }

    clearDirty() {
        this.__dirty = false;
    }

}

class TestModel extends DirtyModel {
    @BGField() uid: number = 0;

    constructor(parent: DirtyModel, key: string) {
        super(parent, key);
    }
}

class ItemModel extends DirtyModel {
    @BGField() uid: number = 0;
    @BGField() id: number = 0;
    @BGField() cnt: number = 0;
    @BGField() testModel: TestModel = new TestModel(this, 'testModel');

    constructor(parent: DirtyModel, key: string) {
        super(parent, key);
    }
}

class Role extends DirtyModel {
    @BGField() uid: number = 0;
    @BGField() name: string = '';
    @BGField() itemModel: ItemModel = new ItemModel(this, 'itemModel');
}

let role = new Role();
role.uid = 0;
role.name = 'aa';
role.itemModel['testModel'].uid = 1;
console.log(role.dirtyFields());
console.log(role.fields());
