"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../../shared/components/PageHeader'
import Card from '../../shared/components/Card'
import useApi from '../../shared/hooks/useApi'
import styles from '../settings.module.scss'

const SocialSettingsPage = () => {
  const { get, post } = useApi()
  const [saving, setSaving] = useState(false)
  
  const [settings, setSettings] = useState({
    facebook: '',
    instagram: '',
    youtube: '',
    tiktok: '',
    twitter: '',
    linkedin: '',
    pinterest: '',
    zalo: '',
    telegram: '',
    // Share buttons
    showShareButtons: true,
    shareButtonsPosition: 'left',
    // Social login
    enableFacebookLogin: false,
    enableGoogleLogin: false,
    facebookAppId: '',
    googleClientId: ''
  })

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await get('/api/admin/settings?group=social')
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
      group: 'social',
      settings: Object.fromEntries(
        Object.entries(settings).map(([k, v]) => [k, String(v)])
      )
    })
    setSaving(false)
    alert('Đã lưu cài đặt mạng xã hội!')
  }

  return (
    <>
      <PageHeader 
        title="Mạng xã hội" 
        breadcrumbs={[{ label: 'Cài đặt', path: '/admin/settings/general' }, { label: 'Mạng xã hội' }]}
        actions={
          <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
            <i className="ri-save-line"></i>
            {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        }
      />

      <Card title="Liên kết mạng xã hội">
        <p style={{ marginBottom: 20, color: 'var(--admin-text-muted)', fontSize: 14 }}>
          Thêm liên kết đến các trang mạng xã hội của bạn. Để trống nếu không sử dụng.
        </p>
        <div className={styles.socialLinks}>
          <div className={styles.socialItem}>
            <i className="ri-facebook-fill" style={{ color: '#1877F2' }}></i>
            <input 
              type="text" 
              value={settings.facebook}
              onChange={e => setSettings({ ...settings, facebook: e.target.value })}
              placeholder="https://facebook.com/yourpage" 
            />
          </div>
          <div className={styles.socialItem}>
            <i className="ri-instagram-line" style={{ color: '#E4405F' }}></i>
            <input 
              type="text" 
              value={settings.instagram}
              onChange={e => setSettings({ ...settings, instagram: e.target.value })}
              placeholder="https://instagram.com/yourpage" 
            />
          </div>
          <div className={styles.socialItem}>
            <i className="ri-youtube-fill" style={{ color: '#FF0000' }}></i>
            <input 
              type="text" 
              value={settings.youtube}
              onChange={e => setSettings({ ...settings, youtube: e.target.value })}
              placeholder="https://youtube.com/yourchannel" 
            />
          </div>
          <div className={styles.socialItem}>
            <i className="ri-tiktok-fill"></i>
            <input 
              type="text" 
              value={settings.tiktok}
              onChange={e => setSettings({ ...settings, tiktok: e.target.value })}
              placeholder="https://tiktok.com/@yourpage" 
            />
          </div>
          <div className={styles.socialItem}>
            <i className="ri-twitter-x-fill"></i>
            <input 
              type="text" 
              value={settings.twitter}
              onChange={e => setSettings({ ...settings, twitter: e.target.value })}
              placeholder="https://twitter.com/yourpage" 
            />
          </div>
          <div className={styles.socialItem}>
            <i className="ri-linkedin-fill" style={{ color: '#0A66C2' }}></i>
            <input 
              type="text" 
              value={settings.linkedin}
              onChange={e => setSettings({ ...settings, linkedin: e.target.value })}
              placeholder="https://linkedin.com/company/yourpage" 
            />
          </div>
          <div className={styles.socialItem}>
            <i className="ri-pinterest-fill" style={{ color: '#E60023' }}></i>
            <input 
              type="text" 
              value={settings.pinterest}
              onChange={e => setSettings({ ...settings, pinterest: e.target.value })}
              placeholder="https://pinterest.com/yourpage" 
            />
          </div>
          <div className={styles.socialItem}>
            <i className="ri-chat-3-line" style={{ color: '#0068FF' }}></i>
            <input 
              type="text" 
              value={settings.zalo}
              onChange={e => setSettings({ ...settings, zalo: e.target.value })}
              placeholder="https://zalo.me/yourpage" 
            />
          </div>
          <div className={styles.socialItem}>
            <i className="ri-telegram-fill" style={{ color: '#0088CC' }}></i>
            <input 
              type="text" 
              value={settings.telegram}
              onChange={e => setSettings({ ...settings, telegram: e.target.value })}
              placeholder="https://t.me/yourchannel" 
            />
          </div>
        </div>
      </Card>

      <Card title="Nút chia sẻ" className="mt-4">
        <div className={styles.switchGroup}>
          <span>Hiển thị nút chia sẻ trên bài viết</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.showShareButtons}
              onChange={e => setSettings({ ...settings, showShareButtons: e.target.checked })}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        {settings.showShareButtons && (
          <div className={styles.formGroup}>
            <label>Vị trí hiển thị</label>
            <select 
              value={settings.shareButtonsPosition}
              onChange={e => setSettings({ ...settings, shareButtonsPosition: e.target.value })}
            >
              <option value="left">Bên trái (Floating)</option>
              <option value="top">Trên bài viết</option>
              <option value="bottom">Dưới bài viết</option>
              <option value="both">Cả trên và dưới</option>
            </select>
          </div>
        )}
      </Card>

      <Card title="Đăng nhập bằng mạng xã hội" className="mt-4">
        <div className={styles.switchGroup}>
          <span>Cho phép đăng nhập bằng Facebook</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.enableFacebookLogin}
              onChange={e => setSettings({ ...settings, enableFacebookLogin: e.target.checked })}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        {settings.enableFacebookLogin && (
          <div className={styles.formGroup}>
            <label>Facebook App ID</label>
            <input 
              type="text" 
              value={settings.facebookAppId}
              onChange={e => setSettings({ ...settings, facebookAppId: e.target.value })}
              placeholder="Nhập Facebook App ID" 
            />
          </div>
        )}
        
        <div className={styles.switchGroup}>
          <span>Cho phép đăng nhập bằng Google</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.enableGoogleLogin}
              onChange={e => setSettings({ ...settings, enableGoogleLogin: e.target.checked })}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        {settings.enableGoogleLogin && (
          <div className={styles.formGroup}>
            <label>Google Client ID</label>
            <input 
              type="text" 
              value={settings.googleClientId}
              onChange={e => setSettings({ ...settings, googleClientId: e.target.value })}
              placeholder="Nhập Google Client ID" 
            />
          </div>
        )}
      </Card>
    </>
  )
}

export default SocialSettingsPage
