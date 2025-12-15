'use client';

import { useEffect } from 'react';
import { useSettings } from '@/contexts/SettingsContext';

export function DynamicFavicon() {
  const settings = useSettings();
  const faviconUrl = settings.general?.favicon_url;
  const siteName = settings.general?.site_name;
  const siteDescription = settings.general?.site_description;

  // Update document title with site name
  useEffect(() => {
    if (!siteName) return;

    // Get current page title (if any specific title is set)
    const currentTitle = document.title;
    const separator = ' | ';
    
    // If title doesn't already contain site name, append it
    if (currentTitle && !currentTitle.includes(siteName)) {
      // Keep page-specific title, just update the site name part
      const parts = currentTitle.split(separator);
      if (parts.length > 1) {
        // Replace the last part (old site name) with new site name
        parts[parts.length - 1] = siteName;
        document.title = parts.join(separator);
      } else {
        // No separator, this is likely just the default title
        document.title = siteName;
      }
    } else if (!currentTitle || currentTitle === 'News Platform') {
      // Default title, replace with site name
      document.title = siteName;
    }

    // Update meta description
    if (siteDescription) {
      let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (metaDesc) {
        metaDesc.content = siteDescription;
      } else {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        metaDesc.content = siteDescription;
        document.head.appendChild(metaDesc);
      }
    }
  }, [siteName, siteDescription]);

  // Update favicon
  useEffect(() => {
    if (!faviconUrl) {
      console.log('[DynamicMeta] No favicon URL configured');
      return;
    }

    console.log('[DynamicMeta] Setting favicon to:', faviconUrl);

    // Remove all existing favicon links first
    const existingLinks = document.querySelectorAll('link[rel*="icon"]');
    existingLinks.forEach((link) => link.remove());

    // Create new favicon link
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = faviconUrl.endsWith('.svg')
      ? 'image/svg+xml'
      : faviconUrl.endsWith('.png')
        ? 'image/png'
        : faviconUrl.endsWith('.ico')
          ? 'image/x-icon'
          : 'image/png';
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
