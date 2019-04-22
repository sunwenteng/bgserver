# bingo

It is designed to build a stateless game server for most cases(RPG, MMO, etc.). For sure, it's well designed for H5 server for full-stack develop.
The project is pretty simple and easy to handle or expand, 
using **Node.js**, **typescript**, **web socket** as server, **nginx** as gate, **confd** as central config management, **redis** as cache and MQ, **mysql** as database, **protobuf** for message exchange.

## Contents

* [`How to install`](#how-to-install)
* [`How to run`](#how-to-run)
* [`How to develop my own game`](#how-to-develop-my-own-game)
* [`Redis`](#redis)
* [`Mysql`](#mysql)
* [`Nginx`](#nginx)
* [`Confd`](#confd)
* [`Others`](#others)

## How to install

It's suggested to use Linux/Unix OS for the server. Run the following command in terminal. 
```
# install node for ubuntu for etc.
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

# install the environment
npm install

# checkout ur own game config
svn co http://172.16.0.2/svn/guanren/trunk/bingo/ts/server ./src/config/data

# compile typescript to javascript
sudo npm install gulp gulp-cli -g
gulp compile
```
Then Pls check the Redis and Mysql section to settle the init env.

## How to run

The project contains several applications to support a game server. Please first make sure you have config the `src/config/config.development.json`.
It contains several **key** you must be aware of. For deployment, u have to configure each config.*.json in config directory.
* **log**: specify the log params, such as the dir name and the log level.
* **redis**: start your own redis-server, and change the config, check [`Redis`](#redis).
* **mysql**: start your own mysql-server, and change the config, check [`Mysql`](#mysql).
    * **game_db**: game database to save normal player data, guild data etc.
        * **tableSplitCount**: all the player info is save to the database, so proper table split is necessary.
    * **login_db**: login data for passport auth.
* **apps**: apps supports in the project.
    * **cache_app**: 
        * purpose: save dirty roles and global data to db.
    * **game_app**:
        * purpose: game logic server.
    * **login_app**: 
        * purpose: user auth and server discovery and management.
    * **gm_app**: 
        * purpose: gm tools for game, such as: modify server name, send mail to user etc.
    * **pay_app**: 
        * purpose: http server to respond user recharge issues.

How to Run? 

Lets' take **cache_app** as an example. `node dist/cache_app/app.js`, the log will be located in `dist/cache_app/log/`.

## How to develop my own game

* **Specify ur data structure**
    * `src/game_app/role.ts`: player data management.
    * `src/game_app/defines.ts`: player meta data management.
* **Client & Server Message Exchange:** 
    * Name your own .proto for game logic.
        * `src/proto/c2s.proto`: message client send to server, check the comment of the proto.
        * `src/proto/s2c.proto`: message server send to client, check the comment of the proto.
    * Write the controller u named in `src/proto/c2s.proto` to handle the client message.
        * put your controller here `src/game_app/controllers/`.
        * write the method to handle client message in ur controller.
* **Global Timer:**
* **P2P & Broad/Group cast:**

## Redis

Use [redis-4.0.9](https://redis.io/download), for desktop client software, we use [redis-desktop-manager](https://redisdesktop.com/).

```bash
# install
wget http://download.redis.io/releases/redis-4.0.9.tar.gz
tar xzf redis-4.0.9.tar.gz
cd redis-4.0.9
make
sudo make install
sudo mkdir /data/redis -p && chown redis:redis -R /data/redis/

# start server
sudo redis-server config/redis/redis.conf
```

关于Redis的高可用方案以及承载扩容方案研究。
1. Redis本身自带主从灾备方案。
2. Twemproxy+keepalived，通过代理分片机制，按照路由规则管理多个redis节点以达到扩容效果，后续空下来可以研究搭建实现方案。
3. 参考：https://www.huweihuang.com/linux-notes/supervisor-usage.html

## Mysql 

Use [mysql](https://www.mysql.com/downloads/) 5.5, check website to install. 

```
# create ur own database...
create database game_world;
create database login_world;
```

## Nginx

Use Nginx as the web gate, please choose stable version >= 1.14.0 and check config file in src/config/nginx/nginx.conf
```
# hot reload in default dir/specified dir: 
nginx -c path/conf -s reload
```
server config in [location]：
```
location / {
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header X-Forwarded-For  $proxy_add_x_forwarded_for;
    proxy_set_header Host $host;
    proxy_http_version 1.1;
    proxy_pass http://io_nodes;
    proxy_redirect off;
}
```

## Confd

Use Cond together with redis/etcd to dynamic watch and modify nginx config file.
```
# Download the binary
wget https://github.com/kelseyhightower/confd/releases/download/v0.16.0/confd-0.16.0-linux-amd64

# 重命名二进制文件，并移动到PATH的目录下
mv confd-0.16.0-linux-amd64 /usr/local/bin/confd
chmod +x /usr/local/bin/confd

# 验证是否安装成功
confd --help

# 设置配置runtime的目录
sudo mkdir -p /etc/confd/{conf.d,templates,conf}
# 拷贝配置文件
sudo cp ./src/config/confd/confd.toml /etc/confd/conf/confd.toml
sudo cp ./src/config/confd/bingo-nginx.toml /etc/confd/conf.d/bingo-nginx.toml
sudo cp ./src/config/confd/nginx.tmpl /etc/confd/templates/nginx.tmpl

# start confd
/usr/local/bin/confd -config-file /etc/confd/conf/confd.toml
/usr/local/bin/confd -onetime -config-file /etc/confd/conf/confd.toml
nohup /usr/local/bin/confd -config-file /etc/confd/conf/confd.toml > /var/log/confd.log &
```

## Docker
development purpose
```
cd ./src/config/docker
docker-compose up -d

```

## Others

Here are some tips for the project you might need.

### C++ AddOns

write c++ addons within addons folder

```bash
sudo npm install node-gyp -g  
cd [your_path]  
node-gyp configure  
node-gyp build  
```

### 关于网络链接会话管理

* 粘性会话（目前使用）
    * 说明：直接设置Nginx允许ip_hash使得每次链接都定向至指定服务器。
    * 优点：简单无需复制会话，性能较高。
    * 缺点：单个节点挂了，用户会话数据丢失，对于游戏而言需要重新登录，走重连逻辑，如果服务器稳定性较高，建议粘性会话。
* 共享会话
    * 说明：通过redis来存储更新会话数据。
    * 优点：任意节点挂对于用户而言没有任何影响，会话数据不丢失。
    * 缺点：实现管理复杂，单个请求需要额外存储会话状态，无疑增大了不必要的通信频率以及次数，且请求频繁的时候会出现部分网络拥塞（主要是读取以及存储新的会话状态），另外，游戏是强调单链接下的处理包序的，分进程包序的管理会是一个问题。
* 粘性会话+共享会话备份（推荐）
    * 说明：两者的混杂模式，即纯粹使用共享备份做备份，应用本身还是粘性会话，节点宕机后新入的链接按照sessionId去redis需找之前的会话信息，并设置。
    * 优点：能够解决上述两者的缺点。
    * 缺点：实现较为复杂，可以后续有时间再深入优化。

### 性能注意

* 尽量不使用Map，速度太慢
* 能使用Date.now()的地方少用new Date()，前者性能好一些
* 循环尽量for做，而不是forEach

### node command

* `node --trace_gc --trace_gc_verbose app.js` will log gc info when starts
* `node --max-old-space-size=4096 app.js` change the memory limit, but not recommended
* `node --inspect=0.0.0.0:5556 app.js` debug mode, [Reference](http://morning.work/page/maintainable-nodejs/debuging-nodejs-with-chrome-devtools.html)
* `kill -s SIGUSR1 pid` dynamic open debug mode

### mysql

* mysql使用blob注意事项，需要进行如下设置，否则会写入失败。

    ```
    set global innodb_file_format=Barracuda;
    ALTER TABLE player_info_0 ROW_FORMAT=COMPRESSED;
    ALTER TABLE player_info_1 ROW_FORMAT=COMPRESSED;
    ALTER TABLE player_info_2 ROW_FORMAT=COMPRESSED;
    ALTER TABLE player_info_3 ROW_FORMAT=COMPRESSED;
    ALTER TABLE player_info_4 ROW_FORMAT=COMPRESSED;
    ALTER TABLE player_info_5 ROW_FORMAT=COMPRESSED;
    ALTER TABLE player_info_6 ROW_FORMAT=COMPRESSED;
    ALTER TABLE player_info_7 ROW_FORMAT=COMPRESSED;
    ALTER TABLE player_info_8 ROW_FORMAT=COMPRESSED;
    ALTER TABLE player_info_9 ROW_FORMAT=COMPRESSED;
    
    show variables like "innodb_file_format";
    show table status like "player_info%"\G
    ```

### redis

* 批量删除`redis-cli -a redis@ime keys "*" | xargs redis-cli -a redis@ime del`

### 性能调优 Easy-Monitor
`export NODE_ENV=development&& nodemon --harmony --use_strict XXX.js  -w`
then visit [127.0.0.1:12333](http://127.0.0.1:12333)

### git
`git remote set-url origin http://172.16.0.84/sunwenteng/bingo.git`
`git remote set-url origin http://git.gamed9.com:8001/sunwenteng/bingo.git`
`git remote set-url origin http://github.com/sunwenteng/bingo.git`

### svn
rm -rf src/config/data && svn co http://172.16.0.2/svn/guanren/branches/0.0.3_BT/ts/server ./src/config/data
rm -rf src/config/data && svn co http://172.16.0.2/svn/guanren/branches/0.0.3/ts/server ./src/config/data

rm -rf src/config/data && svn co http://svn.gamed9.com:8003/svn/guanren/branches/0.0.3_BT/ts/server ./src/config/data
rm -rf src/config/data && svn co http://svn.gamed9.com:8003/svn/guanren/branches/0.0.3/ts/server ./src/config/data

### 关于用户回档
将用户回档至相应时间最近的cache存储间隔的时间内。
```./cache_app -c ../../config/config.development.json -b 100025|2019-02-02_21:55:00```
