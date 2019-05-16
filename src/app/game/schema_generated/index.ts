import * as RoleRpc from "./role_rpc";
import {IRpcDefinition, IRpcMeta} from "../modles/defines";

let rpcMetas: { [msgId: number]: IRpcMeta } = {};
let msgIdx: { [reqEncoderName: string]: number } = {};

export let allRpc = (): IRpcDefinition => {
    if (Object.keys(rpcMetas).length === 0) {
        rpcMetas = {...RoleRpc.rpcMetas};
        for (let msgId in rpcMetas) {
            let rpc = rpcMetas[msgId];
            if (rpc.reqEncoder) {
                msgIdx[rpc.reqEncoder.name] = parseInt(msgId);
            }
        }
    }

    return {rpc: rpcMetas, idx: msgIdx};
};