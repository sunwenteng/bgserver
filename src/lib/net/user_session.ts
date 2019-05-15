import {WebSocket} from "./ws/web_socket";
import {LinkedList} from "../util/linked_list";
import * as events from "events";
import {S2C} from "../../app/proto/s2c";
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
        try {
            const buffer = new Buffer(data);
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
        catch (e) {
            Log.sError(e);
        }
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
        try {
            Log.sDebug('socketUid=%d send msgId=%d, %s=%j', this.socket ? this.socket.uid : 0, msgId, msg.constructor.name, msg);
            let buffer = S2C.Message.encode(msg).finish();
            let msgIdx = this.getNextMsgIdx();
            let finalBuffer = new ByteBuffer();
            finalBuffer.writeUint32(buffer.length + MSG_HEADER_TOTAL_BYTES);
            finalBuffer.writeUint16(msgId);
            finalBuffer.writeUint16(msgIdx);
            finalBuffer.append(buffer);
            this.send(finalBuffer.buffer.slice(0, finalBuffer.offset));
            this.ackMsg.append([msgIdx, msg]);
        }
        catch (e) {
            Log.sError(e);
        }
    }

    buildMsgIdx() {
        for (let k in this._rpcMetaMap) {
            let rpc = this._rpcMetaMap[k];
            if (rpc.reqEncoder) {
                this._msgIdx[rpc.reqEncoder.name] = rpc.reqMsgId;
            }
        }
    }

    getMsgId(msg) {
        return this._msgIdx[msg.constructor.name];
    }

    getRpcMeta(msgId) {
        return this._rpcMetaMap[msgId];
    }
}