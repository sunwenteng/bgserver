#!/usr/bin/env bash

if [ $# == 0 ]; then
    tailf "../game/log/"`ls -t ../game/log | head -1`
else
    tailf "../$1/log/"`ls -t ../$1/log | head -1`
fi

