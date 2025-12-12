"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../../shared/components/PageHeader'
import Card from '../../shared/components/Card'
import useApi from '../../shared/hooks/useApi'
import styles from '../settings.module.scss'

const GeneralSettingsPage = () => {
  const { loading, get, post } = useApi()
  const [saving, setSaving] = useState(false)
  const [settings, setSettings] = useState({
    siteName: 'Du lịch Việt Nam',
    tagline: 'Khám phá vẻ đẹp Việt Nam',
    siteUrl: 'https://example.com',
    language: 'vi',
    timezone: 'Asia/Ho_Chi_Minh',
    dateFormat: 'DD/MM/YYYY',
    currency: 'VND',
    adminEmail: 'admin@example.com',
    notifyEmail: 'noreply@example.com',
    notifyNewBooking: true,
    notifyNewUser: true,
    notifyNewComment: false,
    maintenanceMode: false,
    maintenanceMessage: 'Website đang được bảo trì. Vui lòng quay lại sau.'
  })

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await get('/api/admin/settings?group=general')
      if (data) {
        setSettings(prev => ({
          ...prev,
          ...Object.fromEntries(
            Object.entries(data).map(([k, v]) => [k, v === 'true' ? true : v === 'false' ? false : v])
          )
        }))
      }
    }
    fetchSettings()
  }, [])

  const handleSave = async () => {
    setSaving(true)
    await post('/api/admin/settings', {
      group: 'general',
      settings: Object.fromEntries(
        Object.entries(settings).map(([k, v]) => [k, String(v)])
      )
    })
    setSaving(false)
    alert('Đã lưu cài đặt!')
  }

  return (
    <>
      <PageHeader 
        title="Cài đặt chung" 
        breadcrumbs={[{ label: 'Cài đặt' }]}
        actions={
          <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
            <i className="ri-save-line"></i>
            {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        }
      />

      <Card title="Thông tin website">
        <div className={styles.formGroup}>
          <label>Tên website</label>
          <input 
            type="text" 
            value={settings.siteName}
            onChange={e => setSettings({...settings, siteName: e.target.value})}
            placeholder="Nhập tên website" 
          />
        </div>
        <div className={styles.formGroup}>
          <label>Tagline</label>
          <input 
            type="text" 
            value={settings.tagline}
            onChange={e => setSettings({...settings, tagline: e.target.value})}
            placeholder="Nhập tagline" 
          />
        </div>
        <div className={styles.formGroup}>
          <label>URL website</label>
          <input 
            type="url" 
            value={settings.siteUrl}
            onChange={e => setSettings({...settings, siteUrl: e.target.value})}
            placeholder="https://example.com" 
          />
        </div>
      </Card>

      <Card title="Cài đặt khu vực" className="mt-4">
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Ngôn ngữ</label>
            <select 
              value={settings.language}
              onChange={e => setSettings({...settings, language: e.target.value})}
            >
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Múi giờ</label>
            <select 
              value={settings.timezone}
              onChange={e => setSettings({...settings, timezone: e.target.value})}
            >
              <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh (GMT+7)</option>
              <option value="Asia/Bangkok">Asia/Bangkok (GMT+7)</option>
            </select>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Định dạng ngày</label>
            <select 
              value={settings.dateFormat}
              onChange={e => setSettings({...settings, dateFormat: e.target.value})}
            >
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Đơn vị tiền tệ</label>
            <select 
              value={settings.currency}
              onChange={e => setSettings({...settings, currency: e.target.value})}
            >
              <option value="VND">VND (₫)</option>
              <option value="USD">USD ($)</option>
            </select>
          </div>
        </div>
      </Card>

      <Card title="Email & Thông báo" className="mt-4">
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Email admin</label>
            <input 
              type="email" 
              value={settings.adminEmail}
              onChange={e => setSettings({...settings, adminEmail: e.target.value})}
              placeholder="Nhập email admin" 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email gửi thông báo</label>
            <input 
              type="email" 
              value={settings.notifyEmail}
              onChange={e => setSettings({...settings, notifyEmail: e.target.value})}
              placeholder="Nhập email gửi" 
            />
          </div>
        </div>
        <div className={styles.switchGroup}>
          <span>Gửi email khi có đơn đặt vé mới</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.notifyNewBooking}
              onChange={e => setSettings({...settings, notifyNewBooking: e.target.checked})}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        <div className={styles.switchGroup}>
          <span>Gửi email khi có người dùng mới đăng ký</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.notifyNewUser}
              onChange={e => setSettings({...settings, notifyNewUser: e.target.checked})}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        <div className={styles.switchGroup}>
          <span>Gửi email khi có bình luận mới</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.notifyNewComment}
              onChange={e => setSettings({...settings, notifyNewComment: e.target.checked})}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </Card>

      <Card title="Bảo trì" className="mt-4">
        <div className={styles.switchGroup}>
          <span>Bật chế độ bảo trì</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.maintenanceMode}
              onChange={e => setSettings({...settings, maintenanceMode: e.target.checked})}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>Thông báo bảo trì</label>
          <textarea 
            value={settings.maintenanceMessage}
            onChange={e => setSettings({...settings, maintenanceMessage: e.target.value})}
            placeholder="Nhập thông báo" 
            rows={3}
          ></textarea>
        </div>
      </Card>
    </>
  )
}

export default GeneralSettingsPage
