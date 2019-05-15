import {LinkedList} from "../util/linked_list";
import {Log} from "../util/log";
import {SECOND} from "../../app/game/modles/defines";
import * as WebSocket from 'ws';
import {UserSession} from "./user_session";
import Timer = NodeJS.Timer;
import {Zombie} from "../../app/proto/zombie";

interface Rpc {
    msgId: number;
    msg: any;
    cb: (err, msg) => void;
    self: any;
    ctime: number;
}

enum ESessionState {
    INIT = 0,
    CONNECTING,
    CONNECTED,
    DISCONNECTED,
}

export class RpcSession extends UserSession {
    private _rpcList: LinkedList<Rpc> = new LinkedList();
    private _timerCheckTimeout: Timer;
    private readonly _name: string;
    private readonly _host: string;
    private readonly _port: number;
    private _socket: WebSocket;
    private _state: ESessionState = ESessionState.INIT;

    constructor(host: string, port: number, name: string, data) {
        super();
        this._host = host;
        this._port = port;
        this._name = name;
        this._rpcMetaMap = data.rpc;
        this._msgIdx = data.idx;
    }

    async init(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._socket = new WebSocket('ws://' + this._host + ':' + this._port + '/websocket');
            this._socket.on('open', () => {
                this._state = ESessionState.CONNECTED;
                Log.sInfo(`rpc session ${this._name}, ${this._host}:${this._port} connected!`);
                let pck = Zombie.Session_Init.create();
                this.rpc(pck, this, (err, msg) => {
                    if (err) {
                        Log.sError(err);
                    }
                });
                resolve();
            });

            this._socket.on('close', (code, reason) => {
                this._state = ESessionState.DISCONNECTED;
                Log.sWarn(`rpc session ${this._name} close, code=${code}, reason=${reason}`);
                // TODO reconnect
            });

            this._socket.on('error', (err) => {
                if (this._state === ESessionState.INIT) {
                    reject(err);
                }
                else if (err['code'] === 'ECONNREFUSED') {
                    this._state = ESessionState.DISCONNECTED;
                }
                Log.sError(`rpc session ${this._name}, ${this._host}:${this._port} ${err}`);
            });

            this._socket.on('message', async (data: Buffer) => {
                let rpc = this.decode(data);
                let cur = this._rpcList.head;
                while (cur) {
                    if (cur.element.msgId === rpc.reqMsgId) {
                        await cur.element.cb.apply(cur.element.self, [null, rpc.msg]);
                        this._rpcList.deleteNode(cur);
                        break;
                    }
                    cur = cur.next;
                }
            });

            this._timerCheckTimeout = setInterval(async () => {
                let cur = this._rpcList.head;
                let now = Date.now();
                while (cur) {
                    if ((now - cur.element.ctime) > 5 * SECOND) {
                        this._rpcList.deleteNode(cur);
                        await cur.element.cb.apply(cur.element.self, [new Error(`rpc session ${this._name} timeout`), null]);
                    }
                    cur = cur.next;
                }
            }, SECOND);
        });
    }

    close() {
        Log.sInfo(`rpc ${this._name} session close`);
        this._rpcList.clear();
        clearInterval(this._timerCheckTimeout);
        this._socket.close();
    }

    rpc(msg: any, self: any, cb: (err, msg) => void) {
        let msgId = this._msgIdx[msg.constructor.name];
        if (!msgId) {
            throw new Error(`rpc session ${this._name} ${msg.constructor.name} not found`);
        }
        this._rpcList.append({msgId: msgId, msg: msg, cb: cb, self: self, ctime: Date.now()});

        let rpc = this._rpcMetaMap[msgId];
        this._socket.send(this.encode(msgId, rpc.reqEncoder, msg));
    }
}