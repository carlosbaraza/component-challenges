#!/bin/bash

# Run build setting relative path for build folder
lerna exec -- \
    PUBLIC_URL="\$(echo \$PWD | sed \"s|\$LERNA_ROOT_PATH|/component-challenges/src|g\")/build" \
        npm run build

# Add build folder
rm -rf build
mkdir -p build

# Challenge 1: React
mkdir -p build/challenges/component-challenge-1/component-challenge-1-react/build
cp -r \
    challenges/component-challenge-1/component-challenge-1-react/build/ \
    build/challenges/component-challenge-1/component-challenge-1-react/build/

cp -r src/ build/