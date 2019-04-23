import {Log} from '../../../lib/util/log';
import {gameNow, isSameDay, isSameWeek, realNow, refreshTime} from '../../../lib/util/time';
import {RedisMgr, RedisType,} from '../../../lib/redis/redis_mgr';
import * as WorldDB from '../../../lib/mysql/world_db';
import {WorldDataRedisKey} from "../game_world";
import {C2S, S2C} from "../../proto/cmd";
import {GameSession} from "../game_session";
import {BGField, BGMysql} from "../../../lib/util/descriptor";
import {ConfigMgr} from "../../../config/data/config_struct";
import * as util from "util";
import * as LoginDB from "../../../lib/mysql/login_db";
import {GM_TYPE} from "../../gm/gm_struct";
import {DirtyModel} from "./model";
import {ERROR_CODE} from "../../../lib/util/error_code";
import {RoleModel} from "./role_model";
import {EMysqlValueType} from "./defines";

export const roleRedisPrefix: string = 'hash_role';
const roleSummaryRedisKey: string = 'hash_role_summary';

export enum ERoleState {
    normal = 0,
    forbid = 1,
    banChat = 2,
}

abstract class RedisData extends DirtyModel {
    dynamicFields: { [key: string]: string } = {};
    rankFields: { [key: string]: any } = {};
    revRankFields: { [eRankType: string]: string } = {};
    isSummaryDirty: boolean = false;
    redisKeyExpire: number;

    protected constructor(redisPrefix: string, expireTime: number = 3600) {
        super();
        this.redisKeyExpire = expireTime;
    }

    public reset() {
        this.dirtyFields = {};
        this.dynamicFields = {};
        this.rankFields = {};
        this.isSummaryDirty = false;
    }

    public deserialize(reply: { [key: string]: any }): void {
        for (let obj in reply) {
            if (this.fields.hasOwnProperty(obj)) {
                switch (typeof this.fields[obj]) {
                    case 'number' :
                    case 'boolean' :
                        this.fields[obj] = reply[obj] === '' ? 0 : parseInt(reply[obj]);
                        break;
                    case 'string' :
                        this.fields[obj] = reply[obj];
                        break;
                    case 'object' :
                        try {
                            if (this.fields[obj] instanceof RoleModel) {
                                if (reply[obj] !== "" && reply[obj] !== "null" && reply[obj] !== null) {
                                    this.fields[obj].deserialize(reply[obj]);
                                }
                                this.fields[obj]['loaded'] = true;
                            }
                            else {
                                if (reply[obj] !== "" && reply[obj] !== "null" && reply[obj] !== null) {
                                    this.fields[obj] = JSON.parse(reply[obj]);
                                }
                            }
                        }
                        catch (err) {
                            Log.sError(`redis data parse failed, key=${obj}, val=${reply[obj]}, error=${err}`);
                            this.fields[obj] = {};
                        }

                        break;
                    default:
                        Log.sError('wrong type, key=%s, type=%s', obj, typeof this.fields[obj]);
                        break;
                }
            }
        }
        this.reset();
    }

    public serialize(bAll?: boolean): { [key: string]: any } {
        let reply: { [key: string]: any } = {};
        let checkFields = bAll ? this.fields : this.dirtyFields;
        for (let obj in checkFields) {
            if (this.fields.hasOwnProperty(obj)) {
                switch (typeof this.fields[obj]) {
                    case 'number' :
                    case 'string' :
                    case 'boolean':
                        reply[obj] = this.fields[obj];
                        break;
                    case 'object' :
                        if (this.fields[obj] instanceof RoleModel) {
                            reply[obj] = this.fields[obj].serialize();
                        }
                        else {
                            reply[obj] = JSON.stringify(this.fields[obj]);
                        }
                        break;
                    default:
                        Log.sError('wrong type, key=%s, type=%s', obj, typeof this.fields[obj]);
                        break;
                }
            }
        }
        return reply;
    }
}

interface IConsumeInfo {
    goodsId: number;
    goodsQuantity: number;
    value: number;
    time: number;
    diamondPaidUse: number;
}

export class Role extends RedisData implements S2C.ISC_UPDATE_ROLE_PRO {
    _session: GameSession;
    _endProtocol: any = null;

    // 一些临时数据，不做任何存储，只适用于在线用户的一些临时数据
    serverId: number = 0;
    platformId: number = 0;
    loginDevice: string = '';
    loginDeviceType: string = '';
    consumeInfo: IConsumeInfo[] = [];

    /*start of default*/
    @BGMysql(EMysqlValueType.uint8) @BGField(true) gmAuth: GM_TYPE = GM_TYPE.NORMAL;
    @BGMysql(EMysqlValueType.uint32) @BGField() timeLastGm: number = 0;
    @BGMysql(EMysqlValueType.uint8) @BGField() state: ERoleState = ERoleState.normal;
    @BGMysql(EMysqlValueType.uint32) @BGField(false, true) lastLoginTime: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(true) createTime: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField() timeDaily = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField() timeWeekly = 0;
    /*end of default*/

    // NOTE: 声明的属性必须都在mysql有相应列做存储
    @BGMysql(EMysqlValueType.uint32) @BGField(true, true) uid: number = 0;
    @BGMysql(EMysqlValueType.string) @BGField(true, true) nickname: string = '';
    @BGMysql(EMysqlValueType.string, 256) @BGField(true, true) headimgurl: string = '';
    @BGMysql(EMysqlValueType.uint8) @BGField(true, true) gender: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(true, true) iconId: number = 0;
    @BGMysql(EMysqlValueType.uint64) @BGField(true, true) exp: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(true, true) level: number = 0;
    @BGMysql(EMysqlValueType.uint64) @BGField(true, true, C2S.ERankType.combat) combat: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(true) vipExp: number = 0;            // vip经验
    @BGMysql(EMysqlValueType.uint8) @BGField(true, true) vipLevel: number = 0;    // vip等级
    @BGMysql(EMysqlValueType.uint32) @BGField(true, true) guildId: number = 0;

    constructor(uid: number, session?: GameSession) {
        super(roleRedisPrefix);
        this._session = session;
        this.uid = uid;
    }

    private getDataFields(): string[] {
        return Object.keys(this.fields);
    }

    public static getRedisKey(uid: number | string) {
        return roleRedisPrefix + '_' + uid;
    }

    public async save(bSaveAll: boolean = false, bSync2Login: boolean = false): Promise<void> {
        let saveData = this.serialize(bSaveAll);
        if (Object.keys(saveData).length === 0) {
            return;
        }
        // 同步存储到redis
        Log.sDebug('%s:%j', Role.getRedisKey(this.uid), saveData);
        await RedisMgr.getInstance(RedisType.GAME).hmset(Role.getRedisKey(this.uid), saveData, this.redisKeyExpire);
        // 往脏数据集合添加
        await RedisMgr.getInstance(RedisType.GAME).sadd(WorldDataRedisKey.DIRTY_ROLES, this.uid);

        if (!this._session) {
            await RedisMgr.getInstance(RedisType.GAME).sadd(WorldDataRedisKey.RELOAD_ROLES, this.uid);
        }

        if (bSaveAll || this.isSummaryDirty) {
            await this.saveSummary();
        }

        if (bSync2Login) {
            await this.syncDataToLogin();
        }
        this.reset();
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
                let queryField = this.getDataFields();
                let key = Role.getRedisKey(this.uid);
                let reply = await RedisMgr.getInstance(RedisType.GAME).hmget(key, queryField, this.redisKeyExpire);
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
                        this.deserialize(result[0]);
                        await RedisMgr.getInstance(RedisType.GAME).hmset(key, this.serialize(true), this.redisKeyExpire);
                        resolve(true);
                    }
                }
                // 缓存命中
                else {
                    for (let f of queryField) {
                        if (!reply[f]) {
                            reply[f] = '';
                        }
                    }
                    this.deserialize(reply);
                    resolve(true);
                }
            }
        });
    }

    public async create(name?: string, gender?: number, iconId?: number, inviter?: number) {
        for (let k in this.fields) {
            if (this.fields[k] instanceof RoleModel) {
                this.fields[k].loaded = true;
            }
        }

        this.createTime = realNow();
        this.nickname = name ? name : 'robot' + this.uid;
        this.gender = gender ? gender : 0;
        this.iconId = iconId ? iconId : 0;
        this.level = 1;
        // TODO

        this.computeCombat();

        let result = await LoginDB.conn.execute(`select status from ip_status where ip like "%${this._session.socket.ip}%"`);
        if (result.length > 0) {
            this.state = result[0].status;
        }

        await WorldDB.conn.execute('insert into player_info_' + this.getTableNum() + ' set ?', this.serialize(true));
        this.dynamicFields = {};
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
        if (bAll) {
            let pck = S2C.SC_UPDATE_ROLE_PRO.create();
            for (let k in pck) {
                if (!this.fields.hasOwnProperty(k)) {
                    if (k !== 'constructor' && k !== 'toJSON') {
                        Log.sError('SC_ROLE_PRO_UPDATE %s not exist in role data', k);
                    }
                    continue;
                }
                pck[k] = this.fields[k];
            }
            this.sendProtocol(pck);
        }
        else if (Object.keys(this.dynamicFields).length > 0) {
            let pck = S2C.SC_UPDATE_ROLE_PRO.create();
            for (let key in this.dynamicFields) {
                pck[key] = this.fields[key];
            }
            this.sendProtocol(pck);
            this.dynamicFields = {};
        }
    }

    public async setAlive() {
        await RedisMgr.getInstance(RedisType.GAME).expire(Role.getRedisKey(this.uid), this.redisKeyExpire);
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

    public getRankValue(rankType: C2S.ERankType): number {
        if (!this.revRankFields.hasOwnProperty(rankType)) {
            throw new Error(rankType + ' rankType, not found in role define');
        }

        return this.fields[this.revRankFields[rankType]];
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