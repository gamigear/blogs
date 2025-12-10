import fs from 'fs';
import path from 'path';

// Use process.cwd() to get the current working directory (i.e., root of the project)
const currentDirectory = process.cwd();

const basePath = ''// Set base URL here : /svelte/vyzor/preview/

const assetsCssDir  = path.join(currentDirectory, 'src', 'assets');

// Resolve the correct path for the build folder
const buildPath = path.join(currentDirectory, 'build');

// Check if the build folder exists
if (!fs.existsSync(buildPath)) {
    console.error("Build folder does not exist. Please run the build process first.");
    process.exit(1);
}

// Function to copy files and directories recursively
const copyDir = (src, dest) => {
    // Check if the source exists
    if (!fs.existsSync(src)) {
        console.error(`Source directory ${src} does not exist.`);
        return;
    }

    // Create the destination directory if it doesn't exist
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    // Read all files and directories from the source
    const items = fs.readdirSync(src);

    items.forEach(item => {
        const srcPath = path.join(src, item);
        const destPath = path.join(dest, item);

        // Check if it's a directory or a file
        const stat = fs.statSync(srcPath);
        if (stat.isDirectory()) {
            // Recursively copy the directory
            copyDir(srcPath, destPath);
        } else {
            // Copy the file
            fs.copyFileSync(srcPath, destPath);
        }
    });
};

// Copy the assets/css folder to the build folder
copyDir(assetsCssDir, path.join(buildPath, 'src', 'assets'));
// Path to the .htaccess file in the build directory
const htaccessPath = path.join(buildPath, '.htaccess');
// The new .htaccess content
const htaccessContent = `
<IfModule mod_rewrite.c>
 	RewriteEngine On
	RewriteBase ${basePath}
	
	# Redirect everything to index.html (important for SPA routing)
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule ^(.*)$ index.html [QSA,L]
</IfModule>
`;

// Write the updated .htaccess to the build folder
fs.writeFileSync(htaccessPath, htaccessContent);