'use client'

import { useState, useEffect, useCallback } from 'react'

interface Media {
  id: number
  filename: string
  original_name: string
  url: string
  type: string
  mime_type: string
  size: number
  alt_text: string
  folder: string
}

interface ImagePickerProps {
  value: string
  onChange: (url: string) => void
  label?: string
  placeholder?: string
  accept?: string
}

export default function ImagePicker({ value, onChange, label, placeholder = 'Chọn hoặc upload ảnh', accept = 'image/*' }: ImagePickerProps) {
  const [showModal, setShowModal] = useState(false)
  const [media, setMedia] = useState<Media[]>([])
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [search, setSearch] = useState('')
  const [tab, setTab] = useState<'library' | 'upload' | 'url'>('library')
  const [urlInput, setUrlInput] = useState('')
  const [isDragging, setIsDragging] = useState(false)

  const fetchMedia = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/media?type=image&limit=50&search=${search}`)
      const data = await res.json()
      setMedia(data.media || [])
    } catch (error) {
      console.error('Error fetching media:', error)
    } finally {
      setLoading(false)
    }
  }, [search])

  useEffect(() => {
    if (showModal) {
      fetchMedia()
    }
  }, [showModal, fetchMedia])

  const handleSelect = (url: string) => {
    onChange(url)
    setShowModal(false)
  }

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      onChange(urlInput.trim())
      setShowModal(false)
      setUrlInput('')
    }
  }

  const handleFileUpload = async (files: FileList | File[]) => {
    const fileArray = Array.from(files)
    if (fileArray.length === 0) return

    setUploading(true)
    try {
      for (const file of fileArray) {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('folder', 'branding')

        const res = await fetch('/api/admin/media/upload', {
          method: 'POST',
          body: formData,
        })

        if (res.ok) {
          const data = await res.json()
          onChange(data.url)
          setShowModal(false)
          return
        }
      }
    } catch (error) {
      console.error('Upload error:', error)
    } finally {
      setUploading(false)
    }
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files)
    }
  }, [])

  const handleRemove = () => {
    onChange('')
  }

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      
      <div className="flex items-start gap-4">
        {/* Preview */}
        <div className="relative w-32 h-32 border-2 border-dashed border-gray-300 dark:border-neutral-600 rounded-lg overflow-hidden bg-gray-50 dark:bg-neutral-700 flex items-center justify-center">
          {value ? (
            <>
              <img src={value} alt="Preview" className="w-full h-full object-contain" />
              <button
                onClick={handleRemove}
                className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </>
          ) : (
            <span className="text-gray-400 text-xs text-center px-2">{placeholder}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="px-4 py-2 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Chọn ảnh
          </button>
          {value && (
            <button
              type="button"
              onClick={handleRemove}
              className="px-4 py-2 text-sm border border-gray-300 dark:border-neutral-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700"
            >
              Xóa
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-neutral-800 rounded-xl max-w-3xl w-full max-h-[85vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Chọn ảnh</h2>
              <button onClick={() => setShowModal(false)} className="p-1 text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-neutral-700">
              <button
                onClick={() => setTab('library')}
                className={`px-4 py-3 text-sm font-medium ${tab === 'library' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500'}`}
              >
                Thư viện
              </button>
              <button
                onClick={() => setTab('upload')}
                className={`px-4 py-3 text-sm font-medium ${tab === 'upload' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500'}`}
              >
                Upload mới
              </button>
              <button
                onClick={() => setTab('url')}
                className={`px-4 py-3 text-sm font-medium ${tab === 'url' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500'}`}
              >
                Nhập URL
              </button>
            </div>

            {/* Content */}
            <div className="p-4 overflow-y-auto max-h-[60vh]">
              {tab === 'library' && (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-sm"
                  />
                  {loading ? (
                    <div className="text-center py-8 text-gray-500">Đang tải...</div>
                  ) : media.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">Không có ảnh nào</div>
                  ) : (
                    <div className="grid grid-cols-4 gap-3">
                      {media.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleSelect(item.url)}
                          className={`relative aspect-square rounded-lg overflow-hidden border-2 hover:border-primary-500 transition-colors ${
                            value === item.url ? 'border-primary-500' : 'border-transparent'
                          }`}
                        >
                          <img src={item.url} alt={item.alt_text || item.original_name} className="w-full h-full object-cover" />
                          {value === item.url && (
                            <div className="absolute inset-0 bg-primary-500/20 flex items-center justify-center">
                              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {tab === 'upload' && (
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
                    isDragging ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-300 dark:border-neutral-600'
                  }`}
                >
                  {uploading ? (
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600 mb-3"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Đang upload...</p>
                    </div>
                  ) : (
                    <>
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Kéo thả ảnh vào đây hoặc{' '}
                        <label className="text-primary-600 hover:text-primary-700 cursor-pointer">
                          chọn file
                          <input
                            type="file"
                            onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                            className="hidden"
                            accept={accept}
                          />
                        </label>
                      </p>
                      <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF, WEBP, ICO (max 5MB)</p>
                    </>
                  )}
                </div>
              )}

              {tab === 'url' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      URL ảnh
                    </label>
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://example.com/image.png"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700"
                    />
                  </div>
                  {urlInput && (
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 border rounded-lg overflow-hidden bg-gray-50 dark:bg-neutral-700">
                        <img src={urlInput} alt="Preview" className="w-full h-full object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
                      </div>
                      <button
                        onClick={handleUrlSubmit}
                        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                      >
                        Sử dụng URL này
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
