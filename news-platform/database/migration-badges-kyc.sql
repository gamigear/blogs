-- Migration: Badges & KYC System
-- Description: Add badges management and KYC verification

-- Badges table (admin creates badges)
CREATE TABLE IF NOT EXISTS badges (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    icon VARCHAR(500), -- URL to badge icon
    color VARCHAR(20) DEFAULT '#3B82F6', -- Badge color
    type VARCHAR(50) DEFAULT 'achievement', -- achievement, kyc, special, role
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- User badges (many-to-many)
CREATE TABLE IF NOT EXISTS user_badges (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    badge_id INTEGER NOT NULL REFERENCES badges(id) ON DELETE CASCADE,
    granted_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    granted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP WITH TIME ZONE, -- NULL = permanent
    note TEXT,
    UNIQUE(user_id, badge_id)
);

-- KYC requests table
CREATE TABLE IF NOT EXISTS kyc_requests (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    full_name VARCHAR(255) NOT NULL,
    date_of_birth DATE NOT NULL,
    id_type VARCHAR(50) NOT NULL, -- cmnd, cccd, passport
    id_number VARCHAR(50) NOT NULL,
    id_front_image VARCHAR(500) NOT NULL,
    id_back_image VARCHAR(500),
    selfie_image VARCHAR(500) NOT NULL,
    address TEXT,
    phone VARCHAR(20),
    status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected
    reviewed_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    reviewed_at TIMESTAMP WITH TIME ZONE,
    rejection_reason TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add kyc_verified to users
ALTER TABLE users ADD COLUMN IF NOT EXISTS kyc_verified BOOLEAN DEFAULT false;
ALTER TABLE users ADD COLUMN IF NOT EXISTS kyc_verified_at TIMESTAMP WITH TIME ZONE;

-- Indexes
CREATE INDEX IF NOT EXISTS idx_user_badges_user ON user_badges(user_id);
CREATE INDEX IF NOT EXISTS idx_user_badges_badge ON user_badges(badge_id);
CREATE INDEX IF NOT EXISTS idx_kyc_requests_user ON kyc_requests(user_id);
CREATE INDEX IF NOT EXISTS idx_kyc_requests_status ON kyc_requests(status);

-- Insert default KYC verified badge
INSERT INTO badges (name, slug, description, icon, color, type, sort_order)
VALUES ('Đã xác minh', 'kyc-verified', 'Tài khoản đã xác minh danh tính', '✓', '#10B981', 'kyc', 1)
ON CONFLICT (slug) DO NOTHING;
