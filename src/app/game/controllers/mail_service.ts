import {BGAction} from "../../../lib/util/descriptor";
import {JsonController} from "routing-controllers";
import {Role} from "../modles/role";
import {Hit} from "../schema/cmd";

@JsonController('/mail')
export class MailService {

    @BGAction()
    requestDelMail(role: Role, msg: Hit.CR_DEL_MAIL): Hit.RC_DEL_MAIL_RESULT {
        // TODO
        return Hit.RC_DEL_MAIL_RESULT.create();
    }
}