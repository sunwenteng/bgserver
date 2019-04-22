import {C2S, Router, S2C} from "../../../app/proto/cmd";
import {Log} from "../../util/log";

let MAX_PACKET_LEN = 4096;   // 包长上限

export class SocketBuffer {
    socketBuffer: Buffer;
    socketBufferSize: number;

    constructor() {
        this.socketBuffer = new Buffer(MAX_PACKET_LEN);
        this.socketBufferSize = 0;
    }

    public read(data: Buffer, pckArray: any) {
        let dataReadIdx = 0, copySize, readIdx, size, opCode, pckData;
        while (dataReadIdx < data.length) {
            copySize = Math.min(this.socketBuffer.length - this.socketBufferSize, data.length - dataReadIdx);
            data.copy(this.socketBuffer, this.socketBufferSize, dataReadIdx, copySize);
            this.socketBufferSize += copySize;
            dataReadIdx += copySize;
            readIdx = 0;
            while (readIdx < this.socketBufferSize) {
                if ((this.socketBufferSize - readIdx) < 8) {
                    break;
                }

                size = this.socketBuffer.readUInt32LE(readIdx);
                opCode = this.socketBuffer.readUInt32LE(readIdx + 4);

                // packet too long
                if (opCode === 1 && size > MAX_PACKET_LEN) {
                    Log.sError('Too Long Packet, size=%d, opCode=%d, readIdx=%d', size, opCode, readIdx);
                    return false;
                }

                if ((this.socketBufferSize - readIdx) < size) {
                    break;
                }

                pckData = new Buffer(size - 8);
                this.socketBuffer.copy(pckData, 0, readIdx + 8, readIdx + size);
                if (opCode === 1) {
                    let pck = Router.CS_PRECONNECT.decode(pckData);
                    pckArray.push(pck);
                }
                else if (opCode === 2) {
                    let pck = Router.SC_PRECONNECT.decode(pckData);
                    pckArray.push(pck);
                }
                readIdx += size;
            }

            if (readIdx !== this.socketBufferSize) {
                // align to head, so it is easy to operate
                this.socketBufferSize = this.socketBufferSize - readIdx;
                this.socketBuffer.copy(this.socketBuffer, 0, readIdx, this.socketBufferSize);
            } else {
                this.socketBufferSize = 0;
            }
        }

        return true;
    }
}
