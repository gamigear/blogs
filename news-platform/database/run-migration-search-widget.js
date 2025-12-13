const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../frontend/.env.local') });

async function runMigration() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL?.includes('neon') ? { rejectUnauthorized: false } : false,
  });

  try {
    console.log('🚀 Running search widget migration...\n');

    const migrationSQL = fs.readFileSync(
      path.join(__dirname, 'migration-search-widget.sql'),
      'utf8'
    );

    await pool.query(migrationSQL);
    console.log('✅ Migration completed successfully!\n');

    // Verify the section was created
    const result = await pool.query(
      "SELECT * FROM homepage_sections WHERE section_type = 'search_widget'"
    );
    
    if (result.rows.length > 0) {
      console.log('📦 Search widget section created:');
      console.log(`   - Name: ${result.rows[0].name}`);
      console.log(`   - Title: ${result.rows[0].title}`);
      console.log(`   - Visible: ${result.rows[0].is_visible}`);
      console.log('\n💡 To enable the search widget, go to Admin > Homepage Management');
    }

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigration();
