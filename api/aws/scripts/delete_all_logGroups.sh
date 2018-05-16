#!/bin/bash

LOG_GROUP_NAME=h-stack
AWS_PROFILE=default

aws --profile $AWS_PROFILE logs describe-log-groups --log-group-name-prefix $LOG_GROUP_NAME | jq .logGroups | jq ".[] | .logGroupName" |  sed 's/"//g' |
while read -r line
do
    echo 'running aws --profile $AWS_PROFILE logs delete-log-group --log-group-name' $line
    aws --profile $AWS_PROFILE logs delete-log-group --log-group-name $line
done