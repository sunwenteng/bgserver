// auto generated do not modify
import {IRpcDefinition, IRpcMeta} from "../modles/defines";
import * as Battle2RoleService from "./Battle2RoleService";
import * as Role2BattleService from "./Role2BattleService";

let rpcMetas: { [msgId: number]: IRpcMeta } = {};
let msgIdx: { [reqEncoderName: string]: number } = {};

export let allRpc = (): IRpcDefinition => {
    if (Object.keys(rpcMetas).length === 0) {
        let allRpc = [...Battle2RoleService.rpcMetas, ...Role2BattleService.rpcMetas, ];
        for (let rpcMeta of allRpc) {
            if (rpcMeta.reqEncoder) {
                msgIdx[rpcMeta.reqEncoder.name] = rpcMeta.reqMsgId;
            }
            rpcMetas[rpcMeta.reqMsgId] = rpcMeta;
        }
    }

    return {rpc: rpcMetas, idx: msgIdx};
};

export const hashMd5 = "be10996b9127adef34e09c93c9d60c60";
export const name = "SRoleBattle";
