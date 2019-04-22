#!/usr/bin/env bash

if [ $# == 0 ]; then
    sudo kill -9 `cat ../game/.pid`
else
    sudo kill -9 `cat ../$1/.pid`
fi

