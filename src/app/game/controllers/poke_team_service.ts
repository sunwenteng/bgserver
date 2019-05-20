import {BGAction} from "../../../lib/util/descriptor";
import {JsonController} from "routing-controllers";
import {Role} from "../modles/role";
import {Hit} from "../schema/cmd";

@JsonController('/poke')
export class PokeTeamService {

    @BGAction()
    requestAddToTeam(role: Role, msg: Hit.CR_ADD_TO_TEAM): Hit.RC_ADD_TO_TEAM_RESULT {
        // TODO
        return Hit.RC_ADD_TO_TEAM_RESULT.create();
    }
}