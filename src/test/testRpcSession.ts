import 'mocha';
import {RpcSession} from "../lib/net/rpc_session";
import {allRpc, name, hashMd5} from "../app/game/schema/SRoleBattle";
import {Log} from "../lib/util/log";
import {Hit} from "../app/game/schema/cmd";

describe('rpc_session', () => {
    it('connect', async () => {
        return new Promise(async resolve => {
            Log.init('./log');
            let host = '172.16.1.214', port = 8100;
            let battle = new RpcSession(host, port, name, hashMd5, allRpc());
            await battle.init();

            let msg = Hit.STC_BATTLE_INPUT.create({
                fieldCnt: 1,
                teams: [
                    {
                        ver: 6,
                        name: 'poke1',
                        pokes: [{
                            pokeId: 1,
                            lv: 10,
                            alv: 10,
                            ivs: [5, 6, 7, 8, 9, 10, 11, 12],
                            nature: 2,
                            moves: [{id: 101}],
                            abilities: [{id: 65}]
                        }]
                    },
                    {
                        ver: 6,
                        name: 'poke2',
                        pokes: [{
                            pokeId: 4,
                            lv: 10,
                            alv: 10,
                            ivs: [5, 6, 7, 8, 9, 10, 11, 12],
                            nature: 2,
                            moves: [{id: 201}],
                        }]
                    },
                ]
            });

            battle.rpc(msg, this, ((err, msg) => {
                console.log(JSON.stringify(msg));
                resolve();
            }));
        });
    });
});