'use client';

import Link from 'next/link';
import { useSettings } from '@/contexts/SettingsContext';

export function Footer() {
  const settings = useSettings();
  const { general, footer } = settings;

  const defaultLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Contact', href: '/contact' },
  ];

  const links = footer.links?.length > 0 ? footer.links : defaultLinks;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - Company Info */}
          <div className="md:col-span-2">
            {/* Logo/Brand */}
            {general.logo_footer_url ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={general.logo_footer_url} alt={general.site_name} className="h-10 w-auto mb-4" />
            ) : (
              <h2 className="text-lg font-bold text-white mb-4">{general.site_name || 'Bangiaiphap'}</h2>
            )}
            
            {/* Links */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
              {links.map((link, index) => (
                <span key={link.href} className="flex items-center gap-4">
                  <Link href={link.href} className="hover:text-white">{link.name}</Link>
                  {index < links.length - 1 && <span className="text-gray-600">|</span>}
                </span>
              ))}
            </div>

            {/* Company Details */}
            <div className="text-sm text-gray-400 space-y-1">
              <p><span className="font-medium text-gray-300">{footer.company_name || 'Bangiaiphap Media Co., Ltd.'}</span></p>
              {footer.ceo_name && <p>CEO: {footer.ceo_name}</p>}
              {footer.address && <p>Address: {footer.address}</p>}
              {footer.business_registration && <p>Business Registration No: {footer.business_registration}</p>}
            </div>

            {/* Additional Info */}
            <div className="mt-4 text-xs text-gray-500">
              {footer.license_info && <p>{footer.license_info}</p>}
              <p className="mt-2" suppressHydrationWarning>
                Copyright © {new Date().getFullYear()} {general.site_name || 'Bangiaiphap.com'}. All Rights Reserved.
              </p>
            </div>

            {/* Social Links */}
            {(footer.social_links?.facebook || footer.social_links?.twitter || footer.social_links?.youtube) && (
              <div className="flex gap-4 mt-4">
                {footer.social_links.facebook && (
                  <a href={footer.social_links.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    Facebook
                  </a>
                )}
                {footer.social_links.twitter && (
                  <a href={footer.social_links.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                )}
                {footer.social_links.youtube && (
                  <a href={footer.social_links.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    YouTube
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right - Customer Service */}
          <div className="text-right">
            <p className="text-sm text-gray-400 mb-2">{general.site_name || 'Bangiaiphap'} Customer Service</p>
            <p className="text-3xl font-bold text-white mb-2">{general.contact_phone || '1900-xxxx'}</p>
            <p className="text-xs text-gray-500">
              Weekdays 09:00 - 18:00 (Closed on weekends and holidays)
            </p>
            {general.contact_email && (
              <p className="text-xs text-gray-400 mt-2">
                Email: {general.contact_email}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
