import {Role} from "../modles/role";
import {BGAction, execTime} from "../../../lib/util/descriptor";
import {Get, JsonController, Params, QueryParams} from "routing-controllers";
import * as uuid from 'uuid';
import {EActionCheckType} from "../modles/defines";
import {Inject} from "typedi";
import {ResourceService} from "../services/resource_service";
import {Item} from "../modles/item_model";
import {C2S} from "../../proto/c2s";
import {S2C} from "../../proto/s2c";
import {Post} from "routing-controllers/decorator/Post";
import {GameSession} from "../game_session";
import * as ByteBuffer from "bytebuffer";

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
    async hello(@QueryParams() params) {
        // this.resourceService.test();
        let uid = params['uid'] ? params['uid'] : 1;
        let roleB = new Role(uid, new GameSession());

        roleB.sendProtocol(S2C.SC_GET_REWARD.create());

        let exist = await roleB.load();
        if (!exist) {
            await roleB.create('haha' + uid);
        }

        roleB.testArray.push(1);

        let len = roleB.itemModel.itemMap.length;
        if (len < 3000) {
            for (let i = len; i < len + 100; ++i) {
                let item = new Item();
                item.id = i;
                item.cnt = 1;
                item.uid = i;
                roleB.itemModel.itemMap.set(i, item);
            }
        }

        for (let i = 0; i < 100; ++i) {
            let e = roleB.itemModel.itemMap.get(i);
            if (e) {
                e.cnt = Math.floor(Math.random() * 100);
            }
        }

        roleB.nickname = 'newHaha' + Math.floor(Math.random() * 1000);

        console.log(roleB.dirtyFields());
        await roleB.save();

        let buffer = new ByteBuffer();
        roleB.encodeDelta(buffer);
        console.log(roleB.dirtyFields());

        for (let i = 0; i < 2000; i++) {
            roleB.combat = i;
            roleB.save();
        }

        return 'hello my len=' + roleB.itemModel.itemMap.length;
    }

    @Post()
    async testPost(@Params() params) {
        return params;
    }
}