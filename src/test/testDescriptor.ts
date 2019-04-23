import {Role} from "../app/game/modles/role";

const cnt = 10000000;

console.time('1');
let j = 0;
for (let i = 0; i < cnt; i++) {
    j += 1;
}
console.timeEnd('1');

console.time('2');
let role = new Role(1);
for (let i = 0; i < cnt; i++) {
    role.combat += 1;
}
console.timeEnd('2');