import * as RoleRpc from "./role_rpc";

let encodingMappings = {};

export function getMsgId(o: any) {
    return encodingMappings[o.constructor.name];
}

export function registerController(controllers) {
    Object.entries({...RoleRpc.controllerMappings}).forEach(value => controllers[value[0]] = value[1]);
    Object.entries({...RoleRpc.encodingMappings}).forEach(value => encodingMappings[value[1].toString()] = value[0]);
}