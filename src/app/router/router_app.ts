import {TcpServer} from "../../lib/net/tcp/tcp_server";
import {Log} from "../../lib/util/log";
import {createPidFile, registerProcessListener} from "../../lib/util/game_util";
import {Global} from "../../lib/util/global";

registerProcessListener();
Log.init(Global.config.log.dir, Global.config.log.level);
let server = new TcpServer();
server.start(Global.config['app']['router'].ip, Global.config['app']['router'].port);

createPidFile();

Log.sInfo('app start success');