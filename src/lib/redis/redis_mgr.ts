import * as events from 'events';
import * as redis from 'redis';
import {Log} from "../util/log";
import {ERROR_CODE} from "../util/error_code";
import {Global} from "../util/global";

/**
 * 管理游戏内部所有redis实例，每个redis连接可能对应多个db
 * @type {{}}
 * @private
 */
const _instances: { [key: string]: RedisMgr } = {};

export enum RedisType {
    GAME = 'gameRedis'
}

export enum RedisChanel {
    BROADCAST = 'broadcast',
}

export interface RankInfo {
    id: number;
    value: number;
}

export class RedisMgr {
    private readonly _name: string;
    private readonly _config: any;
    //_pool模拟数据库连接池，redis的每个db在_pool中对应一个client,结构：{'db1':client1,'db2',client2}
    private readonly _pool: { [db: number]: redis.RedisClient };
    private _sub: redis.RedisClient;
    private _pub: redis.RedisClient;
    //redis服务是否可用标识,比如在redis服务断开或连不上redis的时候，connected为false
    private _connected: boolean;
    private readonly _aliveTimer: { [db: number]: any };

    constructor(config: any, name: string) {
        this._config = config;
        this._pool = {};
        this._name = name;
        this._connected = false;
        this._aliveTimer = {};
        this._sub = null;
        this._pub = null;
    }

    get connected(): boolean {
        return this._connected;
    }

    public static getInstance(type: RedisType): RedisMgr {
        if (!Global.config.redis || !Global.config.redis[type]) {
            throw new Error('Config Not Valid in key redis, not found name=' + type);
        }
        let key = Global.config.redis[type].host + '_' + Global.config.redis[type].port;
        //如果host_port未创建对应redis实例，则创建
        if (!_instances[key]) {
            _instances[key] = new RedisMgr(Global.config.redis[type], Global.config.redis[type].name);
        }
        return _instances[key];
    }

    public async stop() {
        async function quit(client: redis.RedisClient) {
            return new Promise<void>(((resolve) => {
                if (!client) {
                    resolve();
                }
                else {
                    client.quit(() => {
                        resolve();
                    });
                }
            }));
        }

        for (let idx in this._pool) {
            clearInterval(this._aliveTimer[idx]);
            await quit(this._pool[idx]);
            Log.sInfo('redis close successfully, name=' + this._name + ', db=' + idx);
        }

        await quit(this._sub);
        await quit(this._pub);
    }

    //根据db从实例的连接池中获取对应的client
    private async getClient(db: number): Promise<redis.RedisClient> {
        return new Promise<redis.RedisClient>(((resolve, reject) => {
            //如果池中已经有该db对应的连接
            if (this._pool[db]) {
                if (this._connected === false) { //redis服务出问题的时候，返回redis不可用错误码
                    reject(ERROR_CODE.REDIS.ERROR);
                }
                resolve(this._pool[db]);
            }
            else {
                //创建该db的连接
                this._connected = true;
                this._config.options.retry_strategy = (options) => {
                    // if (options.error && options.error.code === 'ECONNREFUSED') {
                    //     // End reconnecting on a specific error and flush all commands with
                    //     // a individual error
                    //     return new Error('The server refused the connection');
                    // }
                    // if (options.total_retry_time > 1000 * 60 * 60) {
                    //     // End reconnecting after a specific timeout and flush all commands
                    //     // with a individual error
                    //     return new Error('Retry time exhausted');
                    // }
                    // if (options.attempt > 10) {
                    //     // End reconnecting with built in error
                    //     return undefined;
                    // }
                    // reconnect after
                    // return Math.min(options.attempt * 100, 3000);
                    return 1000;
                };
                this._pool[db] = redis.createClient(this._config.port, this._config.host, this._config.options);
                Log.sInfo('name=%s, redis create client %s:%s default db:%s', this._name, this._config['host'], this._config['port'], db);

                //监听redis的error事件
                this._pool[db].on('error', (error) => {
                    //redis服务关闭
                    if (error.toString().indexOf('ECONNREFUSED') >= 0) {
                        this._connected = false;
                    }
                    Log.sError('name=%s, redis connect %s:%s db:%s fail ' + error, this._name, this._config.host, this._config.port, db);
                });

                //监听redis的连接事件
                this._pool[db].on('connect', (error) => {
                    this._connected = true;
                    Log.sInfo('name=%s, redis connect succ!', this._name);
                    //client选择对应db
                    this._pool[db].select(db, (error) => {
                        if (error) {
                            Log.sError('name=%s, redis select error ' + error, this._name);
                            reject(ERROR_CODE.REDIS.SELECT_ERROR);
                        } else {
                            // 定时使用连接，keeplive
                            this._aliveTimer[db] = setInterval(() => {
                                Log.sInfo('name=%s, redis keeplive,db:' + db, this._name);
                                this._pool[db].set('str_redis_keeplive_' + db, Date.now().toString());
                            }, 60 * 60 * 1000);
                            resolve(this._pool[db]);
                        }
                    });
                });

                this._pool[db].on('reconnecting', () => {
                    Log.sWarn('name=%s, redis reconnecting %s:%s db:%s', this._name, this._config.host, this._config.port, db);
                });
            }
        }));
    }

    public async dbsize(db: number = 0): Promise<number> {
        let client = await this.getClient(db);
        return new Promise<number>(((resolve, reject) => {
            client.dbsize((error, reply: number) => {
                if (error) {
                    reject(ERROR_CODE.REDIS.DBSZIE_ERROR);
                }
                else {
                    resolve(reply);
                }
            });
        }));
    }

    public async expire(key: string, expire: number, db: number = 0): Promise<void> {
        //Log.sInfo('name=%s, redis expire %s %s', this._name, key, expire);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.expire(key, expire, (error) => {
                if (error) {
                    Log.sError('name=%s, redis expire error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.EXPIRE_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async setnx(key: string, value: any, db: number = 0): Promise<boolean> {
        // Log.sInfo('name=%s, redis setnx %s %s', this._name, key, value);
        let client = await this.getClient(db);
        return new Promise<boolean>(((resolve, reject) => {
            client.setnx(key, value, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis set error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.SET_ERROR);
                } else {
                    resolve(reply === 1);
                }
            });
        }));
    }

    public async lock<T>(key: string, callback: (hasLock: boolean) => Promise<T>, bWaitForLock: boolean = true, lockTime: number = 5000) {
        let mutexKey = 'mutex_' + key;
        let success = await this.setWithParams(mutexKey, 1, 'PX', lockTime, 'NX');
        if (!success) {
            if (bWaitForLock) {
                setTimeout(async () => {
                    await this.lock(key, callback, bWaitForLock, lockTime);
                }, 10);
            }
            else {
                await callback(success);
            }
        }
        else {
            await callback(success);
            await this.del(mutexKey);
        }
    }

    public async setWithParams(key: string, value: any, mod: string, duration: number, flag: string = null, db: number = 0): Promise<boolean> {
        // Log.sInfo('name=%s, redis set %s %s %s %d %s', this._name, key, value, mod, duration, flag);
        let client = await this.getClient(db);
        return new Promise<boolean>(((resolve, reject) => {
            if (flag) {
                client.set(key, value, mod, duration, flag, (error, reply) => {
                    if (error) {
                        Log.sError('name=%s, redis set %s %s %s %d %s, redis setWithParams error ' + error, this._name, key, value, mod, duration, flag);
                        reject(ERROR_CODE.REDIS.SET_ERROR);
                    } else {
                        resolve(reply === 'OK');
                    }
                });
            }
            else {
                client.set(key, value, mod, duration, (error, reply) => {
                    if (error) {
                        Log.sError('name=%s, redis set %s %s %s %d %s, redis setWithParams error ' + error, this._name, key, value, mod, duration, flag);
                        reject(ERROR_CODE.REDIS.SET_ERROR);
                    } else {
                        resolve(reply === 'OK');
                    }
                });
            }
        }));
    }

    public async set(key: string, value: any, db: number = 0): Promise<boolean> {
        // Log.sInfo('name=%s, redis set %s %s', this._name, key, value);
        let client = await this.getClient(db);
        return new Promise<boolean>(((resolve, reject) => {
            client.set(key, value, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis set %s %s, redis set error ' + error, this._name, key, value);
                    reject(ERROR_CODE.REDIS.SET_ERROR);
                } else {
                    resolve(reply === 'OK');
                }
            });
        }));
    }

    public async get(key: string, db: number = 0): Promise<string> {
        // Log.sInfo('name=%s, redis get %s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<string>(((resolve, reject) => {
            client.get(key, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, param=%s, redis get error ' + error, this._name, key);
                    reject(ERROR_CODE.REDIS.GET_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async incr(key: string, db: number = 0): Promise<void> {
        // Log.sInfo('name=%s, redis incr %s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.incr(key, (error) => {
                if (error) {
                    Log.sError('name=%s, redis incr error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.INCR_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async hdel(key: string, field: string[] | string, db: number = 0): Promise<void> {
        // Log.sInfo('name=%s, redis del %s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.hdel(key, field, (error) => {
                if (error) {
                    Log.sError('name=%s, param=%s, redis del error ' + error, this._name, key);
                    reject(ERROR_CODE.REDIS.DEL_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async del(key: string, db: number = 0): Promise<void> {
        // Log.sInfo('name=%s, redis del %s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.del(key, (error) => {
                if (error) {
                    Log.sError('name=%s, param=%s, redis del error ' + error, this._name, key);
                    reject(ERROR_CODE.REDIS.DEL_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async hset(hkey: string, key: string, value: any, db: number = 0): Promise<void> {
        // Log.sInfo('name=%s, redis hset %s %s %s', this._name, hkey, key, value);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.hset(hkey, key, value, (error) => {
                if (error) {
                    Log.sError('name=%s, hset error ' + error, this._name);
                    return reject(ERROR_CODE.REDIS.HSET_ERROR);
                } else {
                    return resolve();
                }
            });
        }));
    }

    public async hsetnx(hkey: string, key: string, value: any, db: number = 0): Promise<boolean> {
        // Log.sInfo('name=%s, redis hsetnx %s %s %s', this._name, hkey, key, value);
        let client = await this.getClient(db);
        return new Promise<boolean>(((resolve, reject) => {
            client.hsetnx(hkey, key, value, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, hset error ' + error, this._name);
                    return reject(ERROR_CODE.REDIS.HSET_ERROR);
                } else {
                    return resolve(reply === 1);
                }
            });
        }));
    }

    public async hmset(hkey: string, obj: { [key: string]: any } | any[], expire: number = 0, db: number = 0): Promise<void> {
        // Log.sInfo('name=%s, redis hmset %s, data=%j', this._name, hkey, obj);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            if (Object.keys(obj).length === 0) {
                reject('hmset ' + hkey + ' no param');
            }
            else {
                client.hmset(hkey, obj, (error) => {
                    if (error) {
                        Log.sError('name=%s, redis hmset error ' + error, this._name);
                        reject(ERROR_CODE.REDIS.HMSET_ERROR);
                    } else {
                        if (expire) {
                            client.expire(hkey, expire, () => {
                            });
                        }
                        resolve();
                    }
                });
            }
        }));
    }

    public async hmget(key, value: any[], expire: number = 0, db: number = 0): Promise<{ [key: string]: any }> {
        // Log.sInfo('name=%s, redis hmget %s %s', this._name, key, util.inspect(value));
        let client = await this.getClient(db);
        return new Promise<{ [key: string]: any }>(((resolve, reject) => {
            client.hmget(key, value, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, key %s, value=%j redis hmget error: ' + error, this._name, key, value);
                    reject(ERROR_CODE.REDIS.HMGET_ERROR);
                } else {
                    //将结果以键值对的形式返回
                    let ret = {};
                    for (let i = 0; i < value.length; i++) {
                        if (reply[i]) {
                            ret[value[i]] = reply[i];
                        }
                    }
                    if (expire) {
                        client.expire(key, expire, () => {
                        });
                    }
                    resolve(ret);
                }
            });
        }));
    }

    public async hincrby(hkey: string, key: string, incrValue: number, db: number = 0): Promise<void> {
        // Log.sInfo('name=%s, redis hincrby %s %s +%s', this._name, hkey, key, incrValue);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.hincrby(hkey, key, incrValue, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis hincrby error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.HINCRBY_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async hgetall(hkey: string, db: number = 0): Promise<{ [key: string]: string }> {
        // Log.sInfo('name=%s, redis hgetall %s', this._name, hkey);
        let client = await this.getClient(db);
        return new Promise<{ [key: string]: string }>(((resolve, reject) => {
            client.hgetall(hkey, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis hgetall error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.HGETALL_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async zadd(key, arr: RankInfo[], db: number = 0): Promise<void> {
        // Log.sInfo('name=%s, redis zadd', this._name);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            let p = [];
            for (let a of arr) {
                p.push(...[a.value, a.id]);
            }
            client.zadd(key, p, (error) => {
                if (error) {
                    Log.sError('name=%s, redis zadd error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.ZADD_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async zrem(key, subKeys: any[] | any, db: number = 0): Promise<void> {
        // Log.sInfo('name=%s, redis zadd', this._name);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.zrem(key, subKeys, (error) => {
                if (error) {
                    Log.sError('name=%s, redis zadd error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.ZADD_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    /**
     * asc
     * @param key
     * @param field
     * @param db
     */
    public async zrank(key: string, field: string | number, db: number = 0): Promise<number> {
        // Log.sInfo('name=%s, redis zrevrank key=%s, field=%s', this._name, key, field);
        let client = await this.getClient(db);
        return new Promise<number>(((resolve, reject) => {
            client.zrank(key, field + '', (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis zrevrank error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.GETRANGE_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    /**
     * asc
     * @param {string} key
     * @param {number} start from 0
     * @param {number} end -1 means all
     * @param {number} db
     * @returns {Promise<RankInfo[]>}
     */
    public async zrange(key: string, start: number, end: number, db: number = 0): Promise<RankInfo[]> {
        // Log.sInfo('name=%s, redis zrevrange key=%s, start=%d, end=%d', this._name, key, start, end);
        let client = await this.getClient(db);
        return new Promise<RankInfo[]>(((resolve, reject) => {
            client.zrange(key, start, end, 'WITHSCORES', (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis zrevange error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.ZREVRANGE_ERROR);
                } else {
                    let ret: RankInfo[] = [];
                    for (let i = 0; i < reply.length; i = i + 2) {
                        ret.push({
                            id: parseInt(reply[i]),
                            value: parseInt(reply[i + 1])
                        });
                    }
                    resolve(ret);
                }
            });
        }));
    }

    /**
     * desc
     * @param {string} key
     * @param {number} start from 0
     * @param {number} end -1 means all
     * @param {number} db
     * @returns {Promise<RankInfo[]>}
     */
    public async zrevrange(key: string, start: number, end: number, db: number = 0): Promise<RankInfo[]> {
        // Log.sInfo('name=%s, redis zrevrange key=%s, start=%d, end=%d', this._name, key, start, end);
        let client = await this.getClient(db);
        return new Promise<RankInfo[]>(((resolve, reject) => {
            client.zrevrange(key, start, end, 'WITHSCORES', (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis zrevange error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.ZREVRANGE_ERROR);
                } else {
                    let ret: RankInfo[] = [];
                    for (let i = 0; i < reply.length; i = i + 2) {
                        ret.push({
                            id: parseInt(reply[i]),
                            value: parseInt(reply[i + 1])
                        });
                    }
                    resolve(ret);
                }
            });
        }));
    }

    /**
     * desc
     * @param key
     * @param field
     * @param db
     */
    public async zrevrank(key: string, field: string | number, db: number = 0): Promise<number> {
        // Log.sInfo('name=%s, redis zrevrank key=%s, field=%s', this._name, key, field);
        let client = await this.getClient(db);
        return new Promise<number>(((resolve, reject) => {
            client.zrevrank(key, field + '', (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis zrevrank error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.GETRANGE_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    /**
     * 获取键值在排行中的分数
     * @param key
     * @param field
     * @param db
     */
    public async zscore(key: string, field: string, db: number = 0): Promise<string> {
        // Log.sInfo('name=%s, redis score key=%s, field=%s', this._name, key, field);
        let client = await this.getClient(db);
        return new Promise<string>(((resolve, reject) => {
            client.zscore(key, field, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis zscore error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.ZSCORE_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async exists(key: string, db: number = 0): Promise<boolean> {
        // Log.sInfo('name=%s, redis score key=%s, field=%s', this._name, key, field);
        let client = await this.getClient(db);
        return new Promise<boolean>(((resolve, reject) => {
            client.exists(key, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis exist error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.ERROR);
                } else {
                    resolve(reply !== 0);
                }
            });
        }));
    }

    public async sadd(key: string, member: any, db: number = 0): Promise<void> {
        // Log.sInfo('name=%s, redis sadd key=%s, member=%s', this._name, key, member);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.sadd(key, member, (error) => {
                if (error) {
                    Log.sError('name=%s, redis sadd error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.SADD_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async sismember(key: string, subKey: string | number, db: number = 0): Promise<boolean> {
        let client = await this.getClient(db);
        return new Promise<boolean>(((resolve, reject) => {
            client.sismember(key, subKey + '', (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis sismember error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.SISMEMBER_ERROR);
                } else {
                    resolve(reply !== 0);
                }
            });
        }));
    }

    public async smembers(key: string, db: number = 0): Promise<string[]> {
        // Log.sInfo('name=%s, redis smember key=%s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<string[]>(((resolve, reject) => {
            client.smembers(key, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis smember error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.SMEMBERS_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async srem(key: string, fields: any | any[], db: number = 0): Promise<void> {
        // Log.sInfo('name=%s, redis srem key=%s fields=%s', this._name, key, fields);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.srem(key, fields, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis srem error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.SREM_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async spop(key: string, db: number = 0): Promise<string> {
        // Log.sInfo('name=%s, redis spop key=%s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<string>(((resolve, reject) => {
            client.spop(key, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis spop error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.SREM_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async lrange(key: string, start: number, end: number, db: number = 0): Promise<string[]> {
        // Log.sInfo('name=%s, redis spop key=%s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<string[]>(((resolve, reject) => {
            client.lrange(key, start, end, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis ltrim error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.SREM_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async ltrim(key: string, start: number, end: number, db: number = 0): Promise<string> {
        // Log.sInfo('name=%s, redis spop key=%s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<string>(((resolve, reject) => {
            client.ltrim(key, start, end, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis ltrim error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.SREM_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async lpushx(key: string, value: string, db: number = 0): Promise<number> {
        // Log.sInfo('name=%s, redis spop key=%s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<number>(((resolve, reject) => {
            client.lpushx(key, value, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis lpushx error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.SREM_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async lpush(key: string, value: string, db: number = 0): Promise<number> {
        // Log.sInfo('name=%s, redis spop key=%s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<number>(((resolve, reject) => {
            client.lpush(key, value, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis lpushx error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.SREM_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async llen(key: string, db: number = 0): Promise<number> {
        // Log.sInfo('name=%s, redis spop key=%s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<number>(((resolve, reject) => {
            client.llen(key, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis lpushx error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.SREM_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async subscribe(channel: string | string[], eventSource: events.EventEmitter): Promise<void> {
        return new Promise<void>(((resolve, reject) => {
            if (!this._sub) {
                this._sub = redis.createClient(this._config.port, this._config.host, this._config.options);
                this._sub.on("subscribe", (channel, count) => {
                    Log.sInfo('channel = ' + channel + ' count = ' + count);
                });

                this._sub.on("message", (channel, message) => {
                    eventSource.emit("message", channel, message);
                });
            }
            this._sub.subscribe(channel, (error) => {
                if (error) {
                    Log.sError('name=%s, redis subscribe error ' + error, this._name + channel);
                    reject(false);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async unsubscribe(channel?: string | string[]): Promise<void> {
        return new Promise<void>(((resolve, reject) => {
            if (!this._sub) {
                resolve();
            }
            else {
                this._sub.unsubscribe(channel ? channel : '', (error) => {
                    if (error) {
                        Log.sError('channel=%s, name=%s, redis subscribe error ' + error, channel, this._name);
                        reject(false);
                    } else {
                        resolve();
                    }
                });
            }
        }));
    }

    public async publish(channel: string, message: string | any): Promise<boolean> {
        return new Promise<boolean>(((resolve, reject) => {
            if (!this._pub) {
                this._pub = redis.createClient(this._config.port, this._config.host, this._config.options);
            }
            this._pub.publish(channel, message, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis subscribe error ' + error, this._name + channel);
                    reject(false);
                } else {
                    resolve(reply === 1);
                }
            });
        }));
    }

    public async pubsub(command: string, params: string, db: number = 0): Promise<number> {
        let client = await this.getClient(db);
        return new Promise<number>(((resolve, reject) => {
            client.pubsub(command, params, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis pubsub error ' + error, this._name);
                    reject(ERROR_CODE.REDIS.ERROR);
                } else {
                    resolve(reply[1]);
                }
            });
        }));
    }
}
