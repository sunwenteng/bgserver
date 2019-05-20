// auto generated do not modify
import {EMysqlValueType, IRpcMeta} from "../modles/defines";
import {Zombie} from "../../proto/zombie";
import {BGField, BGMap, BGArray, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {BGMysql} from "../../../lib/util/descriptor";
import {GM_TYPE} from "../../gm/gm_struct";
import {getBean} from "../../../lib/util/context";
import {Hit} from "./cmd";

/**
 * all rpc
 */
export const rpcMetas: IRpcMeta[] = [

    {
        reqMsgId: 1000,
        reqEncoder: Hit.BR_PLAYER_INFO,
        resMsgId: 1000,
        resEncoder: Hit.RB_PLAYER_INFO_RESULT,
    },
    
];
