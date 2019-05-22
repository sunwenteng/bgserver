// auto generated do not modify
import {EMysqlValueType, IRpcMeta} from "../modles/defines";
import {Zombie} from "../../proto/zombie";
import {BGField, BGMap, BGArray, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {BGMysql} from "../../../lib/util/descriptor";
import {GM_TYPE} from "../../gm/gm_struct";
import {getBean} from "../../../lib/util/context";


/**
 * all rpc
 */
export const rpcMetas: IRpcMeta[] = [
];

export class GetItemMsgList extends BGObject {
    @BGMysql(EMysqlValueType.blob) @BGField(EBGValueType.object, true) mails: BGArray<GetItemMsg> = new BGArray(this, GetItemMsg);
}
    

export class GetItemMsg extends BGObject {
    @BGField(EBGValueType.uint32, true) mailId: number = 0;
    @BGField(EBGValueType.string, true) receiverUid: string = "";
    @BGField(EBGValueType.int32, true) itemId: number = 0;
    @BGField(EBGValueType.int32, true) cnt: number = 0;
}
    

export const MsgIdGetItemMsgList = 9999;
