'use client'

import { useEffect } from 'react'
import { useSiteSettings } from '@/contexts/SiteSettingsContext'

export default function DynamicFavicon() {
  const { settings } = useSiteSettings()

  useEffect(() => {
    if (!settings?.branding?.favicon) return

    // Update favicon
    const favicon = settings.branding.favicon
    const existingLink = document.querySelector("link[rel*='icon']") as HTMLLinkElement
    
    if (existingLink) {
      existingLink.href = favicon
    } else {
      const link = document.createElement('link')
      link.rel = 'icon'
      link.href = favicon
      document.head.appendChild(link)
    }

    // Update apple touch icon if available
    if (settings.branding.appleTouchIcon) {
      const existingAppleIcon = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement
      if (existingAppleIcon) {
        existingAppleIcon.href = settings.branding.appleTouchIcon
      } else {
        const appleLink = document.createElement('link')
        appleLink.rel = 'apple-touch-icon'
        appleLink.href = settings.branding.appleTouchIcon
        document.head.appendChild(appleLink)
      }
    }
  }, [settings])

  return null
}
