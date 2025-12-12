'use client'

import Link from 'next/link'
import React from 'react'
import { useSiteSettings } from '@/contexts/SiteSettingsContext'
import LogoSvg from './LogoSvg'
import LogoSvgLight from './LogoSvgLight'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = 'w-22 sm:w-24' }) => {
  const { settings } = useSiteSettings()

  const logoLight = settings?.branding?.headerLogo
  const logoDark = settings?.branding?.headerLogoDark || logoLight

  const hasCustomLogo = logoLight || logoDark

  return (
    <Link href="/" className={`inline-block text-primary-600 focus:ring-0 focus:outline-hidden ${className}`}>
      {hasCustomLogo ? (
        <>
          {logoLight && (
            <img
              src={logoLight}
              alt={settings?.site?.name || 'Logo'}
              className="block h-full w-auto max-h-10 object-contain dark:hidden"
            />
          )}
          {logoDark && (
            <img
              src={logoDark}
              alt={settings?.site?.name || 'Logo'}
              className="hidden h-full w-auto max-h-10 object-contain dark:block"
            />
          )}
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

export default Logo
