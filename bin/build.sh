#!/usr/bin/env bash
set -e

function build() {
  _BRANCH=$1;
  _DIR=$2;

  mkdir -p "${_DIR}"

  echo "  [*] Building ${_BRANCH} to ${_DIR}"
  git checkout -f "${_BRANCH}"

  npm install
  npm run css-compile

  cp -p -R guide/* "${_DIR}"
  cp -p -R dist/images/* "${_DIR}/images"
  cp -p -R dist/fonts/* "${_DIR}/fonts"
}

# Stash starting branch name
STARTING_BRANCH_NAME="$(git rev-parse --abbrev-ref HEAD)"

# Create build directory
BUILD_DIR="./build"
mkdir -p "$BUILD_DIR"

# Get branch list
git fetch --all
BRANCHES=()
while IFS= read -r line; do
    BRANCHES+=( "$line" )
done < <( git branch --list --all | sed 's,\*,,g' | xargs -n1 | grep "remotes/origin" | sed 's,remotes/origin/,,g' | sort | uniq | grep -v 'gh-pages')

# Loop through branches, build and copy each to output dir
echo "== Build Branches =="
for CURRENT_BRANCH in "${BRANCHES[@]}"; do 
  BRANCH_DIR="${BUILD_DIR}/branches/${CURRENT_BRANCH}"
  if [[ "${CURRENT_BRANCH}" == "master" ]]; then
    BRANCH_DIR="${BUILD_DIR}/"
  fi
  build "${CURRENT_BRANCH}" "${BRANCH_DIR}"
done

git checkout -f "${STARTING_BRANCH_NAME}"
