import {Log} from "../../lib/util/log";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import * as WorldDB from '../../lib/mysql/world_db';
import * as LoginDB from "../../lib/mysql/login_db";
import {createPidFile, Loop, registerProcessListener} from "../../lib/util/game_util";
import {initGmCommand, readNewGmCommand, updateGmCommand} from "./gm_mgr";
import {Global} from "../../lib/util/global";
import * as commander from "commander";

async function main() {
    commander.version('0.0.1')
        .option('-d, --development', 'similar to set NODE_ENV=development', () => process.env.NODE_ENV = 'development')
        .option('-p, --production', 'similar to set NODE_ENV=production', () => process.env.NODE_ENV = 'production')
        .option('-c, --config <path>', 'set config path', path => Global.setConfig(path, true))
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

    await initGmCommand();

    let mainLoop = new Loop(async () => {
        await readNewGmCommand();
        let ret = await updateGmCommand();
        if (!ret) {
            Log.sError('update gmCmd failed');
        }
    }, this, () => !Global.isAppValid, Global.config['app']['gm']['interval']);
    mainLoop.run();
}

main().then(() => {
    createPidFile();
    Log.sInfo('app start success');
}).catch((reason => {
    Log.sError(reason.stack + '\napp start fail');
    process.exit(1);
}));