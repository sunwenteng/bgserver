import {BGField, BGMap, BGObject, EBGValueType} from "../../../lib/util/bg_util";
import {Role} from "./role";
import {Zombie} from "../../proto/zombie";
import * as ByteBuffer from "bytebuffer";

export class Item extends BGObject {
    @BGField(EBGValueType.uint32) uid: number = 0;
    @BGField(EBGValueType.uint32) id: number = 0;
    @BGField(EBGValueType.uint32) cnt: number = 0;
}

export class ItemModel extends BGObject {
    @BGField(EBGValueType.object) itemMap: BGMap<Item> = new BGMap(this, Item);
    role: Role = undefined;

    constructor(role: Role) {
        super(role);
        this.role = role;
    }

    sendFull() {
        let pck = Zombie.Data_Sync.create();
        pck.type = Zombie.Data_Sync_Type.E_DST_FULL;
        let buf = new ByteBuffer();
        this.encodeFull(buf);
        pck.data = buf.slice(0, buf.offset).toBuffer();
        this.role.sendProtocol(pck);
    }

    sendDelta() {
        let pck = Zombie.Data_Sync.create();
        pck.type = Zombie.Data_Sync_Type.E_DST_DELTA;
        let buf = new ByteBuffer();
        this.encodeDelta(buf);
        pck.data = buf.slice(0, buf.offset).toBuffer();
        this.role.sendProtocol(pck);
    }
}