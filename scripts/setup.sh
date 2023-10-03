#!/bin/bash

echo "===============================" &&
echo "   installing glowflow v1.0    " &&
echo "==============================="
cd ..

git submodule update --init --recursive
cd src
cd glowflow-frontend-service
git checkout master
npm install
cd ..
cd glowflow-ws-service
git checkout master
npm install
cd ..
cd glowflow-mqtt-service
git checkout master
npm install
cd ..

echo "===============================" &&
echo "        Glowflow ready         " &&
echo "==============================="

