import {Log} from "./log";
import {Role} from "../../app/game/modles/role";
import {RedisMgr, RedisType} from "../redis/redis_mgr";
import {RoleModel} from "../../app/game/modles/role_model";
import {GameWorld, WorldDataRedisKey} from "../../app/game/game_world";
import {C2S, S2C} from "../../app/proto/cmd";
import {EActionCheckType, EMysqlValueType} from "../../app/game/modles/defines";
import {Global} from "./global";

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
                console.log('time consumed: ' + this.constructor.name + ':' + methodName + ': ' + (end - start) + 'ms');
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
            if (eCheckType === EActionCheckType.noCheck) {
                await originalMethod.apply(GameWorld.instance.getController(args[1].constructor.name), args);
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

                    await originalMethod.apply(GameWorld.instance.getController(args[1].constructor.name), args);
                    /**
                     * todo
                     * 下面两处可以异步，后续进行测试
                     */
                    await role.notify();
                    await role.save();
                });
            }

            // let returnValue = null;
            // if (!readonly) {
            //     if (lock) {
            //         returnValue = await RedisMgr.getInstance(RedisType.GAME).lock(role.getRedisKey(), async () => {
            //             await role.load(mask);
            //             await originalMethod.apply(this, args);
            //             role.sendProUpdate();
            //             await role.save();
            //         });
            //     }
            //     else {
            //         await role.load(mask);
            //         await originalMethod.apply(this, args);
            //         role.sendProUpdate();
            //         await role.save();
            //     }
            // }
            // else {
            //     await role.load(mask);
            //     returnValue = await originalMethod.apply(this, args);
            // }
            // return returnValue;
        };
    };
}

/**
 * runtime 不损耗性能，服务启动时注册
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

/**
 *
 * @param {boolean} dynamic true时，属性被修改会自动发包给客户端
 * @param {boolean} summary true时，属性被修改会自动存入redis供其他玩家查看快照信息
 * @param {C2S.ERankType} rankType 绑定时，属性修改会自动更新对应排行榜
 * @returns {(target: Object, key: string) => void}
 */
export function BGField(dynamic: boolean = false, summary: boolean = false, rankType?: C2S.ERankType) {
    return (target: Object, key: string): void => {
        Object.defineProperty(target, key, {
            get: function () {
                if (this['fields'][key] instanceof RoleModel && !this['fields'][key].loaded) {
                    throw new Error(key + ' not loaded, pls loaded first');
                }
                return this['fields'][key];
            },
            set: function (newValue) {
                // 首次定义
                if (!this['fields'].hasOwnProperty(key)) {
                    if (rankType !== undefined && rankType !== null) {
                        this['revRankFields'][rankType] = key;
                    }
                    if (process.env.NODE_ENV !== 'production') {
                        if (dynamic) {
                            let msg = S2C.SC_UPDATE_ROLE_PRO.create();
                            if (!msg.constructor.prototype.hasOwnProperty(key)) {
                                throw new Error('SC_ROLE_PRO_UPDATE has no property, key=' + key);
                            }
                        }
                        if (summary) {
                            let msg = S2C.RoleSummary.create();
                            if (!msg.constructor.prototype.hasOwnProperty(key)) {
                                throw new Error('SC_ROLE_SUMMARY has no property, key=' + key);
                            }
                        }
                    }
                }
                else if (this['fields'][key] !== newValue) {
                    if (dynamic) {
                        this['dynamicFields'][key] = null;
                    }
                    if (rankType !== undefined) {
                        this['rankFields'][key] = rankType;
                    }
                    if (summary) {
                        this['isSummaryDirty'] = true;
                    }
                    this['dirtyFields'][key] = null;
                }
                this['fields'][key] = newValue;
            }
        });
    };
}

export function modelField() {
    return (target: Object, key: string): void => {
        Object.defineProperty(target, key, {
            get: function () {
                return this['fields'][key];
            },
            set: function (newValue) {
                if (this['fields'][key] !== newValue) {
                    this['makeDirty']();
                }
                this['fields'][key] = newValue;
            }
        });
    };
}

export function field() {
    return (target: Object, key: string): void => {
        Object.defineProperty(target, key, {
            get: function () {
                return this['fields'][key];
            },
            set: function (newValue) {
                this['fields'][key] = newValue;
            }
        });
    };
}

export function dirtyField() {
    return (target: Object, key: string): void => {
        Object.defineProperty(target, key, {
            get: function () {
                return this['fields'][key];
            },
            set: function (newValue) {
                if (this['fields'].hasOwnProperty(key) && this['fields'][key] !== newValue) {
                    this['dirtyFields'][key] = null;
                }
                this['fields'][key] = newValue;
            }
        });
    };
}