const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Read .env.local manually
const envPath = path.join(__dirname, '../frontend/.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) {
    process.env[match[1].trim()] = match[2].trim();
  }
});

async function runMigration() {
  const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  
  if (!connectionString) {
    console.error('❌ DATABASE_URL or POSTGRES_URL not found in environment');
    console.log('Please set DATABASE_URL in frontend/.env.local');
    process.exit(1);
  }

  console.log('🔗 Connecting to database...');
  
  const pool = new Pool({
    connectionString,
    ssl: connectionString.includes('neon') ? { rejectUnauthorized: false } : false
  });

  try {
    // Check if table exists
    const tableCheck = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'site_settings'
      );
    `);
    
    console.log('📋 Table site_settings exists:', tableCheck.rows[0].exists);

    // Run migration SQL
    const migrationSQL = fs.readFileSync(
      path.join(__dirname, 'migration-site-settings.sql'),
      'utf8'
    );

    console.log('🚀 Running migration...');
    await pool.query(migrationSQL);
    
    // Verify
    const result = await pool.query('SELECT key FROM site_settings');
    console.log('✅ Migration complete! Settings keys:', result.rows.map(r => r.key));

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigration();
