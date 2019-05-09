// auto generated do not modify
import {Container} from "typedi";
import {Role} from "../modles/role";
import {IController} from "../modles/defines";
import {RoleController} from "../controllers/role_controller";
import {TestController} from "../controllers/test_controller";
import {Zombie} from "../../proto/zombie";

function getControllerMeta(decoder, controller, action): IController {
    if (!Container.has(controller.name)) {
        Container.set(controller.name, new controller());
    }
    return {decoder: decoder, controller: Container.get(controller.name), action: Container.get(controller.name)[action]};
}

export function getMsgId(o: any) {
    return encodingMapping[o.constructor.name];
}

/**
 * client msg handlers need auto generated
 * [MsgDecodeClass, HandlerClass, HandlerMethod]
 */
export const controllerMappings: { [msgId: number]: IController } = {
    1: getControllerMeta(Zombie.Session_Init, RoleController, 'online'),
    3: getControllerMeta(Zombie.Session_Init, RoleController, 'heartBeat'),
    2: getControllerMeta(Zombie.Session_Init, TestController, 'hello'),
};

/**
 * msg decodes need auto generated
 */
const encodingMapping = {
    'CS_USE_TEIM': 1235,
    'SC_UPDATE_CHATS': 1234,
    'SC_PAY_RESULT': 1235,
};

/**
 * AckMsg mapping need auto generated
 */
export class Ack {
    static useItem(role: Role, msg: Zombie.Session_Service_Bind) {
        role.session.sendProtocol(123, msg);
    }

    static xxxx(role: Role, msg: Zombie.Session_Service_Bind) {
        role.session.sendProtocol(124, msg);
    }
}