#!/bin/bash

yarn lintfix
fuser -k 3000/tcp
yarn dev:start
