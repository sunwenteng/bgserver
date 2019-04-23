import {Log} from "../../lib/util/log";
import * as LoginDB from "../../lib/mysql/login_db";
import {createPidFile} from "../../lib/util/game_util";
import {registerProcessListener} from "../../lib/util/game_util";
import {Global} from "../../lib/util/global";
import * as commander from "commander";
import {Server} from "../../lib/net/ws/web_socket";

async function main() {
    commander.version('0.0.1')
        .option('-d, --development', 'similar to set NODE_ENV=development', () => process.env.NODE_ENV = 'development')
        .option('-p, --production', 'similar to set NODE_ENV=production', () => process.env.NODE_ENV = 'production')
        .option('-c, --config <path>', 'set config path', path => Global.setConfig(path, true))
        .parse(process.argv);
    Global.setConfig(__dirname + '/../../config/config.development.json', false);

    Log.init(Global.config.log.dir, Global.config.log.level);

    registerProcessListener(async () => {
        process.nextTick(async () => {
            await LoginDB.stop();
            process.exit(0);
        });
    });

    await LoginDB.start(Global.config['mysql']['login_db']);

    let server = new Server(Global.config['app']['pay']['ip'], parseInt(Global.config['app']['pay']['port']));
    await server.start(null, __dirname + '/controllers/**/*.js');
}

main().then(() => {
    createPidFile();
    Log.sInfo('app start success');
}).catch((reason => {
    Log.sError(reason + '\napp start fail');
    process.exit(1);
}));