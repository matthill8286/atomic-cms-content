#!/bin/sh

# create a release for yarn

# fetch latest main
git fetch origin
git merge origin/master

# fetch tags, bump version, update changelog and create tag
git fetch --tags -f
yarn standard-version

# push the tag
git push origin --follow-tags

npm publish
