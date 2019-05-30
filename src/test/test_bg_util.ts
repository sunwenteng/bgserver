import {expect} from 'chai';
import 'mocha';
import {BGArray, BGField, BGMap, BGObject, EBGValueType} from "../lib/util/bg_util";
import * as ByteBuffer from "bytebuffer";

describe('bg_util', () => {
    class Other {
    }

    class TestInnest extends BGObject {
        @BGField(EBGValueType.uint32) uid: number = 0;
        @BGField(EBGValueType.uint32) test: number = 0;

        constructor(uid, test) {
            super();
            this.uid = uid;
            this.test = test;
        }
    }

    class TestInner extends BGObject {
        @BGField(EBGValueType.uint32) uid: number = 0;
        @BGField(EBGValueType.uint32) test: number = 0;
        @BGField(EBGValueType.object) array: BGArray<TestInnest> = new BGArray(this, TestInnest);
        @BGField(EBGValueType.uint8) arrayInt: BGArray<number> = new BGArray(this);

        constructor(uid, test) {
            super();
            this.uid = uid;
            this.test = test;
        }

    }

    class Role extends BGObject {
        @BGField(EBGValueType.uint32) uid: number = 0;
        @BGField(EBGValueType.string) name: string = '';
        @BGField(EBGValueType.boolean) valid: boolean = true;
        @BGField(EBGValueType.object) timeMap: BGMap<TestInner> = new BGMap(this, EBGValueType.uint32, TestInner);
    }

    it('1', () => {
        let role = new Role();
        let buffer = new ByteBuffer();
        buffer.LE(true);
        role.encodeFull(buffer);
        buffer.clear();

        role.uid = 1;
        role.name = '123';
        role.valid = false;
        expect(role.dirtyFields()).deep.eq(['uid', 'name', 'valid']);

        role.encodeDelta(buffer);
        buffer.clear();

        role.clearDirty();
        expect(role.dirtyFields().length).eq(0);

        role.timeMap = new BGMap(role, EBGValueType.uint32, TestInner, {0: new TestInner(0, 0)});
        role.timeMap.set(1, new TestInner(1, 1));
        role.timeMap.set(1, new TestInner(1, 2));
        role.timeMap.set(2, new TestInner(2, 2));
        role.timeMap.set(3, new TestInner(3, 3));

        role.encodeDelta(buffer);
        buffer.clear();

        expect(role.timeMap.length).eq(4);
        role.timeMap.remove(0).remove(2);
        expect(role.timeMap.length).eq(2);
        expect(role.timeMap.get(2)).eq(undefined);
        expect(role.timeMap.get(1).uid).eq(1);

        expect(role.dirtyFields()).deep.eq(['timeMap']);

        role.clearDirty();
        for (let [k, v] of role.timeMap.entries()) {
            let value = v as TestInner;
            if (value.uid === 3) {
                value.test += 10;
            }
        }
        expect(role.timeMap.get(3).test).eq(13);
        expect(role.dirtyFields()).deep.eq(['timeMap']);

        role.clearDirty();
        expect(role.dirtyFields().length).equal(0);

        role.timeMap.get(1).array
            .push(new TestInnest(1, 1))
            .push(new TestInnest(2, 2))
            .push(new TestInnest(3, 3));
        expect(role.dirtyFields()).deep.eq(['timeMap']);

        role.timeMap.get(1).array.insert(1, new TestInnest(1.5, 1.5));
        expect(role.timeMap.get(1).array.length).eq(4);

        role.timeMap.get(1).array.insert(1, new TestInnest(1.2, 1.2));
        expect(role.timeMap.get(1).array.length).eq(5);

        role.timeMap.get(1).array.remove(1);
        expect(role.timeMap.get(1).array.get(1).uid).eq(1.5);
        expect(role.timeMap.get(1).array.length).eq(4);

        expect(role.timeMap.get(1).array.get(1).uid).eq(1.5);

        expect(role.dirtyFields()).deep.eq(['timeMap']);

        role.timeMap.get(1).array.insert(1, new TestInnest(1.5, 1.5));
        expect(role.timeMap.get(1).array.length).eq(5);
        expect(role.timeMap.get(1).array.find(new TestInnest(1.5, 1.5), (a, b) => {
            return a.uid - b.uid;
        }).length).eq(2);

        role.timeMap.get(1).array.get(1).uid += 10;
        expect(role.dirtyFields()).deep.eq(['timeMap']);
        expect(role.timeMap.get(1).array.get(1).uid).eq(11.5);

        role.clearDirty();
        role.timeMap.get(1).arrayInt.push(1);
        role.timeMap.get(1).arrayInt.push(2);
        role.timeMap.get(1).arrayInt.push(3);
        // buffer.clear();
        // role.encodeDelta(buffer);

        expect(role.dirtyFields()).deep.eq(['timeMap']);
        role.clearDirty();
        expect(role.timeMap.get(1).arrayInt.get(0)).eq(1);
        role.timeMap.get(1).arrayInt.set(0, 4);
        expect(role.timeMap.get(1).arrayInt.get(0)).eq(4);
        expect(role.dirtyFields()).deep.eq(['timeMap']);

        let a = role.toObject(true);
        let roleB = new Role();
        roleB.fromObject(a);
        let b = roleB.toObject(true);
        expect(roleB.dirtyFields()).deep.eq([]);
        expect(a).deep.eq(b);

        expect(role.timeMap.clear().length).eq(0);
    });
});