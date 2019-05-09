import {UserSession} from '../../lib/net/user_session';
import {Log} from "../../lib/util/log";
import {GameWorld, WorldDataRedisKey} from "./game_world";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {Role, roleRedisPrefix} from "./modles/role";
import {execTime} from "../../lib/util/descriptor";
import {IntervalTimer, realNow} from "../../lib/util/time";
import * as LoginDB from '../../lib/mysql/login_db';
import {
    IController,
    IHandler,
    MSG_HEADER_LEN_BYTES,
    MSG_HEADER_MSG_ID_BYTES,
    MSG_HEADER_MSG_IDX_BYTES
} from "./modles/defines";

const MAX_PACKET_COUNT = 10000;

export class GameSession extends UserSession {
    public role: Role = null;
    private _loginKey: number = 0;

    updatePlayerCharge: IntervalTimer = new IntervalTimer(1);
    updatePlayerAct: IntervalTimer = new IntervalTimer(1);

    constructor() {
        super();

        this.on('message', (data) => {
            try {
                const buffer = new Buffer(data);
                const len = buffer.readUInt32BE(0);
                const msgId = buffer.readUInt16BE(MSG_HEADER_LEN_BYTES);
                const msgIdx = buffer.readUInt16BE(MSG_HEADER_LEN_BYTES + MSG_HEADER_MSG_ID_BYTES);
                const controller: IController = GameWorld.instance.getController(msgId);
                if (!controller) {
                    Log.sError(`handleInfo parse error, len=${len}, msgId=${msgId}, msgIdx=${msgIdx}`);
                    return;
                }
                const msg = controller.decoder.decode(buffer.slice(MSG_HEADER_LEN_BYTES + MSG_HEADER_MSG_ID_BYTES + MSG_HEADER_MSG_IDX_BYTES));
                this.packets.append({...controller, msg: msg});
            }
            catch (e) {
                Log.sError(e);
            }
        });
    }

    @execTime(false)
    private async doAction(controller: Function, action: Function, session: GameSession, packet: any) {
        Log.uInfo(this.role ? this.role.uid : 0, 'serverId=%d, socketUid=%d, roleId=%d, name=%s, data=%j', this.role ? this.role.serverId : 0, this.socket.uid, this.role ? this.role.uid : 0, packet.constructor.name, packet);
        await action.apply(controller, [session, packet]);
    }

    public async update() {
        let packet: IHandler,
            counter = 0,
            cur = this.packets.head,
            t,
            now = realNow();
        while (cur) {
            if (this.packets.length > MAX_PACKET_COUNT) {
                Log.sError('packet array length too long, force close socket, uid=%d, ip=%s, length=%d', this.socket.uid, this.socket.ip, this.packets.length);
                this.closeSocket();
            }

            packet = cur.element;
            t = cur;
            this.packets.deleteNode(t);
            cur = cur.next;

            await this.doAction(packet.controller, packet.action, this, packet.msg).catch((e) => {
                Log.sError(e);
            });

            // per loop do 5 packet
            if (++counter > 5) {
                break;
            }
        }

        if (this.updatePlayerCharge.passed(now)) {
            this.updatePlayerCharge.update(now);
            if (this.role) {
                await this.role.checkCharge().catch((e) => {
                    Log.uError(this.role.uid, e);
                });
            }
        }
    }

    public addSessionToWorker(): void {
        GameWorld.instance.addSession(this);
    }

    public async online() {
        if (this.role) {
            await RedisMgr.getInstance(RedisType.GAME).srem(WorldDataRedisKey.RELOAD_ROLES, this.role.uid);
            GameWorld.instance.addAuthedSession(this.role.uid, this);
            await RedisMgr.getInstance(RedisType.GAME).subscribe(roleRedisPrefix + '_' + this.role.uid, GameWorld.instance);
            let dbTime = await LoginDB.getDBTime();
            let result = await LoginDB.conn.execute('insert into role_login_info set ?', {
                role_id: this.role.uid,
                login_time: dbTime,
                logout_time: 0,
                login_ip: this.socket.ip,
                login_device: this.role.loginDevice,
                login_device_type: this.role.loginDeviceType
            });
            this._loginKey = result['insertId'];
            this.isAuthorized = true;
            Log.sInfo('roleId=%d, socketUid=%d, online', this.role.uid, this.socket.uid);
        }
    }

    public async offline() {
        if (this.role) {
            GameWorld.instance.delAuthedSession(this.role.uid);
            await RedisMgr.getInstance(RedisType.GAME).unsubscribe(roleRedisPrefix + '_' + this.role.uid);
            let dbTime = await LoginDB.getDBTime();
            await this.role.syncDataToLogin();
            await LoginDB.conn.execute('update role_login_info set ? where ?', [{logout_time: dbTime}, {auto_id: this._loginKey}]);
            for (let consume of this.role.consumeInfo) {
                await LoginDB.conn.execute('insert into purchase_info set ?', {
                    role_id: this.role.uid,
                    goods_id: consume.goodsId,
                    goods_quantity: consume.goodsQuantity,
                    value: consume.value,
                    diamond_paid_use: consume.diamondPaidUse,
                    time: consume.time
                });
            }
            Log.sInfo('roleId=%d, socketUid=%d, offline', this.role.uid, this.socket.uid);
            this.role.uid = 0;
            this.isAuthorized = false;
        }
    }
}