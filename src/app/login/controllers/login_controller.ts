import {Body, Get, JsonController, Post, Req} from "routing-controllers";
import * as uuid from 'uuid';
import {LoginWorld} from "../login_world";
import * as LoginDB from "../../../lib/mysql/login_db";
import {EServerState} from "../../../lib/mysql/login_db";
import {Log} from "../../../lib/util/log";
import {
    CS_CHOOSE_SERVER,
    CS_GET_INFO, CS_GET_SERVER_LIST,
    CS_LOGIN,
    IServer,
    SC_CHOOSE_SERVER,
    SC_GET_INFO,
    SC_GET_SERVER_LIST,
    SC_LOGIN
} from "../dto/login";
import {parseHttpParams} from "../../../lib/util/game_util";
import {RedisMgr, RedisType} from "../../../lib/redis/redis_mgr";

interface ILoginSession {
    platformId?: number;
    clientVersion?: string;
    passportId?: number;
    gmAuth?: number;
    device?: string;
    ip?: string;
}

const LOGIN_SESSION_TTL = 120;

@JsonController('/login')
export class LoginController {

    @Get('/uuid')
    uuid() {
        return uuid.v1();
    }

    private checkIp(ip: string, pattern: string): boolean {
        let ipv6Prefix = '::ffff:';
        let idx = ip.indexOf(ipv6Prefix);
        if (idx !== -1) {
            ip = ip.substr(idx + ipv6Prefix.length);
        }
        let ipArr = ip.split('.');
        if (ipArr.length !== 4) {
            return false;
        }

        let pArr = pattern.split('.');
        if (pArr.length !== 4) {
            return false;
        }

        for (let i = 0; i < ipArr.length; i++) {
            let ipE = ipArr[i];
            if (pArr[i] === '*' || ipE === pArr[i]) {
                continue;
            }
            return false;
        }
        return true;
    }

    private getLoginSessionKey(passportId: number) {
        return 'login_session_' + passportId;
    }

    private isServerAccess(strategyId: number, session: ILoginSession): boolean {
        if (!strategyId) {
            return true;
        }

        let conditions = LoginWorld.instance.loginStrategyMap[strategyId];
        if (!conditions) {
            return false;
        }

        // 同一个conditionId下或，不同与
        for (let conditionId in conditions) {
            let condArr = conditions[conditionId];
            let tmp = [], ret = false;
            for (let i = 0; i < condArr.length; i++) {
                let condition = condArr[i];
                switch (condition.type) {
                    case LoginDB.LoginStrategyType.PLATFORM:
                        tmp = condition.value.split(',');
                        ret = tmp.indexOf(session.platformId.toString()) !== -1;
                        break;
                    case LoginDB.LoginStrategyType.IP:
                        tmp = condition.value.split(',');
                        for (let j = 0; j < tmp.length; j++) {
                            let patten = tmp[j];
                            if (this.checkIp(session.ip, patten)) {
                                ret = true;
                                break;
                            }
                        }
                        break;
                    case LoginDB.LoginStrategyType.AUTH:
                        ret = session.gmAuth >= parseInt(condition.value);
                        break;
                    case LoginDB.LoginStrategyType.VERSION:
                        ret = session.clientVersion === condition.value;
                        break;
                    case LoginDB.LoginStrategyType.DEVICE:
                        ret = session.device === condition.value;
                        break;
                    default:
                        Log.sError('error condition type=' + condition.type);
                        break;
                }

                ret = condition.is_not ? !ret : ret;
                if (ret) {
                    break;
                }
            }

            if (!ret) {
                return false;
            }
        }

        return true;
    }

    @Post('/login')
    public async handleLogin(@Body() packet: CS_LOGIN, @Req() req): Promise<SC_LOGIN> {
        let session: ILoginSession = {};
        let pck = new SC_LOGIN();
        let sql = 'select passport_id, gm_auth, last_login_server from passport_info where ? and ? and ?',
            lastLoginServer = 0;
        let result = await LoginDB.conn.execute(sql, [{passport: packet.passport}, {platform: packet.platform}, {auth_type: 2}]);

        let ip = parseHttpParams(req)['IP'];

        if (result.length === 0) {
            let dbTime = await LoginDB.getDBTime();
            let insertSql = "insert into passport_info set ?";
            result = await LoginDB.conn.execute(insertSql, {
                passport: packet.passport,
                platform: packet.platform,
                auth_type: 2,
                pwd: '',
                mail: '',
                uid: packet.deviceUid,
                token: packet.deviceToken,
                create_time: dbTime,
                gm_auth: 0,
                reg_ip: ip,
                reg_device: packet.device,
                reg_device_type: packet.deviceType,
                last_login_time: dbTime,
                status: 0,
                last_login_server: 0
            });
            session.passportId = result['insertId'];
            pck.isNew = 1;
        }
        else {
            session.passportId = result[0]['passport_id'];
            session.gmAuth = result[0]['gm_auth'];
            lastLoginServer = result[0]['last_login_server'];
            pck.isNew = 0;
        }

        pck.passportId = session.passportId;
        session.device = packet.device;
        session.ip = ip;

        if (!lastLoginServer) {
            let maxServerId = 0;
            for (let key in LoginWorld.instance.serverMap) {
                let server = LoginWorld.instance.serverMap[key];
                if (!server.can_login || !server.alive) {
                    continue;
                }
                if (!this.isServerAccess(server.login_strategy_id, session)) {
                    continue;
                }

                if (maxServerId < server.server_id) {
                    maxServerId = server.server_id;
                }
            }

            if (maxServerId) {
                lastLoginServer = maxServerId;
                Log.sInfo('new passport, allocate server[' + lastLoginServer + ']');
                let sql = 'update passport_info set ? where ?';
                await LoginDB.conn.execute(sql, [{last_login_server: lastLoginServer}, {passport_id: session.passportId}]);
            }
        }
        else {
            Log.sInfo('old passport, allocate server[' + lastLoginServer + ']');
        }

        pck.serverId = lastLoginServer;
        pck.gmAuth = session.gmAuth;

        await RedisMgr.getInstance(RedisType.GAME).set(this.getLoginSessionKey(session.passportId), JSON.stringify(session));
        await RedisMgr.getInstance(RedisType.GAME).expire(this.getLoginSessionKey(session.passportId), LOGIN_SESSION_TTL);
        return pck;
    }

    @Post('/getServerList')
    public async handleGetServerList(@Body() packet: CS_GET_SERVER_LIST): Promise<SC_GET_SERVER_LIST> {
        let session: ILoginSession = JSON.parse(await RedisMgr.getInstance(RedisType.GAME).get(this.getLoginSessionKey(packet.passportId)));
        if (!session) {
            Log.sError(`session expired or no session, login first, passportId=${packet.passportId}`);
            return null;
        }

        let ret = await LoginDB.conn.execute('select * from re_passport_player where ?', {passport_id: session.passportId});
        let data = {};
        for (let i = 0; i < ret.length; i++) {
            const info = ret[i];
            let reply = await LoginDB.conn.execute('select last_login_time, level from player_info where ?', {role_id: info.role_id});
            if (reply.length === 0) {
                Log.sError('data in re_passport_player, level not in role, roleId=' + info.role_id + ', passport_id=' + session.passportId);
                continue;
            }
            data[info.server_id] = {
                role_id: info.role_id,
                last_login_time: reply[0].last_login_time,
                level: reply[0].level
            };
        }
        let pck = new SC_GET_SERVER_LIST();
        pck.servers = [];
        for (let obj in LoginWorld.instance.serverMap) {
            let server: LoginDB.Server = LoginWorld.instance.serverMap[obj];
            if (this.isServerAccess(server.login_strategy_id, session)) {
                let serverPck: IServer = {
                    serverId: server.server_id,
                    name: server.server_name,
                    status: server.alive ? server.status : EServerState.maintain
                };
                if (data[server.server_id]) {
                    serverPck.lastLoginTime = data[server.server_id].last_login_time;
                    serverPck.level = data[server.server_id].level;
                }
                pck.servers.push(serverPck);
            }
        }
        return pck;
    }

    @Post('/getInfo')
    public async handleGetInfo(@Body() packet: CS_GET_INFO): Promise<SC_GET_INFO> {
        let platformId = packet.platformId,
            clientVersion = packet.clientVersion,
            notice = '',
            reqVersion = LoginWorld.instance.getNoticeStr(LoginDB.NoticeUseType.PLATFORM_CLIENT_VERSION, LoginDB.NoticeConditionType.PLATFORM, platformId),
            updateAddress = '';

        let pck = new SC_GET_INFO();
        if (reqVersion !== '' && reqVersion !== clientVersion) {
            updateAddress = LoginWorld.instance.getNoticeStr(LoginDB.NoticeUseType.UPDATE_ADDR, LoginDB.NoticeConditionType.PLATFORM, platformId);
            pck.notice = '';
            pck.version = reqVersion;
            pck.updateAddress = updateAddress;
        }
        else {
            notice = LoginWorld.instance.getNoticeStr(LoginDB.NoticeUseType.LOGIN, LoginDB.NoticeConditionType.PLATFORM, platformId);
            pck.notice = notice;
            pck.version = reqVersion;
            pck.updateAddress = '';
        }

        return pck;
    }

    @Post('/chooseServer')
    public async handleChooseServer(@Body() packet: CS_CHOOSE_SERVER): Promise<SC_CHOOSE_SERVER> {
        let session: ILoginSession = JSON.parse(await RedisMgr.getInstance(RedisType.GAME).get('login_session_' + packet.passportId));
        if (!session) {
            Log.sError(`session expired or no session, login first, passportId=${packet.passportId}`);
            return null;
        }

        let server = LoginWorld.instance.serverMap[packet.serverId];
        if (server) {
            await LoginDB.conn.execute('update passport_info set ? where ?', [{last_login_server: packet.serverId}, {passport_id: session.passportId}]);
            let ret = await LoginDB.conn.execute('select role_id from re_passport_player where ? and ?', [
                {passport_id: session.passportId},
                {server_id_origin: packet.serverId}
            ]);
            let roleId = 0;
            if (ret.length === 0) {
                let dbTime = await LoginDB.getDBTime();
                let result = await LoginDB.conn.execute('insert into re_passport_player set ?', {
                    passport_id: session.passportId,
                    server_id: packet.serverId,
                    server_id_origin: packet.serverId,
                    create_time: dbTime
                });
                roleId = result['insertId'];
            }
            else {
                roleId = ret[0]['role_id'];
            }

            let pck = new SC_CHOOSE_SERVER();
            pck.ip = server.ip;
            pck.port = server.port;
            pck.resServerAddress = server.res_server_ip;
            pck.resVersion = server.res_version;
            pck.version = server.version;
            pck.uid = roleId;
            pck.token = '';
            pck.serverId = server.server_id;
            pck.serverName = server.server_name;
            return pck;
        }
        else {
            Log.sError(`no selected server, serverId=${packet.serverId}`);
            return null;
        }
    }
}