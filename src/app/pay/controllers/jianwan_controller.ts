import {PayUtil, FAILURE, IBaseParam, SUCCESS} from "../pay_util";
import {Log} from "../../../lib/util/log";
import {md5} from "../../../lib/util/game_util";
import {EChargeState} from "../../../lib/mysql/login_db";
import {realNow} from "../../../lib/util/time";
import {EChargeType} from "../../../lib/mysql/login_db";
import {Controller, Get, Params, Post} from "routing-controllers";

interface IJianwanParam extends IBaseParam {
    nt_data: string;
    nt_data_json: string;
    sign: string;
    md5Sign: string;
}

interface nt_data {
    is_test: string; // 是否为测试订单 1为测试 0为线上正式订单，游戏应根据情况确定上线后是否向测试订单发放道具。
    channel: string; // 渠道标示ID 注意:游戏可根据实情,确定发货时是否校验充值来源渠道是否与该角色注册渠道相符
    channel_uid: string; // 渠道用户唯一标示,该值从客户端GetUserId()中可获取
    order_no: string; // DataSDK唯一订单号
    pay_time: string; // 支付时间 2015-01-01 23:00:00
    amount: string; // 成交金额，单位元，游戏最终发放道具金额应以此为准
    status: string; // 充值状态:0成功, 1失败(为1时 应返回FAILED失败)
    extras_params: string; // 可为空,充值状态游戏客户端调用SDK发起支付时填写的透传参数.没有则为空
}

const product_code = '20181119001';
const product_key = '2a493a7fb8fa41a28cac4a74b796fbfe';
const md5key = '83439af2fe704f8cb25122f903a9caa2';

// http://guanreng1.imobile-ent.com:8889/jianwan/pay
@Controller('/jianwan')
export class JianwanController {

    @Get('/pay')
    public async pay(@Params() args: IJianwanParam) {
        try {
            let md5Local = md5(args.nt_data + args.sign + md5key);
            Log.sInfo(`${md5Local}, ${args.md5Sign}, ${md5Local === args.md5Sign}`);
            if (md5Local !== args.md5Sign) {
                return 'jianwan sign error';
            }

            let nt_data: nt_data = JSON.parse(args.nt_data_json);
            let arr = nt_data.extras_params.split('-');
            if (arr.length !== 4) {
                return 'extra param error';
            }

            let platformId = parseInt(arr[0]), roleId = parseInt(arr[1]), serverId = parseInt(arr[2]),
                goodsId = parseInt(arr[3]);

            // 简玩要求重复订单情况下直接返回SUCCESS
            let innerOrderId = PayUtil.getInnerOrderId(platformId, serverId, roleId, nt_data.order_no);
            let isDuplicate = await PayUtil.isOrderDuplicate(innerOrderId);
            if (isDuplicate) {
                Log.sWarn('order duplicate, id=' + innerOrderId);
                return SUCCESS;
            }

            // 同步db
            let result = await PayUtil.sync2Login({
                role_id: roleId,
                goods_id: goodsId,
                goods_quantity: 1,
                currency: 'CNY',
                value: parseInt(nt_data.amount) * 100,
                virtual_value: 0,
                type: nt_data.is_test === '1' ? EChargeType.test : EChargeType.normal,
                inner_order_id: innerOrderId,
                platform: platformId,
                platform_order_id: nt_data.order_no,
                platform_account_id: 0,
                platform_payment_type: 275,
                payment_time: realNow(),
                client_order_id: nt_data.order_no,
                addition2: platformId.toString(),
                diamond_pay: 0,
                state: EChargeState.paied,
            }, serverId, false);

            if (result) {
                return SUCCESS;
            }
            else {
                return FAILURE;
            }
        }
        catch (e) {
            Log.sError(e);
            return FAILURE;
        }
    }
}