'use client'

import { useState, useEffect, useCallback } from 'react'
import MediaGrid from '@/components/admin/media/MediaGrid'
import MediaUploader from '@/components/admin/media/MediaUploader'
import MediaFilters from '@/components/admin/media/MediaFilters'
import MediaDetailModal from '@/components/admin/media/MediaDetailModal'

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

interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export default function MediaPage() {
  const [media, setMedia] = useState<Media[]>([])
  const [folders, setFolders] = useState<string[]>([])
  const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 20, total: 0, totalPages: 0 })
  const [loading, setLoading] = useState(true)
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null)
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [showUploader, setShowUploader] = useState(false)
  const [filters, setFilters] = useState({ type: '', folder: '', search: '' })
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const fetchMedia = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        ...(filters.type && { type: filters.type }),
        ...(filters.folder && { folder: filters.folder }),
        ...(filters.search && { search: filters.search }),
      })

      const res = await fetch(`/api/admin/media?${params}`)
      const data = await res.json()
      setMedia(data.media || [])
      setPagination(data.pagination || { page: 1, limit: 20, total: 0, totalPages: 0 })
      setFolders(data.folders || [])
    } catch (error) {
      console.error('Error fetching media:', error)
    } finally {
      setLoading(false)
    }
  }, [pagination.page, pagination.limit, filters])

  useEffect(() => {
    fetchMedia()
  }, [fetchMedia])

  const handleUploadComplete = () => {
    setShowUploader(false)
    fetchMedia()
  }

  const handleDelete = async (ids: number[]) => {
    if (!confirm(`Bạn có chắc muốn xóa ${ids.length} file?`)) return

    try {
      await fetch('/api/admin/media', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids }),
      })
      setSelectedIds([])
      fetchMedia()
    } catch (error) {
      console.error('Error deleting media:', error)
    }
  }

  const handleUpdateMedia = async (id: number, data: Partial<Media>) => {
    try {
      await fetch(`/api/admin/media/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      fetchMedia()
      setSelectedMedia(null)
    } catch (error) {
      console.error('Error updating media:', error)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Media Library</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Quản lý tất cả hình ảnh, video và tài liệu
          </p>
        </div>
        <button
          onClick={() => setShowUploader(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          Upload Files
        </button>
      </div>

      {/* Filters & Actions */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-sm">
        <MediaFilters
          filters={filters}
          folders={folders}
          viewMode={viewMode}
          onFilterChange={setFilters}
          onViewModeChange={setViewMode}
          selectedCount={selectedIds.length}
          onDeleteSelected={() => handleDelete(selectedIds)}
        />
      </div>

      {/* Media Grid/List */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        ) : media.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Không có media</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Bắt đầu bằng cách upload file mới.</p>
            <button
              onClick={() => setShowUploader(true)}
              className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Upload Files
            </button>
          </div>
        ) : (
          <MediaGrid
            media={media}
            viewMode={viewMode}
            selectedIds={selectedIds}
            onSelect={setSelectedIds}
            onView={setSelectedMedia}
            onDelete={(id: number) => handleDelete([id])}
          />
        )}

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200 dark:border-neutral-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Hiển thị {(pagination.page - 1) * pagination.limit + 1} - {Math.min(pagination.page * pagination.limit, pagination.total)} của {pagination.total} files
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setPagination(p => ({ ...p, page: p.page - 1 }))}
                disabled={pagination.page === 1}
                className="px-3 py-1 rounded border border-gray-300 dark:border-neutral-600 disabled:opacity-50"
              >
                Trước
              </button>
              <button
                onClick={() => setPagination(p => ({ ...p, page: p.page + 1 }))}
                disabled={pagination.page === pagination.totalPages}
                className="px-3 py-1 rounded border border-gray-300 dark:border-neutral-600 disabled:opacity-50"
              >
                Sau
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploader && (
        <MediaUploader
          folders={folders}
          onClose={() => setShowUploader(false)}
          onComplete={handleUploadComplete}
        />
      )}

      {/* Detail Modal */}
      {selectedMedia && (
        <MediaDetailModal
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
          onUpdate={handleUpdateMedia}
          onDelete={(id: number) => {
            handleDelete([id])
            setSelectedMedia(null)
          }}
        />
      )}
    </div>
  )
}
