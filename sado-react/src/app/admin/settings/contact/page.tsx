"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../../shared/components/PageHeader'
import Card from '../../shared/components/Card'
import useApi from '../../shared/hooks/useApi'
import styles from '../settings.module.scss'

const ContactSettingsPage = () => {
  const { get, post } = useApi()
  const [saving, setSaving] = useState(false)
  
  const [settings, setSettings] = useState({
    // Thông tin chính
    companyName: 'Công ty Du lịch ABC',
    taxCode: '',
    businessLicense: '',
    
    // Địa chỉ
    address: '123 Đường ABC, Quận 1, TP.HCM',
    city: 'TP. Hồ Chí Minh',
    district: 'Quận 1',
    
    // Liên hệ
    phone: '1900 1234',
    hotline: '0909 123 456',
    fax: '',
    email: 'info@example.com',
    supportEmail: 'support@example.com',
    
    // Giờ làm việc
    workingHours: '8:00 - 18:00',
    workingDays: 'Thứ 2 - Thứ 7',
    
    // Bản đồ
    mapEmbed: '',
    latitude: '10.7769',
    longitude: '106.7009',
    
    // Zalo/Messenger
    zaloOA: '',
    messengerPageId: '',
    whatsapp: '',
    
    // Hiển thị
    showMap: true,
    showContactForm: true,
    showWorkingHours: true
  })

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await get('/api/admin/settings?group=contact')
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
      group: 'contact',
      settings: Object.fromEntries(
        Object.entries(settings).map(([k, v]) => [k, String(v)])
      )
    })
    setSaving(false)
    alert('Đã lưu thông tin liên hệ!')
  }

  return (
    <>
      <PageHeader 
        title="Thông tin liên hệ" 
        breadcrumbs={[{ label: 'Cài đặt', path: '/admin/settings/general' }, { label: 'Liên hệ' }]}
        actions={
          <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
            <i className="ri-save-line"></i>
            {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        }
      />

      <Card title="Thông tin doanh nghiệp">
        <div className={styles.formGroup}>
          <label>Tên công ty / Doanh nghiệp</label>
          <input 
            type="text" 
            value={settings.companyName}
            onChange={e => setSettings({ ...settings, companyName: e.target.value })}
            placeholder="Nhập tên công ty" 
          />
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Mã số thuế</label>
            <input 
              type="text" 
              value={settings.taxCode}
              onChange={e => setSettings({ ...settings, taxCode: e.target.value })}
              placeholder="Nhập mã số thuế" 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Số ĐKKD</label>
            <input 
              type="text" 
              value={settings.businessLicense}
              onChange={e => setSettings({ ...settings, businessLicense: e.target.value })}
              placeholder="Nhập số đăng ký kinh doanh" 
            />
          </div>
        </div>
      </Card>

      <Card title="Địa chỉ" className="mt-4">
        <div className={styles.formGroup}>
          <label>Địa chỉ chi tiết</label>
          <input 
            type="text" 
            value={settings.address}
            onChange={e => setSettings({ ...settings, address: e.target.value })}
            placeholder="Số nhà, đường, phường/xã" 
          />
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Quận/Huyện</label>
            <input 
              type="text" 
              value={settings.district}
              onChange={e => setSettings({ ...settings, district: e.target.value })}
              placeholder="Nhập quận/huyện" 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Tỉnh/Thành phố</label>
            <input 
              type="text" 
              value={settings.city}
              onChange={e => setSettings({ ...settings, city: e.target.value })}
              placeholder="Nhập tỉnh/thành phố" 
            />
          </div>
        </div>
      </Card>

      <Card title="Thông tin liên lạc" className="mt-4">
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Số điện thoại chính</label>
            <input 
              type="tel" 
              value={settings.phone}
              onChange={e => setSettings({ ...settings, phone: e.target.value })}
              placeholder="Nhập số điện thoại" 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Hotline</label>
            <input 
              type="tel" 
              value={settings.hotline}
              onChange={e => setSettings({ ...settings, hotline: e.target.value })}
              placeholder="Nhập hotline" 
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Fax</label>
            <input 
              type="tel" 
              value={settings.fax}
              onChange={e => setSettings({ ...settings, fax: e.target.value })}
              placeholder="Nhập số fax" 
            />
          </div>
          <div className={styles.formGroup}>
            <label>WhatsApp</label>
            <input 
              type="tel" 
              value={settings.whatsapp}
              onChange={e => setSettings({ ...settings, whatsapp: e.target.value })}
              placeholder="Nhập số WhatsApp" 
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Email chính</label>
            <input 
              type="email" 
              value={settings.email}
              onChange={e => setSettings({ ...settings, email: e.target.value })}
              placeholder="Nhập email" 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email hỗ trợ</label>
            <input 
              type="email" 
              value={settings.supportEmail}
              onChange={e => setSettings({ ...settings, supportEmail: e.target.value })}
              placeholder="Nhập email hỗ trợ" 
            />
          </div>
        </div>
      </Card>

      <Card title="Chat & Hỗ trợ trực tuyến" className="mt-4">
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Zalo OA ID</label>
            <input 
              type="text" 
              value={settings.zaloOA}
              onChange={e => setSettings({ ...settings, zaloOA: e.target.value })}
              placeholder="Nhập Zalo OA ID" 
            />
            <small>ID của Zalo Official Account</small>
          </div>
          <div className={styles.formGroup}>
            <label>Facebook Page ID</label>
            <input 
              type="text" 
              value={settings.messengerPageId}
              onChange={e => setSettings({ ...settings, messengerPageId: e.target.value })}
              placeholder="Nhập Facebook Page ID" 
            />
            <small>Dùng cho Messenger chat plugin</small>
          </div>
        </div>
      </Card>

      <Card title="Giờ làm việc" className="mt-4">
        <div className={styles.switchGroup}>
          <span>Hiển thị giờ làm việc</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.showWorkingHours}
              onChange={e => setSettings({ ...settings, showWorkingHours: e.target.checked })}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        {settings.showWorkingHours && (
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Ngày làm việc</label>
              <input 
                type="text" 
                value={settings.workingDays}
                onChange={e => setSettings({ ...settings, workingDays: e.target.value })}
                placeholder="VD: Thứ 2 - Thứ 7" 
              />
            </div>
            <div className={styles.formGroup}>
              <label>Giờ làm việc</label>
              <input 
                type="text" 
                value={settings.workingHours}
                onChange={e => setSettings({ ...settings, workingHours: e.target.value })}
                placeholder="VD: 8:00 - 18:00" 
              />
            </div>
          </div>
        )}
      </Card>

      <Card title="Bản đồ" className="mt-4">
        <div className={styles.switchGroup}>
          <span>Hiển thị bản đồ</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.showMap}
              onChange={e => setSettings({ ...settings, showMap: e.target.checked })}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        {settings.showMap && (
          <>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Vĩ độ (Latitude)</label>
                <input 
                  type="text" 
                  value={settings.latitude}
                  onChange={e => setSettings({ ...settings, latitude: e.target.value })}
                  placeholder="VD: 10.7769" 
                />
              </div>
              <div className={styles.formGroup}>
                <label>Kinh độ (Longitude)</label>
                <input 
                  type="text" 
                  value={settings.longitude}
                  onChange={e => setSettings({ ...settings, longitude: e.target.value })}
                  placeholder="VD: 106.7009" 
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Google Maps Embed Code</label>
              <textarea 
                value={settings.mapEmbed}
                onChange={e => setSettings({ ...settings, mapEmbed: e.target.value })}
                placeholder="Dán mã nhúng Google Maps vào đây" 
                rows={4}
              ></textarea>
              <small>Lấy mã nhúng từ Google Maps → Share → Embed a map</small>
            </div>
          </>
        )}
      </Card>

      <Card title="Form liên hệ" className="mt-4">
        <div className={styles.switchGroup}>
          <span>Hiển thị form liên hệ trên trang</span>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={settings.showContactForm}
              onChange={e => setSettings({ ...settings, showContactForm: e.target.checked })}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </Card>
    </>
  )
}

export default ContactSettingsPage
