import {SocketBuffer} from './socket_buffer';
import * as net from 'net';
import {TcpServer} from './tcp_server';
import {Log} from "../../util/log";
import {Router} from "../../../app/proto/router";

export class TcpSocket {
    socket: net.Socket; // TODO
    socketUid: number;
    socketBuffer: SocketBuffer;
    server: TcpServer;
    destHost: string;
    destPort: number;
    destClient: net.Socket = null;

    constructor(server: TcpServer, uid: number, socket: net.Socket) {
        this.server = server;
        this.socket = socket;
        this.socketUid = uid;
        this.socketBuffer = new SocketBuffer();
        Log.sInfo('socket connect, uid=' + uid);

        this.socket.on('data', (data: Buffer) => {
            if (!this.server.bAlive) {
                return;
            }

            let retArray: Router.CS_PRECONNECT[] = [];
            try {
                if (!this.destClient) {
                    this.socketBuffer.read(data, retArray);
                    if (retArray.length > 0 && !this.destClient) {
                        this.destHost = retArray[0].host;
                        this.destPort = retArray[0].port;

                        this.destClient = net.connect(this.destPort, this.destHost);
                        this.destClient.on('connect', () => {
                            Log.sInfo('socketUid=%d connect to dest server, host=%s, port=%d', this.socketUid, this.destHost, this.destPort);

                            let msg = Router.SC_PRECONNECT.create();
                            msg.cmdId = 2;
                            let dataBuffer = new Buffer(Router.SC_PRECONNECT.encode(msg).finish());
                            let code = msg.cmdId;
                            let size = 8 + dataBuffer.length;
                            let buffer = new Buffer(size);
                            buffer.writeUInt32LE(size, 0);
                            buffer.writeUInt32LE(code, 4);
                            dataBuffer.copy(buffer, 8);
                            this.socket.write(buffer);
                        });

                        this.destClient.on('data', (data) => {
                            this.socket.write(data);
                        });

                        this.destClient.on('close', () => {
                            Log.sWarn('socketClose, dest socket close, uid=' + this.socketUid);
                            this.closeAll();
                        });

                        this.destClient.on('error', (err) => {
                            Log.sWarn('socketClose, dest socket close, uid=' + this.socketUid + ', err=' + err);
                            this.closeAll();
                        });
                    }
                    else {
                        this.socket.write('reply ' + data.toString());
                    }
                }
                else {
                    this.destClient.write(data);
                }
            } catch (err) {
                Log.sError('TcpSocket data event error, ' + err.stack);
                this.closeAll();
            }
        });

        this.socket.on('close', () => {
            Log.sWarn('socketClose, socket close, uid=' + this.socketUid);
            this.closeAll();
        });

        /**
         * all socket err code explain
         * {@link http://z-redsky.bLog.163.com/bLog/static/44986162201110121020387/}
         */
        this.socket.on('error', (err: Error) => {
            if (err['code'] === 'ECONNRESET' || err['code'] === 'EPIPE') {
                Log.sError('socket force to close by client, uid=' + this.socketUid);
            }
            else {
                Log.sError('err.code=' + err['code'] + ', stack=' + err.stack);
            }
        });
    }

    closeAll() {
        if (this.destClient && !this.destClient.destroyed) {
            this.destClient.destroy();
        }
        if (this.socket && !this.socket.destroyed) {
            this.socket.destroy();
        }
    }
}