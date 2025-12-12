const { Pool } = require('pg');

async function runMigration() {
  const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_USJKRivcTx80@ep-billowing-pine-a10ro73q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require'
  });
  
  try {
    console.log('Running migration: Add article review tracking fields...\n');
    
    // Add reviewed_by column (without foreign key for simplicity)
    await pool.query(`
      ALTER TABLE articles 
      ADD COLUMN IF NOT EXISTS reviewed_by INTEGER
    `);
    console.log('✓ Added reviewed_by column');
    
    // Add reviewed_at column
    await pool.query(`
      ALTER TABLE articles 
      ADD COLUMN IF NOT EXISTS reviewed_at TIMESTAMP
    `);
    console.log('✓ Added reviewed_at column');
    
    // Add rejection_reason column
    await pool.query(`
      ALTER TABLE articles 
      ADD COLUMN IF NOT EXISTS rejection_reason TEXT
    `);
    console.log('✓ Added rejection_reason column');
    
    // Create indexes
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_articles_reviewed_by ON articles(reviewed_by)
    `);
    console.log('✓ Created index idx_articles_reviewed_by');
    
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_articles_status_reviewed ON articles(status, reviewed_at DESC)
    `);
    console.log('✓ Created index idx_articles_status_reviewed');
    
    // Update status constraint to include 'rejected'
    try {
      await pool.query(`ALTER TABLE articles DROP CONSTRAINT IF EXISTS articles_status_check`);
      await pool.query(`
        ALTER TABLE articles ADD CONSTRAINT articles_status_check 
        CHECK (status IN ('draft', 'pending_review', 'published', 'rejected', 'archived'))
      `);
      console.log('✓ Updated status constraint to include "rejected"');
    } catch (err) {
      console.log('⚠ Status constraint update skipped (may already exist)');
    }
    
    console.log('\n✅ Migration completed successfully!');
    
    // Show current schema
    const columns = await pool.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'articles' 
      AND column_name IN ('reviewed_by', 'reviewed_at', 'rejection_reason')
      ORDER BY column_name
    `);
    
    console.log('\nNew columns in articles table:');
    columns.rows.forEach(col => {
      console.log(`  - ${col.column_name}: ${col.data_type} (nullable: ${col.is_nullable})`);
    });
    
  } catch (err) {
    console.error('Migration error:', err.message);
  } finally {
    await pool.end();
  }
}

runMigration();
