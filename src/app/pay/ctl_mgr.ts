import {LinkedList} from "../../lib/util/linked_list";
import * as GameUtil from "../../lib/util/game_util";
import {Log} from "../../lib/util/log";
import * as express from 'express';
import * as url from "url";
import {parseHttpParams} from "../../lib/util/game_util";
import {Global} from "../../lib/util/global";

let allController = {};
let allScopes = {};
let requestList = new LinkedList<MyRequest>();

class MyRequest {
    scope: Object;
    invoke: Function;
    req: express.Request;
    res: express.Response;
    args: any;

    constructor(scope, invoke, req, res, args) {
        this.scope = scope;
        this.invoke = invoke;
        this.req = req;
        this.res = res;
        this.args = args;
    }
}

export function init() {
    let channels = Global.config['app']['pay']['channels'];
    for (let channel in channels) {
        let module = require('./controllers/' + channel + '_controller.js');
        if (!module[GameUtil.capitalize(channel) + 'Controller'].instance) {
            throw new Error(channel + ' must have a static instance');
        }
        allController[channel] = module[GameUtil.capitalize(channel) + 'Controller'];
        allScopes[channel] = module[GameUtil.capitalize(channel) + 'Controller'].instance;
    }
}

export function push(req, res) {
    let urlData = url.parse(req.url);
    let urlPath = urlData.pathname;
    let arr = urlPath.split(('/'));
    if (arr.length < 3) {
        res.send('url not valid, urlPath=' + urlPath);
        return;
    }

    let ctlName = arr[1];
    let methodName = arr[2];
    let ctl = allController[ctlName];
    if (!ctl) {
        Log.sError('no controller found, urlPath=' + urlPath);
        res.send('no controller found, urlPath=' + urlPath);
        return;
    }

    let scope = allScopes[ctlName];
    if (!scope) {
        Log.sError('no scope found, urlPath=' + urlPath);
        res.send('no controller found, urlPath=' + urlPath);
        return;
    }

    let invoke = ctl.prototype[methodName];
    if (!invoke) {
        Log.sError('no invoke found, urlPath=' + urlPath);
        res.send('no invoke found, urlPath=' + urlPath);
        return;
    }

    let args = parseHttpParams(req);
    requestList.append(new MyRequest(scope, invoke, req, res, args));
}

export async function update() {
    if (!Global.isAppValid) {
        return;
    }
    let cur = requestList.head;
    while (cur) {
        let e = cur.element;
        requestList.deleteNode(cur);
        cur = cur.next;
        Log.sInfo('url=%s, params=%j', e.req.originalUrl, e.args);
        await e.invoke.apply(e.scope, [e.req, e.res, e.args]);
    }
}

export function start() {
    function loop() {
        setTimeout(async () => {
            update().then(() => {
                loop();
            }).catch((e) => {
                Log.sError(e);
                loop();
            });
        }, 100);
    }

    loop();
}