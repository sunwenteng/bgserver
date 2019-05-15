// auto generated do not modify
import {EMysqlValueType, IRpcMeta} from "../modles/defines";
import {Zombie} from "../../proto/zombie";
import {BGField, BGMap, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {BGMysql} from "../../../lib/util/descriptor";
import {GM_TYPE} from "../../gm/gm_struct";
import {getBean} from "../../../lib/util/context";
import {RoleController} from "../controllers/role_controller";

/**
 * all rpc
 */
export const rpcMetas: { [reqMsgId: number]: IRpcMeta } = {
    1: {
        reqMsgId: 1,
        reqEncoder: Zombie.Session_Init,
        resMsgId: 1,
        resEncoder: Zombie.Session_Init,
        controller: getBean(RoleController),
        action: getBean(RoleController)['online'],
    },
    2: {
        reqMsgId: 2,
        resMsgId: 2,
    }
};

/****************************************************************************************************************/
export class Item extends BGObject {
    @BGField(EBGValueType.uint32) uid: number = 0;
    @BGField(EBGValueType.uint32) id: number = 0;
    @BGField(EBGValueType.uint32) cnt: number = 0;
}

export class ItemModel extends BGObject {
    @BGField(EBGValueType.object) itemMap: BGMap<Item> = new BGMap(this, Item);
}

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
