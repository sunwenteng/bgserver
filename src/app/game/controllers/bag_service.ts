import {BGAction} from "../../../lib/util/descriptor";
import {JsonController} from "routing-controllers";
import {Role} from "../modles/role";
import {Hit} from "../schema/cmd";

@JsonController('/bag')
export class BagService {

    @BGAction()
    requestUseItem(role: Role, msg: Hit.CR_USE_ITEM): Hit.RC_USE_ITEM_RESULT {
        // TODO
        return Hit.RC_USE_ITEM_RESULT.create();
    }
}