// auto generated do not modify
import {IRpcDefinition, IRpcMeta} from "../modles/defines";
import * as RoleService from "./RoleService";
import * as PokesService from "./PokesService";
import * as PokeTeamService from "./PokeTeamService";
import * as BagService from "./BagService";
import * as GachaService from "./GachaService";
import * as AdventureService from "./AdventureService";
import * as MailService from "./MailService";
import * as ShopService from "./ShopService";
import * as RankService from "./RankService";
import * as EventService from "./EventService";
import * as ClientNotify from "./ClientNotify";

let rpcMetas: { [msgId: number]: IRpcMeta } = {};
let msgIdx: { [reqEncoderName: string]: number } = {};

export let allRpc = (): IRpcDefinition => {
    if (Object.keys(rpcMetas).length === 0) {
        let allRpc = [...RoleService.rpcMetas, ...PokesService.rpcMetas, ...PokeTeamService.rpcMetas, ...BagService.rpcMetas, ...GachaService.rpcMetas, ...AdventureService.rpcMetas, ...MailService.rpcMetas, ...ShopService.rpcMetas, ...RankService.rpcMetas, ...EventService.rpcMetas, ...ClientNotify.rpcMetas, ];
        for (let rpcMeta of allRpc) {
            if (rpcMeta.reqEncoder) {
                msgIdx[rpcMeta.reqEncoder.name] = rpcMeta.reqMsgId;
            }
            rpcMetas[rpcMeta.reqMsgId] = rpcMeta;
        }
    }

    return {rpc: rpcMetas, idx: msgIdx};
};

export const hashMd5 = "900ca01068c2ab93fc0b8cb614ed1c43";
export const name = "SRole";
