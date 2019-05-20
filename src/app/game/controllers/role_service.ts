import {BGAction} from "../../../lib/util/descriptor";
import {JsonController} from "routing-controllers";
import {Role} from "../modles/role";
import {Hit} from "../schema_generated/cmd";

@JsonController('/role')
export class RoleService {

    @BGAction()
    requestChangeName(role: Role, msg: Hit.CR_CHANGE_NAME): Hit.RC_CHANGE_NAME_RESULT {
        // TODO
        return Hit.RC_CHANGE_NAME_RESULT.create();
    }

    @BGAction()
    requestRandName(role: Role): Hit.RC_RAND_NAME_RESULT {
        // TODO
        return Hit.RC_RAND_NAME_RESULT.create();
    }

    @BGAction()
    requestFinishBorn(role: Role): void {
        // TODO
        
    }
}