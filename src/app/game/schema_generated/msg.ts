// auto generated do not modify
import {Container} from "typedi";
import {Role} from "../modles/role";

function getControllerMeta(controllerClass, methodName) {
    if (!Container.has(controllerClass)) {
        Container.set(controllerClass, new controllerClass());
    }
    return [Container.get(controllerClass), Container.get(controllerClass)[methodName]];
}

export function getMsgId(o: any) {
    return encodingMapping[o.constructor.name];
}

/**
 * import all related controllers need auto generated
 */
import {RoleController} from "../controllers/role_controller";
import {TestController} from "../controllers/test_controller";
import {Zombie} from "../../proto/zombie";

/**
 * client msg handlers need auto generated
 * [MsgDecodeClass, HandlerClass, HandlerMethod]
 */
export const handlerMapping: { [msgId: number]: any[] } = {
    1001: [Zombie.Session_Init, ...getControllerMeta(RoleController, 'requestXXX')],
    1002: [Zombie.Session_Init, ...getControllerMeta(TestController, 'requestXXXXXX')],
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
        role._session.sendProtocol(123, msg);
    }

    static xxxx(role: Role, msg: Zombie.Session_Service_Bind) {
        role._session.sendProtocol(124, msg);
    }
}