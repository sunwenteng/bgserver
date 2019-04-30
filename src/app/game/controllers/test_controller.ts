import {C2S, S2C} from "../../proto/cmd";
import {Role} from "../modles/role";
import {BGAction, execTime} from "../../../lib/util/descriptor";
import {Get, JsonController} from "routing-controllers";
import * as uuid from 'uuid';
import {EActionCheckType} from "../modles/defines";
import {Inject} from "typedi";
import {ResourceService} from "../services/resource_service";
import {Item} from "../modles/item_model";

@JsonController('/test')
export class TestController {

    @Inject()
    resourceService: ResourceService;

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

    @execTime(false)
    @Get()
    async hello() {
        // this.resourceService.test();
        let roleB = new Role(1);
        await roleB.load();

        let len = roleB.itemModel.itemMap.length;
        if (len < 3000) {
            for (let i = len; i < len + 100; ++i) {
                roleB.itemModel.itemMap.set(i, new Item(i, 1, 1));
            }
        }

        for (let i = 0; i < 100; ++i) {
            roleB.itemModel.itemMap.get(i).cnt = Math.floor(Math.random() * 100);
        }
        await roleB.save(true);

        return 'hello my len=' + roleB.itemModel.itemMap.length;
    }
}