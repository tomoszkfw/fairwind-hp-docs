#!/usr/bin/env sh

###########################################################
# Protect branch
###########################################################
readonly PROTECTED_BRANCHES="(master|main|develop)"
readonly BRANCH_NAME=$(git symbolic-ref HEAD | sed -e 's:^refs/heads/::')
if [[ "${BRANCH_NAME}" =~ $PROTECTED_BRANCHES ]]; then
    echo -e "Do not commit to ${BRANCH_NAME} branch"
    exit 1
fi
