#!/bin/bash
export GH_TOKEN="afbe375b0009ae71d77f753ddef5df427792b868"
yarn lintfix
fuser -k 4444/tcp
yarn dev2
