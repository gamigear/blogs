'use client';

import { useEffect } from 'react';
import { useSettings } from '@/contexts/SettingsContext';

export function DynamicFavicon() {
  const settings = useSettings();
  const faviconUrl = settings.general?.favicon_url;

  useEffect(() => {
    if (!faviconUrl) {
      console.log('[DynamicFavicon] No favicon URL configured');
      return;
    }

    console.log('[DynamicFavicon] Setting favicon to:', faviconUrl);

    // Remove all existing favicon links first
    const existingLinks = document.querySelectorAll('link[rel*="icon"]');
    existingLinks.forEach(link => link.remove());

    // Create new favicon link
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = faviconUrl.endsWith('.svg') ? 'image/svg+xml' : 
                faviconUrl.endsWith('.png') ? 'image/png' : 
                faviconUrl.endsWith('.ico') ? 'image/x-icon' : 'image/png';
    link.href = faviconUrl + '?v=' + Date.now(); // Cache bust
    document.head.appendChild(link);

    // Also add apple-touch-icon
    const appleLink = document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = faviconUrl;
    document.head.appendChild(appleLink);

  }, [faviconUrl]);

  return null;
}
