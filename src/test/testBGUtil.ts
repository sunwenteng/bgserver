import { expect } from 'chai';
import 'mocha';
import {BGArray, BGField, BGMap, BGValue} from "../lib/util/bg_value";

describe('bg_util', () => {
    class TestInnest extends BGValue {
        @BGField() uid: number = 0;
        @BGField() test: number = 0;

        constructor(uid, test) {
            super();
            this.uid = uid;
            this.test = test;
        }
    }

    class TestInner extends BGValue {
        @BGField() uid: number = 0;
        @BGField() test: number = 0;
        @BGField() array: BGArray<TestInnest> = new BGArray<TestInnest>(this, 'array');

        constructor(uid, test) {
            super();
            this.uid = uid;
            this.test = test;
        }

    }

    class HaHa extends BGValue {
        @BGField() uid: number = 0;
        @BGField() name: string = '';
        @BGField() timeMap: BGMap<TestInner> = new BGMap<TestInner>(this, 'timeMap');
    }

    it('test1', () => {
        let ha = new HaHa();
        ha.uid = 1;
        expect(ha.dirtyFields().length).to.equal(2);
    });
});