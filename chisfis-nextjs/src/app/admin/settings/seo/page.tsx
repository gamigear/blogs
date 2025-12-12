'use client'

import { useState, useEffect } from 'react'

export default function SEOSettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/admin/settings?category=seo')
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
      alert('Settings saved!')
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="p-8 text-center text-gray-500">Loading...</div>

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SEO Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">Configure search engine optimization settings</p>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Meta Tags</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Meta Title</label>
            <input type="text" value={settings.meta_title || ''} onChange={(e) => setSettings({ ...settings, meta_title: e.target.value })} className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
            <p className="text-xs text-gray-500 mt-1">{(settings.meta_title || '').length}/60 characters recommended</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Meta Description</label>
            <textarea value={settings.meta_description || ''} onChange={(e) => setSettings({ ...settings, meta_description: e.target.value })} rows={3} className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
            <p className="text-xs text-gray-500 mt-1">{(settings.meta_description || '').length}/160 characters recommended</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Analytics</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Google Analytics ID</label>
          <input type="text" value={settings.google_analytics_id || ''} onChange={(e) => setSettings({ ...settings, google_analytics_id: e.target.value })} placeholder="G-XXXXXXXXXX" className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
          <p className="text-xs text-gray-500 mt-1">Enter your Google Analytics 4 measurement ID</p>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Preview</h2>
        <div className="p-4 bg-gray-50 dark:bg-neutral-700 rounded-lg">
          <p className="text-blue-600 dark:text-blue-400 text-lg hover:underline cursor-pointer">{settings.meta_title || 'Your Site Title'}</p>
          <p className="text-green-700 dark:text-green-500 text-sm">https://yoursite.com</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{settings.meta_description || 'Your site description will appear here...'}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={handleSave} disabled={saving} className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50">
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  )
}
