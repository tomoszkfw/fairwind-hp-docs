#!/bin/bash

readonly REJECT_PUSH_BRANCHES=('master' 'main' 'develop')

while read local_ref local_sha1 remote_ref remote_sha1; do
    for branch in ${REJECT_PUSH_BRANCHES[@]}; do
        if [[ "${remote_ref##refs/heads/}" = "${branch}" ]]; then
            echo -e "Do not push to ${branch} branch"
            exit 1
        fi
    done
done
