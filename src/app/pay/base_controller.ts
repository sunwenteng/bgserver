import * as express from 'express';
import {EChargeState} from "../../lib/mysql/login_db";
import * as LoginDB from "../../lib/mysql/login_db";
import {Log} from "../../lib/util/log";

export interface IBaseParam {
    appId: string;
    appKey: string;
}

export interface IChargeInfoParam {
    role_id: number;
    goods_id: number;
    goods_quantity: number;
    currency: string;
    value: number;
    virtual_value: number;
    type: number;
    inner_order_id: string;
    platform: number;
    platform_order_id: string;
    platform_account_id: number;
    platform_payment_type: number;
    payment_time: number;
    client_order_id: string;
    addition2: string;
    diamond_pay: number;
    state: EChargeState;
}

export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export abstract class BaseController {
    abstract async pay(req: express.Request, res: express.Response, args: IBaseParam);

    async sync2Login(args: IChargeInfoParam, serverId: number, bCheckChargeMoney: boolean = true): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            // 验证用户信息
            let passportId = await this.getPassportId(args.role_id);
            if (!passportId) {
                Log.sError('no passport, roleId=' + args.role_id);
                resolve(false);
                return;
            }
            args.platform_account_id = passportId;

            // 验证充值金额
            if (bCheckChargeMoney) {
                let params = [{goods_id: args.goods_id}, {server_id: serverId}, {platform_type: args.platform}];
                let result = await LoginDB.conn.execute('select * from goods_info where ? and ? and ?', params);
                if (result.length === 0) {
                    Log.sError('goods not found, %s', JSON.stringify(params));
                    resolve(false);
                    return;
                }
                if (result[0].cost_count * 100 !== args.value) {
                    Log.sError('money not right, need=' + result[0].cost_count + ', cur=' + args.value);
                    resolve(false);
                    return;
                }
            }

            // execute
            await LoginDB.conn.execute('insert into charge_info set ?', args);
            resolve(true);
        });
    }

    getInnerOrderId(platformId: number, serverId: number, roleId: number, orderNo: string): string {
        return (platformId + '-' + serverId + '-' + roleId + '-' + orderNo);
    }

    async isOrderDuplicate(innerOrderId: string): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            let result = await LoginDB.conn.execute('select auto_id from charge_info where ?', {inner_order_id: innerOrderId});
            resolve(result.length > 0);
        });
    }

    async getPassportId(roleId) {
        let result = await LoginDB.conn.execute('select passport_id from re_passport_player where ?', {role_id: roleId});
        if (result.length === 0) {
            Log.sError('role not exist, uid=' + roleId);
            return 0;
        }
        else {
            return result[0].passport_id;
        }
    }

    send(res: express.Response, data) {
        if (typeof data !== 'string') {
            data = data.toString();
        }

        Log.sInfo('url=%s, data send=%s', res['req']['originalUrl'], data);
        res.send(data);
    }
}