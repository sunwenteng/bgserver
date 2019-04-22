import {Log} from "../../lib/util/log";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {Role} from "../game/modles/role";
import * as WorldDB from '../../lib/mysql/world_db';
import {WorldDataRedisKey} from "../game/game_world";
import * as LoginDB from "../../lib/mysql/login_db";
import {createPidFile, Loop, registerProcessListener} from "../../lib/util/game_util";
import {Global} from "../../lib/util/global";
import * as fs from "fs";
import * as commander from "commander";
import {realNow} from "../../lib/util/time";

let execMode = false;

async function main() {
    commander.version('0.0.1')
        .option('-d, --development', 'similar to set NODE_ENV=development', () => process.env.NODE_ENV = 'development')
        .option('-p, --production', 'similar to set NODE_ENV=production', () => process.env.NODE_ENV = 'production')
        .option('-c, --config <path>', 'set config path', path => Global.setConfig(path, true))
        .option('-b, --back <uid>|<date>', 'back a role data to date(2018-01-02_00:00:00)', async (param) => {
            execMode = true;
            Log.init('./tmp', 'debug');
            Log.sInfo(param);
            let paramArr = param.split('|'), uid = paramArr[0], date = paramArr[1], arr = date.split('_'),
                dir = './log/', reqFileName = 'app.log.' + arr[0], files = fs.readdirSync(dir),
                reqTime = new Date(date.replace('_', ' ')).getTime();
            for (let file of files) {
                if (file.indexOf(reqFileName) !== -1) {
                    let states = fs.statSync(dir + file);
                    if (states.isFile() && states.ctimeMs >= reqTime) {
                        let lines = fs.readFileSync(dir + file).toString().split('\n');
                        for (let line of lines) {
                            let infoArray = line.split(','), logTime = new Date(infoArray[0]).getTime(),
                                roleId = infoArray[2];
                            if (roleId === uid && reqTime < logTime && (logTime - reqTime) < Global.config['app']['cache']['interval']) {
                                let data = line.substring(line.indexOf('data=') + 'data='.length),
                                    obj = JSON.parse(data);
                                let role = new Role(parseInt(uid));
                                await RedisMgr.getInstance(RedisType.GAME).lock(Role.getRedisKey(role.uid), async () => {
                                    role.deserialize(obj);
                                    await role.save(true);
                                    Log.sInfo(`role ${uid} back to time ${infoArray[0]} based on file ${file}`);
                                });
                                process.exit(0);
                            }
                        }
                    }
                }
            }
            Log.sError(`role ${uid} not found during date ${date}`);
            process.exit(0);
        })
        .parse(process.argv);

    Global.setConfig(__dirname + '/../../config/config.development.json', false);

    Log.init(Global.config.log.dir, Global.config.log.level);

    registerProcessListener(async () => {
        await mainLoop.stop();
        process.nextTick(async () => {
            await RedisMgr.getInstance(RedisType.GAME).stop();
            await WorldDB.stop();
            await LoginDB.stop();
            process.exit(0);
        });
    });

    await WorldDB.start(Global.config['mysql']['game_db']);
    await LoginDB.start(Global.config['mysql']['login_db']);

    if (execMode) {
        return;
    }

    let mainLoop = new Loop(async () => {
        Log.sInfo('start saving dirty roles from redis to mysql');
        let role: Role = null;
        let roleIds = await RedisMgr.getInstance(RedisType.GAME).smembers(WorldDataRedisKey.DIRTY_ROLES);
        for (let roleId of roleIds) {
            role = new Role(parseInt(roleId));
            Log.sInfo('start getting lock roleKey=' + roleId);
            await RedisMgr.getInstance(RedisType.GAME).lock(Role.getRedisKey(role.uid), async () => {
                let exist = await role.load();
                if (!exist) {
                    Log.sWarn('role not found in cache, roleKey=%s', roleId);
                }
                else {
                    try {
                        Log.sInfo('start saving roleKey=' + roleId);
                        let data = role.serialize(true);
                        Log.uInfo(role.uid, 'snapshotId=' + realNow() + ', data=' + JSON.stringify(data));
                        await WorldDB.conn.execute('update player_info_' + role.getTableNum() + ' set ? where ?', [data, {uid: role.uid}]);
                        await role.syncDataToLogin();
                        await RedisMgr.getInstance(RedisType.GAME).srem(WorldDataRedisKey.DIRTY_ROLES, roleId);
                        Log.sInfo('end save role successfully, roleKey=%s', roleId);
                    }
                    catch (e) {
                        await role.setAlive();
                        Log.sError('role save failed, roleId=' + roleId + ', e=' + e);
                    }
                }
            });
        }
        Log.sInfo('end saving dirty roles from redis to mysql');

        Log.sInfo('start saving dirty guild from redis to mysql');
        Log.sInfo('end saving dirty guilds from redis to mysql');

        Log.sInfo('start saving controllers from redis to mysql');
        let result = await LoginDB.conn.execute('select * from gameserver_info');
        for (let server of result) {
            let serverId = server.server_id;
        }

        Log.sInfo('end saving controllers from redis to mysql');
    }, this, () => !Global.isAppValid, Global.config['app']['cache']['interval']);
    mainLoop.run();
}

main().then(() => {
    createPidFile();
    Log.sInfo('app start success');
}).catch((reason => {
    Log.sError(reason + '\napp start fail');
    process.exit(1);
}));