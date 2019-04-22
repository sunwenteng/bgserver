import * as crypto from 'crypto';
import * as constants from 'constants';

/**
 * RSA最大加密明文大小
 */
const MAX_ENCRYPT_BLOCK = 117 - 31;

/**
 * RSA最大解密密文大小
 */
const MAX_DECRYPT_BLOCK = 128;

/**
 * 公钥加密
 * @param data
 * @returns {string}
 */
export function publicEncrypt(data, publicKey) {
    //加密信息用buf封装
    let buf = new Buffer(data, "utf-8");
    //buf转byte数组
    let inputLen = buf.byteLength;
    //密文
    let bufs = [];
    //开始长度
    let offSet = 0;
    //结束长度
    let endOffSet = MAX_ENCRYPT_BLOCK;
    //分段加密
    while (inputLen - offSet > 0) {
        if (inputLen - offSet > MAX_ENCRYPT_BLOCK) {
            let bufTmp = buf.slice(offSet, endOffSet);
            bufs.push(crypto.publicEncrypt(publicKey, bufTmp));
        }
        else {
            let bufTmp = buf.slice(offSet, inputLen);
            bufs.push(crypto.publicEncrypt(publicKey, bufTmp));
        }
        offSet += MAX_ENCRYPT_BLOCK;
        endOffSet += MAX_ENCRYPT_BLOCK;
    }
    let result = Buffer.concat(bufs);
    //密文BASE64编码
    let base64Str = result.toString("base64");
    console.log(base64Str);
    return base64Str;
}

/**
 * 公钥解密
 * @param date
 * @returns {string}
 */
export function publicDecrypt(date, publicKey) {
    //经过base64编码的密文转成buf
    let buf = new Buffer(date, "base64");

    //buf转byte数组
    //let inputLen = bytes(buf, "base64");
    let inputLen = buf.byteLength;
    //密文
    let bufs = [];
    //开始长度
    let offSet = 0;
    //结束长度
    let endOffSet = MAX_DECRYPT_BLOCK;
    //分段加密
    while (inputLen - offSet > 0) {
        if (inputLen - offSet > MAX_DECRYPT_BLOCK) {
            let bufTmp = buf.slice(offSet, endOffSet);
            bufs.push(crypto.publicDecrypt(publicKey, bufTmp));
        }
        else {
            let bufTmp = buf.slice(offSet, inputLen);
            bufs.push(crypto.publicDecrypt(publicKey, bufTmp));
        }
        offSet += MAX_DECRYPT_BLOCK;
        endOffSet += MAX_DECRYPT_BLOCK;
    }
    let result = Buffer.concat(bufs).toString();
    console.log(result);
    return result;
}

/**
 * 私钥加密
 * @param date
 * @returns {string}
 */
export function privateEncrypt(date, privateKey) {
    //经过base64编码的密文转成buf
    let buf = new Buffer(date, "utf-8");
    //buf转byte数组
    let inputLen = buf.byteLength;
    //密文
    let bufs = [];
    //开始长度
    let offSet = 0;
    //结束长度
    let endOffSet = MAX_ENCRYPT_BLOCK;
    //分段加密
    while (inputLen - offSet > 0) {
        if (inputLen - offSet > MAX_ENCRYPT_BLOCK) {
            let bufTmp = buf.slice(offSet, endOffSet);
            bufs.push(crypto.privateEncrypt(privateKey, bufTmp));
        }
        else {
            let bufTmp = buf.slice(offSet, inputLen);
            bufs.push(crypto.privateEncrypt(privateKey, bufTmp));
        }
        offSet += MAX_ENCRYPT_BLOCK;
        endOffSet += MAX_ENCRYPT_BLOCK;
    }
    let result = Buffer.concat(bufs);
    //密文BASE64编码
    let base64Str = result.toString("base64");
    console.log(base64Str);
    return base64Str;
}

/**
 * 私钥解密
 * @param date
 * @returns {string}
 */
export function privateDecrypt(date, privateKey) {
    //经过base64编码的密文转成buf
    let buf = new Buffer(date, "base64");

    //buf转byte数组
    //let inputLen = bytes(buf, "base64");
    let inputLen = buf.byteLength;
    //密文
    let bufs = [];
    //开始长度
    let offSet = 0;
    //结束长度
    let endOffSet = MAX_DECRYPT_BLOCK;
    //分段加密
    while (inputLen - offSet > 0) {
        if (inputLen - offSet > MAX_DECRYPT_BLOCK) {
            let bufTmp = buf.slice(offSet, endOffSet);
            bufs.push(crypto.privateDecrypt({key: privateKey, padding: constants.RSA_PKCS1_PADDING}, bufTmp));
        }
        else {
            let bufTmp = buf.slice(offSet, inputLen);
            bufs.push(crypto.privateDecrypt({key: privateKey, padding: constants.RSA_PKCS1_PADDING}, bufTmp));
        }
        offSet += MAX_DECRYPT_BLOCK;
        endOffSet += MAX_DECRYPT_BLOCK;
    }
    let result = Buffer.concat(bufs).toString();
    console.log(result);
    //解密
    return result;
}