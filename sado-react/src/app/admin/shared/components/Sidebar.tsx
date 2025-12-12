"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAdmin } from '../context'
import styles from './Sidebar.module.scss'

const menuItems = [
  {
    title: 'TỔNG QUAN',
    items: [
      { name: 'Dashboard', path: '/admin', icon: 'ri-dashboard-line' },
    ]
  },
  {
    title: 'QUẢN LÝ NỘI DUNG',
    items: [
      { name: 'Trang chủ', path: '/admin/homepage', icon: 'ri-home-line' },
      { name: 'Menu', path: '/admin/menus', icon: 'ri-menu-line' },
      { name: 'Điểm đến', path: '/admin/destinations', icon: 'ri-map-pin-line' },
      { name: 'Trang (Pages)', path: '/admin/pages', icon: 'ri-pages-line' },
      { name: 'Bài viết', path: '/admin/posts', icon: 'ri-article-line' },
      { name: 'Danh mục bài viết', path: '/admin/posts/categories', icon: 'ri-folder-line' },
      { name: 'Tags', path: '/admin/posts/tags', icon: 'ri-price-tag-3-line' },
      { name: 'Sản phẩm', path: '/admin/products', icon: 'ri-shopping-bag-line' },
      { name: 'Media', path: '/admin/media', icon: 'ri-image-line' },
    ]
  },
  {
    title: 'KINH DOANH',
    items: [
      { name: 'Booking / Đặt vé', path: '/admin/bookings', icon: 'ri-ticket-line' },
    ]
  },
  {
    title: 'NGƯỜI DÙNG',
    items: [
      { name: 'Quản lý User', path: '/admin/users', icon: 'ri-user-line' },
    ]
  },
  {
    title: 'CÀI ĐẶT',
    items: [
      { name: 'Tất cả cài đặt', path: '/admin/settings', icon: 'ri-settings-3-line' },
      { name: 'Cài đặt chung', path: '/admin/settings/general', icon: 'ri-global-line' },
      { name: 'Thương hiệu', path: '/admin/settings/branding', icon: 'ri-palette-line' },
      { name: 'Header', path: '/admin/settings/header', icon: 'ri-layout-top-line' },
      { name: 'Footer', path: '/admin/settings/footer', icon: 'ri-layout-bottom-line' },
      { name: 'Liên hệ', path: '/admin/settings/contact', icon: 'ri-contacts-line' },
      { name: 'Mạng xã hội', path: '/admin/settings/social', icon: 'ri-share-line' },
      { name: 'SEO', path: '/admin/settings/seo', icon: 'ri-search-eye-line' },
    ]
  },
]

const Sidebar = () => {
  const pathname = usePathname()
  const { sidebarOpen, setSidebarOpen } = useAdmin()

  return (
    <aside className={`${styles.sidebar} ${sidebarOpen ? '' : styles.collapsed}`}>
      <div className={styles.logo}>
        <Link href="/admin">
          <span className={styles.logoIcon}>🎫</span>
          {sidebarOpen && <span className={styles.logoText}>Admin Panel</span>}
        </Link>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((section, idx) => (
          <div key={idx} className={styles.section}>
            {sidebarOpen && <h6 className={styles.sectionTitle}>{section.title}</h6>}
            <ul className={styles.menu}>
              {section.items.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`${styles.menuItem} ${pathname === item.path ? styles.active : ''}`}
                  >
                    <i className={item.icon}></i>
                    {sidebarOpen && <span>{item.name}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <button 
        className={styles.toggleBtn}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className={sidebarOpen ? 'ri-arrow-left-s-line' : 'ri-arrow-right-s-line'}></i>
      </button>
    </aside>
  )
}

export default Sidebar
