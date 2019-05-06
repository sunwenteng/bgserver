import {Log} from '../../../lib/util/log';
import {gameNow, isSameDay, isSameWeek, realNow, refreshTime} from '../../../lib/util/time';
import {RedisMgr, RedisType,} from '../../../lib/redis/redis_mgr';
import * as WorldDB from '../../../lib/mysql/world_db';
import {WorldDataRedisKey} from "../game_world";
import {GameSession} from "../game_session";
import {BGMysql} from "../../../lib/util/descriptor";
import {ConfigMgr} from "../../../config/data/config_struct";
import * as util from "util";
import * as LoginDB from "../../../lib/mysql/login_db";
import {GM_TYPE} from "../../gm/gm_struct";
import {ERROR_CODE} from "../../../lib/util/error_code";
import {EMysqlValueType, ROLE_REDIS_EXPIRE_TIME} from "./defines";
import {BGField, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {ItemModel} from "./item_model";
import {S2C} from "../../proto/s2c";

export const roleRedisPrefix: string = 'hash_role';
const roleSummaryRedisKey: string = 'hash_role_summary';

export enum ERoleState {
    normal = 0,
    forbid = 1,
    banChat = 2,
}

interface IConsumeInfo {
    goodsId: number;
    goodsQuantity: number;
    value: number;
    time: number;
    diamondPaidUse: number;
}

export class Role extends BGObject {
    _session: GameSession;
    _endProtocol: any = null;

    // 一些临时数据，不做任何存储，只适用于在线用户的一些临时数据
    serverId: number = 0;
    platformId: number = 0;
    loginDevice: string = '';
    loginDeviceType: string = '';
    consumeInfo: IConsumeInfo[] = [];

    // NOTE: 声明的属性必须都在mysql有相应列做存储
    /*start of declaration*/
    @BGMysql(EMysqlValueType.uint8) @BGField(EBGValueType.uint8, true) gmAuth: GM_TYPE = GM_TYPE.NORMAL;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32) timeLastGm: number = 0;
    @BGMysql(EMysqlValueType.uint8) @BGField(EBGValueType.uint8) state: ERoleState = ERoleState.normal;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32, false, true) lastLoginTime: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32, true) createTime: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32) timeDaily = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32) timeWeekly = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32, true, true) uid: number = 0;
    @BGMysql(EMysqlValueType.string) @BGField(EBGValueType.string, true, true) nickname: string = '';
    @BGMysql(EMysqlValueType.uint8) @BGField(EBGValueType.uint8, true, true) gender: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32, true, true) iconId: number = 0;
    @BGMysql(EMysqlValueType.uint64) @BGField(EBGValueType.uint64, true, true) exp: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32, true, true) level: number = 0;
    @BGMysql(EMysqlValueType.uint64) @BGField(EBGValueType.uint64, true, true) combat: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32, true) vipExp: number = 0;
    @BGMysql(EMysqlValueType.uint8) @BGField(EBGValueType.uint8, true, true) vipLevel: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32, true, true) guildId: number = 0;
    @BGMysql(EMysqlValueType.uint8) @BGField(EBGValueType.boolean, true, true) valid: boolean = false;
    @BGMysql(EMysqlValueType.blob) @BGField(EBGValueType.object, true, true) itemModel: ItemModel = new ItemModel(this);

    /*end of declaration*/

    constructor(uid: number, session?: GameSession) {
        super();
        this._session = session;
        this.uid = uid;
        this.clearDirty();
    }

    public static getRedisKey(uid: number | string) {
        return roleRedisPrefix + '_' + uid;
    }

    public async save(bSaveAll: boolean = false, bSync2Login: boolean = false): Promise<void> {
        let saveData = this.encodeDB(bSaveAll);
        if (!saveData || Object.keys(saveData).length === 0) {
            return;
        }
        this.clearDirty();
        // 同步存储到redis
        Log.sDebug('%s:%j', Role.getRedisKey(this.uid), saveData);
        await RedisMgr.getInstance(RedisType.GAME).hmset(Role.getRedisKey(this.uid), saveData, ROLE_REDIS_EXPIRE_TIME);
        // 往脏数据集合添加
        await RedisMgr.getInstance(RedisType.GAME).sadd(WorldDataRedisKey.DIRTY_ROLES, this.uid);

        if (!this._session) {
            // notify other session to reload role from redis to memory
            await RedisMgr.getInstance(RedisType.GAME).sadd(WorldDataRedisKey.RELOAD_ROLES, this.uid);
        }

        // TODO
        // if (bSaveAll || this.isSummaryDirty) {
        //     await this.saveSummary();
        // }

        if (bSync2Login) {
            await this.syncDataToLogin();
        }
    }

    private async saveSummary() {
        let msg = await this.serializeSummaryNetMsg();
        await Role.saveRoleSummary(this.uid, msg);
    }

    public async load(): Promise<boolean> {
        return new Promise<boolean>(async (resolve) => {
            if (!this.uid || this.uid === 0) {
                resolve(false);
            }
            else {
                let queryField = Object.keys(this.__fields);
                let key = Role.getRedisKey(this.uid);
                let reply = await RedisMgr.getInstance(RedisType.GAME).hmget(key, queryField, ROLE_REDIS_EXPIRE_TIME);
                // 缓存不存在，从db查询然后放到缓存
                if (Object.keys(reply).length === 0) {
                    let result = await WorldDB.conn.execute('select * from player_info_' + this.getTableNum() + ' where ?', {uid: this.uid});

                    if (!result || result.length === 0) {
                        resolve(false);
                    }
                    else {
                        for (let f of queryField) {
                            if (!result[0].hasOwnProperty(f)) {
                                throw new Error('role column ' + f + ' not in db');
                            }
                        }
                        this.decodeDB(result[0]);
                        await RedisMgr.getInstance(RedisType.GAME).hmset(key, this.encodeDB(true), ROLE_REDIS_EXPIRE_TIME);
                        resolve(true);
                    }
                }
                // 缓存命中
                else {
                    this.decodeDB(reply);
                    resolve(true);
                }
            }
        });
    }

    public async create(name?: string, gender?: number, iconId?: number, inviter?: number) {
        this.createTime = realNow();
        this.nickname = name ? name : 'robot' + this.uid;
        this.gender = gender ? gender : 0;
        this.iconId = iconId ? iconId : 0;
        this.level = 1;
        // TODO

        this.computeCombat();

        // deprecated ban role create from ip
        // let result = await LoginDB.conn.execute(`select status from ip_status where ip like "%${this._session.socket.ip}%"`);
        // if (result.length > 0) {
        //     this.state = result[0].status;
        // }

        await WorldDB.conn.execute('insert into player_info_' + this.getTableNum() + ' set ?', this.encodeDB(true));
        this.clearDirty();
    }

    public getTableNum(): number {
        return this.uid % WorldDB.conn.config.tableSplitCount;
    }

    public sendProtocol(msg: any, bIsEndProtocol: boolean = false) {
        if (bIsEndProtocol) {
            this._endProtocol = msg;
            return;
        }

        if (this._session) {
            this._session.sendProtocol(msg);
        }
    }

    public sendEndProtocol() {
        if (this._endProtocol) {
            this.sendProtocol(this._endProtocol);
            this._endProtocol = null;
        }
    }

    public sendErrorMsg(code: number, ...args: any[]) {
        if (this._session) {
            let msg = util.format.apply(util, args);
            if (code !== ERROR_CODE.NO_ERROR) {
                Log.uWarnParent(this.uid, 'code=%d, msg=%s', code, msg);
            }
            this._session.sendProtocol(S2C.Error.create({id: parseInt(code.toString())}));
        }
    }

    public sendProUpdate(bAll: boolean = false) {
        // TODO
    }

    public async setAlive() {
        await RedisMgr.getInstance(RedisType.GAME).expire(Role.getRedisKey(this.uid), ROLE_REDIS_EXPIRE_TIME);
    }

    public async notify() {
        this.sendProUpdate();
        this.sendEndProtocol();
        // await RankController.instance.notify();
    }

    public async serializeSummaryNetMsg(): Promise<S2C.RoleSummary> {
        // todo
        return null;
    }

    /**
     * 尽量批量调用，效率高一些
     * @param {number | number[]} roleIds
     * @returns {Promise<S2C.RoleSummary[]>}
     */
    static async getRoleSummary(roleIds: number[] | string[]): Promise<S2C.RoleSummary[]> {
        return new Promise<S2C.RoleSummary[]>((async resolve => {
            let ret = [];
            if (roleIds.length === 0) {
                resolve(ret);
            }
            else {
                let roleSummary = await RedisMgr.getInstance(RedisType.GAME).hmget(roleSummaryRedisKey, roleIds);
                for (let id of roleIds) {
                    if (roleSummary[id]) {
                        ret.push(S2C.RoleSummary.fromObject(JSON.parse(roleSummary[id])));
                    }
                    else {
                        let role = new Role(parseInt(id.toString()));
                        let exist = await role.load();
                        if (!exist) {
                            ret.push(null);
                            Log.sError('roleId not valid when load, id=' + id);
                            continue;
                        }

                        let msg = await role.serializeSummaryNetMsg();
                        await Role.saveRoleSummary(id, msg);
                        ret.push(msg);
                    }
                }
                resolve(ret);
            }
        }));
    }

    static async saveRoleSummary(roleId: number | string, msg: S2C.RoleSummary) {
        let str = JSON.stringify(msg.toJSON());
        await RedisMgr.getInstance(RedisType.GAME).hmset(roleSummaryRedisKey, {[roleId]: str});
    }

    computeCombat() {
    }

    refreshTime(curCntKey, curTimeKey, maxCnt, interval) {
        refreshTime(this, curCntKey, curTimeKey, maxCnt, interval);
    }

    refreshDaily(bSendProtocol: boolean) {
        let now = gameNow();
        if (!isSameDay(now, this.timeDaily)) {
            // todo
            this.timeDaily = now;
        }
    }

    refreshWeekly() {
        let now = gameNow();
        if (!isSameWeek(now, this.timeWeekly, 1)) {
            // todo
            this.timeWeekly = now;
        }
    }

    doPay(platformId: number, goodsId: number): boolean {
        return true;
    }

    async checkCharge() {
        let results = await LoginDB.conn.execute('select auto_id, role_id, goods_id, goods_quantity, addition2, platform, addition5 from charge_info where ? and ?', [{role_id: this.uid}, {state: LoginDB.EChargeState.paied}]);
        if (results.length > 0) {
            Log.uInfo(this.uid, 'start process charge_info len=' + results.length);
            await RedisMgr.getInstance(RedisType.GAME).lock(Role.getRedisKey(this.uid), async () => {
                let needReload = await RedisMgr.getInstance(RedisType.GAME).sismember(WorldDataRedisKey.RELOAD_ROLES, this.uid);
                if (needReload) {
                    await this.load();
                    await RedisMgr.getInstance(RedisType.GAME).srem(WorldDataRedisKey.RELOAD_ROLES, this.uid);
                    this.computeCombat();
                    Log.uWarn(this.uid, 'role need reload, uid=' + this.uid);
                }

                for (let result of results) {
                    let platformId = 0;
                    if (result.addition2 !== '') {
                        platformId = parseInt(result.addition2);
                    }
                    const config = ConfigMgr.getInstance().recharge_productdb.get(result.goods_id);
                    if (!config) {
                        Log.sError('goods ID not found, ID=' + result.goods_id);
                        continue;
                    }
                    if (!this.doPay(platformId, config.Id)) {
                        Log.uError(this.uid, 'role recharge platformId not support, auto_id=%d, platform_id=%d, goods_id=%d', result.auto_id, platformId, result.goods_id);
                        continue;
                    }
                    await LoginDB.conn.execute('update charge_info set ? where ?', [{state: LoginDB.EChargeState.distributed}, {auto_id: result.auto_id}]);
                    await this.syncDataToLogin();
                }
                this.sendProUpdate();
                await this.save();
                this.sendProtocol(S2C.SC_UPDATE_RECHARGE.create());
                Log.uInfo(this.uid, 'finish process charge_info len=' + results.length);
            });
        }
    }

    async syncDataToLogin() {
        if (Role.isRobot(this.uid)) {
            Role.isRobot(this.uid);
        }
        let data = {
            role_id: this.uid,
            name: this.nickname,
            gm_auth: this.gmAuth,
            status: this.state,
            progress: this.exp,
            level: this.level,
            cur_train: 0,
            vip_level: this.vipLevel,
            vip_exp: this.vipExp,
            create_time: this.createTime,
            last_login_time: this.lastLoginTime
        };
        await LoginDB.conn.execute('insert into player_info set ? on duplicate key update ?', [data, data]);
    }

    static isRobot(uid: number) {
        return uid < LoginDB.ROLE_INIT_ID;
    }
}