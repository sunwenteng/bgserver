import * as WebSocket from 'ws';
import {C2S, S2C} from "../app/proto/cmd";
import {Log} from "../lib/util/log";
import {randInt} from "../lib/util/game_util";

let count = 1;
let time = {};

class Client {
    roleId: number;
    ws: WebSocket;

    sendC2SProto(data) {
        let msg = C2S.Message.create();
        let name = data.constructor.name;
        if (msg.hasOwnProperty(name)) {
            Log.sError('C2S have no packet, ' + name);
            return;
        }
        msg[data.constructor.name] = data;
        let buffer = C2S.Message.encode(msg).finish();
        if(this.ws.readyState === 1) {
            this.ws.send(buffer);
        }
    }

    // sendS2CProto(data) {
    //     let msg = S2C.Message.create();
    //     let name = data.constructor.name;
    //     if (msg.hasOwnProperty(name)) {
    //         Log.sError('S2C have no packet, ' + name);
    //         return;
    //     }
    //     msg[data.constructor.name] = data;
    //     let buffer = S2C.Message.encode(msg).finish();
    //     this.ws.send(buffer);
    // }

    init(host, port, cb) {
        this.ws = new WebSocket('ws://' + host + ':' + port + '/websocket');
        this.ws.on('open', () => {
            cb(this);
            // setInterval(() => {
            //     for (let i = 0; i < 1; i++) {
            //         let id = Math.floor(Math.random() * 100);
            //         id = id === 0 ? 1 : id;
            //         let msg = C2S.Message.create({
            //             CS_ROLE_HEART_BEAT: {msg: Math.floor(Math.random() * 100) + ''}
            //             // CS_RANK_GET_RANK: {types: [ERankType.level, ERankType.combat]}
            //             // CS_GUILD_CREATE:{guildName: 'fuck' + Math.floor(Math.random() * 100), iconId: Math.floor(Math.random() * 100)}
            //         });
            //
            //         let buffer = C2S.Message.encode(msg).finish();
            //
            //         ws.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length));
            //         time[count++] = Date.now();
            //     }
            // }, 1000);
        });

        this.ws.on('close', (code, reason) => {
            console.log('close roleId %d code %d reason %s', this.roleId, code, reason);
        });

        this.ws.on('message', (data: Buffer) => {
            try {
                let msg = S2C.Message.decode(data);
                switch (msg.kind) {
                    case 'LOGIN_SC_LOGIN':
                        this.sendC2SProto(C2S.LOGIN_CS_CHOOSE_SERVER.create({serverId: 10000}));
                        break;
                    case 'LOGIN_SC_CHOOSE_SERVER':
                        // new Client(msg[msg.kind].ip, msg[msg.kind].port, () => {
                        //     this.sendC2SProto(C2S.CS_ROLE_ONLINE.create());
                        // });
                        break;
                    case 'LOGIN_SC_CHOOSE_SERVER':
                        // new Client(msg[msg.kind].ip, msg[msg.kind].port, () => {
                        //     this.sendC2SProto(C2S.CS_ROLE_ONLINE.create());
                        // });
                        break;
                    case 'SC_ROLE_ONLINE':
                        if (msg[msg.kind].result === 0) {
                            this.sendC2SProto(C2S.CS_ROLE_CREATE.create({
                                name: randInt(1, 100000000).toString(),
                                uid: parseInt(this['uid']),
                                iconId: 1,
                                gender: 1
                            }));
                        }
                        else {
                            setInterval(() => {
                                this.sendC2SProto(C2S.CS_ROLE_HEART_BEAT.create());
                            }, 10000);

                            setInterval(() => {
                                // this.sendC2SProto(C2S.CS_BATTLE_STAGE.create({subType: 0}));
                            }, 1000);
                        }
                        // new Client(msg[msg.kind].ip, msg[msg.kind].port, () => {
                        //     this.sendC2SProto(C2S.CS_ROLE_ONLINE.create());
                        // });

                        break;
                    case 'SC_ROLE_CREATE':
                        this.sendC2SProto(C2S.CS_ROLE_ONLINE.create());
                        break;
                    default:
                        break;
                }
                console.log(msg[msg.kind]);
            } catch (e) {
                console.error(e);
            }
        });
    }
}

// for (let i = 5000; i < 6000; i++) {
//     new Client().init('guanreng1.imobile-ent.com', '7777', (client) => {
//         client.sendC2SProto(C2S.LOGIN_CS_LOGIN.create({
//             passport: 'test' + i + 1,
//             platform: 1
//         }));
//     });
// }

for (let i = 100000; i < 100001; i++) {
    new Client().init('127.0.0.1', 5555, (client) => {
        client.uid = i;
        client.sendC2SProto(C2S.CS_ROLE_ONLINE.create({
            uid: i
        }));
    });
}

// setInterval(()=>{
//     if(!set.size)
//         process.exit(0);
//     if(set.size < 100)
//         console.log(set.values());
// }, 1000);