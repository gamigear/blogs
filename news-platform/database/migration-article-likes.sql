-- ============================================
-- ARTICLE LIKES MIGRATION
-- Chức năng: Like bài viết
-- ============================================

-- ============================================
-- ARTICLE_LIKES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS article_likes (
    id SERIAL PRIMARY KEY,
    article_id INTEGER NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(article_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_article_likes_article ON article_likes(article_id);
CREATE INDEX IF NOT EXISTS idx_article_likes_user ON article_likes(user_id);

-- Add likes_count column to articles if not exists
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'articles' AND column_name = 'likes_count') THEN
        ALTER TABLE articles ADD COLUMN likes_count INTEGER DEFAULT 0;
    END IF;
END $$;

-- Add comments_count column to articles if not exists
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'articles' AND column_name = 'comments_count') THEN
        ALTER TABLE articles ADD COLUMN comments_count INTEGER DEFAULT 0;
    END IF;
END $$;

-- ============================================
-- FUNCTION: Update article like counts
-- ============================================
CREATE OR REPLACE FUNCTION update_article_like_counts()
RETURNS TRIGGER AS $
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE articles SET likes_count = likes_count + 1 WHERE id = NEW.article_id;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE articles SET likes_count = likes_count - 1 WHERE id = OLD.article_id;
    END IF;
    RETURN NULL;
END;
$ LANGUAGE plpgsql;

-- Drop trigger if exists and recreate
DROP TRIGGER IF EXISTS trigger_update_article_like_counts ON article_likes;
CREATE TRIGGER trigger_update_article_like_counts
    AFTER INSERT OR DELETE ON article_likes
    FOR EACH ROW
    EXECUTE FUNCTION update_article_like_counts();

-- ============================================
-- FUNCTION: Update article comment counts
-- ============================================
CREATE OR REPLACE FUNCTION update_article_comment_counts()
RETURNS TRIGGER AS $
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
$ LANGUAGE plpgsql;

-- Drop trigger if exists and recreate
DROP TRIGGER IF EXISTS trigger_update_article_comment_counts ON comments;
CREATE TRIGGER trigger_update_article_comment_counts
    AFTER INSERT OR UPDATE OR DELETE ON comments
    FOR EACH ROW
    EXECUTE FUNCTION update_article_comment_counts();

-- Update existing counts
UPDATE articles a SET 
    likes_count = COALESCE((SELECT COUNT(*) FROM article_likes WHERE article_id = a.id), 0),
    comments_count = COALESCE((SELECT COUNT(*) FROM comments WHERE article_id = a.id AND status = 'approved'), 0);
