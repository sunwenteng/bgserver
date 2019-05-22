import {LinkedList, ListNode} from '../../lib/util/linked_list';
import {Log} from "../../lib/util/log";
import * as LoginDB from "../../lib/mysql/login_db";
import {realNow} from "../../lib/util/time";
import {IntervalTimer} from "../../lib/util/time";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {SECOND} from "../game/modles/defines";
import {WorldDataRedisKey} from "../game/game_world";
import * as time from "../../lib/util/time";
import {LoginSession} from "./login_session";

export class LoginWorld {
    public _isUpdating: boolean;
    public static instance: LoginWorld = new LoginWorld();
    private readonly _sessionList: LinkedList<LoginSession> = new LinkedList();

    updateInfo: IntervalTimer = new IntervalTimer(20);

    serverMap: { [serverId: number]: LoginDB.Server } = {};
    loginStrategyMap: { [loginStrategyId: number]: { [conditionId: number]: LoginDB.LoginStrategyCondition[] } } = {};
    noticeInfoArr: LoginDB.LoginNoticeInfo[] = [];

    private readonly _timer: { [mutex: string]: time.RaceTimer } = {};

    constructor() {
    }

    public async update() {
        this._isUpdating = true;
        // half block mode, async session, sync packet within session
        let cur = this._sessionList.head, t = null, now = realNow();
        let promises = [];
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
                cur = cur.next;
            }
        }
        await Promise.all(promises);

        if (this.updateInfo.passed(now)) {
            this.updateInfo.update(now);
            let dbTime = await LoginDB.getDBTime();
            let result = await LoginDB.conn.execute("select * from notice_info_v2 where start_time < " + dbTime + " and end_time > " + dbTime);
            if (result.length !== 0) {
                this.noticeInfoArr = result;
            }

            result = await LoginDB.conn.execute('select * from gameserver_info');
            for (let server of result) {
                let oldServer = this.serverMap[server.server_id];
                if (oldServer) {
                    server.alive = (server.update_time !== oldServer.update_time);
                }
                else if ((now - server.update_time) < 20) {
                    server.alive = true;
                }
                else {
                    server.alive = false;
                }
                this.serverMap[server.server_id] = server;
            }

            this.loginStrategyMap = {};
            result = await LoginDB.conn.execute('select strategy_id, condition_id, type, value, is_not from login_strategy');
            for (let i = 0; i < result.length; i++) {
                let obj = result[i];
                if (!this.loginStrategyMap[obj['strategy_id']]) {
                    this.loginStrategyMap[obj['strategy_id']] = {};
                }
                if(!this.loginStrategyMap[obj['strategy_id']][obj['condition_id']]) {
                    this.loginStrategyMap[obj['strategy_id']][obj['condition_id']] = [];
                }
                this.loginStrategyMap[obj['strategy_id']][obj['condition_id']].push({
                    type: obj.type,
                    value: obj.value,
                    is_not: obj.is_not
                });
            }
        }
        this._isUpdating = false;
    }

    private async addTimer(mutex: string, interval: number, callback: Function) {
        if (this._timer[mutex]) {
            Log.sError('duplicate timer register in world, mutex=' + mutex);
            throw new Error('duplicate timer register in world, mutex=' + mutex);
        }
        this._timer[mutex] = new time.RaceTimer(mutex, interval, callback);
        await this._timer[mutex].run();
    }

    public async start() {
        await this.addTimer('update_login', 15 * SECOND, async () => {
            let instances = await RedisMgr.getInstance(RedisType.GAME).hgetall(WorldDataRedisKey.GAME_SERVERS);
            let now = realNow();
            let data = {}, idx = {};
            let result = await LoginDB.conn.execute('select server_id, group_id, update_time from gameserver_info');
            for (let i of result) {
                data[i.server_id] = {
                    server_id: i.server_id,
                    group_id: i.group_id,
                    update_time: i.update_time,
                    online_num: 0,
                    need_update: false,
                };

                if (!idx[i.group_id]) {
                    idx[i.group_id] = {};
                }
                idx[i.group_id][i.server_id] = '';
            }

            if (instances) {
                for (let key in instances) {
                    let detail = JSON.parse(instances[key]);
                    // 每一个实例每3s更新redis一次
                    if ((now - detail.update_time) > 3 * 2) {
                        continue;
                    }

                    let serverIds = idx[detail.group_id];
                    if (serverIds) {
                        for (let serverId in serverIds) {
                            let server = data[serverId];
                            if (!server) {
                                continue;
                            }

                            server.update_time = now;
                            server.need_update = true;
                        }
                    }

                    let d = JSON.parse(detail.online_num);
                    for (let serverId in d) {
                        let server = data[serverId];
                        if (!server) {
                            continue;
                        }

                        server.online_num += d[serverId];
                    }
                }

                for (let i in data) {
                    let server = data[i];
                    if (server.need_update) {
                        await LoginDB.conn.execute('update gameserver_info set ? where ?', [{
                            update_time: server.update_time,
                            online_num: server.online_num
                        }, {server_id: server.server_id}]);
                    }
                }
            }
        });
    }

    public async stop() {
        return new Promise<void>((async (resolve) => {
            if (this._isUpdating) {
                setTimeout(async () => {
                    LoginWorld.instance.stop().then(resolve);
                }, 100);
            }
            else {
                resolve();
            }
        }));
    }

    public addSession(session: LoginSession): void {
        Log.sInfo('add session to world, socketUid=' + session.socket.uid);
        this._sessionList.append(session);
    }

    public delSession(node: ListNode<LoginSession>): void {
        Log.sInfo('del session of world, socketUid=' + node.element.socket.uid);
        this._sessionList.deleteNode(node);
    }

    public getNoticeStr(useType: LoginDB.NoticeUseType, condType: LoginDB.NoticeConditionType, condValue: number): string {
        let ret = '';
        for (let i = 0; i < this.noticeInfoArr.length; i++) {
            let notice = this.noticeInfoArr[i];
            if (notice.use_type === useType && notice.condition_type === condType && notice.condition_value === condValue) {
                ret += notice.content;
            }
        }
        return ret;
    }
}