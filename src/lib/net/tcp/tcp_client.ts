import {SocketBuffer} from './socket_buffer';
import * as net from 'net';
import {C2S, Router, S2C} from "../../../app/proto/cmd";

let connectCnt = 1;

class TcpClient {
    client: net.Socket = null;
    socketBuffer: SocketBuffer;
    num: number;
    isConnected: boolean = false;

    constructor(port, ip) {
        this.socketBuffer = new SocketBuffer();
        this.num = 0;
        this.client = net.connect(port, ip);
        this.client.on('connect', (socket: net.Socket) => {
            let msg = Router.CS_PRECONNECT.create({host: 'herosdres.imobile-ent.com', port: 5050});

            let dataBuffer = new Buffer(Router.CS_PRECONNECT.encode(msg).finish());
            let code = 1;
            let size = 4 + dataBuffer.length;
            let buffer = new Buffer(size);
            buffer.writeUInt32LE(size, 0);
            buffer.writeUInt32LE(code, 2);
            dataBuffer.copy(buffer, 4);
            console.log('code=%d, size=%d', code, size);
            this.client.write(buffer);
        });

        this.client.on('data', (data: Buffer) => {
            if (!this.isConnected) {
                let ret = [];
                let socketBuffer = new SocketBuffer();
                socketBuffer.read(data, ret);
                if (ret.length > 0) {
                    this.isConnected = true;
                    this.client.write('data after connected');
                }
            }
            else {
                console.log(data.toString());
            }
        });

        this.client.on('end', () => {
            console.log('disconnected from server');
        });

        this.client.on('error', (err: Error) => {
            console.error(err);
        });
    }
}

let i, client;
for (i = 0; i < connectCnt; ++i) {
    client = new TcpClient(5050, 'herosdseat1.imobile-ent.com');
}