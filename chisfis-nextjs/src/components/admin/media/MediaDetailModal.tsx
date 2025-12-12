'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Media {
  id: number
  filename: string
  original_name: string
  url: string
  type: 'image' | 'video' | 'document' | 'other'
  mime_type: string
  size: number
  width?: number
  height?: number
  alt_text?: string
  folder: string
  created_at: string
}

interface MediaDetailModalProps {
  media: Media
  onClose: () => void
  onUpdate: (id: number, data: Partial<Media>) => void
  onDelete: (id: number) => void
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export default function MediaDetailModal({ media, onClose, onUpdate, onDelete }: MediaDetailModalProps) {
  const [altText, setAltText] = useState(media.alt_text || '')
  const [folder, setFolder] = useState(media.folder)
  const [copied, setCopied] = useState(false)

  const handleSave = () => {
    onUpdate(media.id, { alt_text: altText, folder })
  }

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.origin + media.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-neutral-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row">
        {/* Preview */}
        <div className="md:w-1/2 bg-gray-100 dark:bg-neutral-900 flex items-center justify-center p-4 min-h-[300px]">
          {media.type === 'image' ? (
            <Image
              src={media.url}
              alt={media.original_name}
              width={500}
              height={500}
              className="max-w-full max-h-[400px] object-contain"
            />
          ) : media.type === 'video' ? (
            <video src={media.url} controls className="max-w-full max-h-[400px]" />
          ) : (
            <div className="text-center">
              <svg className="mx-auto h-20 w-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="mt-2 text-gray-500">{media.original_name}</p>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="md:w-1/2 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate pr-4">
              {media.original_name}
            </h2>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-700 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* File Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Loại file</p>
                <p className="font-medium text-gray-900 dark:text-white capitalize">{media.type}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Kích thước</p>
                <p className="font-medium text-gray-900 dark:text-white">{formatFileSize(media.size)}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">MIME Type</p>
                <p className="font-medium text-gray-900 dark:text-white">{media.mime_type}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Ngày upload</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {new Date(media.created_at).toLocaleDateString('vi-VN')}
                </p>
              </div>
              {media.width && media.height && (
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Kích thước ảnh</p>
                  <p className="font-medium text-gray-900 dark:text-white">{media.width} x {media.height}</p>
                </div>
              )}
            </div>

            {/* URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                URL
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={media.url}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-gray-50 dark:bg-neutral-700 text-sm"
                />
                <button
                  onClick={copyUrl}
                  className="px-3 py-2 bg-gray-100 dark:bg-neutral-700 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-600"
                >
                  {copied ? (
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Alt Text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Alt Text
              </label>
              <input
                type="text"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                placeholder="Mô tả hình ảnh..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-sm"
              />
            </div>

            {/* Folder */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Thư mục
              </label>
              <input
                type="text"
                value={folder}
                onChange={(e) => setFolder(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-sm"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-neutral-700">
            <button
              onClick={() => onDelete(media.id)}
              className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
            >
              Xóa
            </button>
            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg"
              >
                Hủy
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
