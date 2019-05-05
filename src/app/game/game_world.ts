import {UserSession} from '../../lib/net/user_session';
import {LinkedList, ListNode} from '../../lib/util/linked_list';
import * as GameUtil from '../../lib/util/game_util';
import * as fs from 'fs';
import {Log} from "../../lib/util/log";
import {RedisChanel, RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {roleRedisPrefix} from "./modles/role";
import * as events from "events";
import * as time from '../../lib/util/time';
import * as LoginDB from "../../lib/mysql/login_db";
import * as WorldDB from "../../lib/mysql/world_db";
import {
    BMap,
    GlobalKeyType,
    GM_RES_RELOAD_FLAG,
    MSG_ID_ACK_MSG,
    MSG_ID_HEART_BEAT,
    MSG_ID_SESSION_INIT
} from "./modles/defines";
import {realNow} from "../../lib/util/time";
import {GameSession} from "./game_session";
import {createResVersionFile, getResVersion} from "../../lib/util/game_util";
import {IntervalTimer} from "../../lib/util/time";
import {ConfigMgr} from "../../config/data/config_struct";
import {rmAll} from "../../lib/util/game_util";
import {Global} from "../../lib/util/global";
import {Container} from "typedi";
import {BGObject} from "../../lib/util/bg_util";
import {S2C} from "../proto/s2c";
import {C2S} from "../proto/c2s";
import {RoleController} from "./controllers/role_controller";

export enum WorldDataRedisKey {
    GAME_SERVERS = 'hash_game_servers',
    DIRTY_ROLES = 'set_dirty_roles',
    RELOAD_ROLES = 'set_reload_roles',
    DIRTY_GUILDS = 'set_dirty_guilds',
    RELOAD_SERVERS = 'set_reload_roles',
}

class InstanceServerInfo {
    group_id: number = 0;
    instanceId: number = 0;
    proxy_ip: string;
    proxy_port: number;
    ip: string;
    local_ip: string;
    online_num: number = 0;
    port: number;
    res_server_config: string = '';
    res_server_ip: string = '';
    res_version: string = '';
    status: number = 0;
    update_time: number = Date.now();
    version: string;
    res_version_config: string = '';
    open_time: number = realNow();

    constructor(proxy_ip, proxy_port, ip, local_ip, port, version, instance_id, group_id) {
        this.proxy_ip = proxy_ip;
        this.proxy_port = proxy_port;
        this.ip = ip;
        this.local_ip = local_ip;
        this.port = port;
        this.version = version;
        this.instanceId = instance_id;
        this.group_id = group_id;
    }
}

export enum EWorldMsg {
    KICK = 'kick',
    ALL_OFFLINE = 'all_offline',
}

enum EOfflineReason {
    KICK = 1,
    SERVER_CLOSE = 2,
}

async function downloadConfigAndReload(url: string): Promise<boolean> {
    async function doReload(dir: string): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            try {
                ConfigMgr.getInstance().loadAllConfig(dir);
            }
            catch (e) {
                Log.sError(e);
                resolve(false);
            }
            GameWorld.instance.initControllers().then(() => resolve(true)).catch(() => resolve(false));
        });
    }

    return new Promise<boolean>(async (resolve) => {
        let bakDir = './data.bak/';
        Log.sInfo('start download config in bak dir form url=' + url);
        rmAll(bakDir);
        try {
            let files = [];
            for (let k in ConfigMgr.getInstance()) {
                files.push(k + '.json');
            }

            fs.mkdirSync(bakDir);
            for (let file of files) {
                Log.sInfo('start download ' + url + '/' + file + ' save in ' + bakDir + file);
                await GameUtil.httpDownload(url + '/' + file, bakDir + file);
                Log.sInfo('finish download ' + url + '/' + file + ' save in ' + bakDir + file);
            }
            Log.sInfo('finish download config in bak dir form url=' + url);

            Log.sInfo('start reload config');
            let success = await doReload(process.cwd() + '/' + bakDir);
            if (!success) {
                await doReload(process.cwd() + '/' + Global.config['app']['game']['config']);
                Log.sError('downloadConfigAndReload Error, then rollback');
                resolve(false);
            }
            else {
                for (let file of files) {
                    fs.copyFileSync(bakDir + file, Global.config['app']['game']['config'] + file);
                }
                Log.sInfo('finish reload config');
                resolve(true);
            }
        }
        catch (e) {
            await doReload(process.cwd() + '/' + Global.config['app']['game']['config']);
            Log.sError('downloadConfigAndReload Error, then rollback, e=' + e);
            resolve(false);
        }
    });
}

interface IController {
    controller: Function | any;
    action: Function;
}

export class GameWorld extends events.EventEmitter {
    public _isUpdating: boolean;
    public static instance = new GameWorld();
    public info: InstanceServerInfo = null;

    private readonly _sessionList: LinkedList<UserSession> = new LinkedList<UserSession>();
    private readonly _authedSessionMap: BMap<GameSession> = {}; // 玩家上线通过后加入进来
    private readonly _allControllers: BMap<IController> = {};
    private readonly _timer: { [mutex: string]: time.RaceTimer } = {};
    private _updateServerRedis: IntervalTimer = new IntervalTimer(3);
    private _updateServers: IntervalTimer = new IntervalTimer(5);

    public serverMap: { [serverId: number]: LoginDB.Server } = {};

    constructor() {
        super();

        this.on('message', async (channel: string, message: string) => {
            Log.sDebug("sub channel " + channel + ": " + message);
            if (channel === RedisChanel.BROADCAST) {
                let msg = JSON.parse(message);
                switch (msg.data) {
                    case EWorldMsg.ALL_OFFLINE: {
                        if (!msg.serverId) {
                            Log.sInfo('server close, all offline, serverId=' + msg.serverId);
                            let finalData = S2C.SC_ROLE_OFFLINE.create({type: EOfflineReason.SERVER_CLOSE});
                            for (let roleId in this._authedSessionMap) {
                                let session: GameSession = this._authedSessionMap[roleId];
                                if (session.role && session.role.serverId === msg.serverId) {
                                    session.sendProtocol(finalData);
                                    session.closeSocket();
                                    await session.offline();
                                }
                            }
                        }
                        break;
                    }
                    default: {
                        let protoMsg = S2C.Message.fromObject(msg.data),
                            finalData = S2C.Message.encode(protoMsg).finish();
                        for (let roleId in this._authedSessionMap) {
                            let session: GameSession = this._authedSessionMap[roleId];
                            if ((msg.serverId !== 0 && session.role.serverId === msg.serverId) ||
                                (msg.guildId !== 0 && session.role.guildId === msg.guildId) ||
                                (!msg.guildId && !msg.serverId)) {
                                session.socket.send(finalData);
                            }
                        }
                        break;
                    }
                }
            }
            else if (channel.indexOf(roleRedisPrefix) !== -1) {
                let roleId = parseInt(channel.substr(roleRedisPrefix.length + 1));
                let session = this._authedSessionMap[roleId];
                if (!session) {
                    Log.sWarn('role %d not online, message %s', roleId, message);
                    return;
                }
                switch (message) {
                    case EWorldMsg.KICK: {
                        Log.sInfo('role %d online, then kick', roleId);
                        session.sendProtocol(S2C.SC_ROLE_OFFLINE.create({type: EOfflineReason.KICK}));
                        session.closeSocket();
                        await session.offline();
                        break;
                    }
                    default: {
                        let msg = JSON.parse(message);
                        let protoMsg = S2C.Message.fromObject(msg.data);
                        session.socket.send(S2C.Message.encode(protoMsg).finish());
                        break;
                    }
                }
            }
        });
    }

    public async update() {
        this._isUpdating = true;
        // half block mode, async session, sync packet within session
        let cur = this._sessionList.head, t = null, promises = [], now = realNow();
        while (cur) {
            if ((now - cur.element.timeLastAlive) > 180) {
                Log.sWarn('session not alive anymore then close, uid=' + cur.element.socket.uid);
                cur.element.closeSocket();
            }
            if (cur.element.socket.isSocketValid()) {
                promises.push(cur.element.update());
                cur = cur.next;
            }
            else {
                t = cur;
                this.delSession(t);
                await cur.element.offline();
                cur = cur.next;
            }
        }
        await Promise.all(promises);

        if (this._updateServerRedis.passed(now)) {
            this._updateServerRedis.update(now);
            await this.updateServerInfo().catch((e) => {
                Log.sError(e);
            });
        }

        if (this._updateServers.passed(now)) {
            this._updateServers.update(now);
            await this.initServerMap();
        }

        this._isUpdating = false;
    }

    private async initServerMap() {
        this.serverMap = {};
        let result = await LoginDB.conn.execute('select * from gameserver_info');
        for (let server of result) {
            let oldServer = this.serverMap[server.server_id];
            if (oldServer) {
                server.alive = (server.update_time !== oldServer.update_time);
            }
            else {
                server.alive = true;
            }
            this.serverMap[server.server_id] = server;
        }
    }

    public getAction(cmd: string): Function {
        return this._allControllers[cmd].action;
    }

    private registerControllerManual() {
        this._allControllers[MSG_ID_SESSION_INIT] = {
            controller: RoleController,
            action: Container.get(RoleController).online
        };

        this._allControllers[MSG_ID_ACK_MSG] = {
            controller: Container.get(RoleController),
            action: Container.get(RoleController).ackMsg
        };

        this._allControllers[MSG_ID_HEART_BEAT] = {
            controller: Container.get(RoleController),
            action: Container.get(RoleController).heartBeat
        };
    }

    private registerController(): void {
        for (let cmd in C2S.Message.prototype) {
            if (!C2S.Message.prototype.hasOwnProperty(cmd)) {
                continue;
            }
            if (cmd.indexOf('CS') !== -1 && cmd.indexOf('LOGIN_') === -1) {
                let arr = cmd.split('_');
                if (arr.length > 2) {
                    let controllerPath = __dirname + '/controllers/' + arr[1].toLowerCase() + '_controller.js';
                    if (!fs.existsSync(controllerPath)) {
                        Log.sWarn('cmd=' + cmd + ', controller=' + arr[1].toLowerCase() + '_controller not exists');
                    }
                    else {
                        for (let i = 0; i < arr.length; ++i) {
                            if (i > 2) {
                                arr[i] = GameUtil.capitalize(arr[i]);
                            }
                            else {
                                arr[i] = arr[i].toLowerCase();
                            }
                        }
                        const method = arr.slice(2, arr.length).join('');
                        const module = require('./controllers/' + arr[1].toLowerCase() + '_controller');
                        const moduleClass = module[GameUtil.capitalize(arr[1]) + 'Controller'];
                        if (!moduleClass) {
                            Log.sWarn('cmd=' + cmd + ', controller=' + arr[1].toLowerCase() + '_controller not exists');
                        }
                        else if (!moduleClass.prototype[method]) {
                            Log.sWarn('cmd=' + cmd + ', controller=' + arr[1].toLowerCase() + '_controller, method=' + method + ' not exists');
                        }
                        else {
                            if (!Container.has(moduleClass)) {
                                Container.set(moduleClass, new moduleClass());
                            }
                            this._allControllers[cmd] = {
                                controller: Container.get(moduleClass),
                                action: Container.get(moduleClass)[method]
                            };
                        }
                    }
                }
            }
        }

        this.registerControllerManual();
    }

    public async start() {
        this.registerController();
        await this.initServerMap();
        await this.registerServer();
        await this.initControllers();
        await RedisMgr.getInstance(RedisType.GAME).subscribe(RedisChanel.BROADCAST, this);

        // await this.addTimer(this.getServerRedisKey() + '_game_world_update1s', SECOND, async () => {
        //     // await time.sleep(2 * time.SECOND);
        // });
        // await this.addTimer('game_world_update1m', time.MINUTE, async () => {
        // });
        // await this.addTimer('game_world_update1h', time.HOUR, async () => {
        // });
        // await this.addTimer('game_world_update1d', time.DAY, async () => {
        // });
    }

    private async addTimer(mutex: string, interval: number, callback: Function) {
        if (this._timer[mutex]) {
            Log.sError('duplicate timer register in world, mutex=' + mutex);
            throw new Error('duplicate timer register in world, mutex=' + mutex);
        }
        this._timer[mutex] = new time.RaceTimer(mutex, interval, callback);
        await this._timer[mutex].run();
    }

    async checkResVersion(bForce: boolean = false): Promise<string> {
        return new Promise<string>(async resolve => {
            let curResVersion = getResVersion();
            let checkResVersion = this.info.res_version;
            let flagIdx = this.info.res_version.indexOf(GM_RES_RELOAD_FLAG);
            if (flagIdx !== -1) {
                checkResVersion = this.info.res_version.substring(0, flagIdx);
            }
            if (curResVersion !== checkResVersion || bForce) {
                let success = await downloadConfigAndReload(this.info.res_server_ip + checkResVersion);
                if (success) {
                    this.info.res_version = checkResVersion;
                    createResVersionFile(this.info.res_version);
                    Log.sInfo('create resVersion file success, resVersion=' + this.info.res_version);
                    curResVersion = this.info.res_version;
                }
            }
            resolve(curResVersion);
        });
    }

    private async registerServer() {
        this.info = new InstanceServerInfo(
            Global.config['app']['game']['proxy_ip'],
            Global.config['app']['game']['proxy_port'],
            Global.config['app']['game']['ip'],
            Global.config['app']['game']['local_ip'],
            Global.config['app']['game']['port'],
            Global.config['app']['game']['version'],
            Global.config['app']['game']['instanceId'],
            Global.config['app']['game']['group_id']);

        let ret = await LoginDB.conn.execute('select * from gameserver_info where ?', {group_id: this.info.group_id});
        if (ret.length > 0) {
            this.info.res_version = ret[0].res_version;
            this.info.res_server_ip = ret[0].res_server_ip;
            this.info.res_server_config = ret[0].res_server_config;
            this.info.res_version_config = ret[0].res_version_config;
            this.info.status = ret[0].status;
            this.info.open_time = ret[0].open_time;
        }
        else {
            Log.sWarn(`gameserver_info no group_id=${this.info.group_id}, then default server 1`);
            let data = {
                server_id: 1,
                server_name: 'server' + 1,
                ip: this.info.proxy_ip,
                local_ip: this.info.local_ip,
                port: this.info.proxy_port,
                open_time: realNow(),
                update_time: realNow(),
                login_strategy_id: 0,
                group_id: this.info.group_id,
            };
            await LoginDB.conn.execute('insert into gameserver_info set ? on duplicate key update ?', [data, data]);
        }

        await this.checkResVersion();
    }

    // 向redis注册自己的状态，后续可以改成etcd，来做服务发现
    private async updateServerInfo() {
        let key = this.getInstanceRedisKey();
        await RedisMgr.getInstance(RedisType.GAME).lock(key, async () => {
            let needReload = await RedisMgr.getInstance(RedisType.GAME).sismember(WorldDataRedisKey.RELOAD_SERVERS, key);
            if (needReload) {
                let reply = await RedisMgr.getInstance(RedisType.GAME).hmget(WorldDataRedisKey.GAME_SERVERS, [key]);
                let d = JSON.parse(reply[key]);
                for (let k in d) {
                    if (this.info.hasOwnProperty(k)) {
                        this.info[k] = d[k];
                    }
                }
                await RedisMgr.getInstance(RedisType.GAME).srem(WorldDataRedisKey.RELOAD_SERVERS, key);
                Log.sWarn('server need reload, key=%s, data=%j', key, reply);
            }

            this.info.update_time = realNow();
            this.info.res_version = await this.checkResVersion();

            let onlineInfo = {};
            for (let roleId in this._authedSessionMap) {
                let session = this._authedSessionMap[roleId] as GameSession;
                if (session.role) {
                    if (!onlineInfo[session.role.serverId]) {
                        onlineInfo[session.role.serverId] = 0;
                    }
                    ++(onlineInfo[session.role.serverId]);
                }
            }

            let data = [
                key, JSON.stringify({
                    group_id: this.info.group_id,
                    proxy_ip: this.info.proxy_ip,
                    proxy_port: this.info.proxy_port,
                    local_ip: this.info.local_ip,
                    ip: this.info.ip,
                    port: this.info.port,
                    version: this.info.version,
                    res_version: this.info.res_version,
                    res_version_config: this.info.res_version_config,
                    res_server_ip: this.info.res_server_ip,
                    res_server_config: this.info.res_server_config,
                    online_num: JSON.stringify(onlineInfo),
                    status: this.info.status,
                    update_time: this.info.update_time,
                    open_time: this.info.open_time,
                })];
            // Log.sInfo('updateServerInfo, serverId=%d, instanceId=%d', this.info.server_id, this.info.instanceId);
            await RedisMgr.getInstance(RedisType.GAME).hmset(WorldDataRedisKey.GAME_SERVERS, data);
            if (this.info.instanceId !== 0) {
                await RedisMgr.getInstance(RedisType.GAME).setWithParams(key, data[1], 'EX', 3 * 2);
            }
            else {
                await RedisMgr.getInstance(RedisType.GAME).set(key, data[1]);
            }
        });
    }

    public getInstanceRedisKey() {
        return '/server/' + this.info.group_id + '/' + this.info.instanceId + '/' + this.info.ip + '/' + this.info.port;
    }

    public async stop() {
        return new Promise<void>((async (resolve) => {
            let self = this;

            async function doStop() {
                for (let k in self._timer) {
                    self._timer[k].stop();
                }
                await self.allOffline();
            }

            if (this._isUpdating) {
                setTimeout(async () => {
                    GameWorld.instance.stop().then(resolve);
                }, 100);
            }
            else {
                doStop().then(resolve);
            }
        }));
    }

    public async initControllers() {
        let filterStrings = [];
        const configs = ConfigMgr.getInstance().pingbicidb.all();
        for (let k in configs) {
            filterStrings.push(configs[k].NAME);
        }
        GameUtil.initStringChecker();
        GameUtil.buildFilterString(filterStrings);
    }

    private async allOffline() {
        for (let idx in this._authedSessionMap) {
            await this._authedSessionMap[idx].offline();
        }
    }

    public addSession(session: UserSession): void {
        Log.sInfo('add session to world, socketUid=' + session.socket.uid);
        this._sessionList.append(session);
    }

    public delSession(node: ListNode<UserSession>): void {
        Log.sInfo('del session of world, socketUid=' + node.element.socket.uid);
        this._sessionList.deleteNode(node);
    }

    public addAuthedSession(roleId: number, session: GameSession): void {
        this._authedSessionMap[roleId] = session;
    }

    public getAllAuthedSession(): BMap<GameSession> {
        return this._authedSessionMap;
    }

    public delAuthedSession(roleId: number): void {
        delete this._authedSessionMap[roleId];
    }

    public static async sendProtoToRole(roleId: number, msg: any) {
        let proto = S2C.Message.create();
        proto[msg.constructor.name] = msg;
        let data = {data: proto.toJSON()};
        await RedisMgr.getInstance(RedisType.GAME).publish(roleRedisPrefix + '_' + roleId, JSON.stringify(data));
    }

    public static async sendProtoToAll(msg: any) {
        let proto = S2C.Message.create();
        proto[msg.constructor.name] = msg;
        let data = {data: proto.toJSON()};
        await RedisMgr.getInstance(RedisType.GAME).publish(RedisChanel.BROADCAST, JSON.stringify(data));
    }

    public static async sendMsgToServer(msg: EWorldMsg, serverId: number) {
        let data = {serverId: serverId, data: EWorldMsg};
        await RedisMgr.getInstance(RedisType.GAME).publish(RedisChanel.BROADCAST, JSON.stringify(data));
    }

    public static async sendProtoToServer(msg: any, serverId: number) {
        let proto = S2C.Message.create();
        proto[msg.constructor.name] = msg;
        let data = {serverId: serverId, data: proto.toJSON()};
        await RedisMgr.getInstance(RedisType.GAME).publish(RedisChanel.BROADCAST, JSON.stringify(data));
    }

    public static async sendProtoToGuild(msg: any, guildId: number) {
        let proto = S2C.Message.create();
        proto[msg.constructor.name] = msg;
        let data = {guildId: guildId, data: proto.toJSON()};
        await RedisMgr.getInstance(RedisType.GAME).publish(RedisChanel.BROADCAST, JSON.stringify(data));
    }

    public static async isRoleOnline(roleId: number): Promise<boolean> {
        return new Promise<boolean>((async (resolve) => {
            let count = await RedisMgr.getInstance(RedisType.GAME).pubsub('numsub', roleRedisPrefix + '_' + roleId);
            resolve(count > 0);
            if (count > 1) {
                Log.sError(roleRedisPrefix + '_' + roleId + ' fatal error multi channel');
            }
        }));
    }

    public static async kickRole(roleId: number) {
        return new Promise<void>((async (resolve) => {
            await RedisMgr.getInstance(RedisType.GAME).publish(roleRedisPrefix + '_' + roleId, EWorldMsg.KICK);
            check();

            function check() {
                setTimeout(async () => {
                    let online = await GameWorld.isRoleOnline(roleId);
                    if (online) {
                        check();
                    }
                    else {
                        resolve();
                    }
                }, 10);
            }
        }));
    }

    public getController(cmd) {
        return this._allControllers[cmd].controller;
    }

    private async loadGlobalData<T extends BGObject>(serverId: number, globalKey: GlobalKeyType, globalDataType: new () => T): Promise<T> {
        let data = await RedisMgr.getInstance(RedisType.GAME).get(globalKey.redis + '_' + serverId);
        let globalData = new globalDataType();
        if (!data) {
            let ret = await WorldDB.conn.execute('select data from global where server_id=? and key_id= ?',
                [serverId, globalKey.db]);
            if (ret.length === 0) {
                return globalData;
            }
            else if (ret[0].data !== null) {
                globalData.fromObject(JSON.parse(ret[0].data.toString()));
            }
            Log.sInfo(globalKey.db + ' load success');
        }
        else {
            globalData.fromObject(JSON.parse(data));
        }
        return globalData;
    }

    public async loadGlobalDataAndDo<T extends BGObject>(serverOrGroupId: number, globalKey: GlobalKeyType, globalDataType: new () => T, cb: (globalData: T) => void, readonly: boolean = false) {
        if (!globalKey) {
            throw new Error(globalKey + ' not exist');
        }
        let redisKey = globalKey.redis + '_' + serverOrGroupId;
        if (readonly) {
            await cb(await this.loadGlobalData(serverOrGroupId, globalKey, globalDataType));
        }
        else {
            await RedisMgr.getInstance(RedisType.GAME).lock(redisKey, async (hasLock: boolean) => {
                if (hasLock) {
                    await cb(await this.loadGlobalData(serverOrGroupId, globalKey, globalDataType));
                }
            });
        }
    }

    public async saveGlobalData<T extends BGObject>(serverOrGroupId: number, globalKey: GlobalKeyType, globalDataType: new () => T, bForce: boolean = false) {
        if (!globalKey) {
            throw new Error(globalKey + ' not exist');
        }

        let redisKey = globalKey.redis + '_' + serverOrGroupId;
        await RedisMgr.getInstance(RedisType.GAME).lock(redisKey, async (hasLock: boolean) => {
            if (hasLock) {
                let data = await RedisMgr.getInstance(RedisType.GAME).get(redisKey);
                if (data) {
                    await WorldDB.conn.execute('insert into global set ? on duplicate key update ?',
                        [
                            {data: data, key_id: globalKey.db, server_id: serverOrGroupId},
                            {data: data, key_id: globalKey.db, server_id: serverOrGroupId}
                        ]);
                    Log.sInfo(globalKey.db + ' save success');
                }
            }
        }, bForce);
    }

    public getServerOpenTime(serverId): number {
        let server = this.serverMap[serverId];
        if (!server) {
            Log.sError('getServerOpenTime error, serverId not exist, serverId=' + serverId);
            return 0;
        }
        return server.open_time;
    }

    public getServerGroupId(serverId): number {
        let server = this.serverMap[serverId];
        if (!server) {
            Log.sError('getServerOpenTime error, serverId not exist, serverId=' + serverId);
            return 0;
        }
        return server.group_id;
    }

    static getServerChatRedisKey(serverId) {
        return 'list_server_chats_' + serverId;
    }
}