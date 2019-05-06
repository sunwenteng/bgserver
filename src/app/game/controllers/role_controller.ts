import {JsonController} from "routing-controllers";
import {Inject} from "typedi";
import {ResourceService} from "../services/resource_service";
import {BGAction} from "../../../lib/util/descriptor";
import {GameSession} from "../game_session";
import {Zombie} from "../../proto/zombie";
import {ERoleState, Role} from "../modles/role";
import {Log} from "../../../lib/util/log";
import {RedisMgr, RedisType} from "../../../lib/redis/redis_mgr";
import {GameWorld} from "../game_world";
import {Global} from "../../../lib/util/global";
import * as WorldDB from '../../../lib/mysql/world_db';
import * as LoginDB from '../../../lib/mysql/login_db';
import {ERROR_CODE} from "../../../lib/util/error_code";
import {gameNow} from "../../../lib/util/time";

@JsonController('/role')
export class RoleController {

    @Inject()
    resourceService: ResourceService;

    @BGAction()
    async online(session: GameSession, pck: Zombie.Session_Init) {
        let roleId = parseInt(pck.uId);
        let role = new Role(roleId);
        await RedisMgr.getInstance(RedisType.GAME).lock(Role.getRedisKey(role.uid), async () => {
            let isOnline = await GameWorld.isRoleOnline(roleId);
            if (isOnline) {
                await GameWorld.kickRole(roleId);
            }
            let exist = await role.load();
            if (!exist) {
                // auto generate role
                if (Global.config['app']['game']['autoCreateRole']) {
                    // let gender = randInt(0, 2), name = RoleController.instance.randomName(gender),
                    //     iconId = randInt(0, 6);
                    let dbResult = await LoginDB.conn.execute('select server_id from passport_info as p, re_passport_player as r where r.passport_id = p.passport_id and r.role_id=' + roleId);
                    if (dbResult.length !== 1) {
                        Log.uError(role.uid, 'role %d get platform error', roleId);
                        return;
                    }

                    // while (true) {
                    //     let result = await this.checkName(role, name, dbResult[0].server_id);
                    //     if (result) {
                    //         break;
                    //     }
                    //
                    //     name = RoleController.instance.randomName(gender);
                    // }

                    role.serverId = dbResult[0].server_id;

                    await WorldDB.conn.execute('insert into player_name set ?', {
                        uid: role.uid,
                        nickname: name,
                        serverId: dbResult[0].server_id
                    });

                    role._session = session;
                    await role.create(name);
                    await role.notify();
                    await role.save(true, true);
                }
                else {
                    // let pck = S2C.SC_ROLE_ONLINE.create();
                    // pck.result = 0;
                    // session.sendProtocol(pck);
                    return;
                }
            }

            role._session = session;
            if (role.state === ERoleState.forbid) {
                role.sendErrorMsg(ERROR_CODE.COMMON.ROLE_FORBID);
                return;
            }

            let platformId = 0, serverId = 0;
            let dbResult = await LoginDB.conn.execute('select platform, server_id from passport_info as p, re_passport_player as r where r.passport_id = p.passport_id and r.role_id=' + roleId);
            if (dbResult.length !== 1) {
                let testResult = await LoginDB.conn.execute('select passport_id, server_id from re_passport_player where role_id=' + roleId);
                if (testResult.length === 0 || testResult[0].passport_id !== 0) {
                    Log.uError(role.uid, 'role %d get platform error', roleId);
                    return;
                }
                serverId = testResult[0].server_id;
            }
            else {
                platformId = dbResult[0].platform;
                serverId = dbResult[0].server_id;
            }
            role.platformId = platformId;
            role.serverId = serverId;

            // role.loginDevice = pck.;
            // role.loginDeviceType = msg.deviceType;
            // 加这句主要是为了以后修改了vip等级需要的经验的时候 可以根据当前vip等级重新计算vip等级
            // role.addVipExp(0);

            session.role = role;
            await session.online();

            // refresh
            role.refreshDaily(false);
            role.refreshWeekly();
            role.computeCombat();
            // await role.activityModel.tick();
            // role.taskModel.buildTaskIdx();

            // start of send packet
            // TODO
            // end of send packet

            // put it to the end
            // role.sendProtocol(S2C.SC_ROLE_ONLINE.create({result: 1});

            let now = gameNow();
            role._session.timeLastAlive = now;
            role.lastLoginTime = now;
            role.save().catch(e => Log.uError(role.uid, e));
        });
    }

    @BGAction()
    async ackMsg(session: GameSession, pck: Zombie.Ack_Msg) {
        let current = session.ackMsg.head;
        while (current) {
            if (current.element[0] === pck.msgIdx) {
                session.ackMsg.deleteNode(current);
                break;
            }
            current = current.next;
        }
    }

    @BGAction()
    async heartBeat(session: GameSession) {

    }
}