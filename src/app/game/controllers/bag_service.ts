import {BGAction} from "../../../lib/util/descriptor";
import {JsonController} from "routing-controllers";
import {Role} from "../modles/role";
import {Hit} from "../schema_generated/cmd";
import {ItemBagEntry, MsgIdItemBag} from "../schema_generated/BagService";
import * as ByteBuffer from "bytebuffer";
import {Zombie} from "../../proto/zombie";

@JsonController('/bag')
export class BagService {

    @BGAction()
    requestUseItem(role: Role, msg: Hit.CR_USE_ITEM): Hit.RC_USE_ITEM_RESULT {
        role.exp = role.exp + 1;
        role.name = 'robot' + Math.floor(Math.random() * 100);
        role.sendDelta();

        let e = new ItemBagEntry();
        e.cnt = Math.floor(Math.random() * 100);
        e.uid = 1;
        e.id = 1001;
        role.itemBag.items.push(e);

        role.itemBag.items.remove(0);

        role.itemBag.items.get(0).cnt = Math.floor(Math.random() * 100) * 100;

        e.cnt = Math.floor(Math.random() * 100);
        e.uid = 2;
        e.id = 1002;
        role.itemBag.goods.set(e.uid, e);

        e.cnt = Math.floor(Math.random() * 100);
        e.uid = 3;
        e.id = 1002;
        role.itemBag.goods.set(e.uid, e);

        role.itemBag.goods.remove(2);

        role.itemBag.goods.get(3).cnt = Math.floor(Math.random() * 100) * 100;

        let buffer = new ByteBuffer();
        buffer.LE(true);
        role.itemBag.encodeDelta(buffer, 0);
        role.session.sendProtocol(MsgIdItemBag, Zombie.Data_Sync, Zombie.Data_Sync.create({
            type: Zombie.Data_Sync_Type.E_DST_DELTA,
            data: buffer.buffer.slice(0, buffer.offset)
        }));
        // TODO

        role.sendProtocol(Hit.RC_BROADCAST.create({
            content: 'hello',
            params: [{type: 1, val: 'haha'}, {type: 2, val: 'haha2'}]
        }));
        return Hit.RC_USE_ITEM_RESULT.create({errCode: 999});
    }
}