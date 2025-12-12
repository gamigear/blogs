import { sql } from './db'

export async function initSettingsTables() {
  // Site settings table
  await sql`
    CREATE TABLE IF NOT EXISTS site_settings (
      id SERIAL PRIMARY KEY,
      key VARCHAR(100) UNIQUE NOT NULL,
      value TEXT,
      type VARCHAR(20) DEFAULT 'text',
      category VARCHAR(50) DEFAULT 'general',
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `

  // Menu items table
  await sql`
    CREATE TABLE IF NOT EXISTS menu_items (
      id SERIAL PRIMARY KEY,
      menu_location VARCHAR(50) NOT NULL,
      title VARCHAR(100) NOT NULL,
      url VARCHAR(255),
      icon VARCHAR(100),
      parent_id INTEGER REFERENCES menu_items(id),
      sort_order INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `

  // Footer links table
  await sql`
    CREATE TABLE IF NOT EXISTS footer_links (
      id SERIAL PRIMARY KEY,
      section VARCHAR(50) NOT NULL,
      title VARCHAR(100) NOT NULL,
      url VARCHAR(255),
      sort_order INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT true
    )
  `

  // Social links table
  await sql`
    CREATE TABLE IF NOT EXISTS social_links (
      id SERIAL PRIMARY KEY,
      platform VARCHAR(50) NOT NULL,
      url VARCHAR(255),
      icon VARCHAR(100),
      sort_order INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT true
    )
  `

  console.log('Settings tables created')
}

export async function seedSettings() {
  const existing = await sql`SELECT COUNT(*) as count FROM site_settings`
  if (Number(existing[0].count) > 0) return

  // General settings
  await sql`
    INSERT INTO site_settings (key, value, type, category) VALUES
    ('site_name', 'Chisfis', 'text', 'general'),
    ('site_tagline', 'Book your next adventure', 'text', 'general'),
    ('site_description', 'Find and book unique accommodations, cars, and experiences around the world.', 'textarea', 'general'),
    ('admin_email', 'admin@chisfis.com', 'email', 'general'),
    ('support_email', 'support@chisfis.com', 'email', 'general'),
    ('support_phone', '+1 234 567 890', 'text', 'general'),
    ('currency', 'USD', 'select', 'general'),
    ('timezone', 'UTC', 'select', 'general'),
    ('date_format', 'MM/DD/YYYY', 'select', 'general'),
    ('logo_url', '/logo.png', 'image', 'branding'),
    ('favicon_url', '/icon.ico', 'image', 'branding'),
    ('primary_color', '#4F46E5', 'color', 'branding'),
    ('header_logo', '', 'image', 'branding'),
    ('header_logo_dark', '', 'image', 'branding'),
    ('footer_logo', '', 'image', 'branding'),
    ('footer_logo_dark', '', 'image', 'branding'),
    ('footer_use_header_logo', 'true', 'boolean', 'branding'),
    ('favicon', '/icon.ico', 'image', 'branding'),
    ('apple_touch_icon', '', 'image', 'branding'),
    ('mobile_logo', '', 'image', 'branding'),
    ('footer_copyright', '© 2024 Chisfis. All rights reserved.', 'text', 'footer'),
    ('footer_description', 'Discover amazing places to stay, unique experiences, and car rentals around the world.', 'textarea', 'footer'),
    ('google_analytics_id', '', 'text', 'seo'),
    ('meta_title', 'Chisfis - Book Hotels, Cars & Experiences', 'text', 'seo'),
    ('meta_description', 'Find and book unique accommodations, cars, and experiences around the world.', 'textarea', 'seo'),
    ('search_placeholder', 'Search destinations, hotels, cars...', 'text', 'search'),
    ('search_suggestions_enabled', 'true', 'boolean', 'search'),
    ('featured_destinations', 'Paris,Tokyo,New York,London,Dubai', 'text', 'search')
  `

  // Header menu
  await sql`
    INSERT INTO menu_items (menu_location, title, url, sort_order) VALUES
    ('header', 'Home', '/', 1),
    ('header', 'Hotels', '/listing-stay', 2),
    ('header', 'Cars', '/listing-car', 3),
    ('header', 'Experiences', '/listing-experiences', 4),
    ('header', 'Blog', '/blog', 5),
    ('header', 'Contact', '/contact', 6)
  `

  // Footer links
  await sql`
    INSERT INTO footer_links (section, title, url, sort_order) VALUES
    ('company', 'About Us', '/about', 1),
    ('company', 'Careers', '/careers', 2),
    ('company', 'Press', '/press', 3),
    ('company', 'Blog', '/blog', 4),
    ('support', 'Help Center', '/help', 1),
    ('support', 'Contact Us', '/contact', 2),
    ('support', 'FAQs', '/faq', 3),
    ('support', 'Cancellation Policy', '/cancellation', 4),
    ('legal', 'Terms of Service', '/terms', 1),
    ('legal', 'Privacy Policy', '/privacy', 2),
    ('legal', 'Cookie Policy', '/cookies', 3),
    ('discover', 'Hotels', '/listing-stay', 1),
    ('discover', 'Cars', '/listing-car', 2),
    ('discover', 'Experiences', '/listing-experiences', 3),
    ('discover', 'Destinations', '/destinations', 4)
  `

  // Social links
  await sql`
    INSERT INTO social_links (platform, url, icon, sort_order) VALUES
    ('facebook', 'https://facebook.com/chisfis', 'facebook', 1),
    ('twitter', 'https://twitter.com/chisfis', 'twitter', 2),
    ('instagram', 'https://instagram.com/chisfis', 'instagram', 3),
    ('youtube', 'https://youtube.com/chisfis', 'youtube', 4),
    ('linkedin', 'https://linkedin.com/company/chisfis', 'linkedin', 5)
  `

  console.log('Settings seeded')
}
