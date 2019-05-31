const gulp = require('gulp');
const exec = require('child_process').exec;
const fs = require('fs');
const path = require("path");
const crypto = require('crypto');

function execP(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, resolve).on('error', reject);
    });
}

function md5(content) {
    let md5sum = crypto.createHash('md5');
    md5sum.update(content, 'utf8');
    return md5sum.digest('hex');
}

function splitByCapital(str) {
    let ret = [], start = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z' && i > start) {
            ret.push(str.substring(start, i).toLowerCase());
            start = i;
        }
    }
    ret.push(str.substring(start).toLowerCase());
    return ret;
}

gulp.task('proto2js', async () => {
    const protoDirs = [/*path.resolve('./src/app/proto'), */path.resolve('./src/app/game/schema_generated')];
    let protoFiles = [];
    for (let protoDir of protoDirs) {
        const files = fs.readdirSync(protoDir);
        for (let file of files) {
            if (file.search(/^.*?\.(proto)$/) !== -1) {
                let protoFilePath = path.join(protoDir, file);
                protoFiles.push(protoFilePath);
            }
            else if (file.search(/^.*?\.(ts)$/) !== -1 && file.indexOf('cmd') === -1) {
                let nameArray = file.split('.');
                // auto generate controller file if needed
                let filePrefix = splitByCapital(nameArray[0])[0];

                let controllerFileName = path.resolve(protoDir, '../controllers/' + splitByCapital(nameArray[0]).join('_') + '.ts');
                let tsFilePath = path.join(protoDir, file);
                let tsFileContent = fs.readFileSync(tsFilePath).toString();
                let tsFileLines = tsFileContent.split('\n');
                let ctl = '', isDirty = false;
                for (let i = 0; i < tsFileLines.length; i++) {
                    const line = tsFileLines[i];
                    if (line.indexOf('action: ') !== -1) {
                        let actionName = line.split("'")[1];
                        if (ctl === '') {
                            if (!fs.existsSync(controllerFileName)) {
                                fs.writeFileSync(controllerFileName, `import {BGAction} from "../../../lib/util/descriptor";
import {JsonController} from "routing-controllers";
import {Role} from "../modles/role";
import {Hit} from "../schema_generated/cmd";

@JsonController('/${filePrefix}')
export class ${nameArray[0]} {
}`);
                                console.log(`controller ${nameArray[0]} not exist, then auto create`);
                            }
                            ctl = fs.readFileSync(controllerFileName).toString();
                        }
                        if (ctl.indexOf(actionName) === -1) {
                            console.log(`controller ${nameArray[0]} action ${actionName} not exist, then auto create`);
                            let reqEncoder = tsFileLines[i - 4].substring(tsFileLines[i - 4].indexOf(': ') + 2, tsFileLines[i - 4].length - 1);
                            let resEncoder = tsFileLines[i - 2].substring(tsFileLines[i - 2].indexOf(': ') + 2, tsFileLines[i - 2].length - 1);
                            ctl = ctl.slice(0, ctl.length - 1) + `
    @BGAction()
    ${actionName}(role: Role${reqEncoder !== 'undefined' ? ', msg: ' + reqEncoder : ''}): ${resEncoder === 'undefined' ? 'void' : resEncoder} {
        // TODO
        ${resEncoder === 'undefined' ? '' : `return ${resEncoder}.create();`}
    }
}`;
                            isDirty = true;
                        }
                    }
                }
                if (isDirty) {
                    fs.writeFileSync(controllerFileName, ctl);
                }
            }
        }

        const jsFile = path.join(protoDir, './cmd.js');
        const tsFile = path.join(protoDir, './cmd.d.ts');
        await execP(`npx pbjs -t static-module -w commonjs -o ${jsFile} ${protoFiles.join(' ')} && npx pbts --no-comments -o ${tsFile} ${jsFile}`)
    }
});

gulp.task('svn_update_server', (cb) => {
    exec('svn revert -R ' + path.resolve('./src/config/data') + ' && svn up ' + path.resolve('./src/config/data'), () => {
        cb();
    });
});

gulp.task('compile', gulp.series('svn_update_server', () => {
    return gulp.src(['src/**/*.js', /*'!src/app/proto/cmd.client.js', */'src/**/*.json'])
        .pipe(gulp.dest('dist/'));
}));

gulp.task('archive_linux', gulp.series('compile', (cb) => {
    if (process.platform !== 'linux') {
        console.error('');
        cb();
    }
    else {
        exec('sudo rm -rf ./archive/* && ' +
            './node_modules/pkg/lib-es5/bin.js ./dist/app/game/game_app.js -c package.json -t node8-linux-x64 -o ./archive/game/game_app --options max_old_space_size=4096 && ' +
            './node_modules/pkg/lib-es5/bin.js ./dist/app/cache/cache_app.js -c package.json -t node8-linux-x64 -o ./archive/cache/cache_app --options max_old_space_size=4096 && ' +
            './node_modules/pkg/lib-es5/bin.js ./dist/app/login/login_app.js -c package.json -t node8-linux-x64 -o ./archive/login/login_app --options max_old_space_size=4096 && ' +
            './node_modules/pkg/lib-es5/bin.js ./dist/app/pay/pay_app.js -c package.json -t node8-linux-x64 -o ./archive/pay/pay_app --options max_old_space_size=4096 && ' +
            './node_modules/pkg/lib-es5/bin.js ./dist/app/gm/gm_app.js -c package.json -t node8-linux-x64 -o ./archive/gm/gm_app --options max_old_space_size=4096 && ' +
            'cp -rf ./dist/config/data/ ./archive/game/data && ' +
            'rm -rf ./archive/game/data/config_struct.js &&' +
            'cp ./src/config/config.cache.json ./archive/cache/config.json && ' +
            'cp ./src/config/config.game.json ./archive/game/config.json && ' +
            'cp ./src/config/config.login.json ./archive/login/config.json && ' +
            'cp ./src/config/config.pay.json ./archive/pay/config.json && ' +
            'cp ./src/config/config.gm.json ./archive/gm/config.json && ' +
            'cp -rf ./tool/shell ./archive/shell', () => {
            cb();
        })
    }
}));

// wx测试副 pwd: honglajiao123
gulp.task('deploy_wx', gulp.series('archive_linux', (cb) => {
    if (process.platform !== 'linux') {
        console.error('');
        cb();
    }
    else {
        let host = 'chat.moltentec.com',
            user = 'ubuntu';
        exec('tar zcvf archive.tar.gz archive &&' +
            'scp archive.tar.gz ' + user + '@' + host + ':~ &&' +
            'scp ./tool/shell/deploy_server.sh ' + user + '@' + host + ':~ &&' +
            'rm -rf archive.tar.gz', () => {
            cb();
        })
    }
}));

// 外网测试副 pwd: pass@ime
gulp.task('deploy', gulp.series('archive_linux', (cb) => {
    if (process.platform !== 'linux') {
        console.error('');
        cb();
    }
    else {
        let host = 'guanreng1.imobile-ent.com',
            user = 'sunwenteng';
        exec('tar zcvf archive.tar.gz archive &&' +
            'scp archive.tar.gz ' + user + '@' + host + ':~ &&' +
            'scp ./tool/shell/deploy_server.sh ' + user + '@' + host + ':~ &&' +
            'rm -rf archive.tar.gz', () => {
            cb();
        })
    }
}));

// 内网测试服
gulp.task('deploy_dev', gulp.series('archive_linux', (cb) => {
    if (process.platform !== 'linux') {
        console.error('');
        cb();
    }
    else {
        let host = '172.16.0.78',
            user = 'ime';
        exec('tar zcvf archive.tar.gz archive &&' +
            'scp archive.tar.gz ' + user + '@' + host + ':~ &&' +
            'scp ./tool/shell/deploy_server.sh ' + user + '@' + host + ':~ &&' +
            'rm -rf archive.tar.gz', () => {
            cb();
        })
    }
}));

// 内网测试服
gulp.task('deploy_dev', gulp.series('archive_linux', (cb) => {
    if (process.platform !== 'linux') {
        console.error('');
        cb();
    }
    else {
        let host = '172.16.0.155',
            user = 'ubuntu';
        exec('tar zcvf archive.tar.gz archive &&' +
            'scp archive.tar.gz ' + user + '@' + host + ':~ &&' +
            'scp ./tool/shell/deploy_server.sh ' + user + '@' + host + ':~ &&' +
            'rm -rf archive.tar.gz', () => {
            cb();
        })
    }
}));

// gulp.task('proto_server', gulp.series('proto2js', (cb) => {
//     function capitalize(str) {
//         return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
//     }
//
//     let {C2S} = require("./src/app/proto/cmd");
//     let fileContents = {}, dirtyFiles = [], excludeMethod = ['CS_ROLE_ONLINE', 'CS_ROLE_CREATE'],
//         controllers = Object.keys(C2S.Message.prototype);
//     for (let c of controllers) {
//         if (c.indexOf('LOGIN_') !== -1 || c.indexOf('CS_') === -1) {
//             continue;
//         }
//
//         if (excludeMethod.includes(c)) {
//             continue;
//         }
//
//         let arr = c.split('_');
//         if (arr.length > 2) {
//             let controllerPath = path.join('src', 'app', 'game', 'controllers', arr[1].toLowerCase() + '_controller.ts');
//             if (!fs.existsSync(controllerPath)) {
//                 console.warn('cmd=' + c + ', controller=' + arr[1].toLowerCase() + '_controller not exists');
//             }
//             else {
//                 for (let i = 0; i < arr.length; ++i) {
//                     if (i > 2) {
//                         arr[i] = capitalize(arr[i]);
//                     }
//                     else {
//                         arr[i] = arr[i].toLowerCase();
//                     }
//                 }
//                 let contents = fileContents[controllerPath];
//                 if (!contents) {
//                     contents = fs.readFileSync(controllerPath).toString();
//                     fileContents[controllerPath] = contents;
//                 }
//                 let methodName = arr.slice(2, arr.length).join('');
//                 let line = `${methodName}(role: Role, msg: C2S.${c}) {`;
//                 if (contents.indexOf(line) === -1) {
//                     console.log(c);
//                     dirtyFiles.push(controllerPath);
//                     fileContents[controllerPath] = contents.substring(0, contents.length - 1) + `
//     @action()
//     async ${line}
//         // TODO
//         role.sendProtocol(S2C.${c.replace('CS_', 'SC_')}.create(), true);
//     }
// }`;
//                 }
//             }
//         }
//     }
//     for (let file of dirtyFiles) {
//         fs.writeFileSync(file, fileContents[file]);
//     }
//     cb();
// }));