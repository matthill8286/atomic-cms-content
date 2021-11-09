#!/bin/sh

start=`date +%s`
# install dependencies
export BUILD="BUILD"
# execute the config setup only in ci env
if [ ! -z "$NPM_TOKEN" ];
then
    npm config set @matthill8286:registry https://npm.pkg.github.com
    git remote set-url origin https://github.com/matthill8286/atomic-ui.git
    git config --global url."https://x-access-token:${NPM_TOKEN}@github.com/matthill8286".insteadOf "https://github.com/matthill8286"
    git fetch origin
    echo "config setup done."
else
    echo "Ignoring config setup..."
fi

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
    cat ../yarn-error.log
    exit 1
fi

# build the app
yarn build:babel
if [ $? -eq 0 ]
then
    echo "**********************************************************"
    echo "Components have been built"
    echo "**********************************************************"
else
    echo "**********************************************************"
    echo "Component build failed!" >&2
    echo "**********************************************************"
    cat ../yarn-error.log
    exit 1
fi

end=`date +%s`
echo Execution time was `expr $end - $start` seconds.
