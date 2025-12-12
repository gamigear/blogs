'use client'

import { useState, useEffect } from 'react'

export default function SearchSettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/admin/settings?category=search')
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
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Search Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">Configure search functionality and suggestions</p>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Search Configuration</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Search Placeholder Text</label>
            <input type="text" value={settings.search_placeholder || ''} onChange={(e) => setSettings({ ...settings, search_placeholder: e.target.value })} className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" placeholder="e.g. Search destinations, hotels, cars..." />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Enable Search Suggestions</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Show autocomplete suggestions while typing</p>
            </div>
            <button onClick={() => setSettings({ ...settings, search_suggestions_enabled: settings.search_suggestions_enabled === 'true' ? 'false' : 'true' })} className={`relative w-11 h-6 rounded-full transition-colors ${settings.search_suggestions_enabled === 'true' ? 'bg-primary-600' : 'bg-gray-200 dark:bg-neutral-600'}`}>
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${settings.search_suggestions_enabled === 'true' ? 'translate-x-5' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Featured Destinations</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">These destinations will appear as quick suggestions in search</p>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Destinations (comma separated)</label>
          <textarea value={settings.featured_destinations || ''} onChange={(e) => setSettings({ ...settings, featured_destinations: e.target.value })} rows={3} className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" placeholder="Paris, Tokyo, New York, London, Dubai" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {(settings.featured_destinations || '').split(',').filter(Boolean).map((dest, i) => (
            <span key={i} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full text-sm">{dest.trim()}</span>
          ))}
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
