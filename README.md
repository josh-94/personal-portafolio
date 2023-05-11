# Getting Started with Create React App Portfolio

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Scripts to Deploy on Remote Server using Nginx and installing a SSL certificate
###Previouly configure your shh public key local machine into remote server
https://developers.redhat.com/blog/2018/11/02/how-to-manually-copy-ssh-keys-rhel![image]

###Configure your DNS cname record

An A record with `example.com` pointing to your server’s public IP address.
An A record with `www.example.com` pointing to your server’s public IP address.

Git clone the following repository on local machine
### `.git clone https://github.com/josh-94/personal-portafolio.git`

##Send configuration files to remote server
### `chmod +x sendConfigFilestoServer.sh`
### `./sendConfigFilestoServer.sh`

Login as root user in the remote server an execute the following script to create a new user 'ubuntu'
### `chmod +x 1.configNewServer.sh 2.configNgnix.sh 3.configSSL.sh deploy.sh`
### `./1.configNewServer.sh`

Logout as root user and login as new user 'ubuntu' in the remote server, then execute the following scripts to configure Nginx and add a SSL certificate
### `2.configNgnix.sh`

On local machine, deploy the project executable file
### `deploy.sh`

Finally install SSL certificate on server
### `3.configSSL.sh`
