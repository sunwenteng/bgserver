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
        let e = new ItemBagEntry();
        if (role.itemBag.items.length === 0) {
            e.cnt = Math.floor(Math.random() * 100);
            e.uid = 1;
            e.id = 1001;
            role.itemBag.items.push(e);
        }
        else {
            role.itemBag.items.get(0).cnt = Math.floor(Math.random() * 100) * 100;
        }

        let buffer = new ByteBuffer();
        buffer.LE(true);
        role.itemBag.encodeDelta(buffer);
        role.session.sendProtocol(MsgIdItemBag, Zombie.Data_Sync, Zombie.Data_Sync.create({
            type: Zombie.Data_Sync_Type.E_DST_DELTA,
            data: buffer.buffer.slice(0, buffer.offset)
        }));
        // TODO
        return Hit.RC_USE_ITEM_RESULT.create();
    }
}