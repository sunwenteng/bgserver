import {BGAction} from "../../../lib/util/descriptor";
import {JsonController} from "routing-controllers";
import {Role} from "../modles/role";
import {Hit} from "../schema/cmd";

@JsonController('/shop')
export class ShopService {

    @BGAction()
    requestPay(role: Role, msg: Hit.CR_PAY): Hit.RC_PAY_RESULT {
        // TODO
        return Hit.RC_PAY_RESULT.create();
    }
}