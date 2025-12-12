import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

// Public API for frontend to get site settings
export async function GET() {
  try {
    const [settings, menus, footer, social] = await Promise.all([
      sql`SELECT key, value FROM site_settings`,
      sql`SELECT title, url, icon FROM menu_items WHERE menu_location = 'header' AND is_active = true ORDER BY sort_order`,
      sql`SELECT section, title, url FROM footer_links WHERE is_active = true ORDER BY section, sort_order`,
      sql`SELECT platform, url, icon FROM social_links WHERE is_active = true ORDER BY sort_order`
    ])

    // Convert settings to object
    const settingsObj: Record<string, string> = {}
    for (const s of settings) {
      settingsObj[s.key as string] = s.value as string
    }

    // Group footer links by section
    const footerLinks: Record<string, { title: string; url: string }[]> = {}
    for (const link of footer) {
      const section = link.section as string
      if (!footerLinks[section]) footerLinks[section] = []
      footerLinks[section].push({ title: link.title as string, url: link.url as string })
    }

    return NextResponse.json({
      site: {
        name: settingsObj.site_name,
        tagline: settingsObj.site_tagline,
        description: settingsObj.site_description,
        logo: settingsObj.logo_url,
        favicon: settingsObj.favicon || settingsObj.favicon_url,
        primaryColor: settingsObj.primary_color,
      },
      branding: {
        headerLogo: settingsObj.header_logo,
        headerLogoDark: settingsObj.header_logo_dark,
        footerLogo: settingsObj.footer_logo,
        footerLogoDark: settingsObj.footer_logo_dark,
        footerUseHeaderLogo: settingsObj.footer_use_header_logo === 'true',
        favicon: settingsObj.favicon || settingsObj.favicon_url,
        appleTouchIcon: settingsObj.apple_touch_icon,
        mobileLogo: settingsObj.mobile_logo,
      },
      contact: {
        email: settingsObj.support_email,
        phone: settingsObj.support_phone,
      },
      seo: {
        title: settingsObj.meta_title,
        description: settingsObj.meta_description,
        analyticsId: settingsObj.google_analytics_id,
      },
      search: {
        placeholder: settingsObj.search_placeholder,
        suggestionsEnabled: settingsObj.search_suggestions_enabled === 'true',
        featuredDestinations: (settingsObj.featured_destinations || '').split(',').map(d => d.trim()).filter(Boolean),
      },
      header: {
        menu: menus,
      },
      footer: {
        description: settingsObj.footer_description,
        copyright: settingsObj.footer_copyright,
        links: footerLinks,
        social: social,
      },
    })
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 })
  }
}
