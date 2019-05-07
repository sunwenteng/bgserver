import {BGField, BGMap, BGObject, EBGValueType} from "../../../lib/util/bg_util";

export class Item extends BGObject {
    @BGField(EBGValueType.uint32) uid: number = 0;
    @BGField(EBGValueType.uint32) id: number = 0;
    @BGField(EBGValueType.uint32) cnt: number = 0;
}

export class ItemModel extends BGObject {
    @BGField(EBGValueType.object) itemMap: BGMap<Item> = new BGMap(this, Item);
}