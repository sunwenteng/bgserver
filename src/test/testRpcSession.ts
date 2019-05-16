import 'mocha';
import {RpcSession} from "../lib/net/rpc_session";
import {allRpc} from "../app/game/schema_generated";

describe('rpc_session', () => {
    it('connect', async () => {
        let host = '172.16.1.83', port = 5555;
        let rpc = new RpcSession(host, port, 'test', allRpc());
        await rpc.init();
    });
});