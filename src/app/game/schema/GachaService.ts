// auto generated do not modify
import {EMysqlValueType, IRpcMeta} from "../modles/defines";
import {Zombie} from "../../proto/zombie";
import {BGField, BGMap, BGArray, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {BGMysql} from "../../../lib/util/descriptor";
import {GM_TYPE} from "../../gm/gm_struct";
import {getBean} from "../../../lib/util/context";
import {Hit} from "./cmd";
import {GachaService} from "../controllers/gacha_service";


/**
 * all rpc
 */
export const rpcMetas: IRpcMeta[] = [

    {
        reqMsgId: 1007,
        reqEncoder: Hit.CR_GACHA,
        resMsgId: 1013,
        resEncoder: Hit.RC_GACHA_RESULT,
        controller: getBean(GachaService),
        action: getBean(GachaService)['requestGacha'],
    },
    
];
