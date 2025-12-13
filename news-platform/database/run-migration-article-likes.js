const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_USJKRivcTx80@ep-billowing-pine-a10ro73q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require'
});

async function runMigration() {
  try {
    console.log('Running article likes migration...\n');
    
    // 1. Create article_likes table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS article_likes (
        id SERIAL PRIMARY KEY,
        article_id INTEGER NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(article_id, user_id)
      )
    `);
    console.log('✓ Created article_likes table');

    // 2. Create indexes
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_article_likes_article ON article_likes(article_id)`);
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_article_likes_user ON article_likes(user_id)`);
    console.log('✓ Created indexes');

    // 3. Add likes_count column to articles
    await pool.query(`
      ALTER TABLE articles ADD COLUMN IF NOT EXISTS likes_count INTEGER DEFAULT 0
    `);
    console.log('✓ Added likes_count column');

    // 4. Add comments_count column to articles
    await pool.query(`
      ALTER TABLE articles ADD COLUMN IF NOT EXISTS comments_count INTEGER DEFAULT 0
    `);
    console.log('✓ Added comments_count column');

    // 5. Create function for article like counts
    await pool.query(`
      CREATE OR REPLACE FUNCTION update_article_like_counts()
      RETURNS TRIGGER AS $$
      BEGIN
        IF TG_OP = 'INSERT' THEN
          UPDATE articles SET likes_count = likes_count + 1 WHERE id = NEW.article_id;
        ELSIF TG_OP = 'DELETE' THEN
          UPDATE articles SET likes_count = likes_count - 1 WHERE id = OLD.article_id;
        END IF;
        RETURN NULL;
      END;
      $$ LANGUAGE plpgsql
    `);
    console.log('✓ Created update_article_like_counts function');

    // 6. Create trigger for article likes
    await pool.query(`DROP TRIGGER IF EXISTS trigger_update_article_like_counts ON article_likes`);
    await pool.query(`
      CREATE TRIGGER trigger_update_article_like_counts
      AFTER INSERT OR DELETE ON article_likes
      FOR EACH ROW
      EXECUTE FUNCTION update_article_like_counts()
    `);
    console.log('✓ Created trigger for article likes');

    // 7. Create function for article comment counts
    await pool.query(`
      CREATE OR REPLACE FUNCTION update_article_comment_counts()
      RETURNS TRIGGER AS $$
      BEGIN
        IF TG_OP = 'INSERT' THEN
          IF NEW.status = 'approved' THEN
            UPDATE articles SET comments_count = comments_count + 1 WHERE id = NEW.article_id;
          END IF;
        ELSIF TG_OP = 'DELETE' THEN
          IF OLD.status = 'approved' THEN
            UPDATE articles SET comments_count = comments_count - 1 WHERE id = OLD.article_id;
          END IF;
        ELSIF TG_OP = 'UPDATE' THEN
          IF OLD.status != 'approved' AND NEW.status = 'approved' THEN
            UPDATE articles SET comments_count = comments_count + 1 WHERE id = NEW.article_id;
          ELSIF OLD.status = 'approved' AND NEW.status != 'approved' THEN
            UPDATE articles SET comments_count = comments_count - 1 WHERE id = NEW.article_id;
          END IF;
        END IF;
        RETURN NULL;
      END;
      $$ LANGUAGE plpgsql
    `);
    console.log('✓ Created update_article_comment_counts function');

    // 8. Create trigger for comments
    await pool.query(`DROP TRIGGER IF EXISTS trigger_update_article_comment_counts ON comments`);
    await pool.query(`
      CREATE TRIGGER trigger_update_article_comment_counts
      AFTER INSERT OR UPDATE OR DELETE ON comments
      FOR EACH ROW
      EXECUTE FUNCTION update_article_comment_counts()
    `);
    console.log('✓ Created trigger for comments');

    // 9. Update existing counts
    await pool.query(`
      UPDATE articles a SET 
        likes_count = COALESCE((SELECT COUNT(*) FROM article_likes WHERE article_id = a.id), 0),
        comments_count = COALESCE((SELECT COUNT(*) FROM comments WHERE article_id = a.id AND status = 'approved'), 0)
    `);
    console.log('✓ Updated existing counts');

    console.log('\n✅ Migration completed successfully!');

    // Verify
    const result = await pool.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'articles' 
      AND column_name IN ('likes_count', 'comments_count')
    `);
    console.log('\nAdded columns:', result.rows.map(r => r.column_name).join(', '));

    const tableCheck = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'article_likes'
      )
    `);
    console.log('article_likes table exists:', tableCheck.rows[0].exists);

  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await pool.end();
  }
}

runMigration();
