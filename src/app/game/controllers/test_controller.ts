import {C2S, S2C} from "../../proto/cmd";
import {Role} from "../modles/role";
import {BGAction} from "../../../lib/util/descriptor";
import {Get, JsonController} from "routing-controllers";
import * as uuid from 'uuid';
import {EActionCheckType} from "../modles/defines";

@JsonController('/test')
export class TestController {

    @BGAction(EActionCheckType.noCheck)
    echo(role: Role, msg: C2S.CS_TEST_ECHO) {
        let pck = S2C.SC_TEST_ECHO.create();
        pck.msg = '';
        pck.cmdId = 12;
        role.sendProtocol(pck);
    }

    @BGAction(EActionCheckType.authedThenInvalid)
    async readAndWrite(role: Role, msg: C2S.CS_TEST_ECHO) {

    }

    @BGAction()
    async readonly(role: Role, msg: C2S.CS_TEST_ECHO) {

    }

    @Get('/uuid')
    uuid() {
        return uuid.v1();
    }

    @Get()
    hello() {
        return 'hello';
    }
}