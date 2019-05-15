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
    MSG_HEADER_TOTAL_BYTES
} from "../../app/game/modles/defines";

export abstract class UserSession extends events.EventEmitter {
    private _curMsgIdx: number = 0;
    public rpcList: LinkedList<IRpc>;
    public timeLastAlive: number = realNow();
    public socket: WebSocket | any;
    public isAuthorized: boolean = false;
    public ackMsg: LinkedList<[number, any]> = new LinkedList();

    protected _rpcMetaMap: { [reqMsgId: number]: IRpcMeta } = {};
    protected _msgIdx: { [reqEncoderName: string]: number } = {};

    constructor() {
        super();
        this.rpcList = new LinkedList<any>();

        this.on('message', (data) => {
            let rpc = this.decode(data);
            this.rpcList.append(rpc);
        });
    }

    public decode(data: Buffer): IRpc {
        const buffer = Buffer.from(data);
        const len = buffer.readUInt32BE(0);
        const msgId = buffer.readUInt16BE(MSG_HEADER_LEN_BYTES);
        const msgIdx = buffer.readUInt16BE(MSG_HEADER_LEN_BYTES + MSG_HEADER_MSG_ID_BYTES);
        const rpc: IRpcMeta = this._rpcMetaMap[msgId];
        if (!rpc) {
            Log.sError(`handleInfo parse error, len=${len}, msgId=${msgId}, msgIdx=${msgIdx}`);
            return;
        }
        let msg = rpc.reqEncoder.decode(buffer.slice(MSG_HEADER_LEN_BYTES + MSG_HEADER_MSG_ID_BYTES + MSG_HEADER_MSG_IDX_BYTES));
        return {...rpc, msg: msg};
    }

    public encode(msgId: number, msgEncoder?: any, msg?: any) {
        let msgIdx = this.getNextMsgIdx();
        let finalBuffer = new ByteBuffer();
        if (msgEncoder && msg) {
            let buffer = msgEncoder.encode(msg).finish();
            finalBuffer.writeUint32(buffer.length + MSG_HEADER_TOTAL_BYTES);
            finalBuffer.writeUint16(msgId);
            finalBuffer.writeUint16(msgIdx);
            finalBuffer.append(buffer);
        }
        else {
            finalBuffer.writeUint32(MSG_HEADER_TOTAL_BYTES);
            finalBuffer.writeUint16(msgId);
            finalBuffer.writeUint16(msgIdx);
        }
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
        Log.sDebug('socketUid=%d send msgId=%d, %s=%j', this.socket ? this.socket.uid : 0, msgId, msg.constructor.name, msg);
        let buffer = this.encode(msgId, msgEncoder, msg);
        if (msgEncoder && msg) {
            this.ackMsg.append([this._curMsgIdx, msg]);
        }
        this.send(buffer);
    }

    getMsgId(msg) {
        return this._msgIdx[msg.constructor.name];
    }

    getRpcMeta(msgId) {
        return this._rpcMetaMap[msgId];
    }
}