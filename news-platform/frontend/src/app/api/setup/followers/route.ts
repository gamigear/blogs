import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

/**
 * GET /api/setup/followers - Run followers migration
 */
export async function GET() {
  try {
    // Create user_followers table
    await query(`
      CREATE TABLE IF NOT EXISTS user_followers (
        id SERIAL PRIMARY KEY,
        follower_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        following_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(follower_id, following_id),
        CHECK (follower_id != following_id)
      )
    `);

    // Create indexes
    await query(`CREATE INDEX IF NOT EXISTS idx_user_followers_follower ON user_followers(follower_id)`);
    await query(`CREATE INDEX IF NOT EXISTS idx_user_followers_following ON user_followers(following_id)`);

    // Add columns to users table
    await query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS followers_count INTEGER DEFAULT 0`);
    await query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS following_count INTEGER DEFAULT 0`);

    // Create trigger function
    await query(`
      CREATE OR REPLACE FUNCTION update_follower_counts()
      RETURNS TRIGGER AS $$
      BEGIN
        IF TG_OP = 'INSERT' THEN
          UPDATE users SET followers_count = followers_count + 1 WHERE id = NEW.following_id;
          UPDATE users SET following_count = following_count + 1 WHERE id = NEW.follower_id;
          RETURN NEW;
        ELSIF TG_OP = 'DELETE' THEN
          UPDATE users SET followers_count = GREATEST(followers_count - 1, 0) WHERE id = OLD.following_id;
          UPDATE users SET following_count = GREATEST(following_count - 1, 0) WHERE id = OLD.follower_id;
          RETURN OLD;
        END IF;
        RETURN NULL;
      END;
      $$ LANGUAGE plpgsql
    `);

    // Drop and recreate trigger
    await query(`DROP TRIGGER IF EXISTS trigger_update_follower_counts ON user_followers`);
    await query(`
      CREATE TRIGGER trigger_update_follower_counts
      AFTER INSERT OR DELETE ON user_followers
      FOR EACH ROW EXECUTE FUNCTION update_follower_counts()
    `);

    return NextResponse.json({ 
      success: true, 
      message: 'Followers migration completed successfully' 
    });
  } catch (error: any) {
    console.error('Migration error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
