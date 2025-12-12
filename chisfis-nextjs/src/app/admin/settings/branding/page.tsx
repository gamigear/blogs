'use client'

import { useState, useEffect } from 'react'
import ImagePicker from '@/components/admin/ImagePicker'

export default function BrandingSettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      // Initialize settings tables first
      await fetch('/api/admin/settings/init', { method: 'POST' })
      const res = await fetch('/api/admin/settings?category=branding')
      const data = await res.json()
      setSettings(data.settings || {})
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings })
      })
      alert('Đã lưu thành công!')
    } catch (error) {
      console.error('Error saving:', error)
      alert('Có lỗi xảy ra!')
    } finally {
      setSaving(false)
    }
  }

  const updateSetting = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-500">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-2">Đang tải...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Logo & Branding</h1>
        <p className="text-gray-500 dark:text-gray-400">Quản lý logo header, footer và favicon của website</p>
      </div>

      {/* Header Logo */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Logo Header</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Logo hiển thị trên thanh navigation của website. Khuyến nghị kích thước: 180x50px
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImagePicker
            label="Logo chính (Light mode)"
            value={settings.header_logo || ''}
            onChange={(url) => updateSetting('header_logo', url)}
            placeholder="Logo header"
          />
          <ImagePicker
            label="Logo Dark mode"
            value={settings.header_logo_dark || ''}
            onChange={(url) => updateSetting('header_logo_dark', url)}
            placeholder="Logo cho dark mode"
          />
        </div>
        <div className="mt-4 p-4 bg-gray-50 dark:bg-neutral-700 rounded-lg">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preview Header</p>
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded border">
              {settings.header_logo ? (
                <img src={settings.header_logo} alt="Header Logo Light" className="h-10 object-contain" />
              ) : (
                <span className="text-gray-400 text-sm">Chưa có logo</span>
              )}
            </div>
            <div className="bg-neutral-900 p-3 rounded border border-neutral-700">
              {settings.header_logo_dark || settings.header_logo ? (
                <img src={settings.header_logo_dark || settings.header_logo} alt="Header Logo Dark" className="h-10 object-contain" />
              ) : (
                <span className="text-gray-500 text-sm">Chưa có logo</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Logo Footer</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Logo hiển thị ở phần footer của website. Có thể dùng logo khác hoặc giống header.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImagePicker
            label="Logo Footer (Light mode)"
            value={settings.footer_logo || ''}
            onChange={(url) => updateSetting('footer_logo', url)}
            placeholder="Logo footer"
          />
          <ImagePicker
            label="Logo Footer Dark mode"
            value={settings.footer_logo_dark || ''}
            onChange={(url) => updateSetting('footer_logo_dark', url)}
            placeholder="Logo footer dark"
          />
        </div>
        <div className="mt-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={settings.footer_use_header_logo === 'true'}
              onChange={(e) => updateSetting('footer_use_header_logo', e.target.checked ? 'true' : 'false')}
              className="w-4 h-4 text-primary-600 rounded border-gray-300"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Sử dụng logo header cho footer</span>
          </label>
        </div>
      </div>

      {/* Favicon */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Favicon</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Icon hiển thị trên tab trình duyệt. Khuyến nghị: file .ico hoặc .png kích thước 32x32px hoặc 64x64px
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImagePicker
            label="Favicon"
            value={settings.favicon || ''}
            onChange={(url) => updateSetting('favicon', url)}
            placeholder="Favicon"
            accept="image/*,.ico"
          />
          <ImagePicker
            label="Apple Touch Icon (180x180)"
            value={settings.apple_touch_icon || ''}
            onChange={(url) => updateSetting('apple_touch_icon', url)}
            placeholder="Apple icon"
          />
        </div>
        <div className="mt-4 p-4 bg-gray-50 dark:bg-neutral-700 rounded-lg">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preview Favicon</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white dark:bg-neutral-800 px-3 py-2 rounded border dark:border-neutral-600">
              {settings.favicon ? (
                <img src={settings.favicon} alt="Favicon" className="w-4 h-4 object-contain" />
              ) : (
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
              )}
              <span className="text-sm text-gray-600 dark:text-gray-400">Tab trình duyệt</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Logo */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Logo Mobile</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Logo thu gọn cho thiết bị di động (tùy chọn). Nếu không set sẽ dùng logo header.
        </p>
        <ImagePicker
          label="Logo Mobile"
          value={settings.mobile_logo || ''}
          onChange={(url) => updateSetting('mobile_logo', url)}
          placeholder="Logo mobile"
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <button
          onClick={() => fetchSettings()}
          className="px-6 py-2 border border-gray-300 dark:border-neutral-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
        >
          Hủy thay đổi
        </button>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
        >
          {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
        </button>
      </div>
    </div>
  )
}
