"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../../shared/components/PageHeader'
import Card from '../../shared/components/Card'
import useApi from '../../shared/hooks/useApi'
import styles from '../settings.module.scss'

interface FooterLink {
  id: string
  title: string
  url: string
}

const FooterSettingsPage = () => {
  const { get, post } = useApi()
  const [saving, setSaving] = useState(false)
  
  const [settings, setSettings] = useState({
    companyName: 'Công ty Du lịch ABC',
    description: 'Chuyên cung cấp dịch vụ du lịch chất lượng cao với giá cả hợp lý.',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    phone: '1900 1234',
    email: 'info@example.com',
    copyright: '© 2025 Công ty Du lịch ABC. All rights reserved.',
    facebook: 'https://facebook.com/example',
    instagram: 'https://instagram.com/example',
    youtube: 'https://youtube.com/example',
    tiktok: '',
    zalo: '',
    showNewsletter: true,
    newsletterTitle: 'Đăng ký nhận tin',
    newsletterDescription: 'Nhận thông tin khuyến mãi và tour mới nhất'
  })

  const [quickLinks, setQuickLinks] = useState<FooterLink[]>([
    { id: '1', title: 'Về chúng tôi', url: '/ve-chung-toi' },
    { id: '2', title: 'Dịch vụ', url: '/dich-vu' },
    { id: '3', title: 'Chính sách', url: '/chinh-sach' },
    { id: '4', title: 'Liên hệ', url: '/lien-he' }
  ])

  const [supportLinks, setSupportLinks] = useState<FooterLink[]>([
    { id: '1', title: 'Hướng dẫn đặt vé', url: '/huong-dan-dat-ve' },
    { id: '2', title: 'Câu hỏi thường gặp', url: '/faq' },
    { id: '3', title: 'Điều khoản sử dụng', url: '/dieu-khoan' },
    { id: '4', title: 'Chính sách bảo mật', url: '/chinh-sach-bao-mat' }
  ])

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await get('/api/admin/settings?group=footer')
      if (data) {
        setSettings(prev => ({
          ...prev,
          ...Object.fromEntries(
            Object.entries(data)
              .filter(([k]) => !['quickLinks', 'supportLinks'].includes(k))
              .map(([k, v]) => [k, v === 'true' ? true : v === 'false' ? false : v])
          )
        }))
        if (data.quickLinks) {
          try { setQuickLinks(JSON.parse(data.quickLinks as string)) } catch {}
        }
        if (data.supportLinks) {
          try { setSupportLinks(JSON.parse(data.supportLinks as string)) } catch {}
        }
      }
    }
    fetchSettings()
  }, [])

  const handleSave = async () => {
    setSaving(true)
    await post('/api/admin/settings', {
      group: 'footer',
      settings: {
        ...Object.fromEntries(
          Object.entries(settings).map(([k, v]) => [k, String(v)])
        ),
        quickLinks: JSON.stringify(quickLinks),
        supportLinks: JSON.stringify(supportLinks)
      }
    })
    setSaving(false)
    alert('Đã lưu cài đặt Footer!')
  }

  const addLink = (type: 'quick' | 'support') => {
    const newLink = { id: Date.now().toString(), title: '', url: '' }
    if (type === 'quick') {
      setQuickLinks([...quickLinks, newLink])
    } else {
      setSupportLinks([...supportLinks, newLink])
    }
  }

  const updateLink = (type: 'quick' | 'support', id: string, field: 'title' | 'url', value: string) => {
    const setter = type === 'quick' ? setQuickLinks : setSupportLinks
    const links = type === 'quick' ? quickLinks : supportLinks
    setter(links.map(item => item.id === id ? { ...item, [field]: value } : item))
  }

  const deleteLink = (type: 'quick' | 'support', id: string) => {
    const setter = type === 'quick' ? setQuickLinks : setSupportLinks
    const links = type === 'quick' ? quickLinks : supportLinks
    setter(links.filter(item => item.id !== id))
  }

  return (
    <>
      <PageHeader 
        title="Cài đặt Footer" 
        breadcrumbs={[{ label: 'Cài đặt', path: '/admin/settings/general' }, { label: 'Footer' }]}
        actions={
          <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
            <i className="ri-save-line"></i>
            {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        }
      />

      <Card title="Thông tin công ty">
        <div className={styles.formGroup}>
          <label>Tên công ty</label>
          <input 
            type="text" 
            value={settings.companyName}
            onChange={e => setSettings({ ...settings, companyName: e.target.value })}
            placeholder="Nhập tên công ty" 
          />
        </div>
        <div className={styles.formGroup}>
          <label>Mô tả ngắn</label>
          <textarea 
            value={settings.description}
            onChange={e => setSettings({ ...settings, description: e.target.value })}
            placeholder="Nhập mô tả" 
            rows={3}
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label>Địa chỉ</label>
          <input 
            type="text" 
            value={settings.address}
            onChange={e => setSettings({ ...settings, address: e.target.value })}
            placeholder="Nhập địa chỉ" 
          />
        </div>
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

      <Card title="Liên kết nhanh" className="mt-4">
        <div className={styles.menuItems}>
          {quickLinks.map((item) => (
            <div key={item.id} className={styles.menuItem}>
              <i className={`ri-drag-move-line ${styles.dragHandle}`}></i>
              <input 
                type="text" 
                value={item.title}
                onChange={e => updateLink('quick', item.id, 'title', e.target.value)}
                placeholder="Tên link" 
              />
              <input 
                type="text" 
                value={item.url}
                onChange={e => updateLink('quick', item.id, 'url', e.target.value)}
                placeholder="Đường dẫn" 
              />
              <button className={styles.deleteBtn} onClick={() => deleteLink('quick', item.id)}>
                <i className="ri-delete-bin-line"></i>
              </button>
            </div>
          ))}
        </div>
        <button className={styles.addBtn} onClick={() => addLink('quick')}>
          <i className="ri-add-line"></i> Thêm link
        </button>
      </Card>

      <Card title="Hỗ trợ khách hàng" className="mt-4">
        <div className={styles.menuItems}>
          {supportLinks.map((item) => (
            <div key={item.id} className={styles.menuItem}>
              <i className={`ri-drag-move-line ${styles.dragHandle}`}></i>
              <input 
                type="text" 
                value={item.title}
                onChange={e => updateLink('support', item.id, 'title', e.target.value)}
                placeholder="Tên link" 
              />
              <input 
                type="text" 
                value={item.url}
                onChange={e => updateLink('support', item.id, 'url', e.target.value)}
                placeholder="Đường dẫn" 
              />
              <button className={styles.deleteBtn} onClick={() => deleteLink('support', item.id)}>
                <i className="ri-delete-bin-line"></i>
              </button>
            </div>
          ))}
        </div>
        <button className={styles.addBtn} onClick={() => addLink('support')}>
          <i className="ri-add-line"></i> Thêm link
        </button>
      </Card>

      <Card title="Mạng xã hội" className="mt-4">
        <div className={styles.socialLinks}>
          <div className={styles.socialItem}>
            <i className="ri-facebook-fill"></i>
            <input 
              type="text" 
              value={settings.facebook}
              onChange={e => setSettings({ ...settings, facebook: e.target.value })}
              placeholder="Link Facebook" 
            />
          </div>
          <div className={styles.socialItem}>
            <i className="ri-instagram-line"></i>
            <input 
              type="text" 
              value={settings.instagram}
              onChange={e => setSettings({ ...settings, instagram: e.target.value })}
              placeholder="Link Instagram" 
            />
          </div>
          <div className={styles.socialItem}>
            <i className="ri-youtube-fill"></i>
            <input 
              type="text" 
              value={settings.youtube}
              onChange={e => setSettings({ ...settings, youtube: e.target.value })}
              placeholder="Link Youtube" 
            />
          </div>
          <div className={styles.socialItem}>
            <i className="ri-tiktok-fill"></i>
            <input 
              type="text" 
              value={settings.tiktok}
              onChange={e => setSettings({ ...settings, tiktok: e.target.value })}
              placeholder="Link TikTok" 
            />
          </div>
          <div className={styles.socialItem}>
            <i className="ri-chat-3-line"></i>
            <input 
              type="text" 
              value={settings.zalo}
              onChange={e => setSettings({ ...settings, zalo: e.target.value })}
              placeholder="Link Zalo" 
            />
          </div>
        </div>
      </Card>

      <Card title="Newsletter" className="mt-4">
        <div className={styles.switchGroup}>
          <span>Hiển thị form đăng ký nhận tin</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.showNewsletter}
              onChange={e => setSettings({ ...settings, showNewsletter: e.target.checked })}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        {settings.showNewsletter && (
          <>
            <div className={styles.formGroup}>
              <label>Tiêu đề</label>
              <input 
                type="text" 
                value={settings.newsletterTitle}
                onChange={e => setSettings({ ...settings, newsletterTitle: e.target.value })}
                placeholder="Nhập tiêu đề" 
              />
            </div>
            <div className={styles.formGroup}>
              <label>Mô tả</label>
              <input 
                type="text" 
                value={settings.newsletterDescription}
                onChange={e => setSettings({ ...settings, newsletterDescription: e.target.value })}
                placeholder="Nhập mô tả" 
              />
            </div>
          </>
        )}
      </Card>

      <Card title="Copyright" className="mt-4">
        <div className={styles.formGroup}>
          <label>Text copyright</label>
          <input 
            type="text" 
            value={settings.copyright}
            onChange={e => setSettings({ ...settings, copyright: e.target.value })}
            placeholder="Nhập text copyright" 
          />
        </div>
      </Card>
    </>
  )
}

export default FooterSettingsPage
