import {WebSocket} from "./ws/web_socket";
import {LinkedList} from "../util/linked_list";
import * as events from "events";
import {Log} from "../util/log";
import {realNow} from "../util/time";
import * as ByteBuffer from "bytebuffer";
import {
    IRpc,
    IRpcMeta,
    MSG_HEADER_LEN_BYTES,
    MSG_HEADER_MSG_ID_BYTES,
    MSG_HEADER_MSG_IDX_BYTES,
    MSG_HEADER_TOTAL_BYTES,
    MSG_ID_ACK_MSG,
    MSG_ID_HEART_BEAT, MSG_SYS_DEFAULT_RANGE
} from "../../app/game/modles/defines";
import {Zombie} from "../../app/proto/zombie";

export abstract class UserSession extends events.EventEmitter {
    private _curMsgIdx: number = 0;
    public rpcList: LinkedList<IRpc>;
    public timeLastAlive: number = realNow();
    public socket: WebSocket | any;
    public isAuthorized: boolean = false;
    private _ackMsg: LinkedList<[number, any]> = new LinkedList();

    protected _rpcMetaMap: { [reqMsgId: number]: IRpcMeta } = {};
    protected _reqMsgIdx: { [reqEncoderName: string]: number } = {};

    constructor() {
        super();
        this.rpcList = new LinkedList<any>();

        this.on('message', (data) => {
            let msgId = this.decodeMsgId(data);
            switch (msgId) {
                case MSG_ID_HEART_BEAT:
                    this.timeLastAlive = realNow();
                    break;
                case MSG_ID_ACK_MSG: {
                    let current = this._ackMsg.head;
                    let msg = this.decode(data, Zombie.Ack_Msg);
                    while (current) {
                        if (current.element[0] === msg.msgIdx) {
                            this._ackMsg.deleteNode(current);
                            break;
                        }
                        current = current.next;
                    }
                    break;
                }
                default: {
                    const rpcMeta: IRpcMeta = this._rpcMetaMap[msgId];
                    if (!rpcMeta) {
                        Log.sError(`handleInfo parse error, msgId=${msgId}`);
                        return;
                    }
                    let msg = this.decode(data, rpcMeta.reqEncoder);
                    this.rpcList.append({...rpcMeta, msg: msg});
                    break;
                }
            }
        });
    }

    public decodeMsgIdx(data: Buffer) {
        return data.readUInt16LE(MSG_HEADER_LEN_BYTES + MSG_HEADER_MSG_ID_BYTES);
    }

    public decodeMsgId(data: Buffer) {
        return data.readUInt16LE(MSG_HEADER_LEN_BYTES);
    }

    public decode(data: Buffer, decoder?: any): any {
        const buffer = Buffer.from(data);
        let msg = null;
        if (decoder) {
            msg = decoder.decode(buffer.slice(MSG_HEADER_LEN_BYTES + MSG_HEADER_MSG_ID_BYTES + MSG_HEADER_MSG_IDX_BYTES));
        }
        return msg;
    }

    public encode(msgId: number, msgEncoder?: any, msg?: any) {
        let msgIdx = msgId < MSG_SYS_DEFAULT_RANGE ? 0 : this.getNextMsgIdx();
        let finalBuffer = new ByteBuffer();
        finalBuffer.LE(true);
        let len = 0;
        if (msgEncoder && msg) {
            let buffer = msgEncoder.encode(msg).finish();
            len = buffer.length + MSG_HEADER_TOTAL_BYTES;
            finalBuffer.writeUint32(len);
            finalBuffer.writeUint16(msgId);
            finalBuffer.writeUint16(msgIdx);
            finalBuffer.append(buffer);
        }
        else {
            finalBuffer.writeUint32(MSG_HEADER_TOTAL_BYTES);
            finalBuffer.writeUint16(msgId);
            finalBuffer.writeUint16(msgIdx);
        }
        Log.sDebug(`msgId=${msgId}, msgIdx=${msgIdx}, len=${len}`);
        return finalBuffer.buffer.slice(0, finalBuffer.offset);
    }

    public async update(): Promise<void> {
    }

    public addSessionToWorker(): void {
    }

    public send(data: Buffer | string | Uint8Array | ArrayBuffer): void {
        if (this.socket) {
            this.socket.send(data);
        }
    }

    public closeSocket() {
        this.socket.close();
    }

    private getNextMsgIdx(): number {
        ++this._curMsgIdx;
        if (this._curMsgIdx === 65536) {
            this._curMsgIdx = 1;
        }
        return this._curMsgIdx;
    }

    public sendProtocol(msgId: number, msgEncoder?: any, msg?: any) {
        Log.sDebug('socketUid=%d send msgId=%d, %s=%j', this.socket ? this.socket.uid : 0, msgId, msg ? msg.constructor.name : 'None', msg ? msg : 'None');
        let buffer = this.encode(msgId, msgEncoder, msg);
        if (msgId < MSG_SYS_DEFAULT_RANGE && msgEncoder && msg) {
            this._ackMsg.append([this._curMsgIdx, buffer]);
        }
        this.send(buffer);
    }

    public sendAllAckMsg() {
        let cur = this._ackMsg.head;
        while (cur) {
            this.send(cur.element[1]);
            cur = cur.next;
        }
        this._ackMsg.clear();
    }

    getMsgId(msg) {
        return this._reqMsgIdx[msg.constructor.name];
    }

    getRpcMeta(msgId) {
        return this._rpcMetaMap[msgId];
    }
}