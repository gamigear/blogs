-- Homepage Sections Management
-- Migration for homepage customization feature

-- ============================================
-- HOMEPAGE_SECTIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS homepage_sections (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    title VARCHAR(200),
    section_type VARCHAR(50) NOT NULL CHECK (section_type IN (
        'hero_slider',
        'featured_grid',
        'category_articles',
        'latest_articles',
        'tag_articles',
        'manual_articles',
        'sidebar_widget',
        'banner',
        'custom_html'
    )),
    -- Content selection settings
    selection_type VARCHAR(50) DEFAULT 'auto' CHECK (selection_type IN (
        'auto',           -- Tự động lấy bài mới nhất
        'manual',         -- Chọn thủ công từng bài
        'category',       -- Lấy theo 1 danh mục
        'categories',     -- Lấy theo nhiều danh mục
        'tag',            -- Lấy theo 1 tag
        'tags',           -- Lấy theo nhiều tags
        'featured',       -- Lấy bài nổi bật
        'popular'         -- Lấy bài đọc nhiều
    )),
    -- Selection data (category_ids, tag_ids, article_ids, etc.)
    selection_data JSONB DEFAULT '{}',
    -- Display settings
    display_limit INTEGER DEFAULT 5,
    display_layout VARCHAR(50) DEFAULT 'grid' CHECK (display_layout IN (
        'grid',
        'list',
        'slider',
        'featured_large',
        'sidebar',
        'compact',
        'cards',
        'magazine'
    )),
    display_settings JSONB DEFAULT '{}',
    -- Position and visibility
    sort_order INTEGER DEFAULT 0,
    is_visible BOOLEAN DEFAULT TRUE,
    position VARCHAR(20) DEFAULT 'main' CHECK (position IN ('main', 'sidebar')),
    -- Metadata
    created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    updated_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create trigger for updated_at
CREATE TRIGGER update_homepage_sections_updated_at
    BEFORE UPDATE ON homepage_sections
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Indexes
CREATE INDEX idx_homepage_sections_sort ON homepage_sections(sort_order);
CREATE INDEX idx_homepage_sections_visible ON homepage_sections(is_visible);
CREATE INDEX idx_homepage_sections_position ON homepage_sections(position);
CREATE INDEX idx_homepage_sections_type ON homepage_sections(section_type);

-- Insert default sections
INSERT INTO homepage_sections (name, title, section_type, selection_type, display_limit, display_layout, sort_order, position) VALUES
('hero', 'Tin nổi bật', 'hero_slider', 'featured', 5, 'slider', 1, 'main'),
('top_featured', 'Tin mới nhất', 'featured_grid', 'auto', 6, 'grid', 2, 'main'),
('latest_sidebar', 'Xem nhanh', 'sidebar_widget', 'auto', 10, 'sidebar', 1, 'sidebar'),
('popular_sidebar', 'Đọc nhiều', 'sidebar_widget', 'popular', 5, 'sidebar', 2, 'sidebar')
ON CONFLICT DO NOTHING;

-- ============================================
-- HOMEPAGE_SECTION_ARTICLES TABLE (for manual selection)
-- ============================================
CREATE TABLE IF NOT EXISTS homepage_section_articles (
    id SERIAL PRIMARY KEY,
    section_id INTEGER NOT NULL REFERENCES homepage_sections(id) ON DELETE CASCADE,
    article_id INTEGER NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(section_id, article_id)
);

CREATE INDEX idx_homepage_section_articles_section ON homepage_section_articles(section_id);
CREATE INDEX idx_homepage_section_articles_sort ON homepage_section_articles(section_id, sort_order);
