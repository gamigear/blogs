'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CustomCSS {
  desktop: string;
  tablet: string;
  mobile: string;
  is_active: boolean;
}

const defaultCSS: CustomCSS = {
  desktop: '/* CSS cho Desktop (>= 1024px) */\n',
  tablet: '/* CSS cho Tablet (768px - 1023px) */\n',
  mobile: '/* CSS cho Mobile (< 768px) */\n',
  is_active: true,
};

export default function CustomCSSPage() {
  const [css, setCSS] = useState<CustomCSS>(defaultCSS);
  const [activeTab, setActiveTab] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    fetchCSS();
  }, []);

  const fetchCSS = async () => {
    try {
      const res = await fetch('/api/admin/custom-css');
      if (res.ok) {
        const data = await res.json();
        if (data) {
          setCSS({
            desktop: data.desktop || defaultCSS.desktop,
            tablet: data.tablet || defaultCSS.tablet,
            mobile: data.mobile || defaultCSS.mobile,
            is_active: data.is_active ?? true,
          });
        }
      }
    } catch (error) {
      console.error('Error fetching CSS:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch('/api/admin/custom-css', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(css),
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'Đã lưu CSS thành công!' });
      } else {
        setMessage({ type: 'error', text: 'Có lỗi xảy ra khi lưu CSS' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Có lỗi xảy ra khi lưu CSS' });
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const tabs = [
    { key: 'desktop', label: 'Desktop', icon: '🖥️', breakpoint: '>= 1024px' },
    { key: 'tablet', label: 'Tablet', icon: '📱', breakpoint: '768px - 1023px' },
    { key: 'mobile', label: 'Mobile', icon: '📲', breakpoint: '< 768px' },
  ] as const;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/custom-scripts"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Custom CSS</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              CSS tùy chỉnh cho từng loại thiết bị
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={css.is_active}
              onChange={(e) => setCSS({ ...css, is_active: e.target.checked })}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-gray-700 dark:text-gray-300">Kích hoạt</span>
          </label>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center gap-2"
          >
            {saving ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Đang lưu...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Lưu CSS
              </>
            )}
          </button>
        </div>
      </div>

      {/* Message */}
      {message && (
        <div className={`px-4 py-3 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
            : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'
        }`}>
          {message.text}
        </div>
      )}

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <div className="flex border-b dark:border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 px-6 py-4 text-center transition-colors ${
                activeTab === tab.key
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">{tab.icon}</span>
                <div className="text-left">
                  <div className="font-medium">{tab.label}</div>
                  <div className="text-xs opacity-70">{tab.breakpoint}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Editor */}
        <div className="p-4">
          <textarea
            value={css[activeTab]}
            onChange={(e) => setCSS({ ...css, [activeTab]: e.target.value })}
            rows={20}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white font-mono text-sm"
            placeholder={`/* Nhập CSS cho ${activeTab} */`}
            spellCheck={false}
          />
        </div>
      </div>

      {/* Preview Info */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🖥️</span>
            <div>
              <div className="font-medium text-gray-900 dark:text-white">Desktop</div>
              <div className="text-sm text-gray-500">&gt;= 1024px</div>
            </div>
          </div>
          <div className="text-xs text-gray-400 font-mono">
            @media (min-width: 1024px)
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📱</span>
            <div>
              <div className="font-medium text-gray-900 dark:text-white">Tablet</div>
              <div className="text-sm text-gray-500">768px - 1023px</div>
            </div>
          </div>
          <div className="text-xs text-gray-400 font-mono">
            @media (min-width: 768px) and (max-width: 1023px)
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📲</span>
            <div>
              <div className="font-medium text-gray-900 dark:text-white">Mobile</div>
              <div className="text-sm text-gray-500">&lt; 768px</div>
            </div>
          </div>
          <div className="text-xs text-gray-400 font-mono">
            @media (max-width: 767px)
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6">
        <h3 className="font-medium text-yellow-900 dark:text-yellow-300 mb-2 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          Lưu ý
        </h3>
        <ul className="text-sm text-yellow-800 dark:text-yellow-400 space-y-1">
          <li>• CSS sẽ được tự động wrap trong media query tương ứng</li>
          <li>• Không cần viết @media query, chỉ cần viết CSS rules</li>
          <li>• CSS Desktop sẽ áp dụng cho màn hình từ 1024px trở lên</li>
          <li>• CSS Tablet áp dụng cho màn hình từ 768px đến 1023px</li>
          <li>• CSS Mobile áp dụng cho màn hình dưới 768px</li>
        </ul>
      </div>
    </div>
  );
}
