import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

interface CSSSettings {
  value: {
    desktop?: string;
    tablet?: string;
    mobile?: string;
    is_active?: boolean;
  };
}

// GET - Lấy custom CSS (public API)
export async function GET() {
  try {
    const result = await query<CSSSettings>(
      "SELECT value FROM site_settings WHERE key = 'custom_css'"
    );

    if (result.length === 0 || !result[0].value?.is_active) {
      return new NextResponse('', {
        headers: { 'Content-Type': 'text/css' },
      });
    }

    const css = result[0].value;
    
    // Build CSS với media queries
    let cssOutput = '';

    // Desktop CSS (>= 1024px)
    if (css.desktop && css.desktop.trim()) {
      cssOutput += `/* Desktop */\n@media (min-width: 1024px) {\n${css.desktop}\n}\n\n`;
    }

    // Tablet CSS (768px - 1023px)
    if (css.tablet && css.tablet.trim()) {
      cssOutput += `/* Tablet */\n@media (min-width: 768px) and (max-width: 1023px) {\n${css.tablet}\n}\n\n`;
    }

    // Mobile CSS (< 768px)
    if (css.mobile && css.mobile.trim()) {
      cssOutput += `/* Mobile */\n@media (max-width: 767px) {\n${css.mobile}\n}\n`;
    }

    return new NextResponse(cssOutput, {
      headers: {
        'Content-Type': 'text/css',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error fetching custom CSS:', error);
    return new NextResponse('', {
      headers: { 'Content-Type': 'text/css' },
    });
  }
}
