import {LinkedList} from "../util/linked_list";
import {Log} from "../util/log";
import {
    IRpcDefinition,
    IRpcMeta, MSG_ID_HEART_BEAT,
    SECOND
} from "../../app/game/modles/defines";
import * as WebSocket from 'ws';
import {UserSession} from "./user_session";
import Timer = NodeJS.Timer;
import {Zombie} from "../../app/proto/zombie";

interface Rpc {
    msgId: number;
    msg: any;
    cb: (err?, msg?) => void;
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
    private _timers: Timer[] = [];
    private readonly _name: string;
    private readonly _host: string;
    private readonly _port: number;
    private _socket: WebSocket;
    private _state: ESessionState = ESessionState.INIT;
    private _resMsgIdx: { [resMsgId: number]: IRpcMeta } = {};

    constructor(host: string, port: number, name: string, data: IRpcDefinition) {
        super();
        this._host = host;
        this._port = port;
        this._name = name;
        this._reqMsgIdx = data.idx;
        this._rpcMetaMap = data.rpc;
        for (let reqMsgId in this._rpcMetaMap) {
            const rpc = this._rpcMetaMap[reqMsgId];
            this._resMsgIdx[rpc.resMsgId] = rpc;
        }
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
                const msgId = this.decodeMsgId(data);
                const msgIdx = this.decodeMsgIdx(data);
                const rpc: IRpcMeta = this._resMsgIdx[msgId];
                if (!rpc) {
                    Log.sError(`handleInfo parse error, msgId=${msgId}`);
                    return;
                }

                let msg = this.decode(data, rpc.resEncoder);

                let cur = this._rpcList.head, bRpcProcessed = false;
                while (cur) {
                    if (cur.element.msgId === rpc.reqMsgId) {
                        await cur.element.cb.apply(cur.element.self, [null, msg]);
                        bRpcProcessed = true;
                        this._rpcList.deleteNode(cur);
                        break;
                    }
                    cur = cur.next;
                }

                if (!bRpcProcessed) {
                    Log.sError(`rpc session ${this._name} not process, msgId=${msgId}, msgIdx=${msgIdx}`);
                }
            });

            this._timers.push(setInterval(async () => {
                let cur = this._rpcList.head;
                let now = Date.now();
                while (cur) {
                    if ((now - cur.element.ctime) > 5 * SECOND) {
                        this._rpcList.deleteNode(cur);
                        await cur.element.cb.apply(cur.element.self, [new Error(`rpc session ${this._name} timeout`), null]);
                    }
                    cur = cur.next;
                }
            }, SECOND));

            this._timers.push(setInterval(async () => {
                if (this._state === ESessionState.CONNECTED) {
                    this._socket.send(this.encode(MSG_ID_HEART_BEAT));
                    Log.sDebug(`rpc session ${this._name} heart beat send`);
                }
            }, 15 * SECOND));
        });
    }

    close() {
        Log.sInfo(`rpc ${this._name} session close`);
        this._rpcList.clear();
        this._timers.map(value => clearInterval(value));
        this._socket.close();
    }

    /**
     * @param msg
     * @param self
     * @param cb => if null just send msg
     */
    rpc(msg: any, self?: any, cb ?: (err?, msg?) => void) {
        let msgId = this._reqMsgIdx[msg.constructor.name];
        if (!msgId) {
            throw new Error(`rpc session ${this._name} ${msg.constructor.name} not found`);
        }

        let rpc = this._rpcMetaMap[msgId];
        this._socket.send(this.encode(msgId, rpc.reqEncoder, msg));

        if (cb) {
            this._rpcList.append({msgId: msgId, msg: msg, cb: cb, self: self, ctime: Date.now()});
        }
    }
}