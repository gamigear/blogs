/**
 * Script để tạo thumbnails cho các ảnh hiện có trong media
 * Chạy: node scripts/generate-thumbnails.js
 */

const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
const https = require('https');
const http = require('http');

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

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// For images in public folder, just update thumbnail_url to use Next.js Image Optimization
async function updatePublicImageThumbnails() {
  const client = await pool.connect();
  
  try {
    // Get all images without thumbnails from public folder
    const result = await client.query(`
      SELECT id, url, original_filename, mime_type 
      FROM media_files 
      WHERE folder = 'public' 
        AND mime_type LIKE 'image/%'
        AND (thumbnail_url IS NULL OR thumbnail_url = '')
    `);

    console.log(`Found ${result.rows.length} images without thumbnails`);

    let updated = 0;
    for (const row of result.rows) {
      // For public folder images, use Next.js Image Optimization API
      // Format: /_next/image?url=<encoded_url>&w=300&q=75
      const thumbnailUrl = `/_next/image?url=${encodeURIComponent(row.url)}&w=300&q=75`;
      
      await client.query(
        'UPDATE media_files SET thumbnail_url = $1, updated_at = NOW() WHERE id = $2',
        [thumbnailUrl, row.id]
      );
      
      console.log(`✅ Updated: ${row.original_filename}`);
      updated++;
    }

    console.log(`\n📊 Summary: Updated ${updated} images`);

  } finally {
    client.release();
  }
}

async function main() {
  console.log('🔄 Generating thumbnails for existing images...\n');
  
  try {
    await updatePublicImageThumbnails();
    console.log('\n✅ Done!');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

main();
