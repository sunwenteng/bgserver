import "reflect-metadata";
import * as ws from 'ws';
import * as express from 'express';
import * as http from 'http';
import {Log} from '../../util/log';
import {UserSession} from '../user_session';
import * as bodyParser from 'body-parser';
import * as url from "url";
import {Global} from "../../util/global";
import {
    Action,
    ExpressMiddlewareInterface, Interceptor,
    InterceptorInterface,
    Middleware, RoutingControllersOptions,
    useExpressServer
} from "routing-controllers";
import {parseHttpParams} from "../../util/game_util";

let uid: number = 0;
const baseWebSocketPath = '/websocket';

export enum SocketStatus {
    VALID,
    INVALID
}

export class WebSocket {
    private _session: UserSession;
    private _webSocket: ws;
    private _uid: number;
    private _state: SocketStatus;
    private readonly _ip: string;

    constructor(ip: string) {
        this._ip = ip;
    }

    public init<T extends UserSession>(uid: number, socket: ws, sessionClass: new () => T) {
        this._webSocket = socket;
        this._uid = uid;
        this._session = new sessionClass();
        this._session.socket = this;
        this._session.addSessionToWorker();
        this._state = SocketStatus.VALID;
        this._webSocket.on('message', (data: ArrayBuffer) => {
            if (this.isSocketValid()) {
                this._session.emit('message', data);
            }
        });

        this._webSocket.on('pong', () => {
            this._state = SocketStatus.VALID;
        });

        this._webSocket.on('close', (code: number, reason: string) => {
            Log.sInfo('webSocket closed, code=%d, reason=%s', code, reason);
            this._state = SocketStatus.INVALID;
        });

        this._webSocket.on('error', (error: Error) => {
            Log.sError(error);
        });
    }

    public isSocketValid() {
        return Global.isAppValid && this._state === SocketStatus.VALID && this._webSocket.readyState === ws.OPEN;
    }

    public send(data: Buffer | string | Uint8Array | ArrayBuffer): void {
        if (this.isSocketValid()) {
            this._webSocket.send(data);
        }
    }

    public close() {
        this._webSocket.close();
    }

    get uid(): number {
        return this._uid;
    }

    get ip(): string {
        return this._ip;
    }

    get state(): SocketStatus {
        return this._state;
    }
}

@Middleware({type: "before"})
class LoggingMiddleware implements ExpressMiddlewareInterface {

    use(request: any, response: any, next: (err: any) => any): void {
        Log.sInfo(`url=${request.originalUrl}, params=${JSON.stringify(parseHttpParams(request))}`);
        next(null);
    }

}

@Interceptor()
class LoggingInterceptor implements InterceptorInterface {
    intercept(action: Action, content: any) {
        Log.sInfo(`url=${action.request.originalUrl}, content=${content}`);
        return content;
    }

}

export class Server {
    private readonly _port: number;
    private readonly _host: string;
    private _server: ws.Server = null;

    constructor(host: string, port: number) {
        this._port = port;
        this._host = host;
    }

    public async stop(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            Global.isAppValid = false;
            this._server.close((err) => {
                if (err) {
                    reject(err);
                }
                else {
                    Log.sInfo('server close at ' + this._host + ':' + this._port);
                    resolve();
                }
            });
        });
    }

    /**
     * @param sessionClass null时启动一个web server
     * @param options
     */
    public start<T extends UserSession>(sessionClass: new () => T | null, options?: RoutingControllersOptions): Promise<void> {
        return new Promise<void>(((resolve, reject) => {
            Global.isAppValid = true;
            let app = express();
            app.use("/*", bodyParser.text({type: "*/*"}));
            app.use(bodyParser.urlencoded({extended: true, limit: '1mb'}));
            app.use((req: express.Request, res: express.Response, next) => {
                res.header("Access-Control-Allow-Credentials", 'true');
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
                res.header("Access-Control-Allow-Headers", "*");
                res.header("Content-Type", "application/json;charset=utf-8");
                if ("OPTIONS" === req.method) {
                    res.send(200);
                }
                else {
                    next();
                }
            });

            let httpServer = http.createServer(app);
            httpServer.on('upgrade', (request, socket, head) => {
                const pathname = url.parse(request.url).pathname;
                if (pathname === baseWebSocketPath) {
                    this._server.handleUpgrade(request, socket, head, (ws) => {
                        this._server.emit('connection', ws, request);
                    });
                }
            });
            httpServer.on('listening', () => {
                Log.sInfo('Web_socket server start, address=%j, basePath=%s', httpServer.address(), baseWebSocketPath);
                resolve();
            });

            httpServer.listen(this._port, this._host);
            if (options) {
                useExpressServer(app, options);
            }

            if (sessionClass) {
                this._server = new ws.Server({
                    noServer: true,
                    maxPayload: 10240,
                });

                this._server.on('error', (error: Error) => {
                    Log.sError(error);
                    reject(error);
                });

                this._server.on('connection', ((s: ws, req: http.IncomingMessage) => {
                    let ip = '';
                    if (req.headers['x-forwarded-for']) {
                        ip = (req.headers['x-forwarded-for'] as string).split(/\s*,\s*/)[0];
                    }
                    else {
                        ip = req.connection.remoteAddress;
                    }
                    const socket = new WebSocket(ip);
                    socket.init(++uid, s, sessionClass);
                    Log.sInfo('new Web_socket connection, ip=' + socket.ip + ', uid=' + socket.uid);

                }));
            }
            else {
                Log.sWarn('no websocket server supported, start web server');
            }
        }));
    }
}