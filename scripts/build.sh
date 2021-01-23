#!/bin/sh

start=`date +%s`
# install dependencies
export BUILD="BUILD"
yarn install
if [ $? -eq 0 ]
then
    echo "**********************************************************"
    echo "Dependencies were installed"
    echo "**********************************************************"
else
    echo "**********************************************************"
    echo "Dependencies could not be installed!" >&2
    echo "**********************************************************"
    cat ./yarn-error.log
    exit 1
fi

# build the app
yarn build:noPreBuild
if [ $? -eq 0 ]
then
    echo "**********************************************************"
    echo "Components have been built"
    echo "**********************************************************"
else
    echo "**********************************************************"
    echo "Component build failed!" >&2
    echo "**********************************************************"
    cat ./yarn-error.log
    exit 1
fi

end=`date +%s`
echo Execution time was `expr $end - $start` seconds.
