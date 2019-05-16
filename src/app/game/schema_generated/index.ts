// auto generated do not modify
import * as RoleRpc from "./role_rpc";
import {IRpcDefinition, IRpcMeta} from "../modles/defines";

let rpcMetas: { [msgId: number]: IRpcMeta } = {};
let msgIdx: { [reqEncoderName: string]: number } = {};

export let allRpc = (): IRpcDefinition => {
    if (Object.keys(rpcMetas).length === 0) {
        let allRpc = [...RoleRpc.rpcMetas];
        for (let rpcMeta of allRpc) {
            if (rpcMeta.reqEncoder) {
                msgIdx[rpcMeta.reqEncoder.name] = rpcMeta.reqMsgId;
            }
            if (rpcMeta.controller) {
                rpcMetas[rpcMeta.reqMsgId] = rpcMeta;
            }
        }
    }

    return {rpc: rpcMetas, idx: msgIdx};
};