import * as commander from 'commander';
import {Log} from "../../lib/util/log";
import * as WorldDB from "../../lib/mysql/world_db";
import * as LoginDB from "../../lib/mysql/login_db";
import {GameWorld} from "./game_world";
import {Server} from "../../lib/net/ws/web_socket";
import {GameSession} from "./game_session";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {ConfigMgr} from "../../config/data/config_struct";
import {createPidFile, Loop, registerProcessListener} from "../../lib/util/game_util";
import {Global} from "../../lib/util/global";
import {RpcSession} from "../../lib/net/rpc_session";
import {allRpc} from "./schema_generated";

async function main() {
    commander.version('0.0.1')
        .option('-d, --development', 'similar to set NODE_ENV=development', () => process.env.NODE_ENV = 'development')
        .option('-p, --production', 'similar to set NODE_ENV=production', () => process.env.NODE_ENV = 'production')
        .option('-c, --config <path>', 'set config path', path => Global.setConfig(path, true))
        .parse(process.argv);
    Global.setConfig(__dirname + '/../../config/config.development.json', false);

    Log.init(Global.config.log.dir, Global.config.log.level);

    registerProcessListener(async () => {
        gameSession.close();
        await server.stop();
        await GameWorld.instance.stop();
        await mainLoop.stop();
        process.nextTick(async () => {
            await RedisMgr.getInstance(RedisType.GAME).stop();
            await WorldDB.stop();
            await LoginDB.stop();
            process.exit(0);
        });
    });

    ConfigMgr.getInstance().loadAllConfig(process.env.NODE_ENV === 'production' ?
        Global.config['app']['game']['config'] : (__dirname + '/' + Global.config['app']['game']['config']));

    await WorldDB.start(Global.config['mysql']['game_db']);
    await LoginDB.start(Global.config['mysql']['login_db']);
    await GameWorld.instance.start();

    let server = new Server(Global.config['app']['game']['ip'], parseInt(Global.config['app']['game']['port']));
    await server.start(GameSession, {
        controllers: [__dirname + '/controllers/**/*.js']
    });

    let mainLoop = new Loop(GameWorld.instance.update, GameWorld.instance, () => !Global.isAppValid, 100);
    mainLoop.run();

    // for test
    let gameSession = new RpcSession('172.16.1.83', 5555, 'game', allRpc());
    await gameSession.init();
}

main().then(async () => {
    createPidFile();
    Log.sInfo('app start success');
}).catch((reason => {
    Log.sError(reason ? reason.stack : '' + '\napp start fail');
    process.exit(1);
}));