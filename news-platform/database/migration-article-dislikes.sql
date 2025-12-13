-- ============================================
-- ARTICLE DISLIKES MIGRATION
-- Chức năng: Dislike bài viết
-- ============================================

-- Add dislikes_count column to articles if not exists
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'articles' AND column_name = 'dislikes_count') THEN
        ALTER TABLE articles ADD COLUMN dislikes_count INTEGER DEFAULT 0;
    END IF;
END $$;

-- ============================================
-- ARTICLE_DISLIKES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS article_dislikes (
    id SERIAL PRIMARY KEY,
    article_id INTEGER NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(article_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_article_dislikes_article ON article_dislikes(article_id);
CREATE INDEX IF NOT EXISTS idx_article_dislikes_user ON article_dislikes(user_id);

-- ============================================
-- FUNCTION: Update article dislike counts
-- ============================================
CREATE OR REPLACE FUNCTION update_article_dislike_counts()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE articles SET dislikes_count = dislikes_count + 1 WHERE id = NEW.article_id;
        -- Remove like if exists (user can't like and dislike at same time)
        DELETE FROM article_likes WHERE article_id = NEW.article_id AND user_id = NEW.user_id;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE articles SET dislikes_count = GREATEST(dislikes_count - 1, 0) WHERE id = OLD.article_id;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Drop trigger if exists and recreate
DROP TRIGGER IF EXISTS trigger_update_article_dislike_counts ON article_dislikes;
CREATE TRIGGER trigger_update_article_dislike_counts
    AFTER INSERT OR DELETE ON article_dislikes
    FOR EACH ROW
    EXECUTE FUNCTION update_article_dislike_counts();

-- Update like trigger to remove dislike when liking
CREATE OR REPLACE FUNCTION update_article_like_counts()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE articles SET likes_count = likes_count + 1 WHERE id = NEW.article_id;
        -- Remove dislike if exists (user can't like and dislike at same time)
        DELETE FROM article_dislikes WHERE article_id = NEW.article_id AND user_id = NEW.user_id;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE articles SET likes_count = GREATEST(likes_count - 1, 0) WHERE id = OLD.article_id;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Update existing dislikes count
UPDATE articles SET dislikes_count = 0 WHERE dislikes_count IS NULL;
