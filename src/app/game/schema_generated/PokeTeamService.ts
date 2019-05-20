// auto generated do not modify
import {EMysqlValueType, IRpcMeta} from "../modles/defines";
import {Zombie} from "../../proto/zombie";
import {BGField, BGMap, BGArray, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {BGMysql} from "../../../lib/util/descriptor";
import {GM_TYPE} from "../../gm/gm_struct";
import {getBean} from "../../../lib/util/context";
import {Hit} from "./cmd";
import {PokeTeamService} from "../controllers/poke_team_service";


/**
 * all rpc
 */
export const rpcMetas: IRpcMeta[] = [

    {
        reqMsgId: 1005,
        reqEncoder: Hit.CR_ADD_TO_TEAM,
        resMsgId: 1009,
        resEncoder: Hit.RC_ADD_TO_TEAM_RESULT,
        controller: getBean(PokeTeamService),
        action: getBean(PokeTeamService)['requestAddToTeam'],
    },
    
];

export class AdventureTeam extends BGObject {
    @BGMysql(EMysqlValueType.blob) @BGField(EBGValueType.object, true) members: BGArray<AdventureTeamMember> = new BGArray(this);
}
    

export class AdventureTeamMember extends BGObject {
    @BGField(EBGValueType.int32, true) uid: number = 0;
}
    

export const MsgIdAdventureTeam = 1010;
