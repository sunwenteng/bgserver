'use strict';

// 说明：保证谷歌充值记录文档名称为purchase.csv,其中Order Number为A列，Financial Status为D列，SKU ID为I列

const fs = require('fs');
const mysql = require('mysql');

let totalNum = 0;
let badRole = {};

let price = `com.mngo.knights.0.99,0.99 
com.mngo.knights.3.99,3.99 
com.mngo.knights.9.99,9.99 
com.mngo.knights.19.99,19.99 
com.mngo.knights.29.99,29.99 
com.mngo.knights.49.99,49.99 
com.mngo.knights.99.99,99.99 
com.mngo.knights.sp1,7.99
com.mngo.knights.sp2,3.99
com.mngo.knights.gf1,9.99 
com.mngo.knights.gf2,49.99 
com.mngo.knights.gf3,99.99 
com.mngo.knights.tf1,9.99 
com.mngo.knights.tf2,49.99 
com.mngo.knights.tf3,99.99 
com.mngo.knights.rf1,9.99 
com.mngo.knights.rf2,49.99 
com.mngo.knights.rf3,99.99 
com.mngo.knights.growth1,9.99 
com.mngo.knights.growth2,49.99 
com.mngo.knights.growth3,99.99 
com.mngo.knights.mcf1,9.99 
com.mngo.knights.mcf2,19.99 
com.mngo.knights.df,49.99 
com.mngo.knights.sg1,0.99
com.mngo.knights.sg2,3.99
com.mngo.knights.sg3,9.99
com.mngo.knights.sg4,19.99
com.mngo.knights.sg5,29.99
com.mngo.knights.sg6,49.99
com.mngo.knights.sg7,99.99
com.rghg.sgzmjzhdnyanew1,0.99
com.rghg.sgzmjzhdnyanew2,1.99
com.rghg.sgzmjzhdnyanew3,2.99
com.rghg.sgzmjzhdnyanew4,4.99
com.rghg.sgzmjzhdnyanew5,7.99
com.rghg.sgzmjzhdnyanew6,12.99
com.rghg.sgzmjzhdnyanew7,29.99
com.rghg.sgzmjzhdnyanew8,59.99
com.rghg.sgzmjzhdnyanew9,74.99
com.rghg.sgzmjzhdnyanew10,99.99
com.rghg.sgzmjzhdnya8,8.99
com.rghg.sgzmjzhdnya9,3.99
com.rghg.sgzmjzhdnya10,99.99
com.sanguo.tok1,0.99
com.sanguo.tok2,1.99
com.sanguo.tok3,2.99
com.sanguo.tok4,4.99
com.sanguo.tok5,7.99
com.sanguo.tok6,12.99
com.sanguo.tok7,29.99
com.sanguo.tok8,59.99
com.sanguo.tok9,74.99
com.sanguo.tok10,99.99
com.sanguo.tok11,8.99
com.sanguo.tok12,3.99
com.sanguo.tok13,99.99`;

let priceMap = {};
let t = price.split('\n');
for (let i of t) {
    let arr = i.split(',');
    priceMap[arr[0]] = parseFloat(arr[1]);
}

let conn = mysql.createConnection({
    host: 'mengguoserver.c72ekmf2ehea.ap-southeast-1.rds.amazonaws.com',
    port: 3306,
    user: 'menguo',
    password: 'mengguo123',
    database: 'mg_db',
    supportBigNumbers: true
});

conn.connect();

function query(sql, param) {
    return new Promise(((resolve, reject) => {
        conn.query(sql, param, (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    }));
}

async function main() {
    let content = fs.readFileSync('./purchase.csv');
    let lines = content.toString().split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (i === 0) {
            continue;
        }
        let line = lines[i];
        let cells = line.split(',');
        let orderId = cells[0];
        let state = cells[3];
        let sukId = cells[8];
        if (orderId === '' || state === 'Charged') {
            continue;
        }

        let results1 = await query("select master_order_id from recharge_order where ?", {third_order_id: orderId});
        if (results1.length === 1) {
            let masterOrderId = results1[0].master_order_id;
            let results2 = await query("select cp_uid, role_id, notify_url from purchase_order where ?", {order_id: masterOrderId});
            if (results2.length !== 1) {
                console.error('masterOrderId length error, id=' + masterOrderId);
            }
            else {
                let cpUid = results2[0].cp_uid;
                let roleId = results2[0].role_id;
                let notify_url = results2[0].notify_url;
                if (notify_url === '') {
                    console.error('url error, GoogleOrderId=' + orderId);
                }
                else {

                    console.log(`total=${++totalNum}, GoogleOrderId=${orderId}, roleId=${roleId}, cpUid=${cpUid}`);
                    if (!priceMap[sukId]) {
                        console.error('sukId error, GoogleOrderId=' + orderId + ', sukId=' + sukId);
                    }
                    else {
                        if (!badRole[roleId]) {
                            badRole[roleId] = {refund: 0, domain: '', cpUid: cpUid, android: 0, ios: 0, other: 0};
                        }

                        badRole[roleId].refund += priceMap[sukId];
                        badRole[roleId].domain = notify_url;
                    }
                }
            }
        }
    }

    console.log('statistics begin...');
    let outLines = ['roleId,cpUid,refund,android,ios,other,url'];
    for (let roleId in badRole) {
        let role = badRole[roleId];
        let records = await query('select order_type, total_money from purchase_order where ? and status = 100', {cp_uid: role.cpUid});
        for (let record of records) {
            if (record.order_type === 1) {
                badRole[roleId].android += record.total_money;
            }
            else if (record.order_type === 2) {
                badRole[roleId].ios += record.total_money;
            }
            else {
                badRole[roleId].other += record.total_money;
            }
        }
        let line = `${roleId},${role.cpUid},${role.refund.toFixed(2)},${role.android.toFixed(2)},${role.ios.toFixed(2)},${role.other.toFixed(2)},${role.domain}`
        console.log(line);
        outLines.push(line);
    }
    console.log('statistics end...');
    fs.writeFileSync('out.csv', outLines.join('\n'));
}

main().then(() => {
    conn.end();
    console.log('done');
});