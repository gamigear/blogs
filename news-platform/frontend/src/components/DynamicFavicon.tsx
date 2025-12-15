'use client';

import { useEffect } from 'react';
import { useSettings } from '@/contexts/SettingsContext';

export function DynamicFavicon() {
  const settings = useSettings();
  const faviconUrl = settings.general?.favicon_url;

  useEffect(() => {
    if (!faviconUrl) return;

    // Update existing favicon links or create new ones
    const updateFavicon = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (link) {
        link.href = href;
      } else {
        link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
      }
    };

    // Update all favicon types
    updateFavicon('icon', faviconUrl);
    updateFavicon('shortcut icon', faviconUrl);
    updateFavicon('apple-touch-icon', faviconUrl);

  }, [faviconUrl]);

  return null;
}
