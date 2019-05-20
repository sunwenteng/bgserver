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
        reqMsgId: 1001,
        reqEncoder: Hit.STC_BATTLE_INPUT,
        resMsgId: 1001,
        resEncoder: Hit.STC_BATTLE_RESULT,
    },
    
];
