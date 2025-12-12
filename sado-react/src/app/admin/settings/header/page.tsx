"use client"

import React, { useState, useEffect, useRef } from 'react'
import PageHeader from '../../shared/components/PageHeader'
import Card from '../../shared/components/Card'
import useApi from '../../shared/hooks/useApi'
import styles from '../settings.module.scss'

interface MenuItem {
  id: string
  title: string
  url: string
}

const HeaderSettingsPage = () => {
  const { get, post } = useApi()
  const [saving, setSaving] = useState(false)
  const logoInputRef = useRef<HTMLInputElement>(null)
  const logoMobileInputRef = useRef<HTMLInputElement>(null)
  
  const [settings, setSettings] = useState({
    logo: '',
    logoMobile: '',
    phone: '1900 1234',
    email: 'info@example.com',
    ctaText: 'Đặt vé ngay',
    ctaLink: '/dat-ve',
    showCta: true,
    stickyHeader: true,
    showTopBar: true,
    topBarText: 'Hotline: 1900 1234 | Email: info@example.com'
  })

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: '1', title: 'Trang chủ', url: '/' },
    { id: '2', title: 'Điểm đến', url: '/diem-den' },
    { id: '3', title: 'Tour', url: '/tour' },
    { id: '4', title: 'Tin tức', url: '/tin-tuc' },
    { id: '5', title: 'Liên hệ', url: '/lien-he' }
  ])

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await get('/api/admin/settings?group=header')
      if (data) {
        setSettings(prev => ({
          ...prev,
          ...Object.fromEntries(
            Object.entries(data).filter(([k]) => k !== 'menuItems').map(([k, v]) => 
              [k, v === 'true' ? true : v === 'false' ? false : v]
            )
          )
        }))
        if (data.menuItems) {
          try {
            setMenuItems(JSON.parse(data.menuItems as string))
          } catch {}
        }
      }
    }
    fetchSettings()
  }, [])

  const handleSave = async () => {
    setSaving(true)
    await post('/api/admin/settings', {
      group: 'header',
      settings: {
        ...Object.fromEntries(
          Object.entries(settings).map(([k, v]) => [k, String(v)])
        ),
        menuItems: JSON.stringify(menuItems)
      }
    })
    setSaving(false)
    alert('Đã lưu cài đặt Header!')
  }

  const addMenuItem = () => {
    setMenuItems([...menuItems, { id: Date.now().toString(), title: '', url: '' }])
  }

  const updateMenuItem = (id: string, field: 'title' | 'url', value: string) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  const deleteMenuItem = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id))
  }

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'logoMobile') => {
    const file = e.target.files?.[0]
    if (!file) return
    
    const formData = new FormData()
    formData.append('file', file)
    formData.append('folder', 'branding')
    
    try {
      const res = await fetch('/api/admin/media', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      if (data.data?.url) {
        setSettings({ ...settings, [type]: data.data.url })
      }
    } catch (err) {
      alert('Lỗi upload logo')
    }
  }

  return (
    <>
      <PageHeader 
        title="Cài đặt Header" 
        breadcrumbs={[{ label: 'Cài đặt', path: '/admin/settings/general' }, { label: 'Header' }]}
        actions={
          <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
            <i className="ri-save-line"></i>
            {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        }
      />

      <Card title="Logo">
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Logo chính</label>
            <input 
              type="file" 
              ref={logoInputRef}
              accept="image/*"
              style={{ display: 'none' }}
              onChange={e => handleLogoUpload(e, 'logo')}
            />
            {settings.logo ? (
              <div className={styles.logoPreview}>
                <img src={settings.logo} alt="Logo" style={{ maxHeight: 60 }} />
                <button onClick={() => setSettings({ ...settings, logo: '' })}>
                  <i className="ri-delete-bin-line"></i>
                </button>
              </div>
            ) : (
              <div className={styles.uploadArea} onClick={() => logoInputRef.current?.click()}>
                <i className="ri-image-add-line"></i>
                <span>Tải lên logo (PNG, SVG)</span>
              </div>
            )}
            <small>Kích thước khuyến nghị: 200x50px</small>
          </div>
          <div className={styles.formGroup}>
            <label>Logo mobile</label>
            <input 
              type="file" 
              ref={logoMobileInputRef}
              accept="image/*"
              style={{ display: 'none' }}
              onChange={e => handleLogoUpload(e, 'logoMobile')}
            />
            {settings.logoMobile ? (
              <div className={styles.logoPreview}>
                <img src={settings.logoMobile} alt="Logo Mobile" style={{ maxHeight: 40 }} />
                <button onClick={() => setSettings({ ...settings, logoMobile: '' })}>
                  <i className="ri-delete-bin-line"></i>
                </button>
              </div>
            ) : (
              <div className={styles.uploadArea} onClick={() => logoMobileInputRef.current?.click()}>
                <i className="ri-image-add-line"></i>
                <span>Tải lên logo mobile</span>
              </div>
            )}
            <small>Kích thước khuyến nghị: 100x40px</small>
          </div>
        </div>
      </Card>

      <Card title="Top Bar" className="mt-4">
        <div className={styles.switchGroup}>
          <span>Hiển thị Top Bar</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.showTopBar}
              onChange={e => setSettings({ ...settings, showTopBar: e.target.checked })}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        {settings.showTopBar && (
          <div className={styles.formGroup}>
            <label>Nội dung Top Bar</label>
            <input 
              type="text" 
              value={settings.topBarText}
              onChange={e => setSettings({ ...settings, topBarText: e.target.value })}
              placeholder="Nhập nội dung hiển thị" 
            />
          </div>
        )}
      </Card>

      <Card title="Menu chính" className="mt-4">
        <div className={styles.menuItems}>
          {menuItems.map((item) => (
            <div key={item.id} className={styles.menuItem}>
              <i className={`ri-drag-move-line ${styles.dragHandle}`}></i>
              <input 
                type="text" 
                value={item.title}
                onChange={e => updateMenuItem(item.id, 'title', e.target.value)}
                placeholder="Tên menu" 
              />
              <input 
                type="text" 
                value={item.url}
                onChange={e => updateMenuItem(item.id, 'url', e.target.value)}
                placeholder="Đường dẫn" 
              />
              <button className={styles.deleteBtn} onClick={() => deleteMenuItem(item.id)}>
                <i className="ri-delete-bin-line"></i>
              </button>
            </div>
          ))}
        </div>
        <button className={styles.addBtn} onClick={addMenuItem}>
          <i className="ri-add-line"></i> Thêm menu
        </button>
      </Card>

      <Card title="Thông tin liên hệ" className="mt-4">
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Số điện thoại</label>
            <input 
              type="tel" 
              value={settings.phone}
              onChange={e => setSettings({ ...settings, phone: e.target.value })}
              placeholder="Nhập số điện thoại" 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input 
              type="email" 
              value={settings.email}
              onChange={e => setSettings({ ...settings, email: e.target.value })}
              placeholder="Nhập email" 
            />
          </div>
        </div>
      </Card>

      <Card title="Nút CTA" className="mt-4">
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Text nút</label>
            <input 
              type="text" 
              value={settings.ctaText}
              onChange={e => setSettings({ ...settings, ctaText: e.target.value })}
              placeholder="Nhập text" 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Link</label>
            <input 
              type="text" 
              value={settings.ctaLink}
              onChange={e => setSettings({ ...settings, ctaLink: e.target.value })}
              placeholder="Nhập link" 
            />
          </div>
        </div>
        <div className={styles.switchGroup}>
          <span>Hiển thị nút CTA</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.showCta}
              onChange={e => setSettings({ ...settings, showCta: e.target.checked })}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </Card>

      <Card title="Tùy chọn khác" className="mt-4">
        <div className={styles.switchGroup}>
          <span>Header cố định khi cuộn (Sticky Header)</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.stickyHeader}
              onChange={e => setSettings({ ...settings, stickyHeader: e.target.checked })}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </Card>
    </>
  )
}

export default HeaderSettingsPage
