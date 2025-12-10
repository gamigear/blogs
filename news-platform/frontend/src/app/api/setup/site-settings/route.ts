import { NextResponse } from 'next/server';
import { execute, query } from '@/lib/db';

export async function GET() {
  try {
    // Create site_settings table
    await execute(`
      CREATE TABLE IF NOT EXISTS site_settings (
        id SERIAL PRIMARY KEY,
        key VARCHAR(100) UNIQUE NOT NULL,
        value JSONB NOT NULL DEFAULT '{}',
        description TEXT,
        updated_by INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create index
    await execute(`
      CREATE INDEX IF NOT EXISTS idx_site_settings_key ON site_settings(key)
    `);

    // Insert default settings
    const defaultSettings = [
      {
        key: 'general',
        value: {
          site_name: 'Bangiaiphap',
          site_description: 'Tin tức công nghệ và cộng đồng',
          logo_header_url: '',
          logo_footer_url: '',
          favicon_url: '',
          contact_email: 'contact@bangiaiphap.com',
          contact_phone: '1900-xxxx'
        },
        description: 'Cài đặt chung của website'
      },
      {
        key: 'header',
        value: {
          show_search: true,
          show_notifications: true,
          menu_items: [
            { name: 'Trang chủ', href: '/', icon: '🏠' },
            { name: 'Thời sự', href: '/category/thoi-su', icon: '📰' },
            { name: 'Công nghệ', href: '/category/cong-nghe', icon: '💻' }
          ]
        },
        description: 'Cài đặt header'
      },
      {
        key: 'footer',
        value: {
          company_name: 'Bangiaiphap Media Co., Ltd.',
          ceo_name: 'Admin',
          address: 'Việt Nam',
          business_registration: '',
          license_info: '',
          links: [],
          social_links: { facebook: '', twitter: '', youtube: '' }
        },
        description: 'Cài đặt footer'
      },
      {
        key: 'homepage',
        value: {
          featured_section: true,
          featured_count: 5,
          latest_section: true,
          latest_count: 10,
          show_sidebar: true
        },
        description: 'Cài đặt trang chủ'
      },
      {
        key: 'seo',
        value: {
          default_meta_title: 'Bangiaiphap - Tin tức công nghệ',
          default_meta_description: 'Cập nhật tin tức công nghệ mới nhất',
          google_analytics_id: '',
          google_tag_manager_id: '',
          facebook_pixel_id: ''
        },
        description: 'Cài đặt SEO'
      }
    ];

    for (const setting of defaultSettings) {
      await execute(
        `INSERT INTO site_settings (key, value, description)
         VALUES ($1, $2::jsonb, $3)
         ON CONFLICT (key) DO NOTHING`,
        [setting.key, JSON.stringify(setting.value), setting.description]
      );
    }

    const settings = await query('SELECT * FROM site_settings ORDER BY key');

    return NextResponse.json({
      success: true,
      message: 'Site settings table created successfully',
      settings
    });
  } catch (error: any) {
    console.error('Setup error:', error);
    return NextResponse.json(
      { error: 'Setup failed', details: error?.message },
      { status: 500 }
    );
  }
}
