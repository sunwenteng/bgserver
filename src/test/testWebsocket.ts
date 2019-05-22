import 'mocha';
import * as ByteBuffer from "bytebuffer";
import * as WebSocket from 'ws';
import {
    MSG_HEADER_LEN_BYTES,
    MSG_HEADER_MSG_ID_BYTES,
    MSG_HEADER_TOTAL_BYTES,
    MSG_ID_SESSION_INIT_COMPLETE
} from "../app/game/modles/defines";
import {Zombie} from "../app/proto/zombie";
import {Hit} from "../app/game/schema_generated/cmd";

let msgIdx = 0;

describe('bg_util', () => {
    function sendProto(socket, msgId, buffer) {
        let finalBuffer = new ByteBuffer();
        finalBuffer.LE(true);
        finalBuffer.writeUint32(buffer.length + MSG_HEADER_TOTAL_BYTES);
        finalBuffer.writeUint16(msgId);
        finalBuffer.writeUint16(++msgIdx);
        finalBuffer.append(buffer);
        socket.send(finalBuffer.buffer.slice(0, finalBuffer.offset));
    }

    function decode(buffer) {

    }

    it('connect', () => {
        let host = '172.16.1.83', port = 5555;
        let ws = new WebSocket('ws://' + host + ':' + port + '');
        ws.on('open', () => {
            console.log(`${host}:${port} connected!`);
            sendProto(ws, 1, Zombie.Session_Init.encode(Zombie.Session_Init.create({uId: '201'})).finish());
        });

        ws.on('close', (code, reason) => {
            console.log('close roleId %d code %d reason %s', this.roleId, code, reason);
        });

        ws.on('message', (data: Buffer) => {
            const buffer = new Buffer(data);
            const len = buffer.readUInt32LE(0);
            const msgId = buffer.readUInt16LE(MSG_HEADER_LEN_BYTES);
            const msgIdx = buffer.readUInt16LE(MSG_HEADER_LEN_BYTES + MSG_HEADER_MSG_ID_BYTES);
            console.log(`message received len=${len}, msgId=${msgId}, msgIdx=${msgIdx}`);
            switch (msgId) {
                case MSG_ID_SESSION_INIT_COMPLETE:
                    sendProto(ws, 1006, Hit.CR_USE_ITEM.encode(Hit.CR_USE_ITEM.create()).finish());
                    break;
                default:
                    console.log(`nothing to do`);
                    break;
            }
        });
    });
});