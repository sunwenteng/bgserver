import {Log} from "../../lib/util/log";
import * as LoginDB from "../../lib/mysql/login_db";
import {LoginWorld} from "./login_world";
import {Server} from "../../lib/net/ws/web_socket";
import {LoginSession} from "./login_session";
import {createPidFile, Loop, registerProcessListener} from "../../lib/util/game_util";
import {Global} from "../../lib/util/global";
// @ts-ignore
import * as commander from "commander";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";

async function main() {
    commander.version('0.0.1')
        .option('-d, --development', 'similar to set NODE_ENV=development', () => process.env.NODE_ENV = 'development')
        .option('-p, --production', 'similar to set NODE_ENV=production', () => process.env.NODE_ENV = 'production')
        .option('-c, --config <path>', 'set config path', path => Global.setConfig(path, true))
        .parse(process.argv);
    Global.setConfig(__dirname + '/../../config/config.development.json', false);

    Log.init(Global.config.log.dir, Global.config.log.level);

    registerProcessListener(async () => {
        await server.stop();
        await LoginWorld.instance.stop();
        await mainLoop.stop();
        process.nextTick(async () => {
            await RedisMgr.getInstance(RedisType.GAME).stop();
            await LoginDB.stop();
            process.exit(0);
        });
    });

    await LoginDB.start(Global.config['mysql']['login_db']);
    await LoginWorld.instance.start();

    let server = new Server(Global.config['app']['login']['ip'], parseInt(Global.config['app']['login']['port']));
    await server.start(LoginSession);

    let mainLoop = new Loop(LoginWorld.instance.update, LoginWorld.instance, () => !Global.isAppValid, 100);
    mainLoop.run();
}

main().then(() => {
    createPidFile();
    Log.sInfo('app start success');
}).catch((reason => {
    Log.sError(reason + '\napp start fail');
    process.exit(1);
}));