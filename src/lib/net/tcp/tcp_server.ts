import * as net from 'net';
import {TcpSocket} from './tcp_socket';
import {Log} from "../../util/log";

export class TcpServer {
    server: net.Server;
    connectionUid: number;
    bAlive: boolean;

    constructor() {
        this.connectionUid = 0;
    }

    public initialize(): void {
        this.server = net.createServer();
        // server event register
        this.server.on('listening', () => {
            this.bAlive = true;
            Log.sInfo('server is listening on %j', this.server.address());
        });

        this.server.on('error', (msg) => {
            Log.sInfo(msg.stack);
        });

        this.server.on('close', () => {
            Log.sInfo('server close');
            this.bAlive = false;
        });

        // server connection event register
        this.server.on('connection', (socket: net.Socket) => {
            new TcpSocket(this, this.connectionUid++, socket);
        });
    }

    public start(host: string, port: number): void {
        this.initialize();
        this.server.listen(port);
    }

    public close(): void {
        this.bAlive = false;
        this.server.close(() => {
            Log.sInfo('server close');
        });
    }
}