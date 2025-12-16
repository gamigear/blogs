'use client';

import { useEffect, useRef } from 'react';
import { useSettings } from '@/contexts/SettingsContext';

export function DynamicFavicon() {
  const settings = useSettings();
  const faviconUrl = settings.general?.favicon_url;
  const siteName = settings.general?.site_name;
  const siteDescription = settings.general?.site_description;
  const initialized = useRef(false);

  // Update document title with site name
  useEffect(() => {
    if (!siteName) return;

    // Get current page title (if any specific title is set)
    const currentTitle = document.title;
    const separator = ' | ';
    
    // If title doesn't already contain site name, append it
    if (currentTitle && !currentTitle.includes(siteName)) {
      const parts = currentTitle.split(separator);
      if (parts.length > 1) {
        parts[parts.length - 1] = siteName;
        document.title = parts.join(separator);
      } else {
        document.title = siteName;
      }
    } else if (!currentTitle || currentTitle === 'News Platform') {
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

  // Update favicon - only run once after hydration is complete
  useEffect(() => {
    if (!faviconUrl || initialized.current) return;
    
    // Wait for hydration to complete
    const timeoutId = setTimeout(() => {
      initialized.current = true;
      
      // Check if our custom favicon already exists
      const existingCustomFavicon = document.getElementById('dynamic-favicon');
      if (existingCustomFavicon) {
        (existingCustomFavicon as HTMLLinkElement).href = faviconUrl;
        return;
      }

      // Create new favicon link without removing existing ones
      const link = document.createElement('link');
      link.id = 'dynamic-favicon';
      link.rel = 'icon';
      link.type = faviconUrl.endsWith('.svg')
        ? 'image/svg+xml'
        : faviconUrl.endsWith('.png')
          ? 'image/png'
          : faviconUrl.endsWith('.ico')
            ? 'image/x-icon'
            : 'image/png';
      link.href = faviconUrl;
      document.head.appendChild(link);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [faviconUrl]);

  return null;
}
