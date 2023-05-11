#!/bin/bash

#login as root user
#update system
apt update -y
#upgrade system
apt upgrade -y

#change time zone
dpkg-reconfigure tzdata - set timezone

#create new user
adduser ubuntu

#add user to sudo group
adduser ubuntu sudo

#logout as root user and login as ubuntu