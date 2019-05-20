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
];

export class BattleSeason extends BGObject {
    @BGMysql(EMysqlValueType.int32) @BGField(EBGValueType.int32, true) evtId: number = 0;
    @BGMysql(EMysqlValueType.int32) @BGField(EBGValueType.int32, true) state: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32, true) startTime: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32, true) endTime: number = 0;
    @BGMysql(EMysqlValueType.int32) @BGField(EBGValueType.int32, true) itemId: number = 0;
}
    

export const MsgIdBattleSeason = 1022;
