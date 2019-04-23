import {WebSocket} from "./ws/web_socket";
import {LinkedList} from "../util/linked_list";
import * as events from "events";
import {S2C} from "../../app/proto/cmd";
import {Log} from "../util/log";
import {realNow} from "../util/time";

export abstract class UserSession extends events.EventEmitter {
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
        this.socket.send(data);
    }

    public online() {

    }

    public offline() {

    }

    public closeSocket() {
        this.socket.close();
    }

    public sendProtocol(data: any) {
        try {
            Log.sDebug('socketUid=%d send %s=%j', this.socket.uid, data.constructor.name, data);
            let msg = S2C.Message.create();
            let name = data.constructor.name;
            if (msg.hasOwnProperty(name)) {
                Log.sError('S2C have no packet, ' + name);
                return;
            }
            msg[data.constructor.name] = data;
            let buffer = S2C.Message.encode(msg).finish();
            // this.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length));
            this.send(buffer);
        }
        catch (e) {
            Log.sError(e);
        }
    }
}