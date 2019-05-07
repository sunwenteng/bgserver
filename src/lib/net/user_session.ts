import {WebSocket} from "./ws/web_socket";
import {LinkedList} from "../util/linked_list";
import * as events from "events";
import {S2C} from "../../app/proto/s2c";
import {Log} from "../util/log";
import {realNow} from "../util/time";
import * as ByteBuffer from "bytebuffer";
import {MSG_HEADER_TOTAL_BYTES} from "../../app/game/modles/defines";

export abstract class UserSession extends events.EventEmitter {
    private _curMsgIdx: number = 0;
    public packets: LinkedList<any>;
    public socket: WebSocket | any;
    public timeLastAlive: number = realNow();
    public isAuthorized: boolean = false;

    protected constructor() {
        super();
        this.packets = new LinkedList<any>();
    }

    public async abstract update(): Promise<void>;

    public abstract addSessionToWorker(): void;

    public pushPacket(packet) {
        this.packets.append(packet);
    }

    public send(data: Buffer | string | Uint8Array | ArrayBuffer): void {
        if (this.socket) {
            this.socket.send(data);
        }
    }

    public online() {

    }

    public offline() {

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

    public sendProtocol(msgId:number, data?: any) {
        try {
            Log.sDebug('socketUid=%d send %s=%j', this.socket ? this.socket.uid : 0, data.constructor.name, data);

            let buffer = S2C.Message.encode(msg).finish();

            let msgIdx = this.getNextMsgIdx();
            let finalBuffer = new ByteBuffer();
            finalBuffer.writeUint32(buffer.length + MSG_HEADER_TOTAL_BYTES);
            finalBuffer.writeUint16(msgId);
            finalBuffer.writeUint16(msgIdx);
            finalBuffer.append(buffer);
            this.send(finalBuffer.buffer.slice(0, finalBuffer.offset));
        }
        catch (e) {
            Log.sError(e);
        }
    }
}