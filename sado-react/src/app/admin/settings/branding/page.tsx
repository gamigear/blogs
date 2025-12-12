"use client"

import React, { useState, useEffect, useRef } from 'react'
import PageHeader from '../../shared/components/PageHeader'
import Card from '../../shared/components/Card'
import useApi from '../../shared/hooks/useApi'
import styles from '../settings.module.scss'

const BrandingSettingsPage = () => {
  const { get, post } = useApi()
  const [saving, setSaving] = useState(false)
  
  const logoRef = useRef<HTMLInputElement>(null)
  const logoDarkRef = useRef<HTMLInputElement>(null)
  const faviconRef = useRef<HTMLInputElement>(null)
  const ogImageRef = useRef<HTMLInputElement>(null)
  
  const [settings, setSettings] = useState({
    // Logo
    logo: '',
    logoDark: '',
    logoAlt: 'Du lịch Việt Nam',
    
    // Favicon
    favicon: '',
    
    // OG Image
    ogImage: '',
    
    // Colors
    primaryColor: '#4F46E5',
    secondaryColor: '#10B981',
    accentColor: '#F59E0B',
    
    // Typography
    fontFamily: 'Inter',
    headingFont: 'Inter',
    
    // Custom CSS
    customCss: '',
    customJs: ''
  })

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await get('/api/admin/settings?group=branding')
      if (data) {
        setSettings(prev => ({
          ...prev,
          ...data
        }))
      }
    }
    fetchSettings()
  }, [])

  const handleSave = async () => {
    setSaving(true)
    await post('/api/admin/settings', {
      group: 'branding',
      settings: Object.fromEntries(
        Object.entries(settings).map(([k, v]) => [k, String(v)])
      )
    })
    setSaving(false)
    alert('Đã lưu cài đặt thương hiệu!')
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
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
        setSettings({ ...settings, [field]: data.data.url })
      }
    } catch (err) {
      alert('Lỗi upload file')
    }
  }

  const ImageUpload = ({ 
    label, 
    field, 
    inputRef, 
    hint,
    previewHeight = 60 
  }: { 
    label: string
    field: string
    inputRef: React.RefObject<HTMLInputElement>
    hint?: string
    previewHeight?: number
  }) => (
    <div className={styles.formGroup}>
      <label>{label}</label>
      <input 
        type="file" 
        ref={inputRef}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={e => handleUpload(e, field)}
      />
      {(settings as any)[field] ? (
        <div className={styles.logoPreview}>
          <img src={(settings as any)[field]} alt={label} style={{ maxHeight: previewHeight }} />
          <button onClick={() => setSettings({ ...settings, [field]: '' })}>
            <i className="ri-delete-bin-line"></i>
          </button>
        </div>
      ) : (
        <div className={styles.uploadArea} onClick={() => inputRef.current?.click()}>
          <i className="ri-image-add-line"></i>
          <span>Tải lên {label.toLowerCase()}</span>
        </div>
      )}
      {hint && <small>{hint}</small>}
    </div>
  )

  return (
    <>
      <PageHeader 
        title="Thương hiệu & Giao diện" 
        breadcrumbs={[{ label: 'Cài đặt', path: '/admin/settings/general' }, { label: 'Thương hiệu' }]}
        actions={
          <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
            <i className="ri-save-line"></i>
            {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        }
      />

      <Card title="Logo">
        <div className={styles.formRow}>
          <ImageUpload 
            label="Logo chính" 
            field="logo" 
            inputRef={logoRef}
            hint="Kích thước khuyến nghị: 200x50px, định dạng PNG/SVG"
          />
          <ImageUpload 
            label="Logo Dark Mode" 
            field="logoDark" 
            inputRef={logoDarkRef}
            hint="Logo hiển thị trên nền tối"
          />
        </div>
        <div className={styles.formGroup}>
          <label>Alt text cho logo</label>
          <input 
            type="text" 
            value={settings.logoAlt}
            onChange={e => setSettings({ ...settings, logoAlt: e.target.value })}
            placeholder="Nhập alt text" 
          />
        </div>
      </Card>

      <Card title="Favicon & OG Image" className="mt-4">
        <div className={styles.formRow}>
          <ImageUpload 
            label="Favicon" 
            field="favicon" 
            inputRef={faviconRef}
            hint="Kích thước: 32x32px hoặc 64x64px, định dạng ICO/PNG"
            previewHeight={32}
          />
          <ImageUpload 
            label="OG Image (Social Share)" 
            field="ogImage" 
            inputRef={ogImageRef}
            hint="Kích thước khuyến nghị: 1200x630px"
            previewHeight={80}
          />
        </div>
      </Card>

      <Card title="Màu sắc thương hiệu" className="mt-4">
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Màu chính (Primary)</label>
            <div className={styles.colorInput}>
              <input 
                type="color" 
                value={settings.primaryColor}
                onChange={e => setSettings({ ...settings, primaryColor: e.target.value })}
              />
              <input 
                type="text" 
                value={settings.primaryColor}
                onChange={e => setSettings({ ...settings, primaryColor: e.target.value })}
                placeholder="#4F46E5" 
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Màu phụ (Secondary)</label>
            <div className={styles.colorInput}>
              <input 
                type="color" 
                value={settings.secondaryColor}
                onChange={e => setSettings({ ...settings, secondaryColor: e.target.value })}
              />
              <input 
                type="text" 
                value={settings.secondaryColor}
                onChange={e => setSettings({ ...settings, secondaryColor: e.target.value })}
                placeholder="#10B981" 
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Màu nhấn (Accent)</label>
            <div className={styles.colorInput}>
              <input 
                type="color" 
                value={settings.accentColor}
                onChange={e => setSettings({ ...settings, accentColor: e.target.value })}
              />
              <input 
                type="text" 
                value={settings.accentColor}
                onChange={e => setSettings({ ...settings, accentColor: e.target.value })}
                placeholder="#F59E0B" 
              />
            </div>
          </div>
        </div>
      </Card>

      <Card title="Typography" className="mt-4">
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Font chữ chính</label>
            <select 
              value={settings.fontFamily}
              onChange={e => setSettings({ ...settings, fontFamily: e.target.value })}
            >
              <option value="Inter">Inter</option>
              <option value="Roboto">Roboto</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Nunito">Nunito</option>
              <option value="Be Vietnam Pro">Be Vietnam Pro</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Font tiêu đề</label>
            <select 
              value={settings.headingFont}
              onChange={e => setSettings({ ...settings, headingFont: e.target.value })}
            >
              <option value="Inter">Inter</option>
              <option value="Roboto">Roboto</option>
              <option value="Playfair Display">Playfair Display</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Poppins">Poppins</option>
            </select>
          </div>
        </div>
      </Card>

      <Card title="Custom Code" className="mt-4">
        <div className={styles.formGroup}>
          <label>Custom CSS</label>
          <textarea 
            value={settings.customCss}
            onChange={e => setSettings({ ...settings, customCss: e.target.value })}
            placeholder="/* Thêm CSS tùy chỉnh */"
            rows={6}
            style={{ fontFamily: 'monospace', fontSize: 13 }}
          ></textarea>
          <small>CSS sẽ được thêm vào cuối trang</small>
        </div>
        <div className={styles.formGroup}>
          <label>Custom JavaScript</label>
          <textarea 
            value={settings.customJs}
            onChange={e => setSettings({ ...settings, customJs: e.target.value })}
            placeholder="// Thêm JavaScript tùy chỉnh"
            rows={6}
            style={{ fontFamily: 'monospace', fontSize: 13 }}
          ></textarea>
          <small>JavaScript sẽ được thêm vào cuối body</small>
        </div>
      </Card>
    </>
  )
}

export default BrandingSettingsPage
