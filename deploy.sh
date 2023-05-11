echo "Switching to branch master"
git checkout main

echo "Installing reac-scripts..."
npm install react-scripts

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* ubuntu@165.227.203.165:/var/www/codewithjosh/

echo "Done!" 