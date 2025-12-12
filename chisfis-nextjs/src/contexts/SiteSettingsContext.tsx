'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

interface Branding {
  headerLogo: string
  headerLogoDark: string
  footerLogo: string
  footerLogoDark: string
  footerUseHeaderLogo: boolean
  favicon: string
  appleTouchIcon: string
  mobileLogo: string
}

interface SiteSettings {
  site: {
    name: string
    tagline: string
    description: string
    logo: string
    favicon: string
    primaryColor: string
  }
  branding: Branding
  contact: {
    email: string
    phone: string
  }
  footer: {
    description: string
    copyright: string
    links: Record<string, { title: string; url: string }[]>
    social: { platform: string; url: string; icon: string }[]
  }
}

interface SiteSettingsContextType {
  settings: SiteSettings | null
  loading: boolean
  refetch: () => Promise<void>
}

// Empty defaults - all data comes from database
const emptySettings: SiteSettings = {
  site: {
    name: '',
    tagline: '',
    description: '',
    logo: '',
    favicon: '',
    primaryColor: '',
  },
  branding: {
    headerLogo: '',
    headerLogoDark: '',
    footerLogo: '',
    footerLogoDark: '',
    footerUseHeaderLogo: true,
    favicon: '',
    appleTouchIcon: '',
    mobileLogo: '',
  },
  contact: {
    email: '',
    phone: '',
  },
  footer: {
    description: '',
    copyright: '',
    links: {},
    social: [],
  },
}

const SiteSettingsContext = createContext<SiteSettingsContextType>({
  settings: null,
  loading: true,
  refetch: async () => {},
})

export function SiteSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/site/settings')
      if (res.ok) {
        const data = await res.json()
        setSettings({ ...emptySettings, ...data })
      } else {
        setSettings(emptySettings)
      }
    } catch (error) {
      console.error('Error fetching site settings:', error)
      setSettings(emptySettings)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSettings()
  }, [])

  return (
    <SiteSettingsContext.Provider value={{ settings, loading, refetch: fetchSettings }}>
      {children}
    </SiteSettingsContext.Provider>
  )
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext)
}
