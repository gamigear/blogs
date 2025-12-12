"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../../shared/components/PageHeader'
import Card from '../../shared/components/Card'
import useApi from '../../shared/hooks/useApi'
import styles from '../settings.module.scss'

const SEOSettingsPage = () => {
  const { get, post } = useApi()
  const [saving, setSaving] = useState(false)
  const [settings, setSettings] = useState({
    metaTitle: 'Du lịch Việt Nam - Đặt vé tour giá tốt',
    metaDescription: 'Khám phá Việt Nam với các tour du lịch chất lượng cao, giá cả hợp lý. Đặt vé dễ dàng, nhanh chóng.',
    metaKeywords: 'du lịch việt nam, tour phú quốc, tour đà nẵng, đặt vé du lịch',
    ogTitle: 'Du lịch Việt Nam - Đặt vé tour giá tốt',
    ogDescription: 'Khám phá Việt Nam với các tour du lịch chất lượng cao',
    twitterTitle: 'Du lịch Việt Nam - Đặt vé tour giá tốt',
    twitterDescription: 'Khám phá Việt Nam với các tour du lịch chất lượng cao',
    googleAnalyticsId: '',
    googleTagManagerId: '',
    facebookPixelId: '',
    robotsTxt: `User-agent: *\nAllow: /\nSitemap: https://example.com/sitemap.xml`,
    allowIndex: true
  })

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await get('/api/admin/settings?group=seo')
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
      group: 'seo',
      settings: Object.fromEntries(
        Object.entries(settings).map(([k, v]) => [k, String(v)])
      )
    })
    setSaving(false)
    alert('Đã lưu cài đặt SEO!')
  }

  return (
    <>
      <PageHeader 
        title="Cài đặt SEO" 
        breadcrumbs={[{ label: 'Cài đặt', path: '/admin/settings/general' }, { label: 'SEO' }]}
        actions={
          <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
            <i className="ri-save-line"></i>
            {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        }
      />

      <Card title="Meta Tags mặc định">
        <div className={styles.formGroup}>
          <label>Tiêu đề trang (Title)</label>
          <input 
            type="text" 
            value={settings.metaTitle}
            onChange={e => setSettings({...settings, metaTitle: e.target.value})}
            placeholder="Nhập tiêu đề" 
          />
          <small>Khuyến nghị: 50-60 ký tự ({settings.metaTitle.length} ký tự)</small>
        </div>
        <div className={styles.formGroup}>
          <label>Mô tả (Meta Description)</label>
          <textarea 
            value={settings.metaDescription}
            onChange={e => setSettings({...settings, metaDescription: e.target.value})}
            placeholder="Nhập mô tả" 
            rows={3}
          ></textarea>
          <small>Khuyến nghị: 150-160 ký tự ({settings.metaDescription.length} ký tự)</small>
        </div>
        <div className={styles.formGroup}>
          <label>Từ khóa (Keywords)</label>
          <input 
            type="text" 
            value={settings.metaKeywords}
            onChange={e => setSettings({...settings, metaKeywords: e.target.value})}
            placeholder="Nhập từ khóa, cách nhau bằng dấu phẩy" 
          />
        </div>
      </Card>

      <Card title="Open Graph (Facebook)" className="mt-4">
        <div className={styles.formGroup}>
          <label>OG Title</label>
          <input 
            type="text" 
            value={settings.ogTitle}
            onChange={e => setSettings({...settings, ogTitle: e.target.value})}
            placeholder="Nhập tiêu đề" 
          />
        </div>
        <div className={styles.formGroup}>
          <label>OG Description</label>
          <textarea 
            value={settings.ogDescription}
            onChange={e => setSettings({...settings, ogDescription: e.target.value})}
            placeholder="Nhập mô tả" 
            rows={2}
          ></textarea>
        </div>
      </Card>

      <Card title="Twitter Card" className="mt-4">
        <div className={styles.formGroup}>
          <label>Twitter Title</label>
          <input 
            type="text" 
            value={settings.twitterTitle}
            onChange={e => setSettings({...settings, twitterTitle: e.target.value})}
            placeholder="Nhập tiêu đề" 
          />
        </div>
        <div className={styles.formGroup}>
          <label>Twitter Description</label>
          <textarea 
            value={settings.twitterDescription}
            onChange={e => setSettings({...settings, twitterDescription: e.target.value})}
            placeholder="Nhập mô tả" 
            rows={2}
          ></textarea>
        </div>
      </Card>

      <Card title="Cài đặt nâng cao" className="mt-4">
        <div className={styles.formGroup}>
          <label>Google Analytics ID</label>
          <input 
            type="text" 
            value={settings.googleAnalyticsId}
            onChange={e => setSettings({...settings, googleAnalyticsId: e.target.value})}
            placeholder="G-XXXXXXXXXX" 
          />
        </div>
        <div className={styles.formGroup}>
          <label>Google Tag Manager ID</label>
          <input 
            type="text" 
            value={settings.googleTagManagerId}
            onChange={e => setSettings({...settings, googleTagManagerId: e.target.value})}
            placeholder="GTM-XXXXXXX" 
          />
        </div>
        <div className={styles.formGroup}>
          <label>Facebook Pixel ID</label>
          <input 
            type="text" 
            value={settings.facebookPixelId}
            onChange={e => setSettings({...settings, facebookPixelId: e.target.value})}
            placeholder="Nhập Facebook Pixel ID" 
          />
        </div>
        <div className={styles.formGroup}>
          <label>Robots.txt</label>
          <textarea 
            value={settings.robotsTxt}
            onChange={e => setSettings({...settings, robotsTxt: e.target.value})}
            rows={5}
          ></textarea>
        </div>
        <div className={styles.switchGroup}>
          <span>Cho phép index trang web</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.allowIndex}
              onChange={e => setSettings({...settings, allowIndex: e.target.checked})}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </Card>
    </>
  )
}

export default SEOSettingsPage
