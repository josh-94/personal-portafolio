echo "Swirching ro branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* ubuntu@165.227.203.165:/var/www/codewithjosh.tech

echo "Done!"