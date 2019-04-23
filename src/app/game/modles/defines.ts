export type BMap<T> = { [key: string]: T };

export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;
export const WEEK = 7 * DAY;

export let GM_RES_RELOAD_FLAG = '.todo';

export enum ETimeType {
    none = 0,
    role = 1,
    server = 2,
    real = 3,
}

export enum ETaskCategory {
    main = 1,
    achieve = 2,
    vip = 3,
    daily = 4,
    live = 5,
    combat = 6
}

export interface GlobalKeyType {
    redis: string; // 使用时候需要跟serverId拼接
    db: string;
}

// 需要全部是str
export const GLOBAL_DATA_KEY = {
    arena: {
        redis: 'str_arena',
        db: 'arena_data'
    },
    activity: {
        redis: 'str_activity',
        db: 'activity_data'
    },
};

export enum EMysqlValueType {
    uint8 = 0,
    uint16 = 1,
    uint32 = 2,
    uint64 = 3,
    string = 10,    // under 512
    blob = 11,      // <= 64k
    longblob = 11   // unlimited but not efficient
}

export enum EActionCheckType {
    noCheck = 0,            // 不需要检测
    needAuth = 1,           // 上线成功前发送无效
    authedThenInvalid = 2   // 上线成功后再次发送，无效
}