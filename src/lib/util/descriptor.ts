import {Log} from "./log";
import {Role} from "../../app/game/modles/role";
import {RedisMgr, RedisType} from "../redis/redis_mgr";
import {WorldDataRedisKey} from "../../app/game/game_world";
import {EActionCheckType, EMysqlValueType} from "../../app/game/modles/defines";
import {Global} from "./global";
import {Container} from "typedi";

/**
 * 类函数装饰器，计算函数执行是
 * @param {boolean} bToLog
 * @returns {(target: Object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) => void}
 */
export function execTime(bToLog: boolean = true) {
    return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) => {
        let originalMethod = descriptor.value;
        descriptor.value = async function (...args) {
            let start = Date.now();
            let returnValue = null;
            if (Object.prototype.toString.call(originalMethod) === "[object AsyncFunction]") {
                returnValue = await originalMethod.apply(this, args);
            }
            else {
                returnValue = originalMethod.apply(this, args);
            }
            let end = Date.now();
            if (bToLog) {
                Log.sInfo('time consumed: ' + this.constructor.name + ':' + methodName + ': ' + (end - start) + 'ms');
            }
            else {
                console.log('\ntime consumed: ' + this.constructor.name + ':' + methodName + ': ' + (end - start) + 'ms');
            }
            return returnValue;
        };
    };
}

/**
 * 业务场景简单的时候，可以去除分布式锁逻辑
 * action 装饰器，被改装饰器修饰的方法之间如果出现互相调用，会出现锁死问题（已修正，不推荐BGAction之间相互调用，有的话也抽象service），后续可以实现可重入锁以做优化
 */
export function BGAction(eCheckType: EActionCheckType = EActionCheckType.needAuth) {
    return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) => {
        let originalMethod = descriptor.value;
        descriptor.value = async (...args) => {
            if (args.length !== 4) {
                throw new Error('BGAction param error ' + args.length);
            }
            let returnValue = null, resMsgId = args[2], resMsgEncoder = args[3];
            if (eCheckType === EActionCheckType.noCheck) {
                returnValue = await originalMethod.apply(Container.get(target.constructor.name), args);
                args[0].sendProtocol(resMsgId, resMsgEncoder, returnValue);
            }
            else if (eCheckType === EActionCheckType.authedThenInvalid && args[0].isAuthorized) {
                Log.sWarn('already authorized, duplicate packet, roleId=%d, socketUid=%d', args[0].role.uid, args[0].socket.uid);
            }
            else if (eCheckType === EActionCheckType.needAuth && !args[0].isAuthorized) {
                Log.sWarn('not authorized, socketUid=' + this.socket.uid);
            }
            else if (args[0] instanceof Role) {
                Log.sError('BGAction cannot call each other');
            }
            else {
                let role: Role = args[0].role;
                if (!role) {
                    throw new Error('no role in session');
                }
                args[0] = role;
                return await RedisMgr.getInstance(RedisType.GAME).lock(Role.getRedisKey(role.uid), async () => {
                    let needReload = await RedisMgr.getInstance(RedisType.GAME).sismember(WorldDataRedisKey.RELOAD_ROLES, role.uid);
                    if (needReload) {
                        await role.load();
                        await RedisMgr.getInstance(RedisType.GAME).srem(WorldDataRedisKey.RELOAD_ROLES, role.uid);
                        role.computeCombat();
                        Log.uWarn(role.uid, 'role need reload, uid=' + role.uid);
                    }

                    role.refreshDaily(true);
                    role.refreshWeekly();

                    returnValue = await originalMethod.apply(Container.get(target.constructor.name), args);
                    role.session.sendProtocol(resMsgId, resMsgEncoder, returnValue);
                    // async save
                    role.notify().catch((e) => Log.uError(role.uid, e));
                    role.save().catch((e) => Log.uError(role.uid, e));
                });
            }
        };
    };
}

/**
 * orm to mysql player_info_*(player_info might be split to different tables)
 * @param type
 * @param len
 * @constructor
 */
export function BGMysql(type: EMysqlValueType, len?: number) {
    return (target: Object, key: string): void => {
        let dbString = '';
        switch (type) {
            case EMysqlValueType.uint8:
                dbString = `TINYINT UNSIGNED NOT NULL DEFAULT '0'`;
                break;
            case EMysqlValueType.uint16:
                dbString = `SMALLINT UNSIGNED NOT NULL DEFAULT '0'`;
                break;
            case EMysqlValueType.uint32:
                dbString = `INT UNSIGNED NOT NULL DEFAULT '0'`;
                break;
            case EMysqlValueType.uint64:
                dbString = `BIGINT(20) UNSIGNED NOT NULL DEFAULT '0'`;
                break;
            case EMysqlValueType.int8:
                dbString = `TINYINT NOT NULL DEFAULT '0'`;
                break;
            case EMysqlValueType.int16:
                dbString = `SMALLINT NOT NULL DEFAULT '0'`;
                break;
            case EMysqlValueType.int32:
                dbString = `INT NOT NULL DEFAULT '0'`;
                break;
            case EMysqlValueType.int64:
                dbString = `BIGINT(20) NOT NULL DEFAULT '0'`;
                break;
            case EMysqlValueType.string:
                dbString = `VARCHAR(${len ? len : 64}) CHARACTER SET utf8 NOT NULL DEFAULT ''`;
                break;
            case EMysqlValueType.blob:
                dbString = `blob NULL`;
                break;
            case EMysqlValueType.longblob:
                dbString = `longblob NULL`;
                break;
            default:
                throw new Error('not support type=' + type);
        }
        Global.playerInfoMysqlColumn.push([key, dbString]);
    };
}