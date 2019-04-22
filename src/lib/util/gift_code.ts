import * as Long from "long";

const digit = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A',
    'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z'
];

const size = 34;

function numtoCode(num: Long, shift: number): string {
    let tmp = '';

    let t = 0;
    while (!num.isZero()) {
        let idx = num.add(shift).mod(size).toNumber();
        tmp += digit[idx];
        num = num.div(size);
        if (++t % 4 === 0) {
            tmp += '-';
        }
    }

    return tmp.split('').reverse().join('');
}

export function calGiftCode(id: number, idx: number, param1: number, param2: number, param3: number): string {
    if (id >= 26 * 26 * 100 || idx > 1336335) {
        return 'Error';
    }

    let sum = new Long(0, 0, true);

    sum = sum.add(idx);
    sum = sum.mul(1003).add(id);
    sum = sum.mul(param1 % 109 + 1);

    let t = new Long(param2 % 100003 + 99881, 0, true);
    for (let i = 0; i < 3; i++) {
        t = t.shiftLeft(8 - i).or(t).toUnsigned();
    }

    sum = sum.xor(t);

    let str = '';
    let v = Math.floor((('H'.charCodeAt(0) - 'A'.charCodeAt(0)) * 26 + ('D'.charCodeAt(0) - 'A'.charCodeAt(0)) + (id / 100)) % (26 * 26));
    str += String.fromCharCode(Math.floor(v / 26) + 'A'.charCodeAt(0));
    str += String.fromCharCode(v % 26 + 'A'.charCodeAt(0));
    let ts = (id % 100) + '';
    str += new Array(2 - ts.length + 1).join("0") + ts + '-';

    let uint64Idx = new Long(idx, 0, true);
    let strIdx = numtoCode(uint64Idx, 0);
    while (strIdx.length < 4) {
        strIdx = '0' + strIdx;
    }
    str += strIdx;

    let strleft = numtoCode(sum, (idx ^ param3) % 34 + 1);
    str += strleft;

    return str;
}

export interface CodePararm {
    strCode: string;
    odwId: number;
    odwIdx: number;
}

export function filterGiftCodeFormat(param: CodePararm): boolean {
    param.strCode = param.strCode.replace(new RegExp('-', 'g'), '');
    if (param.strCode.length !== 16) {
        return false;
    }

    let bFlag = false;
    let chars = param.strCode.split('');
    for (let i = 0; i < 16; i++) {
        if ('1' <= chars[i] && chars[i] <= '9') {

        }
        else if ('a' <= chars[i] && chars[i] <= 'z') {
            chars[i] = String.fromCharCode(chars[i].charCodeAt(0) - 'a'.charCodeAt(0) + 'A'.charCodeAt(0));
        }
        else if ('A' <= chars[i] && chars[i] <= 'Z') {

        }
        else if (chars[i] === '0') {
            if (bFlag) {
                return false;
            }
        }
        else {
            return false;
        }

        if (i >= 4 && chars[i] !== '0') {
            bFlag = true;
        }
        if (chars[i] === 'O') {
            return false;
        }
    }

    for (let i = 0; i < 2; i++) {
        if (chars[i] < 'A' || chars[i] > 'Z') {
            return false;
        }
    }

    let v1 = (chars[0].charCodeAt(0) - 'A'.charCodeAt(0)) * 26 + (chars[1].charCodeAt(0) - 'A'.charCodeAt(0));
    let v2 = ('H'.charCodeAt(0) - 'A'.charCodeAt(0)) * 26 + ('D'.charCodeAt(0) - 'A'.charCodeAt(0));

    let v = (v1 >= v2 ? v1 - v2 : v1 + 26 * 26 - v2);
    param.odwId = v * 100;

    if (chars[2] < '0' || chars[2] > '9') {
        return false;
    }
    if (chars[3] < '0' || chars[3] > '9') {
        return false;
    }

    param.odwId += (chars[2].charCodeAt(0) - '0'.charCodeAt(0)) * 10 + (chars[3].charCodeAt(0) - '0'.charCodeAt(0));
    param.odwIdx = 0;

    for (let i = 4; i < 8; i++) {
        if (chars[i] === '0') {
            continue;
        }

        param.odwIdx *= 34;

        if ('1' <= chars[i] && chars[i] <= '9') {
            param.odwIdx += (chars[i].charCodeAt(0) - '1'.charCodeAt(0));
        }
        else if ('A' <= chars[i] && chars[i] <= 'N') {
            param.odwIdx += (chars[i].charCodeAt(0) - 'A'.charCodeAt(0) + 9);
        }
        else {
            param.odwIdx += (chars[i].charCodeAt(0) - 'A'.charCodeAt(0) + 8);
        }
    }

    param.strCode = chars.join('');
    return true;
}

// let parma: CodePararm = {strCode: 'HD15--0002-ZV3S-8JM3', odwId: 0, odwIdx: 0};
// filterGiftCodeFormat(parma);
// let ret = calGiftCode(parma.odwId, parma.odwIdx, 458, 456, 4789);
// console.log(ret);