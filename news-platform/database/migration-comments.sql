-- ============================================
-- COMMENTS SYSTEM MIGRATION
-- Chức năng: Quản trị comment và thảo luận
-- ============================================

-- ============================================
-- COMMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    article_id INTEGER NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    parent_id INTEGER REFERENCES comments(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'spam')),
    rejection_reason TEXT,
    moderated_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
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
);

-- Create trigger for updated_at
CREATE TRIGGER update_comments_updated_at
    BEFORE UPDATE ON comments
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Indexes for comments
CREATE INDEX idx_comments_article ON comments(article_id);
CREATE INDEX idx_comments_user ON comments(user_id);
CREATE INDEX idx_comments_parent ON comments(parent_id);
CREATE INDEX idx_comments_status ON comments(status);
CREATE INDEX idx_comments_created ON comments(created_at DESC);
CREATE INDEX idx_comments_pending ON comments(status, created_at DESC) WHERE status = 'pending';

-- ============================================
-- COMMENT_LIKES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS comment_likes (
    id SERIAL PRIMARY KEY,
    comment_id INTEGER NOT NULL REFERENCES comments(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(comment_id, user_id)
);

CREATE INDEX idx_comment_likes_comment ON comment_likes(comment_id);
CREATE INDEX idx_comment_likes_user ON comment_likes(user_id);

-- ============================================
-- COMMENT_FLAGS TABLE (Báo cáo comment)
-- ============================================
CREATE TABLE IF NOT EXISTS comment_flags (
    id SERIAL PRIMARY KEY,
    comment_id INTEGER NOT NULL REFERENCES comments(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    reason VARCHAR(50) NOT NULL CHECK (reason IN ('spam', 'offensive', 'harassment', 'misinformation', 'other')),
    description TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'dismissed')),
    reviewed_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    reviewed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_comment_flags_comment ON comment_flags(comment_id);
CREATE INDEX idx_comment_flags_status ON comment_flags(status);

-- ============================================
-- KEYWORD_FILTERS TABLE (Từ khóa lọc)
-- ============================================
CREATE TABLE IF NOT EXISTS keyword_filters (
    id SERIAL PRIMARY KEY,
    keyword VARCHAR(255) NOT NULL,
    filter_type VARCHAR(20) NOT NULL CHECK (filter_type IN ('banned', 'review', 'replace')),
    replacement_text VARCHAR(255),
    is_regex BOOLEAN DEFAULT FALSE,
    is_case_sensitive BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    match_count INTEGER DEFAULT 0,
    created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    updated_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create trigger for updated_at
CREATE TRIGGER update_keyword_filters_updated_at
    BEFORE UPDATE ON keyword_filters
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX idx_keyword_filters_type ON keyword_filters(filter_type);
CREATE INDEX idx_keyword_filters_active ON keyword_filters(is_active) WHERE is_active = TRUE;
CREATE UNIQUE INDEX idx_keyword_filters_unique ON keyword_filters(LOWER(keyword), filter_type);

-- ============================================
-- COMMENT_SETTINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS comment_settings (
    id SERIAL PRIMARY KEY,
    key VARCHAR(100) UNIQUE NOT NULL,
    value JSONB NOT NULL DEFAULT '{}',
    description TEXT,
    updated_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create trigger for updated_at
CREATE TRIGGER update_comment_settings_updated_at
    BEFORE UPDATE ON comment_settings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert default comment settings
INSERT INTO comment_settings (key, value, description) VALUES
('general', '{
    "enabled": true,
    "require_login": true,
    "require_approval": false,
    "auto_approve_trusted_users": true,
    "trusted_user_min_trust_level": 2,
    "max_comment_length": 5000,
    "min_comment_length": 10,
    "allow_links": true,
    "allow_images": false,
    "allow_html": false,
    "nested_replies_depth": 3,
    "comments_per_page": 20,
    "sort_order": "newest"
}', 'Cài đặt chung cho comment'),
('moderation', '{
    "auto_moderation_enabled": true,
    "spam_detection_enabled": true,
    "profanity_filter_enabled": true,
    "link_moderation": "review",
    "new_user_moderation": true,
    "new_user_threshold_days": 7,
    "flag_threshold_for_review": 3,
    "flag_threshold_for_hide": 5
}', 'Cài đặt kiểm duyệt tự động'),
('notifications', '{
    "notify_author_on_comment": true,
    "notify_user_on_reply": true,
    "notify_moderators_on_flag": true,
    "notify_user_on_approval": true,
    "notify_user_on_rejection": true
}', 'Cài đặt thông báo')
ON CONFLICT (key) DO NOTHING;

-- ============================================
-- USER_COMMENT_BANS TABLE (Cấm user comment)
-- ============================================
CREATE TABLE IF NOT EXISTS user_comment_bans (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    reason TEXT NOT NULL,
    banned_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    banned_until TIMESTAMP,
    is_permanent BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_comment_bans_user ON user_comment_bans(user_id);
CREATE INDEX idx_user_comment_bans_active ON user_comment_bans(user_id, banned_until) 
    WHERE is_permanent = TRUE OR banned_until > CURRENT_TIMESTAMP;

-- ============================================
-- FUNCTION: Check if content contains banned keywords
-- ============================================
CREATE OR REPLACE FUNCTION check_keyword_filters(content TEXT)
RETURNS TABLE (
    filter_id INTEGER,
    keyword VARCHAR(255),
    filter_type VARCHAR(20),
    replacement_text VARCHAR(255)
) AS $$
BEGIN
    RETURN QUERY
    SELECT kf.id, kf.keyword, kf.filter_type, kf.replacement_text
    FROM keyword_filters kf
    WHERE kf.is_active = TRUE
    AND (
        (kf.is_regex = FALSE AND kf.is_case_sensitive = FALSE AND content ILIKE '%' || kf.keyword || '%')
        OR (kf.is_regex = FALSE AND kf.is_case_sensitive = TRUE AND content LIKE '%' || kf.keyword || '%')
        OR (kf.is_regex = TRUE AND content ~ kf.keyword)
    );
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- FUNCTION: Update comment counts
-- ============================================
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
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_comment_counts
    AFTER INSERT OR DELETE ON comments
    FOR EACH ROW
    EXECUTE FUNCTION update_comment_counts();

-- ============================================
-- FUNCTION: Update like counts
-- ============================================
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
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_like_counts
    AFTER INSERT OR DELETE ON comment_likes
    FOR EACH ROW
    EXECUTE FUNCTION update_like_counts();
