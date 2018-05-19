#!/bin/bash

yarn lintfix
fuser -k 4444/tcp
yarn dev2
