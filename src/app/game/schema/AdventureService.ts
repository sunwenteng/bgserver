// auto generated do not modify
import {EMysqlValueType, IRpcMeta} from "../modles/defines";
import {Zombie} from "../../proto/zombie";
import {BGField, BGMap, BGArray, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {BGMysql} from "../../../lib/util/descriptor";
import {GM_TYPE} from "../../gm/gm_struct";
import {getBean} from "../../../lib/util/context";
import {Hit} from "./cmd";
import {AdventureService} from "../controllers/adventure_service";


/**
 * all rpc
 */
export const rpcMetas: IRpcMeta[] = [

    {
        reqMsgId: 1008,
        reqEncoder: undefined,
        resMsgId: 1014,
        resEncoder: Hit.RC_ADVENTURE_RESULT,
        controller: getBean(AdventureService),
        action: getBean(AdventureService)['requestAdventure'],
    },
    
];

export class AdventureInfo extends BGObject {
    @BGMysql(EMysqlValueType.int32) @BGField(EBGValueType.int32, true) adventureStageId: number = 0;
    @BGMysql(EMysqlValueType.int32) @BGField(EBGValueType.int32, true) stageExp: number = 0;
}
    

export const MsgIdAdventureInfo = 1015;
