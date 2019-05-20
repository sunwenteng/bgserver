// auto generated do not modify
import {EMysqlValueType, IRpcMeta} from "../modles/defines";
import {Zombie} from "../../proto/zombie";
import {BGField, BGMap, BGArray, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {BGMysql} from "../../../lib/util/descriptor";
import {GM_TYPE} from "../../gm/gm_struct";
import {getBean} from "../../../lib/util/context";
import {Hit} from "./cmd";
import {BagService} from "../controllers/bag_service";


/**
 * all rpc
 */
export const rpcMetas: IRpcMeta[] = [

    {
        reqMsgId: 1006,
        reqEncoder: Hit.CR_USE_ITEM,
        resMsgId: 1011,
        resEncoder: Hit.RC_USE_ITEM_RESULT,
        controller: getBean(BagService),
        action: getBean(BagService)['requestUseItem'],
    },
    
];

export class ItemBag extends BGObject {
    @BGMysql(EMysqlValueType.blob) @BGField(EBGValueType.object, true) items: BGArray<ItemBagEntry> = new BGArray(this);
    @BGMysql(EMysqlValueType.int32) @BGField(EBGValueType.int32, true) gold: number = 0;
    @BGMysql(EMysqlValueType.int32) @BGField(EBGValueType.int32, true) diamond: number = 0;
    @BGMysql(EMysqlValueType.blob) @BGField(EBGValueType.object, true) goods: BGMap<ItemBagEntry> = new BGMap(this);
    @BGMysql(EMysqlValueType.blob) @BGField(EBGValueType.object, true) bags: BGMap<BagRes> = new BGMap(this);
    @BGMysql(EMysqlValueType.int64) @BGField(EBGValueType.int64, true) bigNum1: number = 0;
    @BGMysql(EMysqlValueType.uint64) @BGField(EBGValueType.uint64, true) bigNum2: number = 0;
}
    

export class ItemBagEntry extends BGObject {
    @BGField(EBGValueType.int32, true) uid: number = 0;
    @BGField(EBGValueType.int32, true) id: number = 0;
    @BGField(EBGValueType.int32, true) cnt: number = 0;
}
    

export class BagRes extends BGObject {
    @BGField(EBGValueType.int32, true) uid: number = 0;
    @BGField(EBGValueType.int32, true) id: number = 0;
}
    

export const MsgIdItemBag = 1012;
