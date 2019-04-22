#!/usr/bin/env bash
SERVER_ID=$1
cd ~
tar zxvf archive.tar.gz

if [ -d /data/archive$SERVER_ID/login ]; then
    sudo cp -rf archive/login/login_app /data/archive$SERVER_ID/login
fi

if [ -d /data/archive$SERVER_ID/cache ]; then
    sudo cp -rf archive/cache/cache_app /data/archive$SERVER_ID/cache
fi

if [ -d /data/archive$SERVER_ID/gm ]; then
    sudo cp -rf archive/gm/gm_app /data/archive$SERVER_ID/gm
fi

if [ -d /data/archive$SERVER_ID/pay ]; then
    sudo cp -rf archive/pay/pay_app /data/archive$SERVER_ID/pay
fi

sudo cp -rf archive/shell /data/archive$SERVER_ID/

DIR=`ls /data/archive$1/ | grep game*`
for name in $DIR
do
    sudo cp -rf archive/game/game_app /data/archive$SERVER_ID/$name
    sudo rm -rf /data/archive$SERVER_ID/$name/data
    sudo cp -rf archive/game/data /data/archive$SERVER_ID/$name
done

#cd /data/archive/shell
#sudo ./start_server.sh -glcr