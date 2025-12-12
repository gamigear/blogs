'use client'

import { useState, useEffect } from 'react'

interface FooterLink {
  id: number
  section: string
  title: string
  url: string
  sort_order: number
  is_active: boolean
}

interface SocialLink {
  id: number
  platform: string
  url: string
  icon: string
  sort_order: number
  is_active: boolean
}

export default function FooterSettingsPage() {
  const [links, setLinks] = useState<Record<string, FooterLink[]>>({})
  const [social, setSocial] = useState<SocialLink[]>([])
  const [loading, setLoading] = useState(true)
  const [settings, setSettings] = useState<Record<string, string>>({})
  const [newLink, setNewLink] = useState({ section: 'company', title: '', url: '' })
  const [newSocial, setNewSocial] = useState({ platform: '', url: '' })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [footerRes, settingsRes] = await Promise.all([
        fetch('/api/admin/footer'),
        fetch('/api/admin/settings?category=footer')
      ])
      const footerData = await footerRes.json()
      const settingsData = await settingsRes.json()
      setLinks(footerData.links || {})
      setSocial(footerData.social || [])
      setSettings(settingsData.settings || {})
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddLink = async () => {
    if (!newLink.title || !newLink.url) return
    try {
      await fetch('/api/admin/footer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'link', ...newLink })
      })
      setNewLink({ section: 'company', title: '', url: '' })
      fetchData()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleAddSocial = async () => {
    if (!newSocial.platform || !newSocial.url) return
    try {
      await fetch('/api/admin/footer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'social', ...newSocial, icon: newSocial.platform })
      })
      setNewSocial({ platform: '', url: '' })
      fetchData()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleDeleteLink = async (id: number) => {
    if (!confirm('Delete this link?')) return
    await fetch(`/api/admin/footer?id=${id}&type=link`, { method: 'DELETE' })
    fetchData()
  }

  const handleDeleteSocial = async (id: number) => {
    if (!confirm('Delete this social link?')) return
    await fetch(`/api/admin/footer?id=${id}&type=social`, { method: 'DELETE' })
    fetchData()
  }

  const handleSaveSettings = async () => {
    await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ settings })
    })
    alert('Saved!')
  }

  if (loading) return <div className="p-8 text-center text-gray-500">Loading...</div>

  const sections = ['company', 'support', 'legal', 'discover']

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Footer Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage footer content, links and social media</p>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Footer Content</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Footer Description</label>
            <textarea value={settings.footer_description || ''} onChange={(e) => setSettings({ ...settings, footer_description: e.target.value })} rows={3} className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Copyright Text</label>
            <input type="text" value={settings.footer_copyright || ''} onChange={(e) => setSettings({ ...settings, footer_copyright: e.target.value })} className="w-full px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
          </div>
          <button onClick={handleSaveSettings} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">Save Content</button>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add Footer Link</h2>
        <div className="flex gap-4">
          <select value={newLink.section} onChange={(e) => setNewLink({ ...newLink, section: e.target.value })} className="px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white">
            {sections.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
          </select>
          <input type="text" placeholder="Title" value={newLink.title} onChange={(e) => setNewLink({ ...newLink, title: e.target.value })} className="flex-1 px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
          <input type="text" placeholder="URL" value={newLink.url} onChange={(e) => setNewLink({ ...newLink, url: e.target.value })} className="flex-1 px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
          <button onClick={handleAddLink} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">Add</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map(section => (
          <div key={section} className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700">
            <div className="p-4 border-b border-gray-200 dark:border-neutral-700">
              <h3 className="font-semibold text-gray-900 dark:text-white capitalize">{section}</h3>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-neutral-700">
              {(links[section] || []).map(link => (
                <div key={link.id} className="p-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{link.title}</p>
                    <p className="text-xs text-gray-500">{link.url}</p>
                  </div>
                  <button onClick={() => handleDeleteLink(link.id)} className="p-1 text-red-500 hover:bg-red-50 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              ))}
              {(!links[section] || links[section].length === 0) && (
                <div className="p-4 text-center text-gray-500 text-sm">No links</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Media Links</h2>
        <div className="flex gap-4 mb-4">
          <select value={newSocial.platform} onChange={(e) => setNewSocial({ ...newSocial, platform: e.target.value })} className="px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white">
            <option value="">Select Platform</option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter/X</option>
            <option value="instagram">Instagram</option>
            <option value="youtube">YouTube</option>
            <option value="linkedin">LinkedIn</option>
            <option value="tiktok">TikTok</option>
          </select>
          <input type="text" placeholder="URL" value={newSocial.url} onChange={(e) => setNewSocial({ ...newSocial, url: e.target.value })} className="flex-1 px-3 py-2 border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
          <button onClick={handleAddSocial} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">Add</button>
        </div>
        <div className="flex flex-wrap gap-3">
          {social.map(s => (
            <div key={s.id} className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-neutral-700 rounded-lg">
              <span className="capitalize text-sm text-gray-900 dark:text-white">{s.platform}</span>
              <button onClick={() => handleDeleteSocial(s.id)} className="text-red-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
