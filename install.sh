#!/usr/bin/bash

git config --global user.email "dafatrizaa@gmail.com"
git config --global user.name "Dafatrizaaa"
git init
git add *
git commit -m "new update"
git branch -M master
git remote add origin https://github.com/Dafatrizaaa/api.git
git push -u origin master