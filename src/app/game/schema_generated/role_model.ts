import {BGField, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {BGMysql} from "../../../lib/util/descriptor";
import {EMysqlValueType} from "../modles/defines";
import {GM_TYPE} from "../../gm/gm_struct";
import {ItemModel} from "./item_model";

export class RoleModel extends BGObject {
    @BGMysql(EMysqlValueType.uint8) @BGField(EBGValueType.uint8) gmAuth: GM_TYPE = GM_TYPE.NORMAL;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32, true, true) uid: number = 0;
    @BGMysql(EMysqlValueType.string) @BGField(EBGValueType.string, true, true) nickname: string = '';
    @BGMysql(EMysqlValueType.uint8) @BGField(EBGValueType.uint8, true, true) gender: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32, true, true) iconId: number = 0;
    @BGMysql(EMysqlValueType.uint64) @BGField(EBGValueType.uint64, true, true) exp: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32, true, true) level: number = 0;
    @BGMysql(EMysqlValueType.uint64) @BGField(EBGValueType.uint64, true, true) combat: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32) vipExp: number = 0;
    @BGMysql(EMysqlValueType.uint8) @BGField(EBGValueType.uint8, true, true) vipLevel: number = 0;
    @BGMysql(EMysqlValueType.uint32) @BGField(EBGValueType.uint32, true, true) guildId: number = 0;
    @BGMysql(EMysqlValueType.uint8) @BGField(EBGValueType.boolean, true, true) valid: boolean = false;
    @BGMysql(EMysqlValueType.blob) @BGField(EBGValueType.object) itemModel: ItemModel = new ItemModel(this);
}