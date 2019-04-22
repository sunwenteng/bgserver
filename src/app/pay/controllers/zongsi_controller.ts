import * as express from 'express';
import {BaseController, FAILURE, SUCCESS} from "../base_controller";
import {Log} from "../../../lib/util/log";
import {EChargeState} from "../../../lib/mysql/login_db";
import {realNow} from "../../../lib/util/time";
import {EChargeType} from "../../../lib/mysql/login_db";
import {privateDecrypt} from "../../../lib/util/rsa";

/*
参数	参数名称	类型	参数说明	样例
order_no	厂商订单号	String	厂商订单号	ZFBOD201505110002
order_code	订单号	string	订单号	201854654531513265
subject	商品名称	String	用户购买的产品名称	测试
subject_desc	商品描述	String	用户购买的商品描述	测试测试
pay_status	交易状态	Int	该笔交易状态，0 苹果已支付，1微信已支付, 2支付宝已支付	1
amount	到帐金额	Double	交易成功金额，以元为单位，精确到分	0.02
gid	主游戏ID	Int	主游戏ID	1
sub_gid	子游戏ID	Int	子游戏ID	1111
uid	用户ID	Int	唯一用户标识	123
user_name	用户名	string	用户名	zx2154561
pay_order_id	支付平台交易流水号	String	如果用户选择支付宝/微信支付则有该值	2015051100001000700053522525
order_time	成功支付时间	string	支付成功时间（透传）	2018-01-30 18:00:00
memo	透传	sting	透传参数	data
*/

interface ParamsDetail {
    order_no:string;
    order_code:string;
    subject:string;
    subject_desc:string;
    pay_status:number;
    amount:number;
    gid:number;
    sub_gid:number;
    uid:number;
    user_name:string;
    pay_order_id:string;
    order_time:string;
    memo:string;
}
//公钥
const pubkey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDI4SPIwGx78Qn5q8jqIFXxnQJT
qZFKCKz9/dKjFz/1Vf3ecOfGnTh/HkkSqF/Z8wSkoxqPIUf46bd6hAYVqfINHv5e
lVt87wZacZdESg+Aw3jobcOXVkEt2ezELkG8xtSxvu0kv3lFCZ1SP4uib3exovOy
aefXQJYivciVUHk1LwIDAQAB
-----END PUBLIC KEY-----`;
//私钥
const prikey = `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDI4SPIwGx78Qn5q8jqIFXxnQJTqZFKCKz9/dKjFz/1Vf3ecOfG
nTh/HkkSqF/Z8wSkoxqPIUf46bd6hAYVqfINHv5elVt87wZacZdESg+Aw3jobcOX
VkEt2ezELkG8xtSxvu0kv3lFCZ1SP4uib3exovOyaefXQJYivciVUHk1LwIDAQAB
AoGBALHPsBg0VBLFwvmw2LB9nPW48GVT9Jpe4ZoWQoxAuUmWK5jpwg/p/SdwjGgq
iGXpGlQNWCYX5JhtcQ7OrIAipXDri8SYysUTJZfvvK3exqzy9MlImmkM0lXVBlRd
Pfl54nGkWZuiQ/nr09uxS2T0W0akLMI0VrjAv5AdWQwNmHMhAkEA8gw7YHOaKGRV
t+AvMyYSoNTltMX0+Z0B9023ozK3vEqjdUsndZ8vTGnXBW8YlFAF+g7TJN2dzJtY
TNrwE30OUQJBANR1aLr2AgUfLsnNVZCwelI0Zaer13QAdOnlxPHjTCAtJcP1dMUT
m2LlNNpYdN6A3X9n8/LIYxrYahounrwvq38CQB7owvhZKtl3np6hiUV92ikhpsfD
87mgfCzJhubXRjFMUr1awIo7rr2SUnwGKNxfr7O0CvCNQGZtfAQsfTXv5VECQCdT
kE5DKT6Pdhaupm8A67N5tXNi8J+tUfbVrC3mF/pAwSPTtIiiR3n32V+tTfy9t8JU
mKhRBV87vfAYvxMwc7sCQQDQ60/rXzpcO3N//RgkaJgyrXfp2STjDIBQSwvH/ySK
CSIclGpB5PvYOXBsSu6qrvWq7vhzBMkKcjvjn3cXRg+D
-----END RSA PRIVATE KEY-----`;

// http://guanreng1.imobile-ent.com:8889/zongsi/pay
export class ZongsiController extends BaseController {
    public static instance = new ZongsiController();

    public async pay(req: express.Request, res: express.Response, args: any) {
        try {
            let ret = privateDecrypt(args['msg'], prikey);
            Log.sInfo(`${ret}`);

            let params: ParamsDetail = JSON.parse(ret);
            let arr = params.memo.split('-');
            if (arr.length !== 4) {
                this.send(res, 'extra param error');
                return;
            }

            let platformId = parseInt(arr[0]), roleId = parseInt(arr[1]), serverId = parseInt(arr[2]),
                goodsId = parseInt(arr[3]);

            let innerOrderId = this.getInnerOrderId(platformId, serverId, roleId, params.order_code);
            let isDuplicate = await this.isOrderDuplicate(innerOrderId);
            if (isDuplicate) {
                Log.sWarn('order duplicate, id=' + innerOrderId);
                this.send(res, JSON.stringify({
                    code: 200,
                    msg: SUCCESS,
                    success: true,
                    order_code: innerOrderId
                }));
                return;
            }

            // 同步db
            let result = await this.sync2Login({
                role_id: roleId,
                goods_id: goodsId,
                goods_quantity: 1,
                currency: 'CNY',
                value: params.amount * 100,
                virtual_value: 0,
                type: EChargeType.normal,
                inner_order_id: innerOrderId,
                platform: platformId,
                platform_order_id: params.order_no,
                platform_account_id: 0,
                platform_payment_type: 275,
                payment_time: realNow(),
                client_order_id: params.order_no,
                addition2: platformId.toString(),
                diamond_pay: 0,
                state: EChargeState.paied,
            }, serverId, false);

            if (result) {
                this.send(res, JSON.stringify({
                    code: 200,
                    msg: SUCCESS,
                    success: true,
                    order_code: innerOrderId
                }));
            }
            else {
                this.send(res, JSON.stringify({
                    code: 500,
                    msg: SUCCESS,
                    success: true,
                    order_code: 0
                }));
            }
        }
        catch (e) {
            Log.sError(e);
            this.send(res, {
                code: 500,
                msg: FAILURE,
                success: true,
                order_code: 0
            });
        }
    }
}