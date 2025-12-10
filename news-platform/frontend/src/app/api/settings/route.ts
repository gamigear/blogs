import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

/**
 * GET /api/settings - Get public site settings
 */
export async function GET() {
  try {
    const settings = await query<{ key: string; value: any }>(
      'SELECT key, value FROM site_settings'
    );

    const settingsObj: Record<string, any> = {};
    settings.forEach((s) => {
      settingsObj[s.key] = s.value;
    });

    return NextResponse.json(settingsObj);
  } catch (error) {
    console.error('Error fetching settings:', error);
    // Return default settings if table doesn't exist
    return NextResponse.json({
      general: {
        site_name: 'Bangiaiphap',
        site_description: 'Tin tức công nghệ và cộng đồng',
        logo_header_url: '',
        logo_footer_url: '',
        favicon_url: '',
        contact_email: 'contact@bangiaiphap.com',
        contact_phone: '1900-xxxx',
      },
      header: { show_search: true, show_notifications: true, menu_items: [] },
      footer: {
        company_name: 'Bangiaiphap Media Co., Ltd.',
        ceo_name: 'Admin',
        address: 'Việt Nam',
        business_registration: '',
        license_info: '',
        links: [],
        social_links: { facebook: '', twitter: '', youtube: '' },
      },
    });
  }
}
