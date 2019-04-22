#!/usr/bin/env bash

make && make install
sudo mv redis.conf /etc/redis/redis.conf
sudo mkdir -p /data/redis/
sudo mkdir -p /var/log/redis/
sudo redis-server /etc/redis/redis.conf

#redis-cli -a redis@ime keys "*" | xargs redis-cli -a redis@ime del