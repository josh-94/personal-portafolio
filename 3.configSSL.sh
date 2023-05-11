#!/bin/bash

#Step 1 — Installing Certbot
sudo snap install core; sudo snap refresh core

#Remove certbot
sudo apt remove certbot

#Install the certbot package
sudo snap install --classic certbot

#Link the certbot command from the snap install directory to your path
sudo ln -s /snap/bin/certbot /usr/bin/certbot

#reload nginx

sudo systemctl reload nginx

#ufw status
sudo ufw status

#activate ufw
sudo ufw enable

#ufw status
sudo ufw status

#allow ssh port
sudo ufw allow 22

#Allow the Nginx Full profile
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

#ufw status
sudo ufw status

## Obtaining an SSL Certificate
sudo certbot --nginx -d codewithjosh.dev -d www.codewithjosh.dev

#Verifying Certbot Auto-Renewal
sudo systemctl status snap.certbot.renew.service

#Test the renewal process
sudo certbot renew --dry-run