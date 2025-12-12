-- Migration: Add article review tracking fields
-- Thêm thông tin người duyệt, thời gian duyệt, và lý do từ chối

-- Add new columns to articles table
ALTER TABLE articles 
ADD COLUMN IF NOT EXISTS reviewed_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
ADD COLUMN IF NOT EXISTS reviewed_at TIMESTAMP,
ADD COLUMN IF NOT EXISTS rejection_reason TEXT;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_articles_reviewed_by ON articles(reviewed_by);
CREATE INDEX IF NOT EXISTS idx_articles_status_reviewed ON articles(status, reviewed_at DESC);

-- Add 'rejected' status if not exists (update check constraint)
-- Note: This requires dropping and recreating the constraint
ALTER TABLE articles DROP CONSTRAINT IF EXISTS articles_status_check;
ALTER TABLE articles ADD CONSTRAINT articles_status_check 
  CHECK (status IN ('draft', 'pending_review', 'published', 'rejected', 'archived'));
