export type BMap<T> = { [key: string]: T };

export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;
export const WEEK = 7 * DAY;

export const MAX_NAME_LENGTH = 18;

export const GM_RES_RELOAD_FLAG = '.todo';

export interface IRpcDefinition {
    rpc: { [reqMsgId: number]: IRpcMeta };
    idx: { [reqEncoderName: string]: number };
}

export interface IRpc extends IRpcMeta {
    msg: any;
}

export interface IRpcMeta {
    reqMsgId: number;
    reqEncoder?: Function | any;
    resMsgId?: number;
    resEncoder?: Function | any;
    controller?: Function | any;
    action?: Function | any;
}

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
    int8 = 4,
    int16 = 5,
    int32 = 6,
    int64 = 7,
    string = 10,    // under 512
    blob = 11,      // <= 64k
    longblob = 11   // unlimited but not efficient
}

export enum EActionCheckType {
    noCheck = 0,            // 不需要检测
    needAuth = 1,           // 上线成功前发送无效
    authedThenInvalid = 2   // 上线成功后再次发送，无效
}

export const MSG_HEADER_LEN_BYTES = 4;
export const MSG_HEADER_MSG_ID_BYTES = 2;
export const MSG_HEADER_MSG_IDX_BYTES = 2;
export const MSG_HEADER_TOTAL_BYTES = 8;

// 1000以内的消息id为保留id，不能自动分配
export const MSG_ID_SESSION_INIT = 1;
export const MSG_ID_SESSION_INIT_COMPLETE = 2;
export const MSG_ID_SESSION_CLOSE = 3;
export const MSG_ID_ACK_MSG = 4; // 确认已经收到包
export const MSG_ID_HEART_BEAT = 5;
export const MSG_SYS_DEFAULT_RANGE = 1000;

export const SESSION_CLOSE_REASON_RECV_SESSION_CLOSE = 0;
export const SESSION_CLOSE_REASON_APPLICATION_CLOSE = 1;
export const SESSION_CLOSE_REASON_DUPLICATE_CONNECT = 2;
export const SESSION_CLOSE_REASON_PARSE_PACKET_ERROR = 3;
export const SESSION_CLOSE_REASON_PARSE_ACK_MSG_ERROR = 4;
export const SESSION_CLOSE_REASON_SEND_CACHE_OVERFLOW = 5;
export const SESSION_CLOSE_REASON_HANDLE_PACKET_ERROR = 6;

export const ROLE_REDIS_EXPIRE_TIME = 86400;