import {C2S, S2C} from "../../proto/cmd";
import {Role} from "../modles/role";
import {action, controller} from "../../../lib/util/descriptor";

@controller
export class TestController {
    public static instance = new TestController();

    @action()
    echo(role: Role, msg: C2S.CS_TEST_ECHO) {
        let pck = S2C.SC_TEST_ECHO.create();
        pck.msg = '';
        pck.cmdId = 1;
        role.sendProtocol(pck);
    }

    @action()
    async readAndWrite(role: Role, msg: C2S.CS_TEST_ECHO) {

    }

    @action()
    async readonly(role: Role, msg: C2S.CS_TEST_ECHO) {

    }
}