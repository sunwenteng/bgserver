import {BGAction} from "../../../lib/util/descriptor";
import {JsonController} from "routing-controllers";
import {Role} from "../modles/role";
import {Hit} from "../schema_generated/cmd";

@JsonController('/gacha')
export class GachaService {

    @BGAction()
    requestGacha(role: Role, msg: Hit.CR_GACHA): Hit.RC_GACHA_RESULT {
        // TODO
        return Hit.RC_GACHA_RESULT.create();
    }
}