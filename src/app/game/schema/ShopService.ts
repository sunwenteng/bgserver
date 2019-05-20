// auto generated do not modify
import {EMysqlValueType, IRpcMeta} from "../modles/defines";
import {Zombie} from "../../proto/zombie";
import {BGField, BGMap, BGArray, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {BGMysql} from "../../../lib/util/descriptor";
import {GM_TYPE} from "../../gm/gm_struct";
import {getBean} from "../../../lib/util/context";
import {Hit} from "./cmd";
import {ShopService} from "../controllers/shop_service";


/**
 * all rpc
 */
export const rpcMetas: IRpcMeta[] = [

    {
        reqMsgId: 1010,
        reqEncoder: Hit.CR_PAY,
        resMsgId: 1018,
        resEncoder: Hit.RC_PAY_RESULT,
        controller: getBean(ShopService),
        action: getBean(ShopService)['requestPay'],
    },
    
];

export class ShopList extends BGObject {
    @BGMysql(EMysqlValueType.blob) @BGField(EBGValueType.object, true) items: BGArray<ShopListItem> = new BGArray(this);
}
    

export class ShopListItem extends BGObject {
    @BGField(EBGValueType.int32, true) payId: number = 0;
    @BGField(EBGValueType.int32, true) payType: number = 0;
    @BGField(EBGValueType.int32, true) payCnt: number = 0;
    @BGField(EBGValueType.int32, true) itemId: number = 0;
    @BGField(EBGValueType.int32, true) itemCnt: number = 0;
    @BGField(EBGValueType.string, true) name: string = "";
    @BGField(EBGValueType.string, true) desc: string = "";
    @BGField(EBGValueType.string, true) icon: string = "";
}
    

export const MsgIdShopList = 1019;
