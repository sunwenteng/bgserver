// auto generated do not modify
import {EMysqlValueType, IRpcMeta} from "../modles/defines";
import {Zombie} from "../../proto/zombie";
import {BGField, BGMap, BGArray, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {BGMysql} from "../../../lib/util/descriptor";
import {GM_TYPE} from "../../gm/gm_struct";
import {getBean} from "../../../lib/util/context";
import {Hit} from "./cmd";
import {RoleService} from "../controllers/role_service";


/**
 * all rpc
 */
export const rpcMetas: IRpcMeta[] = [

    {
        reqMsgId: 1000,
        reqEncoder: Hit.CR_CHANGE_NAME,
        resMsgId: 1002,
        resEncoder: Hit.RC_CHANGE_NAME_RESULT,
        controller: getBean(RoleService),
        action: getBean(RoleService)['requestChangeName'],
    },
    {
        reqMsgId: 1001,
        reqEncoder: undefined,
        resMsgId: 1003,
        resEncoder: Hit.RC_RAND_NAME_RESULT,
        controller: getBean(RoleService),
        action: getBean(RoleService)['requestRandName'],
    },
    {
        reqMsgId: 1002,
        reqEncoder: undefined,
        resMsgId: 1004,
        resEncoder: undefined,
        controller: getBean(RoleService),
        action: getBean(RoleService)['requestFinishBorn'],
    },
    
];

export class RoleModel extends BGObject {
    @BGMysql(EMysqlValueType.string) @BGField(EBGValueType.string, true) name: string = "";
    @BGMysql(EMysqlValueType.int32) @BGField(EBGValueType.int32, true) lv: number = 0;
    @BGMysql(EMysqlValueType.int32) @BGField(EBGValueType.int32, true) exp: number = 0;
    @BGMysql(EMysqlValueType.int32) @BGField(EBGValueType.int32, true) nextLvExpCost: number = 0;
}
    

export const MsgIdRoleModel = 1005;
