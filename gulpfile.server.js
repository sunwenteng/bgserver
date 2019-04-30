const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const exec = require('child_process').exec;
const fs = require('fs');
const path = require("path");

let cmdJsFile = path.resolve('./src/app/proto/cmd.js'),
    cmdTsFile = path.resolve('./src/app/proto/cmd.d.ts');


gulp.task('proto2js', (cb) => {
    let protoDir = path.resolve('./src/app/proto');
    const files = fs.readdirSync(protoDir);
    let protoFiles = [];
    for (let file of files) {
        if (file.indexOf('.proto') !== -1) {
            protoFiles.push(path.join(protoDir, file));
        }
    }
    exec('npx pbjs -t static-module -w commonjs -o ' + cmdJsFile + ' ' + protoFiles.join(' ') + ' && ' +
        'npx pbts --no-comments -o ' + cmdTsFile + ' ' + cmdJsFile, (error) => {
        if (error) {
            console.error(error);
        }
        else {
            cb();
        }
    });
});

gulp.task('scripts_src', /*['svn_update_server'],*/ () => {
    return gulp.src('src/**/*.ts')
        .pipe($.sourcemaps.init({loadMaps: true}))
        .pipe($.typescript({
            noImplicitUseStrict: true,  // 增加这个是因为Log4js读取代码堆栈要用到arguments.callee这个strict mode下禁用了，后续如果有更好的方案可以替换
            noImplicitAny: false,       // 使用any的时候编译出警告
            removeComments: true,       // 不输出注释
            noEmitOnError: true,        // 错误不生成js
            target: "es2017",
            module: "commonjs",
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
        })).js
        .pipe($.sourcemaps.write({includeContent: false, sourceRoot: '/src'}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('svn_update_server', (cb) => {
    exec('svn revert -R ' + path.resolve('./src/config/data') + ' && svn up ' + path.resolve('./src/config/data'), () => {
        cb();
    });
});

gulp.task('compile', ['scripts_src'], () => {
    return gulp.src(['src/**/*.js', '!src/app/proto/cmd.client.js', 'src/**/*.json'])
        .pipe(gulp.dest('dist/'));
});

gulp.task('archive_linux', ['compile'], (cb) => {
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
});

// wx测试副 pwd: honglajiao123
gulp.task('deploy_wx', ['archive_linux'], (cb) => {
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
});

// 外网测试副 pwd: pass@ime
gulp.task('deploy', ['archive_linux'], (cb) => {
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
});

// 内网测试服
gulp.task('deploy_dev', ['archive_linux'], (cb) => {
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
});

// 内网测试服
gulp.task('deploy_dev', ['archive_linux'], (cb) => {
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
});

gulp.task('proto_server', ['proto2js'], (cb) => {
    function capitalize(str) {
        return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
    }

    let {C2S} = require("./src/app/proto/cmd");
    let fileContents = {}, dirtyFiles = [], excludeMethod = ['CS_ROLE_ONLINE', 'CS_ROLE_CREATE'],
        controllers = Object.keys(C2S.Message.prototype);
    for (let c of controllers) {
        if (c.indexOf('LOGIN_') !== -1 || c.indexOf('CS_') === -1) {
            continue;
        }

        if (excludeMethod.includes(c)) {
            continue;
        }

        let arr = c.split('_');
        if (arr.length > 2) {
            let controllerPath = path.join('src', 'app', 'game', 'controllers', arr[1].toLowerCase() + '_controller.ts');
            if (!fs.existsSync(controllerPath)) {
                console.warn('cmd=' + c + ', controller=' + arr[1].toLowerCase() + '_controller not exists');
            }
            else {
                for (let i = 0; i < arr.length; ++i) {
                    if (i > 2) {
                        arr[i] = capitalize(arr[i]);
                    }
                    else {
                        arr[i] = arr[i].toLowerCase();
                    }
                }
                let contents = fileContents[controllerPath];
                if (!contents) {
                    contents = fs.readFileSync(controllerPath).toString();
                    fileContents[controllerPath] = contents;
                }
                let methodName = arr.slice(2, arr.length).join('');
                let line = `${methodName}(role: Role, msg: C2S.${c}) {`;
                if (contents.indexOf(line) === -1) {
                    console.log(c);
                    dirtyFiles.push(controllerPath);
                    fileContents[controllerPath] = contents.substring(0, contents.length - 1) + `
    @action()
    async ${line}
        // TODO
        role.sendProtocol(S2C.${c.replace('CS_', 'SC_')}.create(), true);
    }
}`;
                }
            }
        }
    }
    for (let file of dirtyFiles) {
        fs.writeFileSync(file, fileContents[file]);
    }
    cb();
});