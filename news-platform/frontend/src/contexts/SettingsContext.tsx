'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface GeneralSettings {
  site_name: string;
  site_description: string;
  logo_header_url: string;
  logo_footer_url: string;
  favicon_url: string;
  contact_email: string;
  contact_phone: string;
}

interface HeaderSettings {
  show_search: boolean;
  show_notifications: boolean;
  menu_items: { name: string; href: string; icon: string }[];
}

interface FooterSettings {
  company_name: string;
  ceo_name: string;
  address: string;
  business_registration: string;
  license_info: string;
  links: { name: string; href: string }[];
  social_links: { facebook: string; twitter: string; youtube: string };
}

interface SiteSettings {
  general: GeneralSettings;
  header: HeaderSettings;
  footer: FooterSettings;
}

const defaultSettings: SiteSettings = {
  general: {
    site_name: 'Bangiaiphap',
    site_description: 'Tin tức công nghệ và cộng đồng',
    logo_header_url: '',
    logo_footer_url: '',
    favicon_url: '',
    contact_email: 'contact@bangiaiphap.com',
    contact_phone: '1900-xxxx',
  },
  header: {
    show_search: true,
    show_notifications: true,
    menu_items: [],
  },
  footer: {
    company_name: 'Bangiaiphap Media Co., Ltd.',
    ceo_name: 'Admin',
    address: 'Việt Nam',
    business_registration: '',
    license_info: '',
    links: [],
    social_links: { facebook: '', twitter: '', youtube: '' },
  },
};

const SettingsContext = createContext<SiteSettings>(defaultSettings);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        setSettings({
          general: { ...defaultSettings.general, ...data.general },
          header: { ...defaultSettings.header, ...data.header },
          footer: { ...defaultSettings.footer, ...data.footer },
        });
      })
      .catch(console.error);
  }, []);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
