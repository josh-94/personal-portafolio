echo "Switching to branch master"
git checkout main

echo "Installing reac-scripts..."
npm install react-scripts

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* ubuntu@192.81.219.249:/var/www/codewithjosh/

echo "Done!" 
