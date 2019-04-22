import * as express from 'express';
import {BaseController, FAILURE, IBaseParam, SUCCESS} from "../base_controller";
import {Log} from "../../../lib/util/log";
import {md5} from "../../../lib/util/game_util";
import {EChargeState} from "../../../lib/mysql/login_db";
import {realNow} from "../../../lib/util/time";
import {EChargeType} from "../../../lib/mysql/login_db";
import * as crypto from 'crypto';

interface IWanpiParam extends IBaseParam {
    tradeNo: string; // 订单号
    uid: string;     // 用户id
    pid: string;     // 商品id
    gameId: string;  // 游戏id
    time: string;    // 下单时间
    serverId: string;   // 区服id
    extras: string;  // 透传
    sign: string;    // 校验码
}

const gameId = 8,
    appId = 1072,
    appKey = '7f3868c8b8d0a514d339dbdfe0bb50c9';

// http://chat.moltentec.com:8888/wanpi/pay
export class WanpiController extends BaseController {
    public static instance = new WanpiController();

    public async pay(req: express.Request, res: express.Response, args: IWanpiParam) {
        try {
            let sign = args.sign;
            delete args['IP'];
            delete args['sign'];

            let tradeNo = args['trade_no'];
            delete args['trade_no'];
            args['tradeNo'] = tradeNo;

            let gameId = args['gameid'];
            delete args['gameid'];
            args['gameId'] = gameId;

            let content = strBuff(args);
            content = decodeURIComponent(content);
            content += ("&appkey=" + appKey);
            Log.sInfo(content);
            let signLocal = crypto.createHash("md5").update(content).digest("hex").toUpperCase();
            Log.sInfo(`${signLocal}, ${sign}, ${signLocal === sign}`);
            if (signLocal !== sign) {
                this.send(res, 'wanpi sign error');
                return;
            }

            let o = JSON.parse(decodeURIComponent(args.extras));
            let arr = o.ext.split('-');
            if (arr.length !== 6) {
                this.send(res, 'extra param error');
                return;
            }

            let platformId = parseInt(arr[0]), roleId = parseInt(arr[1]), serverId = parseInt(arr[2]),
                goodsId = parseInt(arr[3]),
                amount = parseInt(arr[4]), isTest = parseInt(arr[5]);

            let innerOrderId = this.getInnerOrderId(platformId, serverId, roleId, args.tradeNo);
            let isDuplicate = await this.isOrderDuplicate(innerOrderId);
            if (isDuplicate) {
                Log.sWarn('order duplicate, id=' + innerOrderId);
                this.send(res, SUCCESS);
                return;
            }

            // 同步db
            let result = await this.sync2Login({
                role_id: roleId,
                goods_id: goodsId,
                goods_quantity: 1,
                currency: 'CNY',
                value: amount * 100,
                virtual_value: 0,
                type: isTest === 1 ? EChargeType.test : EChargeType.normal,
                inner_order_id: innerOrderId,
                platform: platformId,
                platform_order_id: tradeNo,
                platform_account_id: 0,
                platform_payment_type: 275,
                payment_time: realNow(),
                client_order_id: tradeNo,
                addition2: platformId.toString(),
                diamond_pay: 0,
                state: EChargeState.paied,
            }, serverId, false);

            if (result) {
                this.send(res, SUCCESS);
            }
            else {
                this.send(res, FAILURE);
            }
        }
        catch (e) {
            Log.sError(e);
            this.send(res, FAILURE);
        }
    }
}

function strBuff(data) {
    let list = [];

    for (let key in data) {
        list.push(key);
    }
    list.sort();

    let content = "";
    for (let i = 0; i < list.length; ++i) {
        let key = list[i];
        let value = data[key];
        if (value) {
            content += ((i === 0 ? "" : "&") + key + "=" + value);
        } else {
            content += ((i === 0 ? "" : "&") + key + "=");
        }
    }
    return content;
}