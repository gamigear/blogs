'use client'

import Link from 'next/link'
import React from 'react'
import { useSiteSettings } from '@/contexts/SiteSettingsContext'
import LogoSvg from './LogoSvg'
import LogoSvgLight from './LogoSvgLight'

interface LogoDynamicProps {
  className?: string
  variant?: 'header' | 'footer'
}

const LogoDynamic: React.FC<LogoDynamicProps> = ({ className = 'w-22 sm:w-24', variant = 'header' }) => {
  const { settings, loading } = useSiteSettings()

  // Determine which logo to use
  let logoLight = ''
  let logoDark = ''

  if (settings?.branding) {
    if (variant === 'header') {
      logoLight = settings.branding.headerLogo
      logoDark = settings.branding.headerLogoDark || settings.branding.headerLogo
    } else if (variant === 'footer') {
      if (settings.branding.footerUseHeaderLogo) {
        logoLight = settings.branding.headerLogo
        logoDark = settings.branding.headerLogoDark || settings.branding.headerLogo
      } else {
        logoLight = settings.branding.footerLogo
        logoDark = settings.branding.footerLogoDark || settings.branding.footerLogo
      }
    }
  }

  // If no custom logo, use default SVG
  const hasCustomLogo = logoLight || logoDark

  return (
    <Link href="/" className={`inline-block text-primary-600 focus:ring-0 focus:outline-hidden ${className}`}>
      {hasCustomLogo ? (
        <>
          {/* Light mode logo */}
          {logoLight && (
            <img
              src={logoLight}
              alt={settings?.site?.name || 'Logo'}
              className="block h-full w-auto max-h-10 object-contain dark:hidden"
            />
          )}
          {/* Dark mode logo */}
          {logoDark && (
            <img
              src={logoDark}
              alt={settings?.site?.name || 'Logo'}
              className="hidden h-full w-auto max-h-10 object-contain dark:block"
            />
          )}
          {/* Fallback if only one logo is set */}
          {logoLight && !logoDark && (
            <img
              src={logoLight}
              alt={settings?.site?.name || 'Logo'}
              className="hidden h-full w-auto max-h-10 object-contain dark:block"
            />
          )}
          {!logoLight && logoDark && (
            <img
              src={logoDark}
              alt={settings?.site?.name || 'Logo'}
              className="block h-full w-auto max-h-10 object-contain dark:hidden"
            />
          )}
        </>
      ) : (
        <>
          <LogoSvgLight />
          <LogoSvg />
        </>
      )}
    </Link>
  )
}

export default LogoDynamic
