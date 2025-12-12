'use client'

import Image from 'next/image'
import clsx from 'clsx'

interface Media {
  id: number
  filename: string
  original_name: string
  url: string
  type: 'image' | 'video' | 'document' | 'other'
  mime_type: string
  size: number
  folder: string
  created_at: string
}

interface MediaGridProps {
  media: Media[]
  viewMode: 'grid' | 'list'
  selectedIds: number[]
  onSelect: (ids: number[]) => void
  onView: (media: Media) => void
  onDelete: (id: number) => void
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function getFileIcon(type: string) {
  switch (type) {
    case 'video':
      return (
        <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    case 'document':
      return (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    default:
      return (
        <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
  }
}

export default function MediaGrid({ media, viewMode, selectedIds, onSelect, onView, onDelete }: MediaGridProps) {
  const toggleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      onSelect(selectedIds.filter(i => i !== id))
    } else {
      onSelect([...selectedIds, id])
    }
  }

  const selectAll = () => {
    if (selectedIds.length === media.length) {
      onSelect([])
    } else {
      onSelect(media.map(m => m.id))
    }
  }

  if (viewMode === 'list') {
    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-neutral-700">
              <th className="py-3 px-4 text-left">
                <input
                  type="checkbox"
                  checked={selectedIds.length === media.length && media.length > 0}
                  onChange={selectAll}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">File</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Type</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Size</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Folder</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Date</th>
              <th className="py-3 px-4 text-right text-sm font-medium text-gray-600 dark:text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {media.map((item) => (
              <tr key={item.id} className="border-b border-gray-100 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700/50">
                <td className="py-3 px-4">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => toggleSelect(item.id)}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded overflow-hidden bg-gray-100 dark:bg-neutral-700 flex items-center justify-center">
                      {item.type === 'image' ? (
                        <Image src={item.url} alt={item.original_name} width={40} height={40} className="object-cover w-full h-full" />
                      ) : (
                        getFileIcon(item.type)
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[200px]">
                      {item.original_name}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">{item.type}</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{formatFileSize(item.size)}</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.folder}</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{formatDate(item.created_at)}</span>
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => onView(item)} className="p-1 text-gray-500 hover:text-primary-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button onClick={() => onDelete(item.id)} className="p-1 text-gray-500 hover:text-red-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {media.map((item) => (
        <div
          key={item.id}
          className={clsx(
            'group relative rounded-lg overflow-hidden border-2 transition-all cursor-pointer',
            selectedIds.includes(item.id)
              ? 'border-primary-500 ring-2 ring-primary-500/20'
              : 'border-transparent hover:border-gray-300 dark:hover:border-neutral-600'
          )}
        >
          {/* Checkbox */}
          <div className="absolute top-2 left-2 z-10">
            <input
              type="checkbox"
              checked={selectedIds.includes(item.id)}
              onChange={() => toggleSelect(item.id)}
              className="rounded border-gray-300 bg-white/80"
            />
          </div>

          {/* Preview */}
          <div
            onClick={() => onView(item)}
            className="aspect-square bg-gray-100 dark:bg-neutral-700 flex items-center justify-center"
          >
            {item.type === 'image' ? (
              <Image
                src={item.url}
                alt={item.original_name}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            ) : (
              getFileIcon(item.type)
            )}
          </div>

          {/* Info */}
          <div className="p-2 bg-white dark:bg-neutral-800">
            <p className="text-xs font-medium text-gray-900 dark:text-white truncate">{item.original_name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{formatFileSize(item.size)}</p>
          </div>

          {/* Hover Actions */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button
              onClick={() => onView(item)}
              className="p-2 bg-white rounded-full text-gray-700 hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="p-2 bg-white rounded-full text-red-600 hover:bg-red-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
