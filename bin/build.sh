#!/usr/bin/env bash
set -e

function build() {
  _DIR=$1;

  mkdir -p "${_DIR}"

  npm install
  npm run css-compile

  cp -p -R ../guide/* "${_DIR}"
  cp -p -R ../dist/images/* "${_DIR}/images"
  cp -p -R ../dist/fonts "${_DIR}/fonts"
}


# Create build directory
BUILD_DIR="../build"
mkdir -p "$BUILD_DIR"

build "${BUILD_DIR}"
