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

export class CombatPointRankList extends BGObject {
    @BGMysql(EMysqlValueType.blob) @BGField(EBGValueType.object, true) ranks: BGArray<CombatPointRank> = new BGArray(this);
}
    

export class CombatPointRank extends BGObject {
    @BGField(EBGValueType.string, true) roleId: string = "";
    @BGField(EBGValueType.int32, true) score: number = 0;
    @BGField(EBGValueType.string, true) name: string = "";
}
    

export const MsgIdCombatPointRankList = 1020;

export class AdventureRankList extends BGObject {
    @BGMysql(EMysqlValueType.blob) @BGField(EBGValueType.object, true) ranks: BGArray<AdventureRank> = new BGArray(this);
}
    

export class AdventureRank extends BGObject {
    @BGField(EBGValueType.string, true) roleId: string = "";
    @BGField(EBGValueType.int32, true) score: number = 0;
    @BGField(EBGValueType.string, true) name: string = "";
}
    

export const MsgIdAdventureRankList = 1021;
