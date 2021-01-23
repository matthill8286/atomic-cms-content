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
    cat /yarn-error.log
    exit 1
fi

# run all tests
yarn test --runInBand
if [ $? -eq 0 ]
then
    echo "**********************************************************"
    echo "Testsuite was successfully executed"
    echo "**********************************************************"
else
    echo "**********************************************************"
    echo "Testsuite failed!" >&2
    echo "**********************************************************"
    cat ../yarn-error.log
    exit 1
fi

# build the app
yarn build
if [ $? -eq 0 ]
then
    echo "**********************************************************"
    echo "DEV Project has been build"
    echo "**********************************************************"
else
    echo "**********************************************************"
    echo "DEV Yarn build failed!" >&2
    echo "**********************************************************"
    cat ../yarn-error.log
    exit 1
fi

end=`date +%s`
echo Execution time was `expr $end - $start` seconds.
