#!/bin/sh

# create a release for yarn

# fetch latest master
git fetch origin
git merge origin/master

# fetch tags, bump version, update changelog and create tag
git fetch --tags -f
yarn standard-version

# get current branch
branch_name="$(git symbolic-ref HEAD 2>/dev/null)" ||
branch_name="(unnamed branch)"
branch_name=${branch_name##refs/heads/}

# push branch to origin
git push --follow-tags origin $branch_name

# build the app
yarn build
if [ $? -eq 0 ]
then
    echo "**********************************************************"
    echo "DEV Project has been released"
    echo "**********************************************************"
else
    echo "**********************************************************"
    echo "DEV Yarn release failed!" >&2
    echo "**********************************************************"
    cat ../yarn-error.log
    exit 1
fi
