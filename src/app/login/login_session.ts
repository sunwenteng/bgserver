import {UserSession} from '../../lib/net/user_session';
import {Log} from "../../lib/util/log";
import {LoginWorld} from "./login_world";
import * as LoginDB from "../../lib/mysql/login_db";
import {EServerState} from "../../lib/mysql/login_db";
import {realNow} from "../../lib/util/time";
import {S2C} from "../proto/s2c";
import {C2S} from "../proto/c2s";
import {IRpc} from "../game/modles/defines";

const MAX_PACKET_COUNT = 10000;

export class LoginSession extends UserSession {
    passportId: number = 0;
    platformId: number = 0;
    gmAuth: number = 0;
    clientVersion: string = '';
    device: string = '';

    public async update() {
        let packet: IRpc,
            counter = 0,
            cur = this.rpcList.head,
            t;
        while (cur) {
            if (this.rpcList.length > MAX_PACKET_COUNT) {
                Log.sError('packet array length too long, force close socket, uid=%d, ip=%s, length=%d', this.socket.uid, this.socket.ip, this.rpcList.length);
                this.closeSocket();
            }

            packet = cur.element;
            t = cur;
            this.rpcList.deleteNode(t);
            cur = cur.next;

            Log.sInfo('socketUid=%d, name=%s, data=%j', this.socket.uid, packet.msg.constructor.name, packet.msg);

            switch (packet.msg.constructor.name) {
                case 'LOGIN_CS_LOGIN' :
                    await this.handleLogin(packet.msg);
                    break;
                case 'LOGIN_CS_CHOOSE_SERVER':
                    if (!this.passportId) {
                        Log.sInfo('no login, socketUid=', this.socket.uid);
                        break;
                    }
                    await this.handleChooseServer(packet.msg);
                    break;
                case 'LOGIN_CS_GET_SERVER_LIST':
                    if (!this.passportId) {
                        Log.sInfo('no login, socketUid=', this.socket.uid);
                        break;
                    }
                    await this.handleGetServerList();
                    break;
                case 'LOGIN_CS_GET_INFO':
                    await this.handleGetInfo(packet.msg);
                    break;
                case 'LOGIN_CS_QUERY':
                    await this.handleQuery(packet.msg);
                    break;
                case 'CS_ROLE_HEART_BEAT':
                    await this.handleHeartBeat(packet.msg);
                    break;
                default:
                    Log.sError('controller not found, name=%s', packet.msg);
                    break;
            }
            // per loop do 5 packet
            if (++counter > 5) {
                break;
            }

            this.timeLastAlive = realNow();
        }
    }

    public addSessionToWorker(): void {
        LoginWorld.instance.addSession(this);
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

    private isServerAccess(strategyId: number): boolean {
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
                        ret = tmp.indexOf(this.platformId.toString()) !== -1;
                        break;
                    case LoginDB.LoginStrategyType.IP:
                        tmp = condition.value.split(',');
                        for (let j = 0; j < tmp.length; j++) {
                            let patten = tmp[j];
                            if (this.checkIp(this.socket.ip, patten)) {
                                ret = true;
                                break;
                            }
                        }
                        break;
                    case LoginDB.LoginStrategyType.AUTH:
                        ret = this.gmAuth >= parseInt(condition.value);
                        break;
                    case LoginDB.LoginStrategyType.VERSION:
                        ret = this.clientVersion === condition.value;
                        break;
                    case LoginDB.LoginStrategyType.DEVICE:
                        ret = this.device === condition.value;
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

    public async handleLogin(packet: C2S.LOGIN_CS_LOGIN) {
        let pck = S2C.LOGIN_SC_LOGIN.create();
        let sql = 'select passport_id, gm_auth, last_login_server from passport_info where ? and ? and ?',
            lastLoginServer = 0;
        let result = await LoginDB.conn.execute(sql, [{passport: packet.passport}, {platform: packet.platform}, {auth_type: 2}]);

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
                reg_ip: this.socket.ip,
                reg_device: packet.device,
                reg_device_type: packet.deviceType,
                last_login_time: dbTime,
                status: 0,
                last_login_server: 0
            });
            this.passportId = result['insertId'];
            pck.isNew = 1;
        }
        else {
            this.passportId = result[0]['passport_id'];
            this.gmAuth = result[0]['gm_auth'];
            lastLoginServer = result[0]['last_login_server'];
            pck.isNew = 0;
        }
        this.device = packet.device;

        if (!lastLoginServer) {
            let maxServerId = 0;
            for (let key in LoginWorld.instance.serverMap) {
                let server = LoginWorld.instance.serverMap[key];
                if (!server.can_login || !server.alive) {
                    continue;
                }
                if (!this.isServerAccess(server.login_strategy_id)) {
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
                await LoginDB.conn.execute(sql, [{last_login_server: lastLoginServer}, {passport_id: this.passportId}]);
            }
        }
        else {
            Log.sInfo('old passport, allocate server[' + lastLoginServer + ']');
        }

        pck.serverId = lastLoginServer;
        pck.gmAuth = this.gmAuth;
        // this.sendProto(pck);
    }

    public async handleGetServerList() {
        let ret = await LoginDB.conn.execute('select * from re_passport_player where ?', {passport_id: this.passportId});
        let data = {};
        for (let i = 0; i < ret.length; i++) {
            const info = ret[i];
            let reply = await LoginDB.conn.execute('select last_login_time, level from player_info where ?', {role_id: info.role_id});
            if (reply.length === 0) {
                // Log.sError('data in re_passport_player, level not in role, roleId=' + info.role_id + ', passport_id=' + this.passportId);
                continue;
            }
            data[info.server_id] = {
                role_id: info.role_id,
                last_login_time: reply[0].last_login_time,
                level: reply[0].level
            };
        }
        let pck = S2C.LOGIN_SC_GET_SERVER_LIST.create();
        for (let obj in LoginWorld.instance.serverMap) {
            let server: LoginDB.Server = LoginWorld.instance.serverMap[obj];
            if (this.isServerAccess(server.login_strategy_id)) {
                let serverPck: S2C.LOGIN_SC_GET_SERVER_LIST.IServer = {
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
        // this.sendProto(pck);
    }

    public handleGetInfo(packet: C2S.LOGIN_CS_GET_INFO) {
        let platformId = packet.platformId,
            clientVersion = packet.clientVersion,
            notice = '',
            reqVersion = LoginWorld.instance.getNoticeStr(LoginDB.NoticeUseType.PLATFORM_CLIENT_VERSION, LoginDB.NoticeConditionType.PLATFORM, platformId),
            updateAddress = '';

        this.platformId = platformId;
        this.clientVersion = clientVersion;

        let pck = S2C.LOGIN_SC_GET_INFO.create();
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

        // this.sendProto(pck);
    }

    public async handleChooseServer(packet: C2S.LOGIN_CS_CHOOSE_SERVER) {
        let server = LoginWorld.instance.serverMap[packet.serverId];
        if (server) {
            await LoginDB.conn.execute('update passport_info set ? where ?', [{last_login_server: packet.serverId}, {passport_id: this.passportId}]);
            let ret = await LoginDB.conn.execute('select role_id from re_passport_player where ? and ?', [
                {passport_id: this.passportId},
                {server_id_origin: packet.serverId}
            ]);
            let roleId = 0;
            if (ret.length === 0) {
                let dbTime = await LoginDB.getDBTime();
                let result = await LoginDB.conn.execute('insert into re_passport_player set ?', {
                    passport_id: this.passportId,
                    server_id: packet.serverId,
                    server_id_origin: packet.serverId,
                    create_time: dbTime
                });
                roleId = result['insertId'];
            }
            else {
                roleId = ret[0]['role_id'];
            }
            let pck = S2C.LOGIN_SC_CHOOSE_SERVER.create();
            pck.ip = server.ip;
            pck.port = server.port;
            pck.resServerAddress = server.res_server_ip;
            pck.resVersion = server.res_version;
            pck.version = server.version;
            pck.uid = roleId;
            pck.token = '';
            pck.serverId = server.server_id;
            pck.serverName = server.server_name;

            // this.sendProto(pck);
        }
    }

    public async handleQuery(packet: C2S.LOGIN_CS_QUERY) {
        let replyMsg = S2C.LOGIN_SC_QUERY.create();
        do {
            let result = await LoginDB.conn.execute('select server_id from re_passport_player where role_id=' + packet.uid);
            if (result.length === 0) {
                replyMsg.success = false;
                break;
            }

            let server = LoginWorld.instance.serverMap[result[0].server_id];
            replyMsg.ip = server.ip;
            replyMsg.port = server.port;
            replyMsg.state = server.status;
            replyMsg.success = true;
        }
        while (0);
        // this.sendProto(replyMsg);
    }

    public handleHeartBeat(packet: C2S.CS_ROLE_HEART_BEAT) {
        this.timeLastAlive = realNow();
        // this.sendProto(S2C.SC_ROLE_HEART_BEAT.create());
    }
}