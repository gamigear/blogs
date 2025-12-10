import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    // Create badges table
    await query(`
      CREATE TABLE IF NOT EXISTS badges (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        slug VARCHAR(100) UNIQUE NOT NULL,
        description TEXT,
        icon VARCHAR(500),
        color VARCHAR(20) DEFAULT '#3B82F6',
        type VARCHAR(50) DEFAULT 'achievement',
        is_active BOOLEAN DEFAULT true,
        sort_order INTEGER DEFAULT 0,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create user_badges table
    await query(`
      CREATE TABLE IF NOT EXISTS user_badges (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        badge_id INTEGER NOT NULL REFERENCES badges(id) ON DELETE CASCADE,
        granted_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
        granted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMP WITH TIME ZONE,
        note TEXT,
        UNIQUE(user_id, badge_id)
      )
    `);

    // Create kyc_requests table
    await query(`
      CREATE TABLE IF NOT EXISTS kyc_requests (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        full_name VARCHAR(255) NOT NULL,
        date_of_birth DATE NOT NULL,
        id_type VARCHAR(50) NOT NULL,
        id_number VARCHAR(50) NOT NULL,
        id_front_image VARCHAR(500) NOT NULL,
        id_back_image VARCHAR(500),
        selfie_image VARCHAR(500) NOT NULL,
        address TEXT,
        phone VARCHAR(20),
        status VARCHAR(20) DEFAULT 'pending',
        reviewed_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
        reviewed_at TIMESTAMP WITH TIME ZONE,
        rejection_reason TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Add columns to users
    await query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS kyc_verified BOOLEAN DEFAULT false`);
    await query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS kyc_verified_at TIMESTAMP WITH TIME ZONE`);

    // Create indexes
    await query(`CREATE INDEX IF NOT EXISTS idx_user_badges_user ON user_badges(user_id)`);
    await query(`CREATE INDEX IF NOT EXISTS idx_kyc_requests_status ON kyc_requests(status)`);

    // Insert default KYC badge
    await query(`
      INSERT INTO badges (name, slug, description, icon, color, type, sort_order)
      VALUES ('Đã xác minh', 'kyc-verified', 'Tài khoản đã xác minh danh tính', '✓', '#10B981', 'kyc', 1)
      ON CONFLICT (slug) DO NOTHING
    `);

    return NextResponse.json({ success: true, message: 'Badges & KYC migration completed' });
  } catch (error: any) {
    console.error('Migration error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
