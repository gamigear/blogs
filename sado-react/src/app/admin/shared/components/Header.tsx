"use client"

import React, { useState } from 'react'
import { useAdmin } from '../context'
import styles from './Header.module.scss'

const Header = () => {
  const { darkMode, setDarkMode } = useAdmin()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <i className="ri-search-line"></i>
        <input type="text" placeholder="Tìm kiếm..." />
      </div>

      <div className={styles.actions}>
        <button 
          className={styles.iconBtn}
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? 'Chế độ sáng' : 'Chế độ tối'}
        >
          <i className={darkMode ? 'ri-sun-line' : 'ri-moon-line'}></i>
        </button>

        <div className={styles.notificationWrapper}>
          <button 
            className={styles.iconBtn}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <i className="ri-notification-3-line"></i>
            <span className={styles.badge}>3</span>
          </button>
          
          {showNotifications && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownHeader}>
                <h6>Thông báo</h6>
                <span>3 mới</span>
              </div>
              <div className={styles.dropdownBody}>
                <div className={styles.notificationItem}>
                  <i className="ri-ticket-line"></i>
                  <div>
                    <p>Có đơn đặt vé mới</p>
                    <small>5 phút trước</small>
                  </div>
                </div>
                <div className={styles.notificationItem}>
                  <i className="ri-user-add-line"></i>
                  <div>
                    <p>Người dùng mới đăng ký</p>
                    <small>1 giờ trước</small>
                  </div>
                </div>
                <div className={styles.notificationItem}>
                  <i className="ri-message-2-line"></i>
                  <div>
                    <p>Có bình luận mới</p>
                    <small>2 giờ trước</small>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.userWrapper}>
          <button 
            className={styles.userBtn}
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className={styles.avatar}>
              <i className="ri-user-line"></i>
            </div>
            <span>Admin</span>
            <i className="ri-arrow-down-s-line"></i>
          </button>

          {showUserMenu && (
            <div className={styles.dropdown}>
              <a href="/admin/profile" className={styles.dropdownItem}>
                <i className="ri-user-line"></i>
                <span>Hồ sơ</span>
              </a>
              <a href="/admin/settings/general" className={styles.dropdownItem}>
                <i className="ri-settings-3-line"></i>
                <span>Cài đặt</span>
              </a>
              <div className={styles.divider}></div>
              <a href="/logout" className={styles.dropdownItem}>
                <i className="ri-logout-box-line"></i>
                <span>Đăng xuất</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
