#!/usr/bin/env bash
set -e

mkdir -p "../build"

npm install
npm run css-compile

cp -p -R ../guide/* "../build"
cp -p -R ../dist/images/* "../build/images"
cp -p -R ../dist/fonts "../build/fonts"
