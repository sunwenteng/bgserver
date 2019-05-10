// auto generated do not modify
import {Container} from "typedi";
import {Role} from "../modles/role";
import {EMysqlValueType, IController} from "../modles/defines";
import {RoleController} from "../controllers/role_controller";
import {TestController} from "../controllers/test_controller";
import {Zombie} from "../../proto/zombie";
import {BGField, BGMap, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {BGMysql} from "../../../lib/util/descriptor";
import {GM_TYPE} from "../../gm/gm_struct";

function getControllerMeta(decoder, controller, action, response): IController {
    if (!Container.has(controller.name)) {
        Container.set(controller.name, new controller());
    }
    return {
        decoder: decoder,
        controller: Container.get(controller.name),
        action: Container.get(controller.name)[action],
        response: response
    };
}

/**
 * client msg handlers need auto generated
 */
export const controllerMappings: { [msgId: number]: IController } = {
    1: getControllerMeta(Zombie.Session_Init, RoleController, 'online', (role: Role, msg: Zombie.Session_Service_Bind) => {
        role.session.sendProtocol(123, msg);
    }),
    3: getControllerMeta(Zombie.Session_Init, RoleController, 'heartBeat', (role: Role, msg: Zombie.Session_Service_Bind) => {
        role.session.sendProtocol(123, msg);
    }),
    2: getControllerMeta(Zombie.Session_Init, TestController, 'hello', (role: Role, msg: Zombie.Session_Service_Bind) => {
        role.session.sendProtocol(123, msg);
    }),
};

/**
 * msg decodes need auto generated
 */
export const encodingMappings = {
    123: 'CS_HAHAHA'
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
