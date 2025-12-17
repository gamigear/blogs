'use client';

import { useEffect, useRef } from 'react';
import { useSettings } from '@/contexts/SettingsContext';

export function DynamicFavicon() {
  const settings = useSettings();
  const faviconUrl = settings.general?.favicon_url;
  const siteName = settings.general?.site_name;
  const siteDescription = settings.general?.site_description;
  const lastFaviconUrl = useRef<string | null>(null);

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

  // Update favicon when faviconUrl changes
  useEffect(() => {
    // Skip if no favicon URL or same as last time
    if (!faviconUrl || faviconUrl === lastFaviconUrl.current) return;
    
    // Wait for hydration to complete
    const timeoutId = setTimeout(() => {
      try {
        lastFaviconUrl.current = faviconUrl;
        
        // Determine favicon type
        const getType = (url: string) => {
          if (url.endsWith('.svg')) return 'image/svg+xml';
          if (url.endsWith('.png')) return 'image/png';
          if (url.endsWith('.ico')) return 'image/x-icon';
          if (url.endsWith('.webp')) return 'image/webp';
          if (url.endsWith('.jpg') || url.endsWith('.jpeg')) return 'image/jpeg';
          if (url.endsWith('.gif')) return 'image/gif';
          return 'image/png'; // Default to png
        };

        // First, remove ALL existing favicon links completely
        const existingFavicons = document.querySelectorAll(
          'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]'
        );
        existingFavicons.forEach((el) => {
          el.setAttribute('href', 'data:,'); // Set to empty data URL
        });

        // Check if our dynamic favicon already exists
        let dynamicFavicon = document.getElementById('dynamic-favicon') as HTMLLinkElement;
        
        if (dynamicFavicon) {
          // Just update the href
          dynamicFavicon.href = faviconUrl;
          dynamicFavicon.type = getType(faviconUrl);
        } else {
          // Create new favicon link
          const link = document.createElement('link');
          link.id = 'dynamic-favicon';
          link.rel = 'icon';
          link.type = getType(faviconUrl);
          link.href = faviconUrl;
          document.head.appendChild(link);
        }
        
        // Also create/update shortcut icon for better browser support
        let shortcutIcon = document.getElementById('dynamic-shortcut-icon') as HTMLLinkElement;
        if (shortcutIcon) {
          shortcutIcon.href = faviconUrl;
        } else {
          const shortcut = document.createElement('link');
          shortcut.id = 'dynamic-shortcut-icon';
          shortcut.rel = 'shortcut icon';
          shortcut.href = faviconUrl;
          document.head.appendChild(shortcut);
        }
        
        console.log('[DynamicFavicon] Updated favicon to:', faviconUrl);
      } catch (err) {
        console.error('[DynamicFavicon] Error updating favicon:', err);
      }
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [faviconUrl]);

  return null;
}
