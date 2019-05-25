import 'mocha';
import {httpPost} from "../lib/util/game_util";
import {CS_LOGIN} from "../app/login/dto/login";

describe('httpPost', () => {

    it('login', (done) => {
        let msg = new CS_LOGIN();
        msg.passport = '201';
        msg.device = '1';
        msg.deviceToken = '1';
        msg.deviceType = '1';
        msg.deviceUid = '1';
        msg.platform = 1;
        msg.pwd = '1';
        httpPost('http://172.16.1.83:7777/login/login', JSON.stringify(msg), (err, data) => {
            console.log(data);
            done();
        });
    });
});