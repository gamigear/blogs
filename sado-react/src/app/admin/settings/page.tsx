"use client"

import React from 'react'
import Link from 'next/link'
import PageHeader from '../shared/components/PageHeader'
import styles from './settings.module.scss'

const settingsItems = [
  {
    title: 'Cài đặt chung',
    description: 'Tên website, ngôn ngữ, múi giờ',
    icon: 'ri-settings-3-line',
    href: '/admin/settings/general'
  },
  {
    title: 'Thương hiệu',
    description: 'Logo, favicon, màu sắc',
    icon: 'ri-palette-line',
    href: '/admin/settings/branding'
  },
  {
    title: 'Header',
    description: 'Menu, logo, nút CTA',
    icon: 'ri-layout-top-line',
    href: '/admin/settings/header'
  },
  {
    title: 'Footer',
    description: 'Thông tin, liên kết, copyright',
    icon: 'ri-layout-bottom-line',
    href: '/admin/settings/footer'
  },
  {
    title: 'Thông tin liên hệ',
    description: 'Địa chỉ, điện thoại, email',
    icon: 'ri-contacts-line',
    href: '/admin/settings/contact'
  },
  {
    title: 'Mạng xã hội',
    description: 'Facebook, Instagram, Youtube',
    icon: 'ri-share-line',
    href: '/admin/settings/social'
  },
  {
    title: 'SEO',
    description: 'Meta tags, Analytics, Sitemap',
    icon: 'ri-search-eye-line',
    href: '/admin/settings/seo'
  }
]

const SettingsPage = () => {
  return (
    <>
      <PageHeader title="Cài đặt Website" breadcrumbs={[{ label: 'Cài đặt' }]} />
      <div className={styles.settingsNav}>
        {settingsItems.map((item, idx) => (
          <Link key={idx} href={item.href} className={styles.settingsNavItem}>
            <i className={item.icon}></i>
            <div className={styles.navContent}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default SettingsPage
