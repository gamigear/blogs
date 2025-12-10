-- Migration: Add images and likes to community_posts for newsfeed feature
-- Run this migration to enable the newsfeed feature

-- Add images column to store multiple images
ALTER TABLE community_posts ADD COLUMN IF NOT EXISTS images JSONB DEFAULT '[]';

-- Add likes count
ALTER TABLE community_posts ADD COLUMN IF NOT EXISTS likes_count INTEGER DEFAULT 0;

-- Add comments count
ALTER TABLE community_posts ADD COLUMN IF NOT EXISTS comments_count INTEGER DEFAULT 0;

-- Add shares count
ALTER TABLE community_posts ADD COLUMN IF NOT EXISTS shares_count INTEGER DEFAULT 0;

-- Create post_likes table
CREATE TABLE IF NOT EXISTS post_likes (
    id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(post_id, user_id)
);

-- Create post_bookmarks table
CREATE TABLE IF NOT EXISTS post_bookmarks (
    id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(post_id, user_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_post_likes_post ON post_likes(post_id);
CREATE INDEX IF NOT EXISTS idx_post_likes_user ON post_likes(user_id);
CREATE INDEX IF NOT EXISTS idx_post_bookmarks_post ON post_bookmarks(post_id);
CREATE INDEX IF NOT EXISTS idx_post_bookmarks_user ON post_bookmarks(user_id);
CREATE INDEX IF NOT EXISTS idx_community_posts_images ON community_posts USING GIN (images);
