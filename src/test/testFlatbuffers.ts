// import * as Defines from "./ts/monster_test_generated";
// import {flatbuffers} from 'flatbuffers';
//
// console.time('1');
// for (let i = 0; i < 1000000; i++) {
//     let builder = new flatbuffers.Builder();
//     Defines.Monster.startMonster(builder);
//     Defines.Monster.w
//     Defines.Monster.addHp(builder, 123);
//     Defines.Monster.addColor(builder, 1);
//     builder.finish(Defines.Monster.endMonster(builder));
//
//     let monster = Defines.Monster.getRootAsMonster(builder.dataBuffer());
//     // console.log(monster.hp());
// }
// console.timeEnd('1');
//
// console.time('2');
// for (let i = 0; i < 1000000; i++) {
//     let str = JSON.stringify({
//         hp: 123,
//         color: 1,
//         pos: {x: 1.0, y: 1.0, z: 1.0},
//         mana: 1,
//         name: 123123,
//         friednly: 1,
//         inventory: [123123123],
//         color: 1,
//         weapons: [],
//         equiped: null,
//         path: [{x: 1, y: 1, z: 1}]
//     });
//     JSON.parse(str);
// }
// console.timeEnd('2');
// flatc --ts --no-fb-import  --gen-mutable -o ts monster_test.fbs