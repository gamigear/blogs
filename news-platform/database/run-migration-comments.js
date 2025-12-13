const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_USJKRivcTx80@ep-billowing-pine-a10ro73q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require'
});

async function runMigration() {
  try {
    console.log('Running comments migration...\n');

    // 1. Create comments table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        article_id INTEGER NOT NULL,
        user_id INTEGER,
        parent_id INTEGER,
        content TEXT NOT NULL,
        status VARCHAR(20) DEFAULT 'approved' CHECK (status IN ('pending', 'approved', 'rejected', 'spam')),
        rejection_reason TEXT,
        moderated_by INTEGER,
        moderated_at TIMESTAMP,
        ip_address INET,
        user_agent TEXT,
        likes_count INTEGER DEFAULT 0,
        replies_count INTEGER DEFAULT 0,
        is_pinned BOOLEAN DEFAULT FALSE,
        is_edited BOOLEAN DEFAULT FALSE,
        edited_at TIMESTAMP,
        flagged_count INTEGER DEFAULT 0,
        auto_moderation_result JSONB DEFAULT '{}',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✓ Created comments table');

    // 2. Create indexes
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_comments_article ON comments(article_id)`);
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_comments_user ON comments(user_id)`);
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_comments_parent ON comments(parent_id)`);
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_comments_status ON comments(status)`);
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_comments_created ON comments(created_at DESC)`);
    console.log('✓ Created indexes for comments');

    // 3. Create comment_likes table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS comment_likes (
        id SERIAL PRIMARY KEY,
        comment_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(comment_id, user_id)
      )
    `);
    console.log('✓ Created comment_likes table');

    await pool.query(`CREATE INDEX IF NOT EXISTS idx_comment_likes_comment ON comment_likes(comment_id)`);
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_comment_likes_user ON comment_likes(user_id)`);
    console.log('✓ Created indexes for comment_likes');

    // 4. Create comment_settings table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS comment_settings (
        id SERIAL PRIMARY KEY,
        key VARCHAR(100) UNIQUE NOT NULL,
        value JSONB NOT NULL DEFAULT '{}',
        description TEXT,
        updated_by INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✓ Created comment_settings table');

    // 5. Insert default settings
    await pool.query(`
      INSERT INTO comment_settings (key, value, description) VALUES
      ('general', '{"enabled": true, "require_login": true, "require_approval": false, "auto_approve_trusted_users": true, "trusted_user_min_trust_level": 2, "max_comment_length": 5000, "min_comment_length": 10, "allow_links": true, "allow_images": false, "allow_html": false, "nested_replies_depth": 3, "comments_per_page": 20, "sort_order": "newest"}', 'Cài đặt chung cho comment'),
      ('moderation', '{"auto_moderation_enabled": true, "spam_detection_enabled": true, "profanity_filter_enabled": true, "link_moderation": "review", "new_user_moderation": true, "new_user_threshold_days": 7, "flag_threshold_for_review": 3, "flag_threshold_for_hide": 5}', 'Cài đặt kiểm duyệt tự động'),
      ('notifications', '{"notify_author_on_comment": true, "notify_user_on_reply": true, "notify_moderators_on_flag": true, "notify_user_on_approval": true, "notify_user_on_rejection": true}', 'Cài đặt thông báo')
      ON CONFLICT (key) DO NOTHING
    `);
    console.log('✓ Inserted default comment settings');

    // 6. Create keyword_filters table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS keyword_filters (
        id SERIAL PRIMARY KEY,
        keyword VARCHAR(255) NOT NULL,
        filter_type VARCHAR(20) NOT NULL CHECK (filter_type IN ('banned', 'review', 'replace')),
        replacement_text VARCHAR(255),
        is_regex BOOLEAN DEFAULT FALSE,
        is_case_sensitive BOOLEAN DEFAULT FALSE,
        is_active BOOLEAN DEFAULT TRUE,
        match_count INTEGER DEFAULT 0,
        created_by INTEGER,
        updated_by INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✓ Created keyword_filters table');

    // 7. Create functions and triggers
    await pool.query(`
      CREATE OR REPLACE FUNCTION update_comment_counts()
      RETURNS TRIGGER AS $$
      BEGIN
        IF TG_OP = 'INSERT' THEN
          IF NEW.parent_id IS NOT NULL THEN
            UPDATE comments SET replies_count = replies_count + 1 WHERE id = NEW.parent_id;
          END IF;
        ELSIF TG_OP = 'DELETE' THEN
          IF OLD.parent_id IS NOT NULL THEN
            UPDATE comments SET replies_count = replies_count - 1 WHERE id = OLD.parent_id;
          END IF;
        END IF;
        RETURN NULL;
      END;
      $$ LANGUAGE plpgsql
    `);
    console.log('✓ Created update_comment_counts function');

    await pool.query(`DROP TRIGGER IF EXISTS trigger_update_comment_counts ON comments`);
    await pool.query(`
      CREATE TRIGGER trigger_update_comment_counts
      AFTER INSERT OR DELETE ON comments
      FOR EACH ROW
      EXECUTE FUNCTION update_comment_counts()
    `);
    console.log('✓ Created trigger for comment counts');

    await pool.query(`
      CREATE OR REPLACE FUNCTION update_like_counts()
      RETURNS TRIGGER AS $$
      BEGIN
        IF TG_OP = 'INSERT' THEN
          UPDATE comments SET likes_count = likes_count + 1 WHERE id = NEW.comment_id;
        ELSIF TG_OP = 'DELETE' THEN
          UPDATE comments SET likes_count = likes_count - 1 WHERE id = OLD.comment_id;
        END IF;
        RETURN NULL;
      END;
      $$ LANGUAGE plpgsql
    `);
    console.log('✓ Created update_like_counts function');

    await pool.query(`DROP TRIGGER IF EXISTS trigger_update_like_counts ON comment_likes`);
    await pool.query(`
      CREATE TRIGGER trigger_update_like_counts
      AFTER INSERT OR DELETE ON comment_likes
      FOR EACH ROW
      EXECUTE FUNCTION update_like_counts()
    `);
    console.log('✓ Created trigger for like counts');

    console.log('\n✅ Comments migration completed successfully!');

  } catch (error) {
    console.error('Migration failed:', error.message);
  } finally {
    await pool.end();
  }
}

runMigration();
