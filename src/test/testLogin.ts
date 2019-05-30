import 'mocha';
import {httpPost} from "../lib/util/game_util";
import {
    CS_CHOOSE_SERVER,
    CS_GET_INFO,
    CS_GET_SERVER_LIST,
    CS_LOGIN,
    SC_GET_SERVER_LIST,
    SC_LOGIN
} from "../app/login/dto/login";

describe('httpPost', () => {

    it('login', async () => {
        let msg = new CS_LOGIN();
        msg.passport = '201';
        msg.device = '1';
        msg.deviceToken = '1';
        msg.deviceType = '1';
        msg.deviceUid = '1';
        msg.platform = 1;
        msg.pwd = '1';
        let msgRes = await httpPost('http://172.16.1.83:7777/login/login', JSON.stringify(msg)) as SC_LOGIN;
        console.log(msgRes);
        let msg1 = new CS_GET_SERVER_LIST();
        msg1.passportId = msgRes.passportId;
        let msg1Res = await httpPost('http://172.16.1.83:7777/login/getServerList', JSON.stringify(msg1)) as SC_GET_SERVER_LIST;
        console.log(msg1Res);
        for (let server of msg1Res.servers) {
            let msg2 = new CS_CHOOSE_SERVER();
            msg2.passportId = msgRes.passportId;
            msg2.serverId = server.serverId;
            console.log(await httpPost('http://172.16.1.83:7777/login/chooseServer', JSON.stringify(msg2)));
        }
    });

    it('getInfo', async () => {
        let msg = new CS_GET_INFO();
        console.log(await httpPost('http://172.16.1.83:7777/login/getInfo', JSON.stringify(msg)));
    });
});