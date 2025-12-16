'use client';

import { useState, useEffect } from 'react';
import MediaPicker from '@/components/admin/MediaPicker';
import { MediaFile } from '@/types/media';

interface Settings {
  general: {
    site_name: string;
    site_description: string;
    logo_header_url: string;
    logo_footer_url: string;
    favicon_url: string;
    default_avatar: string;
    contact_email: string;
    contact_phone: string;
    timezone: string;
    timezone_offset: number;
  };
  header: {
    show_search: boolean;
    show_notifications: boolean;
    menu_items: { name: string; href: string; icon: string }[];
  };
  footer: {
    company_name: string;
    ceo_name: string;
    address: string;
    business_registration: string;
    license_info: string;
    links: { name: string; href: string }[];
    social_links: { facebook: string; twitter: string; youtube: string };
  };
  homepage: {
    featured_section: boolean;
    featured_count: number;
    latest_section: boolean;
    latest_count: number;
    show_sidebar: boolean;
  };
  seo: {
    default_meta_title: string;
    default_meta_description: string;
    google_analytics_id: string;
    google_tag_manager_id: string;
    facebook_pixel_id: string;
  };
}

type TabKey = 'general' | 'header' | 'footer' | 'homepage' | 'seo';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('general');
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [mediaPickerField, setMediaPickerField] = useState<'logo_header' | 'logo_footer' | 'favicon' | 'default_avatar' | null>(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const defaultSettings: Settings = {
    general: { site_name: '', site_description: '', logo_header_url: '', logo_footer_url: '', favicon_url: '', default_avatar: '', contact_email: '', contact_phone: '', timezone: 'Asia/Ho_Chi_Minh', timezone_offset: 7 },
    header: { show_search: true, show_notifications: true, menu_items: [] },
    footer: { company_name: '', ceo_name: '', address: '', business_registration: '', license_info: '', links: [], social_links: { facebook: '', twitter: '', youtube: '' } },
    homepage: { featured_section: true, featured_count: 5, latest_section: true, latest_count: 10, show_sidebar: true },
    seo: { default_meta_title: '', default_meta_description: '', google_analytics_id: '', google_tag_manager_id: '', facebook_pixel_id: '' },
  };

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/admin/settings');
      const data = await res.json();
      const settingsObj: any = { ...defaultSettings };
      data.settings?.forEach((s: any) => { 
        settingsObj[s.key] = { ...defaultSettings[s.key as TabKey], ...s.value }; 
      });
      setSettings(settingsObj);
    } catch (error) {
      console.error('Error fetching settings:', error);
      setSettings(defaultSettings);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (key: TabKey) => {
    if (!settings) return;
    setSaving(true);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value: settings[key] }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.error('Save error:', data);
        throw new Error(data.error || 'Failed to save');
      }
      alert('Đã lưu thành công!');
    } catch (error: any) {
      console.error('Save error:', error);
      alert(`Có lỗi xảy ra: ${error.message || 'Vui lòng thử lại.'}`);
    } finally {
      setSaving(false);
    }
  };

  const updateSetting = (key: TabKey, field: string, value: any) => {
    if (!settings) return;
    setSettings({ ...settings, [key]: { ...settings[key], [field]: value } });
  };

  const handleMediaSelect = (file: MediaFile) => {
    if (!mediaPickerField) return;
    const fieldMap: Record<string, string> = {
      logo_header: 'logo_header_url',
      logo_footer: 'logo_footer_url',
      favicon: 'favicon_url',
      default_avatar: 'default_avatar',
    };
    updateSetting('general', fieldMap[mediaPickerField], file.url);
    setMediaPickerField(null);
  };

  const tabs = [
    { key: 'general' as TabKey, label: 'Cài đặt chung', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
    { key: 'header' as TabKey, label: 'Header', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg> },
    { key: 'footer' as TabKey, label: 'Footer', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { key: 'homepage' as TabKey, label: 'Trang chủ', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { key: 'seo' as TabKey, label: 'SEO', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
  ];

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Đang tải...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Cài đặt Website</h1>
        <p className="text-gray-500 mt-1">Quản lý cấu hình website của bạn</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-md font-medium whitespace-nowrap transition-colors ${activeTab === tab.key ? 'bg-[#2A85FF] text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-6">
        {/* General Settings */}
        {activeTab === 'general' && settings && (
          <div className="space-y-5">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">Cài đặt chung</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Tên website</label>
                <input type="text" value={settings.general?.site_name || ''} onChange={(e) => updateSetting('general', 'site_name', e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Email liên hệ</label>
                <input type="email" value={settings.general?.contact_email || ''} onChange={(e) => updateSetting('general', 'contact_email', e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Mô tả website</label>
                <textarea value={settings.general?.site_description || ''} onChange={(e) => updateSetting('general', 'site_description', e.target.value)} rows={3}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 resize-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Số điện thoại</label>
                <input type="text" value={settings.general?.contact_phone || ''} onChange={(e) => updateSetting('general', 'contact_phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Múi giờ</label>
                <select 
                  value={settings.general?.timezone || 'Asia/Ho_Chi_Minh'} 
                  onChange={(e) => {
                    const tz = e.target.value;
                    const offsets: Record<string, number> = {
                      'UTC': 0,
                      'Asia/Ho_Chi_Minh': 7,
                      'Asia/Bangkok': 7,
                      'Asia/Singapore': 8,
                      'Asia/Tokyo': 9,
                      'Asia/Seoul': 9,
                      'Europe/London': 0,
                      'Europe/Paris': 1,
                      'America/New_York': -5,
                      'America/Los_Angeles': -8,
                    };
                    updateSetting('general', 'timezone', tz);
                    updateSetting('general', 'timezone_offset', offsets[tz] || 0);
                  }}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700"
                >
                  <option value="Asia/Ho_Chi_Minh">Việt Nam (UTC+7)</option>
                  <option value="Asia/Bangkok">Thái Lan (UTC+7)</option>
                  <option value="Asia/Singapore">Singapore (UTC+8)</option>
                  <option value="Asia/Tokyo">Nhật Bản (UTC+9)</option>
                  <option value="Asia/Seoul">Hàn Quốc (UTC+9)</option>
                  <option value="UTC">UTC (UTC+0)</option>
                  <option value="Europe/London">London (UTC+0)</option>
                  <option value="Europe/Paris">Paris (UTC+1)</option>
                  <option value="America/New_York">New York (UTC-5)</option>
                  <option value="America/Los_Angeles">Los Angeles (UTC-8)</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Múi giờ hiển thị cho tin nhắn và các hoạt động</p>
              </div>
            </div>

            {/* Logo & Favicon Section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-5 mt-5">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Logo & Favicon</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Logo Header */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Logo Header</label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md p-4 text-center">
                    {settings.general?.logo_header_url ? (
                      <div className="space-y-3">
                        <img src={settings.general.logo_header_url} alt="Logo Header" className="max-h-16 mx-auto object-contain" />
                        <div className="flex gap-2 justify-center">
                          <button type="button" onClick={() => setMediaPickerField('logo_header')}
                            className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                            Thay đổi
                          </button>
                          <button type="button" onClick={() => updateSetting('general', 'logo_header_url', '')}
                            className="px-3 py-1.5 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200">
                            Xóa
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button type="button" onClick={() => setMediaPickerField('logo_header')}
                        className="w-full py-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">Chọn logo header</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Logo Footer */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Logo Footer</label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md p-4 text-center">
                    {settings.general?.logo_footer_url ? (
                      <div className="space-y-3">
                        <img src={settings.general.logo_footer_url} alt="Logo Footer" className="max-h-16 mx-auto object-contain" />
                        <div className="flex gap-2 justify-center">
                          <button type="button" onClick={() => setMediaPickerField('logo_footer')}
                            className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                            Thay đổi
                          </button>
                          <button type="button" onClick={() => updateSetting('general', 'logo_footer_url', '')}
                            className="px-3 py-1.5 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200">
                            Xóa
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button type="button" onClick={() => setMediaPickerField('logo_footer')}
                        className="w-full py-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">Chọn logo footer</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Favicon */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Favicon</label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md p-4 text-center">
                    {settings.general?.favicon_url ? (
                      <div className="space-y-3">
                        <img src={settings.general.favicon_url} alt="Favicon" className="w-12 h-12 mx-auto object-contain" />
                        <div className="flex gap-2 justify-center">
                          <button type="button" onClick={() => setMediaPickerField('favicon')}
                            className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                            Thay đổi
                          </button>
                          <button type="button" onClick={() => updateSetting('general', 'favicon_url', '')}
                            className="px-3 py-1.5 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200">
                            Xóa
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button type="button" onClick={() => setMediaPickerField('favicon')}
                        className="w-full py-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">Chọn favicon</span>
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Khuyến nghị: 32x32 hoặc 64x64 pixels</p>
                </div>
              </div>
            </div>

            {/* Default Avatar Section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-5 mt-5">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Avatar mặc định</h4>
              <p className="text-sm text-gray-500 mb-4">Avatar này sẽ được sử dụng cho người dùng chưa có avatar</p>
              <div className="max-w-xs">
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md p-4 text-center">
                  {settings.general?.default_avatar ? (
                    <div className="space-y-3">
                      <img src={settings.general.default_avatar} alt="Default Avatar" className="w-16 h-16 mx-auto object-cover rounded-full" />
                      <div className="flex gap-2 justify-center">
                        <button type="button" onClick={() => setMediaPickerField('default_avatar')}
                          className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                          Thay đổi
                        </button>
                        <button type="button" onClick={() => updateSetting('general', 'default_avatar', '')}
                          className="px-3 py-1.5 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200">
                          Xóa
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button type="button" onClick={() => setMediaPickerField('default_avatar')}
                      className="w-full py-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                      <svg className="w-12 h-12 mx-auto mb-2 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      <span className="text-sm">Chọn avatar mặc định</span>
                    </button>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">Khuyến nghị: Hình vuông, tối thiểu 100x100 pixels</p>
              </div>
            </div>
          </div>
        )}

        {/* Header Settings */}
        {activeTab === 'header' && settings && (
          <div className="space-y-5">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">Cài đặt Header</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={settings.header?.show_search ?? true} onChange={(e) => updateSetting('header', 'show_search', e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300" />
                <span className="text-gray-900 dark:text-white">Hiển thị ô tìm kiếm</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={settings.header?.show_notifications ?? true} onChange={(e) => updateSetting('header', 'show_notifications', e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300" />
                <span className="text-gray-900 dark:text-white">Hiển thị thông báo</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Menu Items (JSON)</label>
              <textarea value={JSON.stringify(settings.header?.menu_items || [], null, 2)} rows={10}
                onChange={(e) => { try { updateSetting('header', 'menu_items', JSON.parse(e.target.value)); } catch {} }}
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 resize-none" />
            </div>
          </div>
        )}

        {/* Footer Settings */}
        {activeTab === 'footer' && settings && (
          <div className="space-y-5">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">Cài đặt Footer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Tên công ty</label>
                <input type="text" value={settings.footer?.company_name || ''} onChange={(e) => updateSetting('footer', 'company_name', e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">CEO/Giám đốc</label>
                <input type="text" value={settings.footer?.ceo_name || ''} onChange={(e) => updateSetting('footer', 'ceo_name', e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Địa chỉ</label>
                <input type="text" value={settings.footer?.address || ''} onChange={(e) => updateSetting('footer', 'address', e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Mã số ĐKKD</label>
                <input type="text" value={settings.footer?.business_registration || ''} onChange={(e) => updateSetting('footer', 'business_registration', e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Giấy phép</label>
                <input type="text" value={settings.footer?.license_info || ''} onChange={(e) => updateSetting('footer', 'license_info', e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Social Links</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" placeholder="Facebook URL" value={settings.footer?.social_links?.facebook || ''}
                  onChange={(e) => updateSetting('footer', 'social_links', { ...settings.footer?.social_links, facebook: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
                <input type="text" placeholder="Twitter URL" value={settings.footer?.social_links?.twitter || ''}
                  onChange={(e) => updateSetting('footer', 'social_links', { ...settings.footer?.social_links, twitter: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
                <input type="text" placeholder="YouTube URL" value={settings.footer?.social_links?.youtube || ''}
                  onChange={(e) => updateSetting('footer', 'social_links', { ...settings.footer?.social_links, youtube: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
              </div>
            </div>
          </div>
        )}

        {/* Homepage Settings */}
        {activeTab === 'homepage' && settings && (
          <div className="space-y-5">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">Cài đặt Trang chủ</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={settings.homepage?.featured_section ?? true} onChange={(e) => updateSetting('homepage', 'featured_section', e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300" />
                <span className="text-gray-900 dark:text-white">Hiển thị bài viết nổi bật</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={settings.homepage?.latest_section ?? true} onChange={(e) => updateSetting('homepage', 'latest_section', e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300" />
                <span className="text-gray-900 dark:text-white">Hiển thị bài viết mới nhất</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={settings.homepage?.show_sidebar ?? true} onChange={(e) => updateSetting('homepage', 'show_sidebar', e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300" />
                <span className="text-gray-900 dark:text-white">Hiển thị sidebar</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Số bài nổi bật</label>
                <input type="number" min="1" max="20" value={settings.homepage?.featured_count || 5} onChange={(e) => updateSetting('homepage', 'featured_count', parseInt(e.target.value))}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Số bài mới nhất</label>
                <input type="number" min="1" max="50" value={settings.homepage?.latest_count || 10} onChange={(e) => updateSetting('homepage', 'latest_count', parseInt(e.target.value))}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
              </div>
            </div>
          </div>
        )}

        {/* SEO Settings */}
        {activeTab === 'seo' && settings && (
          <div className="space-y-5">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">Cài đặt SEO</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Meta Title mặc định</label>
                <input type="text" value={settings.seo?.default_meta_title || ''} onChange={(e) => updateSetting('seo', 'default_meta_title', e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Meta Description mặc định</label>
                <textarea value={settings.seo?.default_meta_description || ''} onChange={(e) => updateSetting('seo', 'default_meta_description', e.target.value)} rows={3}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 resize-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Google Analytics ID</label>
                  <input type="text" placeholder="G-XXXXXXXXXX" value={settings.seo?.google_analytics_id || ''} onChange={(e) => updateSetting('seo', 'google_analytics_id', e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Google Tag Manager ID</label>
                  <input type="text" placeholder="GTM-XXXXXXX" value={settings.seo?.google_tag_manager_id || ''} onChange={(e) => updateSetting('seo', 'google_tag_manager_id', e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Facebook Pixel ID</label>
                  <input type="text" placeholder="XXXXXXXXXXXXXXX" value={settings.seo?.facebook_pixel_id || ''} onChange={(e) => updateSetting('seo', 'facebook_pixel_id', e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="mt-6 pt-6 bg-gray-100 dark:bg-gray-800 -mx-6 -mb-6 px-6 py-4 rounded-b-md">
          <button onClick={() => handleSave(activeTab)} disabled={saving}
            className="px-6 py-3 rounded-md bg-[#2A85FF] text-white hover:bg-[#2A85FF]/90 transition-colors font-semibold disabled:opacity-50">
            {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        </div>
      </div>

      {/* Media Picker Modal */}
      {mediaPickerField && (
        <MediaPicker
          accept="image/*"
          onSelect={handleMediaSelect}
          onClose={() => setMediaPickerField(null)}
        />
      )}
    </div>
  );
}
