import * as fs from 'fs';
import * as path from 'path';
import {ERROR_CODE} from './error_code';
import * as crypto from 'crypto';
import * as request from 'request';
import * as express from 'express';
import * as url from 'url';
import {StringChecker} from "./string_checker";
import {Log} from "./log";
import {Global} from "./global";

export function md5(param: string): string {
    let md5sum = crypto.createHash('md5');
    md5sum.update(param, 'utf8');
    return md5sum.digest('hex');
}

export function sha1(param: string): string {
    let md5sum = crypto.createHash('sha1');
    md5sum.update(param, 'utf8');
    return md5sum.digest('hex');
}

export function isInteger(n: number) {
    return Number(n) === n && n % 1 === 0;
}

export function isFloat(n: number) {
    return n === Number(n) && n % 1 !== 0;
}

export function createArray(size: number, initValue: any): any[] {
    let ret = [];
    for (let i = 0; i < size; i++) {
        ret.push(initValue);
    }
    return ret;
}

export function copyObject(obj: any): any {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = copyObject(obj[key]);
        }
    }
    return result;
}

export function addObject(left: any, right: any): void {
    for (let key in right) {
        if (right.hasOwnProperty(key)) {
            if (isNaN(parseInt(right[key]))) {
                continue;
            }
            if (!left[key]) {
                left[key] = right[key];
            }
            else {
                left[key] += right[key];
            }
        }
    }
}

export function copyArray(array: Object[]): any[] {
    let tempArray: any[] = [];

    array.forEach((item) => {
        let temp = copyObject(item);
        tempArray.push(temp);
    });

    return tempArray;
}

/**
 * 在预排序数组二分查找search的下界位置
 * 说明：查找第一个**大于等于**search的下标
 * @param search    查找内容
 * @param length    数组长度
 * @param getValue  获取比较值方法
 * @returns {number}    下界的下标
 */
export function lowerBound(search: number, length: number, getValue: (index: number) => number): number {
    let left = 0, mid = 0, right = length, value;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        value = getValue(mid);
        if (value >= search) {
            right = mid;
        }
        else if (value < search) {
            left = mid + 1;
        }
    }
    return left;
}

/**
 * 在预排序数组二分查找search的上界位置
 * 说明： 查找第一个**大于**search的下标
 * @param search    查找内容
 * @param length    数组长度
 * @param getValue  获取比较值方法
 * @returns {number}    上界的下标
 */
export function upperBound(length: number, search: number, getValue: (index: number) => number): number {
    let left = 0, mid = 0, right = length, value;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        value = getValue(mid);
        if (value > search) {
            right = mid;
        }
        else if (value <= search) {
            left = mid + 1;
        }
    }
    return left;
}

/**
 *
 * @param obj
 * @return {boolean}
 */
export function isEmpty(obj: any): boolean {
    // null and undefined are "empty"
    if (obj === null) {
        return true;
    }

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) {
        return false;
    }
    if (obj.length === 0) {
        return true;
    }

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }

    return true;
}

/**
 * get random [0, 100]
 * @return {number}
 */
export function randChance(): number {
    return Math.floor(Math.random() * 101);
}

/**
 * get random float number (high <= low also ok)
 *      Math.random return number [0.0, 1.0)
 * @param low
 * @param high
 * @return {number}
 */
export function randFloat(low: number, high: number): number {
    return Math.random() * Math.abs(high - low) + Math.min(low, high);
}

/**
 * get random array sequence
 * @param low
 * @param high
 * @return {number}[low, high)
 */
export function randInt(low: number, high: number): number {
    return Math.floor(Math.random() * Math.abs(high - low) + Math.min(low, high));
}

/**
 * get random array sequence
 * @param array
 * @param count - if not given, will rand the whole length of array
 * @return {number[]}
 */
export function randArray(array: any[], count: number): any[] {
    let i, cnt = Math.min(array.length, count || array.length), pos = 0, tmp;
    for (i = 0; i < cnt - 1; i += 1) {
        pos = randInt(i + 1, array.length);
        tmp = array[i];                 // see more about the performance of swap two values in http://jsperf.com/swap-two-numbers-without-tmp-let/9
        array[i] = array[pos];          // use [with a tmp let] for it support not only number value arrays
        array[pos] = tmp;
    }
    return array;
}

/**
 * @param array
 * @param count
 * @param bRepeat
 * @return {Array}
 */
export function randByWeight(array: number[], count: number, bRepeat?: boolean): number[] {
    let i, sum: number = 0, result: number[] = [],
        repeat: boolean = bRepeat || false,
        cnt: number = Math.min(array.length, count || array.length),
        value: number = 0;
    if (cnt === 0) {
        return [];
    }

    for (i = 0; i < array.length; i += 1) {
        sum += array[i];
    }
    if (isNaN(sum)) {
        return [];
    }

    let j = 0, used = {};
    for (i = 0; i < cnt; i += 1) {
        value = randInt(0, sum);

        for (j = 0; j < array.length - i; j += 1) {
            if (!repeat && used[j]) {
                continue;
            }
            if (array[j] > value) {
                break;
            }
            value -= array[j];
        }

        result.push(j);

        if (!repeat) {
            used[j] = true;
        }
    }

    return result;
}

/**
 * 根据数组中的权重返回出随机的下标
 * @param array
 */
export function randOneByWeight(array: number[]): number {
    return array.length === 0 ? null : randByWeight(array, 1, false)[0];
}

/**
 *
 * @param obj
 * @param count
 * @param bRepeat
 */
export function randObjectByWeight(obj: { [key: number]: number }, count: number, bRepeat?: boolean): number[] {
    let keys = Object.keys(obj), values = [];
    keys.forEach((key) => {
        values.push(obj[key]);
    });
    let rand = randByWeight(values, count, bRepeat);
    let result: number[] = [];
    rand.forEach((pos) => {
        result.push(parseInt(keys[pos]));
    });
    return result;
}

export function randOneObjectByWeight(obj: { [key: number]: number }): number {
    let result = randObjectByWeight(obj, 1, false);
    return result.length === 0 ? null : result[0];
}

/**
 * 对象赚数组
 * @param obj
 * @return {Array}
 */
export function objectToArray(obj: any): any[] {
    let arr = [];
    for (let key in obj) {
        arr.push(obj[key]);
    }
    return arr;
}

let pidFile;

/**
 * 创建进程pid文件
 */
export function createPidFile(): void {
    pidFile = path.join(process.cwd(), '/.pid');
    fs.writeFileSync(pidFile, process.pid);
}

let curResVersion = null;

/**
 * 创建游戏所使用的资源版本号文件
 * @param resVersion
 */
export function createResVersionFile(resVersion): void {
    curResVersion = resVersion;
    let versionFile = path.join(process.cwd(), '/.res_version');
    fs.writeFileSync(versionFile, curResVersion);
}

export function getResVersion(): string {
    if (curResVersion === null) {
        if (fs.existsSync(path.join(process.cwd(), '/.res_version'))) {
            curResVersion = fs.readFileSync(path.join(process.cwd(), '/.res_version')).toString();
        }
        else {
            curResVersion = '';
        }
    }
    return curResVersion;
}

/**
 * 字符串插入至指定idx，后续会偏移
 * @param idx
 * @param str
 * @param strAppend
 */
export function stringInsert(idx: number, str: string, strAppend: string): string {
    if (idx > str.length) {
        console.error('error insert');
        return '';
    }
    else if (idx === str.length) {
        return (str + strAppend);
    }
    else if (idx === 0) {
        return (strAppend + str);
    }
    else {
        let start = str.substring(0, idx),
            mid = strAppend,
            end = str.substring(idx);

        return (start + mid + end);
    }
}

/**
 * 字符串反转
 * @param str
 */
export function stringReverse(str: string): string {
    return str.split('').reverse().join('');
}

/**
 * 获取指定目录下所有文件名称
 * @param path
 * @param reg
 */
export function fetchFileList(path: string, reg?: RegExp): string[] {
    if (path[path.length - 1] !== '/') {
        path = path + '/';
    }
    let fileList: string[] = [];
    let fileNames = fs.readdirSync(path);
    fileNames.forEach((fileName) => {
        let fullPath = path + fileName;
        let stat = fs.statSync(fullPath);
        if (!stat.isDirectory()) {
            if (reg) {
                if (reg.test(fileName)) {
                    fileList.push(fileName);
                }
            }
            else {
                fileList.push(fileName);
            }
        }
    });
    return fileList;
}

export async function httpDownload(url, dest) {
    return new Promise<void>(((resolve, reject) => {
        let stream = fs.createWriteStream(dest);
        request
            .get(url)
            .on('response', (response) => {
                if (response.statusCode !== 200) {
                    reject(new Error(url + ' failed'));
                }
                else {
                    response
                        .pipe(stream)
                        .on('close', () => {
                            resolve();
                        })
                        .on('error', (e) => {
                            reject(new Error(url + e));
                        });
                }
            })
            .on('error', (e) => {
                reject(new Error(url + e));
            });
    }));
}

/**
 * @example: httpGet('http://10.1.1.156/test?cmd=redis',function(error,body){},'json')
 *      获取http://10.1.1.156/test?cmd=redis返回的结果并解析为json对象
 */
export async function httpGet(url: string, dataType: HTTP_RES_DATA_TYPE = HTTP_RES_DATA_TYPE.JSON, timeout?: number) {
    return new Promise((resolve, reject) => {
        let options = {'url': url, 'form': null, 'timeout': timeout};
        request.get(options, (error, response, body) => {
            let result = parseHttpResBody(error, response, body, dataType);
            if (error) {
                reject(result.error);
            }
            else {
                resolve(result.data);
            }
        });
    });
}

/**
 * http POST请求
 * 比httpGet函数多了个form表单参数(Json对象)，其他参数参考httpGet
 * @example:
 */
export async function httpPost(url: string, form: any, dataType: HTTP_RES_DATA_TYPE = HTTP_RES_DATA_TYPE.JSON, timeout?: number) {
    return new Promise((resolve, reject) => {
        let options = {'url': url, 'form': form, 'timeout': timeout};
        request.post(options, (error, response, body) => {
            let result = parseHttpResBody(error, response, body, dataType);
            if (result.error) {
                reject(result.error);
            }
            else {
                resolve(result.data);
            }
        });
    });
}

enum HTTP_RES_DATA_TYPE {
    JSON = 0,
    RAW_DATA = 1
}

//http get/post请求，返回包体解析函数
function parseHttpResBody(error: any, response: any, body: string, dataType: HTTP_RES_DATA_TYPE) {
    if (error) {
        //TODO:根据error.code是否为ETIMEDOUT可判断请求或响应是否超时
        //如果需要可在这里增加判断是否超时的错误码
        return {'error': ERROR_CODE.COMMON.HTTP_NO_RESPONSE, 'data': null};
    }
    if (response.statusCode === 200) {
        if (body) {
            if (dataType === HTTP_RES_DATA_TYPE.JSON) { //body返回的结果为json字符串
                try {
                    body = body.replace("\n", '');
                    let data = JSON.parse(body);
                    return {'error': 0, 'data': data};
                }
                catch (e) {
                    //TODO:json字符串解析为json对象失败，可能字符串中含有特殊编码字符
                    return {
                        'error': ERROR_CODE.COMMON.JSON_PARSE_ERROR,
                        'data': null
                    };
                }
            }
            else {
                return {'error': 0, 'data': body};
            }
        }
        else {
            return {'error': 0, 'data': body};
        }
    }
}

/**
 * 字符串中的字母全部大写
 * @param str
 */
export function capitalize(str: string): string {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

/**
 * mkdir -p
 * @param dirName
 */
export function mkdirpSync(dirName) {
    if (fs.existsSync(dirName)) {
        return true;
    }
    else {
        if (mkdirpSync(path.dirname(dirName))) {
            fs.mkdirSync(dirName);
            return true;
        }
    }
    return false;
}

export function parseHttpParams(req: express.Request): { [key: string]: any } {
    let urlData = url.parse(req.url);
    let args = {};
    // 获取get参数
    if (urlData.query) {
        let querySplits = urlData.query.split('&');
        for (let Key in querySplits) {
            if (querySplits[Key]) {
                let argSplits = querySplits[Key].split('=');
                args[argSplits[0]] = argSplits[1];
            }
        }
    }

    // 如果请求方式为POST，将post参数合并到args中
    if (typeof req.body === 'object') {
        for (let key in req.body) {
            args[key] = req.body[key];
        }
    }
    else if (typeof req.body === 'string') {
        try {
            let data = JSON.parse(req.body);
            for (let key in data) {
                if (typeof data[key] !== 'function') {
                    args[key] = data[key];
                }
            }
        }
        catch (e) {
            Log.sError(`req.body cannot parse to json: ${req.body} `);
        }
    }

    let ipAddress = null;
    if (req && typeof (req.headers['x-forwarded-for']) !== 'undefined') {
        let forwardedIpsStr = req.headers['x-forwarded-for'].toString();
        let forwardedIps = forwardedIpsStr.split(',');
        ipAddress = forwardedIps[0];
    }

    if (req && !ipAddress) {
        ipAddress = req.ip;
    }
    args["IP"] = ipAddress;
    return args;
}

/**
 * 中文两个字符，其余一个字符
 * @param {string} str
 * @returns {number}
 */
export function charCodeLength(str: string): number {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
            len += 2;
        }
        else {
            len++;
        }
    }
    return len;
}

let stringChecker = null;

/**
 * 自动机初始化，敏感词判断
 */
export function initStringChecker() {
    stringChecker = new StringChecker();
}

/**
 * 自动机构建，构建敏感词库
 * @param filterStrings
 */
export function buildFilterString(filterStrings: string[]) {
    for (let s of filterStrings) {
        stringChecker.addPattern(s);

    }
    stringChecker.build();
}

/**
 * 如果含有敏感词，会将字符串中的敏感词替换成 ***
 * @param msg
 */
export function filterString(msg) {
    return stringChecker.replace(msg);
}

/**
 * 删除目录下所有内容
 * @param path
 */
export function rmAll(path) {
    let files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        for (let file of files) {
            let curPath = path + '/' + file;
            if (fs.statSync(curPath).isDirectory()) {
                rmAll(curPath);
            }
            else {
                fs.unlinkSync(curPath);
            }
        }
        fs.rmdirSync(path);
    }
}

/**
 * 注册进程通用事件
 * @param shutDownCallBack
 */
export function registerProcessListener(shutDownCallBack?: Function) {
    process.on('uncaughtException', (error => {
        console.error(error);
        Log.sError(error);
        // process.exit(1);
    }));

    process.on('unhandledRejection', (reason, p) => {
        console.error('Unhandled Rejection at:', p, 'reason:', reason);
        Log.sError('Unhandled Rejection at:', p, 'reason:', reason);
        // process.exit(1);
    });

    process.on("SIGINT", async () => {
        if (shutDownCallBack) {
            Global.isAppValid = false;
            await shutDownCallBack();
        }
    });
}

/**
 * 在终止条件之前会一直按照一定的时间间隔 达到loop的效果，保证每两次promise的时间间隔一定是interval时间
 */
export class Loop {
    interval: number;
    promise: () => Promise<void>;
    terminateCallBack: () => boolean;
    promiseScope: any;
    bOnExceptionQuit: boolean;
    private _isRunning: boolean;
    private _isForceQuit: boolean;

    constructor(promise: () => Promise<void>, promiseScope: any, cb: () => boolean, interval: number, bOnExceptionQuit: boolean = false) {
        this.interval = interval;
        this.promise = promise;
        this.promiseScope = promiseScope;
        this.terminateCallBack = cb;
        this._isRunning = false;
        this._isForceQuit = false;
        this.bOnExceptionQuit = bOnExceptionQuit;
    }

    run() {
        if (this._isForceQuit || this.terminateCallBack()) {
            return;
        }

        setTimeout(() => {
            this._isRunning = true;
            this.promise.apply(this.promiseScope)
                .then(() => {
                    this._isRunning = false;
                    this.run();
                })
                .catch((e) => {
                    Log.sError(e);
                    if (!this.bOnExceptionQuit) {
                        this._isRunning = false;
                        this.run();
                    }
                });
        }, this.interval);
    }

    async stop() {
        this._isForceQuit = true;
        return new Promise<void>(((resolve) => {
            if (this._isRunning) {
                setTimeout(() => {
                    this.stop().then(resolve);
                }, 100);
            }
            else {
                resolve();
            }
        }));
    }
}