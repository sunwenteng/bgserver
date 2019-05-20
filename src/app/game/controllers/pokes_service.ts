import {BGAction} from "../../../lib/util/descriptor";
import {JsonController} from "routing-controllers";
import {Role} from "../modles/role";
import {Hit} from "../schema/cmd";

@JsonController('/pokes')
export class PokesService {

    @BGAction()
    requestPokeLvUp(role: Role, msg: Hit.CR_POKE_LV_UP): Hit.RC_POKE_LV_UP_RESULT {
        // TODO
        return Hit.RC_POKE_LV_UP_RESULT.create();
    }

    @BGAction()
    requestPokeAdv(role: Role, msg: Hit.CR_POKE_ADV): Hit.RC_POKE_ADV_RESULT {
        // TODO
        return Hit.RC_POKE_ADV_RESULT.create();
    }
}