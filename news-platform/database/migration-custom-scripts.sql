-- Migration: Custom Scripts
-- Cho phép admin thêm custom code vào Header, Footer, Body Top, Body Bottom

-- ============================================
-- CUSTOM_SCRIPTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS custom_scripts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(20) NOT NULL CHECK (position IN ('header', 'footer', 'body_top', 'body_bottom')),
    code TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0,
    description TEXT,
    created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    updated_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create trigger for updated_at
CREATE TRIGGER update_custom_scripts_updated_at
    BEFORE UPDATE ON custom_scripts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Indexes
CREATE INDEX idx_custom_scripts_position ON custom_scripts(position);
CREATE INDEX idx_custom_scripts_active ON custom_scripts(is_active);
CREATE INDEX idx_custom_scripts_sort ON custom_scripts(position, sort_order);

-- Insert example scripts (optional)
INSERT INTO custom_scripts (name, position, code, is_active, description) VALUES
('Google Analytics', 'header', '<!-- Google Analytics code here -->', false, 'Google Analytics tracking code'),
('Facebook Pixel', 'header', '<!-- Facebook Pixel code here -->', false, 'Facebook Pixel tracking code'),
('Custom CSS', 'header', '<style>/* Custom CSS */</style>', false, 'Custom CSS styles'),
('Chat Widget', 'body_bottom', '<!-- Chat widget code here -->', false, 'Live chat widget')
ON CONFLICT DO NOTHING;
