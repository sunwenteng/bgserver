#!/usr/bin/env bash

rm -rf ~/query.log
touch query.log
DIR=`ls ../ | grep game*`
for name in $DIR
do
    grep $1 ../$name/log/*.log >> query.log
done