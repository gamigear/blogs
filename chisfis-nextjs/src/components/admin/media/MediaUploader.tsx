'use client'

import { useState, useCallback } from 'react'

interface MediaUploaderProps {
  folders: string[]
  onClose: () => void
  onComplete: () => void
}

interface UploadFile {
  file: File
  progress: number
  status: 'pending' | 'uploading' | 'success' | 'error'
  error?: string
}

export default function MediaUploader({ folders, onClose, onComplete }: MediaUploaderProps) {
  const [files, setFiles] = useState<UploadFile[]>([])
  const [folder, setFolder] = useState('general')
  const [newFolder, setNewFolder] = useState('')
  const [isDragging, setIsDragging] = useState(false)

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    addFiles(droppedFiles)
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addFiles(Array.from(e.target.files))
    }
  }

  const addFiles = (newFiles: File[]) => {
    const uploadFiles: UploadFile[] = newFiles.map(file => ({
      file,
      progress: 0,
      status: 'pending'
    }))
    setFiles(prev => [...prev, ...uploadFiles])
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const uploadFiles = async () => {
    const targetFolder = newFolder || folder

    for (let i = 0; i < files.length; i++) {
      if (files[i].status !== 'pending') continue

      setFiles(prev => prev.map((f, idx) => 
        idx === i ? { ...f, status: 'uploading' } : f
      ))

      try {
        const formData = new FormData()
        formData.append('file', files[i].file)
        formData.append('folder', targetFolder)

        const res = await fetch('/api/admin/media/upload', {
          method: 'POST',
          body: formData,
        })

        if (!res.ok) {
          const error = await res.json()
          throw new Error(error.error || 'Upload failed')
        }

        setFiles(prev => prev.map((f, idx) => 
          idx === i ? { ...f, status: 'success', progress: 100 } : f
        ))
      } catch (error) {
        setFiles(prev => prev.map((f, idx) => 
          idx === i ? { ...f, status: 'error', error: (error as Error).message } : f
        ))
      }
    }

    // Check if all uploads completed
    setTimeout(() => {
      const allDone = files.every(f => f.status === 'success' || f.status === 'error')
      if (allDone) {
        onComplete()
      }
    }, 500)
  }

  const pendingCount = files.filter(f => f.status === 'pending').length
  const successCount = files.filter(f => f.status === 'success').length

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-neutral-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upload Files</h2>
          <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 overflow-y-auto max-h-[60vh]">
          {/* Folder Selection */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Thư mục
              </label>
              <select
                value={folder}
                onChange={(e) => setFolder(e.target.value)}
                disabled={!!newFolder}
                className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-sm"
              >
                <option value="general">general</option>
                {folders.filter(f => f !== 'general').map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Hoặc tạo mới
              </label>
              <input
                type="text"
                value={newFolder}
                onChange={(e) => setNewFolder(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                placeholder="ten-thu-muc"
                className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-sm"
              />
            </div>
          </div>

          {/* Drop Zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
              isDragging
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                : 'border-gray-300 dark:border-neutral-600'
            }`}
          >
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Kéo thả files vào đây hoặc{' '}
              <label className="text-primary-600 hover:text-primary-700 cursor-pointer">
                chọn files
                <input
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                  accept="image/*,video/*,application/pdf,text/plain"
                />
              </label>
            </p>
            <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF, WEBP, MP4, PDF (max 10MB)</p>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Files ({successCount}/{files.length} uploaded)
              </p>
              {files.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-neutral-700 rounded-lg"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {item.file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(item.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.status === 'pending' && (
                      <span className="text-xs text-gray-500">Chờ upload</span>
                    )}
                    {item.status === 'uploading' && (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600"></div>
                    )}
                    {item.status === 'success' && (
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {item.status === 'error' && (
                      <span className="text-xs text-red-500">{item.error}</span>
                    )}
                    {item.status === 'pending' && (
                      <button
                        onClick={() => removeFile(index)}
                        className="p-1 text-gray-400 hover:text-red-500"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200 dark:border-neutral-700">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg"
          >
            Đóng
          </button>
          <button
            onClick={uploadFiles}
            disabled={pendingCount === 0}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Upload {pendingCount > 0 && `(${pendingCount})`}
          </button>
        </div>
      </div>
    </div>
  )
}
