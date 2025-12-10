/**
 * Script để sync hình ảnh từ thư mục public vào media database
 * Chạy: node scripts/sync-public-media.js
 */

const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

// Load env manually
const envPath = path.join(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      process.env[key.trim()] = valueParts.join('=').trim();
    }
  });
}

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/news_platform',
});

const PUBLIC_DIR = path.join(__dirname, '../public');
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

function getMimeType(ext) {
  const mimeTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
  };
  return mimeTypes[ext.toLowerCase()] || 'application/octet-stream';
}

function getPublicImages() {
  const files = fs.readdirSync(PUBLIC_DIR);
  const images = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!IMAGE_EXTENSIONS.includes(ext)) continue;

    const filePath = path.join(PUBLIC_DIR, file);
    const stats = fs.statSync(filePath);

    images.push({
      filename: file,
      originalFilename: file,
      mimeType: getMimeType(ext),
      size: stats.size,
      url: `/${file}`,
    });
  }

  return images;
}

async function syncToDatabase(images) {
  const client = await pool.connect();
  
  try {
    console.log(`Found ${images.length} images in public folder`);
    
    let inserted = 0;
    let skipped = 0;

    for (const image of images) {
      // Check if already exists
      const existing = await client.query(
        'SELECT id FROM media_files WHERE original_filename = $1 AND folder = $2',
        [image.originalFilename, 'public']
      );

      if (existing.rows.length > 0) {
        console.log(`⏭️  Skipped (exists): ${image.filename}`);
        skipped++;
        continue;
      }

      // Insert new record
      await client.query(
        `INSERT INTO media_files (filename, original_filename, mime_type, size, url, folder, uploaded_by)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [
          image.filename,
          image.originalFilename,
          image.mimeType,
          image.size,
          image.url,
          'public',
          1, // Admin user ID
        ]
      );

      console.log(`✅ Inserted: ${image.filename}`);
      inserted++;
    }

    console.log(`\n📊 Summary:`);
    console.log(`   - Inserted: ${inserted}`);
    console.log(`   - Skipped: ${skipped}`);
    console.log(`   - Total: ${images.length}`);

  } finally {
    client.release();
  }
}

async function main() {
  console.log('🔄 Syncing public images to media database...\n');
  
  try {
    const images = getPublicImages();
    await syncToDatabase(images);
    console.log('\n✅ Sync completed!');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

main();
