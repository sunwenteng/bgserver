// auto generated do not modify
import {EMysqlValueType, IRpcMeta} from "../modles/defines";
import {Zombie} from "../../proto/zombie";
import {BGField, BGMap, BGArray, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {BGMysql} from "../../../lib/util/descriptor";
import {GM_TYPE} from "../../gm/gm_struct";
import {getBean} from "../../../lib/util/context";
import {Hit} from "./cmd";
import {PokesService} from "../controllers/pokes_service";


/**
 * all rpc
 */
export const rpcMetas: IRpcMeta[] = [

    {
        reqMsgId: 1003,
        reqEncoder: Hit.CR_POKE_LV_UP,
        resMsgId: 1006,
        resEncoder: Hit.RC_POKE_LV_UP_RESULT,
        controller: getBean(PokesService),
        action: getBean(PokesService)['requestPokeLvUp'],
    },
    {
        reqMsgId: 1004,
        reqEncoder: Hit.CR_POKE_ADV,
        resMsgId: 1007,
        resEncoder: Hit.RC_POKE_ADV_RESULT,
        controller: getBean(PokesService),
        action: getBean(PokesService)['requestPokeAdv'],
    },
    
];

export class PokeList extends BGObject {
    @BGMysql(EMysqlValueType.blob) @BGField(EBGValueType.object, true) pokes: BGArray<PokeInfo> = new BGArray(this, PokeInfo);
}
    

export class PokeInfo extends BGObject {
    @BGField(EBGValueType.int32, true) uid: number = 0;
    @BGField(EBGValueType.int32, true) id: number = 0;
    @BGField(EBGValueType.int32, true) lv: number = 0;
    @BGField(EBGValueType.int32, true) adv: number = 0;
    @BGField(EBGValueType.int32, true) alv: number = 0;
    @BGField(EBGValueType.int32, true) ivs_hp: number = 0;
    @BGField(EBGValueType.int32, true) ivs_atk: number = 0;
    @BGField(EBGValueType.int32, true) ivs_def: number = 0;
    @BGField(EBGValueType.int32, true) ivs_spa: number = 0;
    @BGField(EBGValueType.int32, true) ivs_spd: number = 0;
    @BGField(EBGValueType.int32, true) ivs_speed: number = 0;
    @BGField(EBGValueType.int32, true) ivs_accu: number = 0;
    @BGField(EBGValueType.int32, true) ivs_evasion: number = 0;
    @BGField(EBGValueType.int32, true) nature: number = 0;
    @BGField(EBGValueType.int32, true) ability: number = 0;
    @BGField(EBGValueType.int32, true) moves: BGArray<number> = new BGArray(this);
}
    

export const MsgIdPokeList = 1008;
