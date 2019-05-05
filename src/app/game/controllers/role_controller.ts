import {Controller} from "routing-controllers";
import {Inject} from "typedi";
import {ResourceService} from "../services/resource_service";
import {BGAction} from "../../../lib/util/descriptor";
import {GameSession} from "../game_session";
import {Zombie} from "../../proto/zombie";

@Controller()
export class RoleController {

    @Inject()
    resourceServer: ResourceService;

    @BGAction()
    async online(session: GameSession, pck: Zombie.Session_Init) {

    }
}