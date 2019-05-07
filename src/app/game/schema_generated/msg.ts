// auto generated do not modify
import {Container} from "typedi";

function getControllerMeta(controllerClass, methodName) {
    if (!Container.has(controllerClass)) {
        Container.set(controllerClass, new controllerClass());
    }
    return [Container.get(controllerClass), Container.get(controllerClass)[methodName]];
}

/**
 * import all related controllers need auto generated
 */
import {RoleController} from "../controllers/role_controller";
import {TestController} from "../controllers/test_controller";

/**
 * client msg handlers need auto generated
 */
export const handlerMapping: { [msgId: number]: any[] } = {
    1001: getControllerMeta(RoleController, 'requestXXX'),
    1002: getControllerMeta(TestController, 'requestXXXXXX'),
};

/**
 * msg decodes need auto generated
 */
export const msgMapping = {
    'SC_UPDATE_CHATS': 1234,
    'SC_PAY_RESULT': 1235,
};

/**
 * msg encodes need auto generated
 */
export const decodeMapping = {
    'SC_UPDATE_CHATS': 1234,
    'SC_PAY_RESULT': 1235,
};

/**
 * AckMsg mapping need auto generated
 */
export class Ack {
    static useItem(role, msg) {
        role._session.sendProtocol(123, msg);
    }

    static xxxx(role, msg) {
        role._session.sendProtocol(124, msg);
    }
}