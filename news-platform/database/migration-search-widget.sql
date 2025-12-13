-- Migration: Add search_widget section type
-- This migration adds the search widget feature to homepage sections

-- Step 1: Add search_widget to section_type enum
-- First, we need to drop and recreate the constraint
ALTER TABLE homepage_sections DROP CONSTRAINT IF EXISTS homepage_sections_section_type_check;

ALTER TABLE homepage_sections ADD CONSTRAINT homepage_sections_section_type_check 
CHECK (section_type IN (
    'hero_slider',
    'featured_grid',
    'category_articles',
    'latest_articles',
    'tag_articles',
    'manual_articles',
    'sidebar_widget',
    'search_widget',
    'banner',
    'custom_html'
));

-- Step 2: Insert default search widget section (disabled by default)
INSERT INTO homepage_sections (name, title, section_type, selection_type, display_limit, display_layout, sort_order, position, is_visible) 
VALUES ('search_widget', 'Tìm kiếm nâng cao', 'search_widget', 'auto', 0, 'sidebar', 0, 'sidebar', false)
ON CONFLICT DO NOTHING;

-- Note: Admin can enable this widget from the homepage management panel
