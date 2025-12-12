'use client'

import LogoDynamic from '@/shared/LogoDynamic'
import { useSiteSettings } from '@/contexts/SiteSettingsContext'
import type { JSX } from 'react'

const getSocialIcon = (platform: string) => {
  const icons: Record<string, (props: React.SVGProps<SVGSVGElement>) => JSX.Element> = {
    facebook: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
    instagram: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
    twitter: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
    youtube: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    tiktok: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  }
  return icons[platform.toLowerCase()] || ((props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  ))
}

export default function Footer2() {
  const { settings, loading } = useSiteSettings()

  const footerLinks = settings?.footer?.links || {}
  const socialLinks = settings?.footer?.social || []
  const footerDescription = settings?.footer?.description || ''
  const footerCopyright = settings?.footer?.copyright || ''

  // Convert footer links from database
  const discoverLinks = footerLinks['discover']?.map((l) => ({ name: l.title, href: l.url })) || []
  const supportLinks = footerLinks['support']?.map((l) => ({ name: l.title, href: l.url })) || []
  const companyLinks = footerLinks['company']?.map((l) => ({ name: l.title, href: l.url })) || []
  const legalLinks = footerLinks['legal']?.map((l) => ({ name: l.title, href: l.url })) || []

  const hasAnyLinks = discoverLinks.length > 0 || supportLinks.length > 0 || companyLinks.length > 0 || legalLinks.length > 0

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-700">
      <div className="container pt-16 pb-8 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <LogoDynamic className="w-20" variant="footer" />
            {footerDescription && (
              <p className="text-sm/6 text-balance text-gray-600 dark:text-neutral-400">{footerDescription}</p>
            )}
            {socialLinks.length > 0 && (
              <div className="flex gap-x-6">
                {socialLinks.map((item) => {
                  const IconComponent = getSocialIcon(item.platform)
                  return (
                    <a
                      key={item.platform}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 dark:text-neutral-400"
                    >
                      <span className="sr-only">{item.platform}</span>
                      <IconComponent aria-hidden="true" className="size-6" />
                    </a>
                  )
                })}
              </div>
            )}
          </div>
          {hasAnyLinks && (
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {discoverLinks.length > 0 && (
                  <div>
                    <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-neutral-300">Discover</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {discoverLinks.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-neutral-400">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {supportLinks.length > 0 && (
                  <div className={discoverLinks.length > 0 ? 'mt-10 md:mt-0' : ''}>
                    <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-neutral-300">Support</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {supportLinks.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-neutral-400">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {companyLinks.length > 0 && (
                  <div>
                    <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-neutral-300">Company</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {companyLinks.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-neutral-400">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {legalLinks.length > 0 && (
                  <div className={companyLinks.length > 0 ? 'mt-10 md:mt-0' : ''}>
                    <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-neutral-300">Legal</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {legalLinks.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-neutral-400">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {footerCopyright && (
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 dark:border-gray-700">
            <p className="text-sm/6 text-gray-600 dark:text-neutral-400">{footerCopyright}</p>
          </div>
        )}
      </div>
    </footer>
  )
}
