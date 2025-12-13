-- Migration: Fix site_settings table
-- Run this if you get "Failed to update setting" error

-- Add UNIQUE constraint on key column if missing
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'site_settings_key_key' 
    OR conname = 'site_settings_key_unique'
  ) THEN
    -- First remove duplicates if any
    DELETE FROM site_settings a USING site_settings b
    WHERE a.id < b.id AND a.key = b.key;
    
    -- Then add unique constraint
    ALTER TABLE site_settings ADD CONSTRAINT site_settings_key_unique UNIQUE (key);
  END IF;
END $$;

-- Create index for fast lookup
CREATE INDEX IF NOT EXISTS idx_site_settings_key ON site_settings(key);
