// let a = {a: 1};
// let d = {a: 2};
// let b = a;
// let c = {...a};
// let e = {...a, ...d};
// console.log((a === b) + ' ' + (a === c));
// console.log(e);

class A {
    constructor() {
        this.a = 0;
        this.b = 0;
    }

    log() {
        console.log(this.a + this.b);
    }
}

let a = new A();

let obj = {2: 1, 1: 1};

let c = Object.keys(obj).map((value => parseInt(value)));
console.log(c);