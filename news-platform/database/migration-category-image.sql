-- Migration: Add image column to categories table
-- This allows categories to have a representative image

-- Add image column to categories table
ALTER TABLE categories ADD COLUMN IF NOT EXISTS image VARCHAR(500);

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS idx_categories_image ON categories(image) WHERE image IS NOT NULL;

-- Comment for documentation
COMMENT ON COLUMN categories.image IS 'URL of the category representative image';
