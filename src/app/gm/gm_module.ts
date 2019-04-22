import * as LoginDB from '../../lib/mysql/login_db';
import {EGoodsState} from '../../lib/mysql/login_db';
import * as GmMgr from './gm_mgr';
import * as GmStruct from './gm_struct';
import {GM_COMMAND_TARGET_TYPE} from './gm_struct';
import {EWorldMsg, GameWorld, WorldDataRedisKey} from "../game/game_world";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {ERoleState, Role} from "../game/modles/role";
import {Log} from "../../lib/util/log";
import {C2S, S2C} from "../proto/cmd";
import {realNow} from "../../lib/util/time";
import {GM_RES_RELOAD_FLAG} from "../game/modles/defines";
import {
    ConfigMgr,
    recharge_productDBMgr
} from "../../config/data/config_struct";
import {EChargeState} from "../../lib/mysql/login_db";
import {EChargeType} from "../../lib/mysql/login_db";
import EChatChannel = C2S.CS_ROLE_CHAT.EChatChannel;

export class set_server_name extends GmStruct.GmCommand {
    private serverName: string;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(1) || this.target_type !== GM_COMMAND_TARGET_TYPE.SERVER) {
                resolve(false);
            }
            else {
                this.serverName = this.paramArr[0];
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            await LoginDB.conn.execute('update gameserver_info set ? where ?', [{server_name: this.serverName}, {server_id: this.target_id}]);
            resolve(true);
        });
    }
}

export class set_client_version extends GmStruct.GmCommand {
    private clientVersion: string;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(1) || this.target_type !== GM_COMMAND_TARGET_TYPE.SERVER) {
                resolve(false);
            }
            else {
                this.clientVersion = this.paramArr[0];
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            let instances = await RedisMgr.getInstance(RedisType.GAME).hgetall(WorldDataRedisKey.GAME_SERVERS);
            if (instances) {
                for (let key in instances) {
                    let arr = key.split('_');
                    let serverId = parseInt(arr[1]);
                    if (serverId === this.target_id) {
                        await RedisMgr.getInstance(RedisType.GAME).lock(key, async () => {
                            let detail = JSON.parse(instances[key]);
                            detail.res_version_config = this.clientVersion;
                            await RedisMgr.getInstance(RedisType.GAME).hmset(WorldDataRedisKey.GAME_SERVERS, [key, JSON.stringify(detail)]);
                            await RedisMgr.getInstance(RedisType.GAME).sadd(WorldDataRedisKey.RELOAD_SERVERS, key);
                        });
                    }
                }
            }
            resolve(true);
        });
    }
}

export class insert_or_update_goods_info extends GmStruct.GmCommand {
    private data: any;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(1) || this.target_type !== GM_COMMAND_TARGET_TYPE.SERVER) {
                resolve(false);
            }
            else {
                try {
                    this.data = JSON.parse(this.paramArr[0]);
                    resolve(true);
                }
                catch (e) {
                    Log.sError(e);
                    resolve(false);
                }
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            try {
                ConfigMgr.getInstance().recharge_productdb = new recharge_productDBMgr();
                ConfigMgr.getInstance().recharge_productdb.load(this.data);
                await LoginDB.conn.execute('delete from goods_info where server_id=' + this.target_id);
                const configs = ConfigMgr.getInstance().recharge_productdb.all();
                for (let id in configs) {
                    const config = configs[id];
                    await LoginDB.conn.execute('insert into goods_info set ?',
                        {
                            server_id: this.target_id,
                            goods_id: config.ID,
                            shop_type: 0,
                            buy_content_id: config.Id,
                            buy_type_id: config.Id,
                            buy_count: 1,
                            cost_type_id: config.Currency === 'CNY' ? 11 : (config.Currency === 'USD' ? 12 : 0),
                            cost_content_id: 0,
                            cost_count: config.Money,
                            cost_count_old: 0,
                            status: EGoodsState.E_GOODS_STATE_ON_SALE,
                            limit_day: 0,
                            sort_idx: config.ID,
                            icon_id: config.IconPath,
                            goods_name: config.Text_Name,
                            description: config.Text_Name,
                            limit_once: 0,
                            platform_type: config.PlatformId,
                            platform_goods_id: config.Id,
                        });
                }
                resolve(true);
            }
            catch (e) {
                Log.sError(e);
                resolve(false);
            }
        });
    }
}

export class set_server_state extends GmStruct.GmCommand {
    private state: number;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(1) || this.target_type !== GM_COMMAND_TARGET_TYPE.SERVER) {
                resolve(false);
            }
            else {
                this.state = parseInt(this.paramArr[0]);
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            await GameWorld.sendMsgToServer(EWorldMsg.ALL_OFFLINE, this.target_id);
            await LoginDB.conn.execute('update gameserver_info set ? where ?', [{status: this.state}, {server_id: this.target_id}]);
            resolve(true);
        });
    }
}

export class set_login_strategy extends GmStruct.GmCommand {
    private id;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(1) || this.target_type !== GM_COMMAND_TARGET_TYPE.SERVER) {
                resolve(false);
            }
            else {
                this.id = parseInt(this.paramArr[0]);
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            await LoginDB.conn.execute('update gameserver_info set ? where ?', [{login_strategy_id: this.id}, {server_id: this.target_id}]);
            resolve(true);
        });
    }
}

export class set_res_version extends GmStruct.GmCommand {
    private resVersion: string;
    private groupId: number;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(2) || this.target_type !== GM_COMMAND_TARGET_TYPE.SERVER) {
                resolve(false);
            }
            else {
                this.resVersion = this.paramArr[0];
                this.groupId = parseInt(this.paramArr[1]);
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            let instances = await RedisMgr.getInstance(RedisType.GAME).hgetall(WorldDataRedisKey.GAME_SERVERS);
            if (instances) {
                let now = realNow();
                let aliveServer = [];
                for (let key in instances) {
                    let detail = JSON.parse(instances[key]);
                    if ((now - detail.update_time) > 30) {
                        continue;
                    }
                    let group_id = detail.group_id;
                    if (group_id === this.groupId) {
                        await RedisMgr.getInstance(RedisType.GAME).lock(key, async () => {
                            detail.res_version = this.resVersion + GM_RES_RELOAD_FLAG;
                            await RedisMgr.getInstance(RedisType.GAME).hmset(WorldDataRedisKey.GAME_SERVERS, [key, JSON.stringify(detail)]);
                            aliveServer.push(key);
                            await RedisMgr.getInstance(RedisType.GAME).sadd(WorldDataRedisKey.RELOAD_SERVERS, key);
                        });
                    }
                }

                if (aliveServer.length > 0) {
                    let retryTimes = 0;
                    let self = this;

                    function check(groupId: number) {
                        setTimeout(async () => {
                            let ready = true;
                            let serverInstances = await RedisMgr.getInstance(RedisType.GAME).hmget(WorldDataRedisKey.GAME_SERVERS, aliveServer);
                            for (let key in serverInstances) {
                                let detail = JSON.parse(serverInstances[key]);
                                if (detail.res_version !== self.resVersion) {
                                    ready = false;
                                }
                            }
                            console.log(retryTimes);
                            if (!ready && retryTimes++ < 20) {
                                check(groupId);
                            }
                            else {
                                if (!ready) {
                                    self.errMsg = 'expired time';
                                }
                                else {
                                    let result = await LoginDB.conn.execute('select server_id from gameserver_info where ?', {group_id: groupId});
                                    for (let r of result) {
                                        await LoginDB.conn.execute('update gameserver_info set ? where ?', [{res_version: self.resVersion}, {server_id: r.server_id}]);
                                    }
                                }

                                resolve(ready);
                            }
                        }, 3000);
                    }

                    check(this.groupId);
                }
                else {
                    this.errMsg = 'no alive server instances';
                    resolve(false);
                }
            }
            else {
                this.errMsg = 'no server instances';
                resolve(false);
            }
        });
    }
}

export class set_gm_auth extends GmStruct.GmCommand {
    private gmAuth;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(1) || this.target_type !== GM_COMMAND_TARGET_TYPE.ROLE) {
                resolve(false);
            }
            else {
                this.gmAuth = parseInt(this.paramArr[0]);
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            await RedisMgr.getInstance(RedisType.GAME).lock(Role.getRedisKey(this.target_id), async () => {
                let role = new Role(this.target_id);
                let exist = await role.load();
                if (!exist) {
                    this.errMsg = 'role not found, id=' + this.target_id;
                    resolve(false);
                }
                else {
                    role.gmAuth = this.gmAuth;
                    await role.save();
                    await LoginDB.conn.execute('update player_info set ? where ?', [{gm_auth: this.gmAuth}, {role_id: this.target_id}]);
                    await LoginDB.conn.execute('update passport_info p inner join re_passport_player rpp on p.passport_id = rpp.passport_id set ? where ?',
                        [{gm_auth: this.gmAuth}, {role_id: this.target_id}]);
                    resolve(true);
                }
            });
        });
    }
}

export class cancel_gm_command extends GmStruct.GmCommand {
    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(1)) {
                resolve(false);
            }
            else {
                let gmAutoId = parseInt(this.paramArr[0]);
                if (!GmMgr.hasGmCommand(gmAutoId)) {
                    this.errMsg = 'command not found, autoId=' + gmAutoId;
                    resolve(false);
                }
                else {
                    resolve(await GmMgr.cancelGmCommand(gmAutoId));
                }
            }
        });
    }
}

export class set_role_status extends GmStruct.GmCommand {
    private roleState: number;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(1) || this.target_type !== GM_COMMAND_TARGET_TYPE.ROLE) {
                resolve(false);
            }
            else {
                this.roleState = parseInt(this.paramArr[0]);
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            await RedisMgr.getInstance(RedisType.GAME).lock(Role.getRedisKey(this.target_id), async () => {
                let role = new Role(this.target_id);
                let exist = await role.load();
                if (!exist) {
                    this.errMsg = 'role not found, id=' + this.target_id;
                    resolve(false);
                }
                else {
                    role.state = this.roleState;
                    await role.save();
                    if (role.state === ERoleState.forbid) {
                        await GameWorld.kickRole(role.uid);
                    }
                    resolve(true);
                }
            });
        });
    }
}

export class set_role_status_by_ip extends GmStruct.GmCommand {
    private ip: string;
    private state: number;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(2)) {
                resolve(false);
            }
            else {
                this.ip = this.paramArr[1];
                this.state = parseInt(this.paramArr[0]);
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            let results = await LoginDB.conn.execute('select p.role_id from player_info p, re_passport_player r, passport_info s where p.role_id = r.role_id and s.passport_id = r.passport_id and ?', {"s.reg_ip": this.ip});
            for (let r of results) {
                let uid = r.role_id;
                await RedisMgr.getInstance(RedisType.GAME).lock(Role.getRedisKey(uid), async () => {
                    let role = new Role(uid);
                    let exist = await role.load();
                    if (!exist) {
                        this.errMsg = 'role not found, id=' + uid;
                        return;
                    }
                    else {
                        role.state = this.state;
                        await role.save();
                        if (role.state === ERoleState.forbid) {
                            await GameWorld.kickRole(role.uid);
                        }
                        Log.sInfo('set_role_status_by_ip, uid=' + uid + ', state=' + this.state);
                    }
                });
            }

            let params = {ip: this.ip, status: this.state};
            results = await LoginDB.conn.execute('select * from ip_status where ?', {ip: this.ip});
            if (results.length === 0) {
                await LoginDB.conn.execute('insert into ip_status set ?', params);
            }
            else {
                await LoginDB.conn.execute('update ip_status set ?', params);
            }
            resolve(true);
        });
    }
}

export class set_res_server_ip extends GmStruct.GmCommand {
    private resServerIp: string;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(1) || this.target_type !== GM_COMMAND_TARGET_TYPE.SERVER) {
                resolve(false);
            }
            else {
                this.resServerIp = this.paramArr[0];
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            let instances = await RedisMgr.getInstance(RedisType.GAME).hgetall(WorldDataRedisKey.GAME_SERVERS);
            if (instances) {
                for (let key in instances) {
                    let arr = key.split('_');
                    let serverId = parseInt(arr[1]);
                    if (serverId === this.target_id) {
                        await RedisMgr.getInstance(RedisType.GAME).lock(key, async () => {
                            let detail = JSON.parse(instances[key]);
                            detail.res_server_ip = this.resServerIp;
                            await RedisMgr.getInstance(RedisType.GAME).hmset(WorldDataRedisKey.GAME_SERVERS, [key, JSON.stringify(detail)]);
                            await RedisMgr.getInstance(RedisType.GAME).sadd(WorldDataRedisKey.RELOAD_SERVERS, key);
                        });
                    }
                }
            }
            await LoginDB.conn.execute('update gameserver_info set ? where ?', [{res_server_ip: this.resServerIp}, {server_id: this.target_id}]);
            resolve(true);
        });
    }
}

export class set_is_recommend extends GmStruct.GmCommand {
    private isRecommend: number;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(1) || this.target_type !== GM_COMMAND_TARGET_TYPE.SERVER) {
                resolve(false);
            }
            else {
                this.isRecommend = parseInt(this.paramArr[0]);
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            await LoginDB.conn.execute('update gameserver_info set ? where ?', [{is_recommend: this.isRecommend}, {server_id: this.target_id}]);
            resolve(true);
        });
    }
}

export class set_server_open_time extends GmStruct.GmCommand {
    private openTime;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(1) || this.target_type !== GM_COMMAND_TARGET_TYPE.SERVER) {
                resolve(false);
            }
            else {
                this.openTime = Math.floor(parseInt(this.paramArr[0]) / 1000);
                Log.sInfo(`${this.paramArr[0]} ${this.openTime}`);
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            await LoginDB.conn.execute('update gameserver_info set ? where ?', [{open_time: this.openTime}, {server_id: this.target_id}]);
            resolve(true);
        });
    }
}

export class broadcast extends GmStruct.GmCommand {
    timeLastUpdate: number;
    content: string;
    interval: number;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(2) || this.target_type !== GM_COMMAND_TARGET_TYPE.SERVER) {
                resolve(false);
            }
            else {
                this.content = this.paramArr[0];
                this.interval = parseInt(this.paramArr[1]);
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            this.timeLastUpdate = 0;
            resolve(true);
        });
    }

    tick(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            let now = realNow();
            if ((now - this.timeLastUpdate) > this.interval) {
                this.timeLastUpdate = now;
                await GameWorld.sendProtoToServer(S2C.SC_UPDATE_CHAT.create({
                    msgs: [S2C.SC_UPDATE_CHAT.ChatMsg.create({
                        roleId: 1,
                        msg: this.content,
                        createTime: now,
                        channel: EChatChannel.broadcast,
                    })]
                }), this.target_id);
            }
            resolve(true);
        });
    }
}

/**
 * [id,subId,count]
 * @param {string} str
 * @returns {S2C.IReward[]}
 */
function parseReward(str: string): S2C.IReward[] {
    try {
        let ret: S2C.IReward[] = [];
        let data = JSON.parse(str);
        for (let a of data) {
            if (!(a instanceof Array) || a.length !== 3) {
                return null;
            }
            let type = parseInt(a[0]), subType = parseInt(a[1]), value = parseInt(a[2]);
            if (!type || !subType || !value) {
                Log.sInfo('parseReward failed, str=' + str);
                return null;
            }
            Log.sInfo('%d %d %d', type, subType, value);
            ret.push({type: type, id: subType, value: value});
        }
        return ret;
    }
    catch (e) {
        Log.sError(e);
        return null;
    }
}

export class create_server extends GmStruct.GmCommand {
    serverId: number;
    ip: string;
    port: number;
    groupId: number;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(3) || this.target_type !== GM_COMMAND_TARGET_TYPE.SERVER) {
                resolve(false);
            }
            else {
                this.serverId = parseInt(this.paramArr[0]);
                this.ip = this.paramArr[1];
                this.port = parseInt(this.paramArr[2]);
                this.groupId = parseInt(this.paramArr[3]);
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            let data = {
                server_id: this.serverId,
                server_name: 'server' + this.serverId,
                ip: this.ip,
                port: this.port,
                open_time: realNow(),
                login_strategy_id: 255,
                group_id: this.groupId
            };
            await LoginDB.conn.execute('insert into gameserver_info set ? on duplicate key update ?', [data, data]);
            resolve(true);
        });
    }
}

export class role_copy extends GmStruct.GmCommand {
    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(1) || this.target_type !== GM_COMMAND_TARGET_TYPE.ROLE) {
                resolve(false);
            }
            else {
                let role = new Role(this.target_id);
                let serverId = parseInt(this.paramArr[0]);
                let exist = await role.load();
                if (!exist) {
                    this.errMsg = 'role not found, id=' + this.target_id;
                    resolve(false);
                }
                else {
                    let dbTime = await LoginDB.getDBTime();
                    let result = await LoginDB.conn.execute('insert into re_passport_player set ?', {
                        passport_id: 0,
                        server_id: serverId,
                        server_id_origin: serverId,
                        create_time: dbTime
                    });
                    let newRoleId = result['insertId'];
                    role.uid = newRoleId;
                    role.guildId = 0;
                    role.serverId = serverId;
                    await role.save(true, true);
                    this.errMsg = newRoleId;
                    resolve(true);
                }
            }
        });
    }
}

export class add_recharge extends GmStruct.GmCommand {
    private goodsId: number;
    private platformId: number;

    validate(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.assertParamNum(2) || this.target_type !== GM_COMMAND_TARGET_TYPE.ROLE) {
                resolve(false);
            }
            else {
                this.goodsId = parseInt(this.paramArr[0]);
                this.platformId = parseInt(this.paramArr[1]);
                resolve(true);
            }
        });
    }

    trigger(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            await RedisMgr.getInstance(RedisType.GAME).lock(Role.getRedisKey(this.target_id), async () => {
                let role = new Role(this.target_id);
                let exist = await role.load();
                if (!exist) {
                    this.errMsg = 'role not found, id=' + this.target_id;
                    resolve(false);
                }
                else {
                    await LoginDB.conn.execute('insert into charge_info set ?', {
                        role_id: this.target_id,
                        goods_id: this.goodsId,
                        goods_quantity: 1,
                        payment_time: realNow(),
                        state: EChargeState.paied,
                        type: EChargeType.test,
                        addition2: this.platformId.toString()
                    });
                    resolve(true);
                }
            });
        });
    }
}