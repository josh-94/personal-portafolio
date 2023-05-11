#!/bin/bash

#login into ubuntu user
#disable root user password
sudo passwd -d root

sudo passwd -l root

##NGINX CONFIGURATION
sudo apt install nginx

#create folder
sudo mkdir /var/www/codewithjosh

#create ownership
sudo chmod 755 -R /var/www/codewithjosh

#Add user as owner of directory
sudo chown -R ubuntu:www-data /var/www/codewithjosh


##CONFIG FILE

#create ownership
sudo chmod 755 -R /etc/nginx/sites-available/

#Add user as owner of directory
sudo chown -R ubuntu:www-data /etc/nginx/sites-available/

sudo echo -e 'server {\n\tlisten 80;\n\tlisten [::]:80;\n\troot /var/www/codewithjosh;\n\tindex index.html;\n\tserver_name codewithjosh.dev www.codewithjosh.dev;\n}' > /etc/nginx/sites-available/codewithjosh/

#unlike default file config
sudo unlink /etc/nginx/sites-enabled/default

#link our new file config
sudo ln -s /etc/nginx/sites-available/codewithjosh /etc/nginx/sites-enabled/

#test nginx
sudo nginx -t

#restar nginx
sudo systemctl restart nginx

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