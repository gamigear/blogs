import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    // Add images column to community_posts
    await query(`
      ALTER TABLE community_posts ADD COLUMN IF NOT EXISTS images JSONB DEFAULT '[]'
    `);

    // Add likes count
    await query(`
      ALTER TABLE community_posts ADD COLUMN IF NOT EXISTS likes_count INTEGER DEFAULT 0
    `);

    // Add comments count
    await query(`
      ALTER TABLE community_posts ADD COLUMN IF NOT EXISTS comments_count INTEGER DEFAULT 0
    `);

    // Add shares count
    await query(`
      ALTER TABLE community_posts ADD COLUMN IF NOT EXISTS shares_count INTEGER DEFAULT 0
    `);

    // Create post_likes table
    await query(`
      CREATE TABLE IF NOT EXISTS post_likes (
        id SERIAL PRIMARY KEY,
        post_id INTEGER NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(post_id, user_id)
      )
    `);

    // Create post_bookmarks table
    await query(`
      CREATE TABLE IF NOT EXISTS post_bookmarks (
        id SERIAL PRIMARY KEY,
        post_id INTEGER NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(post_id, user_id)
      )
    `);

    // Create indexes
    await query(`CREATE INDEX IF NOT EXISTS idx_post_likes_post ON post_likes(post_id)`);
    await query(`CREATE INDEX IF NOT EXISTS idx_post_likes_user ON post_likes(user_id)`);
    await query(`CREATE INDEX IF NOT EXISTS idx_post_bookmarks_post ON post_bookmarks(post_id)`);
    await query(`CREATE INDEX IF NOT EXISTS idx_post_bookmarks_user ON post_bookmarks(user_id)`);

    return NextResponse.json({ 
      success: true, 
      message: 'Feed migration completed successfully' 
    });
  } catch (error: any) {
    console.error('Feed migration error:', error);
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 });
  }
}
