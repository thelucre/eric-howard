#!/bin/sh

# Commit erythang
git add -A && git commit -m "Deploying"
git push origin master
git checkout gh-pages
pit pull origin master

yarn build
rm dist/404.html
cp dist/index.html dist/404.html

git add --force dist && git commit -m "dist build"
git subtree push --prefix dist origin gh-pages
