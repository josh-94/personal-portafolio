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

sudo echo -e 'server {\n\tlisten 80;\n\tlisten [::]:80;\n\troot /var/www/codewithjosh;\n\tindex index.html;\n\tserver_name codewithjosh.codes www.codewithjosh.codes;\n}' > /etc/nginx/sites-available/codewithjosh/

#unlike default file config
sudo unlink /etc/nginx/sites-enabled/default

#link our new file config
sudo ln -s /etc/nginx/sites-available/codewithjosh /etc/nginx/sites-enabled/

#test nginx
sudo nginx -t

#restar nginx
sudo systemctl restart nginx
