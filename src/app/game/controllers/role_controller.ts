import {JsonController} from "routing-controllers";
import {Inject} from "typedi";
import {ResourceService} from "../services/resource_service";
import {BGAction} from "../../../lib/util/descriptor";
import {GameSession} from "../game_session";
import {Zombie} from "../../proto/zombie";
import {Role} from "../modles/role";
import {gameNow} from "../../../lib/util/time";
import {Log} from "../../../lib/util/log";

@JsonController('/role')
export class RoleController {

    @Inject()
    resourceService: ResourceService;

    @BGAction()
    async online(session: GameSession, pck: Zombie.Session_Init) {
        let role = new Role(parseInt(pck.uId), session);
        let exist = await role.load();
        if (!exist) {
            await role.create('name' + pck.uId);
        }

        session.role = role;

        role.lastLoginTime = gameNow();
        role.save().catch(e => Log.uError(role.uid, e));
    }

    @BGAction()
    async ackMsg(session: GameSession, pck: Zombie.Ack_Msg) {
        let current = session.ackMsg.head;
        while (current) {
            if (current.element[0] === pck.msgIdx) {
                session.ackMsg.deleteNode(current);
                break;
            }
            current = current.next;
        }
    }

    @BGAction()
    async heartBeat(session: GameSession) {

    }
}