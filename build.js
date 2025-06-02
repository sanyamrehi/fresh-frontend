const { execSync } = require('child_process');

try {
    console.log('Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
    
    console.log('Building project...');
    execSync('node node_modules/vite/bin/vite.js build', { stdio: 'inherit' });
    
    console.log('Build completed successfully!');
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}
