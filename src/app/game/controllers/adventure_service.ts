import {BGAction} from "../../../lib/util/descriptor";
import {JsonController} from "routing-controllers";
import {Role} from "../modles/role";
import {Hit} from "../schema/cmd";

@JsonController('/adventure')
export class AdventureService {

    @BGAction()
    requestAdventure(role: Role): Hit.RC_ADVENTURE_RESULT {
        // TODO
        return Hit.RC_ADVENTURE_RESULT.create();
    }
}