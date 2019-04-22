import {Log} from "../../lib/util/log";
import * as GameUtil from "../../lib/util/game_util";
import * as LoginDB from "../../lib/mysql/login_db";
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as http from "http";
import {createPidFile} from "../../lib/util/game_util";
import {registerProcessListener} from "../../lib/util/game_util";
import * as CtlMgr from "./ctl_mgr";
import {Global} from "../../lib/util/global";
// @ts-ignore
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
        process.nextTick(async () => {
            await LoginDB.stop();
            process.exit(0);
        });
    });

    CtlMgr.init();
    CtlMgr.start();

    await LoginDB.start(Global.config['mysql']['login_db']);

    let app = express();
    app.set('port', Global.config['app']['pay']['port']);
    app.set('host', Global.config['app']['pay']['ip']);
    app.use("/*", bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true, limit: '1mb'}));
    app.use((req: express.Request, res: express.Response, next) => {
        // let args = GameUtil.parseHttpParams(req);
        // Log.sInfo(req.url + ':' + JSON.stringify(args));
        res.header("Access-Control-Allow-Credentials", 'true');
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Content-Type", "application/json;charset=utf-8");
        if ("OPTIONS" === req.method) {
            res.send(200);
        } else {
            next();
        }
    });

    http.createServer(app).listen(app.get('port'), app.get('host'), () => {
        Log.sInfo('http server is now listening on ' + app.get('host') + ':' + app.get('port'));
    });

    // for test
    app.all("/test", (req: express.Request, res: express.Response) => {
        let args = GameUtil.parseHttpParams(req);
        res.send(JSON.stringify(args));
    });

    app.all("/*", async (req: express.Request, res: express.Response) => {
        CtlMgr.push(req, res);
    });
}

main().then(() => {
    createPidFile();
    Log.sInfo('app start success');
}).catch((reason => {
    Log.sError(reason + '\napp start fail');
    process.exit(1);
}));