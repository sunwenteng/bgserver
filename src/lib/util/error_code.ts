export const ERROR_CODE = {
    NO_ERROR: 999,                              // 正常
    COMMON: {
        SYSTEM_ERROR: 141,               // 系统错误
        GM_ERROR: 10000,
        CTL_NOT_FOUND: 10001,              // 控制器找不到
        CTL_FUNC_NOT_FOUND: 10002,         // 控制器方法找不到
        CONFIG_NOT_FOUND: 10003,            // 配置未找到
        JSON_PARSE_ERROR: 10004,            // JSON反序列化错误
        HTTP_NO_RESPONSE: 10005,            // http无响应
        REQ_FREQUENT: 10006,                // 访问过于频繁
        UID_MISSING: 10007,                 // uid missing
        TOKEN_MISSING: 10008,               // token missing
        CTL_NOT_INTERCEPT: 10009,           // 不需要拦截

        ROLE_BAN_SPEAK: 230,              // 角色禁言
        ROLE_FORBID: 231,              // 角色被封
        INADEQUATE_TITLE_QUALIFICATIONS: 233, // 称号资格不够
        ROLE_NOT_EXIST: 73,              // 角色不存在
        PARAM_ERROR: 222,                // 参数错误
        RESOURCE_NOT_ENOUGH: 119,     // 资源不足
        GOLD_NOT_ENOUGH: 32,
        SKILL_EXP_NOT_ENOUGH: 162,
        RESOURCE_EXCEED: 224,     // 资源超上限
        LEVEL_MAX: 223,           // 已经满级
        NAME_DUPLICATE: 5,      // 重名
        NAME_TOO_LONG: 6,       // 超过6个字
        NAME_ILLEGAL: 8,        // 名字非法
        LEVEL_NOT_ENOUGH: 9,    // 等级不足
        VIP_LEVEL_NOT_ENOUGH: 48,    // VIP等级不足
        NO_PROPER_CHILD: 30, // 没有合适的联姻对象
        WRONG_PASSWORD: 4, // 密码不正确
        OCCUPY: 128, // 翰林位置被占用
        NO_AUTHRIZED: 98, // 工会权限不足
        GUILD_NOT_FOUND: 93, // 公会不存在
        ROLE_NOT_LOGIN: 104, // 玩家超过三天未登录
        GUILD_LEFT_TIME_ERROR: 116, // 退出公会后三天内不得加入别的公会
        GUILD_POS_MAX: 118, // 改职位达到任免上限
        GUILD_MEMBER_MAX: 94, // 公会人数达到上限
        ALL_STUDYING: 186,
        NO_STUDY_TEAM: 185,
        CEFENG_LIMIT: 154,
        CEFENG_RULE_ERROR: 153,
        GUILD_LVL_NOT_ENOUGH: 225,
        GUILD_STAGE_OPENED: 80,
        GUILD_STAGE_NOT_OPEN: 82,
        GUILD_STAGE_TIME_INVALID: 136,
        GUILD_AREADY_IN: 88,
        GUILD_STAGE_DEAD: 84,
        GUILD_TANHE_ERROR: 227,
        ARENA_FIGHT_CNT_MAX: 66,
        ARENA_NO_HERO: 75,
        ARENA_IN_BATTLE: 68,
        ARENA_NO_SELF: 74,
        GUILD_AUTO_JOIN_ERROR: 96,
        GUILD_PRIVILEGE_ERROR: 98,
        BANQUET_TIME_MAX: 57,
        BANQUET_JOIN_ERROR: 56,
        BANQUET_OPENING: 58,
        BANQUET_NOT_EXIST: 52,
        MODULE_NOT_OPEN: 232,
        GUILD_NAME_INVALID: 109,
        GUILD_NAME_DUPLICATE: 110,
        REFRESH_LIMIT: 63,
        RANK_NO_RANK: 197,
        REWARD_NO_GAIN: 210,
        ACTIVITY_NOT_OPEN: 199,
        Resource_NOT_Enough:200,
    },
    REDIS: {
        ERROR: 11000,
        SELECT_ERROR: 11001,
        GET_ERROR: 11002,
        SET_ERROR: 11003,
        EXPIRE_ERROR: 11004,
        INCR_ERROR: 11005,
        DEL_ERROR: 11006,
        HSET_ERROR: 11007,
        HMSET_ERROR: 11008,
        HMGET_ERROR: 11009,
        HINCRBY_ERROR: 11010,
        ZSCORE_ERROR: 110011,
        GETRANGE_ERROR: 11012,
        HGETALL_ERROR: 11013,
        ZADD_ERROR: 11014,
        ZREVRANGE_ERROR: 11015,
        DBSZIE_ERROR: 11016,
        SADD_ERROR: 11017,
        SMEMBERS_ERROR: 11018,
        SREM_ERROR: 11019,
        SISMEMBER_ERROR: 11020
    },
    MYSQL: {
        GET_CONN_ERROR: 12001,
        INSERT_ERROR: 12002,
        DEL_ERROR: 12003,
        UPDATE_ERROR: 12004,
        SELECT_ERROR: 12005,
        EXEC_ERROR: 12006,
    },
};