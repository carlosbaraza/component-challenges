#!/bin/bash

# Install dependencies
lerna bootstrap

# Run build setting relative path for build folder
lerna exec -- \
    PUBLIC_URL="\$(echo \$PWD | sed \"s|\$LERNA_ROOT_PATH||g\")/build" \
        npm run build