"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react'
import PageHeader from '../shared/components/PageHeader'
import Card from '../shared/components/Card'
import styles from './media.module.scss'

interface MediaItem {
  id: number
  name: string
  originalName: string
  url: string
  key: string
  type: string
  mimeType: string
  size: number
  width: number | null
  height: number | null
  isConverted: boolean
  folder: string
  createdAt: string
}

interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

const MediaPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [media, setMedia] = useState<MediaItem[]>([])
  const [pagination, setPagination] = useState<Pagination>({
    page: 1, limit: 20, total: 0, totalPages: 0
  })
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<{[key: string]: number}>({})
  const [convertToWebp, setConvertToWebp] = useState(true)
  const [filterType, setFilterType] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [previewItem, setPreviewItem] = useState<MediaItem | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Fetch media list
  const fetchMedia = useCallback(async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
      })
      if (filterType) params.append('type', filterType)
      if (searchQuery) params.append('search', searchQuery)

      const res = await fetch(`/api/admin/media?${params}`)
      const data = await res.json()
      
      if (data.data) {
        setMedia(data.data)
        setPagination(data.pagination)
      }
    } catch (error) {
      console.error('Error fetching media:', error)
    } finally {
      setLoading(false)
    }
  }, [pagination.page, pagination.limit, filterType, searchQuery])

  useEffect(() => {
    fetchMedia()
  }, [fetchMedia])

  // Handle file upload
  const handleUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    setUploading(true)
    const uploadPromises = Array.from(files).map(async (file) => {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('convertToWebp', convertToWebp.toString())

      try {
        setUploadProgress(prev => ({ ...prev, [file.name]: 0 }))
        
        const res = await fetch('/api/admin/media', {
          method: 'POST',
          body: formData,
        })
        
        setUploadProgress(prev => ({ ...prev, [file.name]: 100 }))
        return res.json()
      } catch (error) {
        console.error(`Error uploading ${file.name}:`, error)
        return null
      }
    })

    await Promise.all(uploadPromises)
    setUploading(false)
    setUploadProgress({})
    fetchMedia()
  }

  // Handle drag and drop
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    handleUpload(e.dataTransfer.files)
  }

  // Toggle selection
  const toggleSelect = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  // Delete selected items
  const handleDelete = async () => {
    if (selectedItems.length === 0) return
    if (!confirm(`Bạn có chắc muốn xóa ${selectedItems.length} file?`)) return

    try {
      await fetch('/api/admin/media', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedItems }),
      })
      setSelectedItems([])
      fetchMedia()
    } catch (error) {
      console.error('Error deleting media:', error)
    }
  }

  // Format file size
  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
  }

  // Get icon by type
  const getIcon = (type: string) => {
    switch (type) {
      case 'image': return 'ri-image-line'
      case 'video': return 'ri-video-line'
      case 'audio': return 'ri-music-line'
      default: return 'ri-file-text-line'
    }
  }

  // Copy URL to clipboard
  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url)
    alert('Đã copy URL!')
  }

  return (
    <>
      <PageHeader 
        title="Quản lý Media" 
        breadcrumbs={[{ label: 'Media' }]}
        actions={
          <div className={styles.headerActions}>
            <div className={styles.viewToggle}>
              <button 
                className={viewMode === 'grid' ? styles.active : ''} 
                onClick={() => setViewMode('grid')}
              >
                <i className="ri-grid-line"></i>
              </button>
              <button 
                className={viewMode === 'list' ? styles.active : ''} 
                onClick={() => setViewMode('list')}
              >
                <i className="ri-list-check"></i>
              </button>
            </div>
            <button 
              className={styles.uploadBtn}
              onClick={() => fileInputRef.current?.click()}
            >
              <i className="ri-upload-2-line"></i>
              Tải lên
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx"
              style={{ display: 'none' }}
              onChange={(e) => handleUpload(e.target.files)}
            />
          </div>
        }
      />

      <Card>
        <div 
          className={`${styles.uploadArea} ${dragActive ? styles.dragActive : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          {uploading ? (
            <>
              <i className="ri-loader-4-line ri-spin"></i>
              <h4>Đang tải lên...</h4>
              <div className={styles.uploadProgressList}>
                {Object.entries(uploadProgress).map(([name, progress]) => (
                  <div key={name} className={styles.uploadProgressItem}>
                    <span>{name}</span>
                    <div className={styles.progressBar}>
                      <div style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <i className="ri-upload-cloud-2-line"></i>
              <h4>Kéo thả file vào đây</h4>
              <p>hoặc click để chọn file từ máy tính</p>
              <span>Hỗ trợ: JPG, PNG, GIF, MP4, PDF (tối đa 50MB)</span>
            </>
          )}
        </div>
        
        <div className={styles.uploadOptions}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={convertToWebp}
              onChange={(e) => setConvertToWebp(e.target.checked)}
            />
            <span>Tự động chuyển đổi PNG/JPG sang WebP</span>
          </label>
        </div>
      </Card>

      <Card title="Thư viện Media" className={styles.libraryCard}>
        <div className={styles.filterBar}>
          <div className={styles.searchBox}>
            <i className="ri-search-line"></i>
            <input
              type="text"
              placeholder="Tìm kiếm file..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select 
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">Tất cả loại</option>
            <option value="image">Hình ảnh</option>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
            <option value="document">Tài liệu</option>
          </select>
        </div>

        {selectedItems.length > 0 && (
          <div className={styles.bulkActions}>
            <span>{selectedItems.length} file đã chọn</span>
            <button className={styles.deleteBtn} onClick={handleDelete}>
              <i className="ri-delete-bin-line"></i>
              Xóa
            </button>
          </div>
        )}

        {loading ? (
          <div className={styles.loading}>
            <i className="ri-loader-4-line ri-spin"></i>
            <span>Đang tải...</span>
          </div>
        ) : media.length === 0 ? (
          <div className={styles.empty}>
            <i className="ri-folder-open-line"></i>
            <p>Chưa có file nào</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className={styles.mediaGrid}>
            {media.map((item) => (
              <div 
                key={item.id} 
                className={`${styles.mediaItem} ${selectedItems.includes(item.id) ? styles.selected : ''}`}
              >
                <div 
                  className={styles.mediaPreview}
                  onClick={() => toggleSelect(item.id)}
                >
                  {item.type === 'image' ? (
                    <img src={item.url} alt={item.name} />
                  ) : (
                    <div className={styles.filePlaceholder}>
                      <i className={getIcon(item.type)}></i>
                    </div>
                  )}
                  <div className={styles.checkbox}>
                    <i className={selectedItems.includes(item.id) ? 'ri-checkbox-fill' : 'ri-checkbox-blank-line'}></i>
                  </div>
                  {item.isConverted && (
                    <span className={styles.webpBadge}>WebP</span>
                  )}
                </div>
                <div className={styles.mediaInfo}>
                  <span className={styles.mediaName} title={item.name}>{item.name}</span>
                  <span className={styles.mediaSize}>
                    {formatSize(item.size)}
                    {item.width && item.height && ` • ${item.width}×${item.height}`}
                  </span>
                </div>
                <div className={styles.mediaActions}>
                  <button onClick={() => setPreviewItem(item)} title="Xem">
                    <i className="ri-eye-line"></i>
                  </button>
                  <button onClick={() => copyUrl(item.url)} title="Copy URL">
                    <i className="ri-link"></i>
                  </button>
                  <button onClick={() => window.open(item.url, '_blank')} title="Tải xuống">
                    <i className="ri-download-line"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <table className={styles.mediaTable}>
            <thead>
              <tr>
                <th></th>
                <th>Tên file</th>
                <th>Loại</th>
                <th>Kích thước</th>
                <th>Dimensions</th>
                <th>Ngày tải</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {media.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input 
                      type="checkbox" 
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleSelect(item.id)}
                    />
                  </td>
                  <td>
                    <div className={styles.fileInfo}>
                      {item.type === 'image' ? (
                        <img src={item.url} alt={item.name} className={styles.thumbnail} />
                      ) : (
                        <i className={getIcon(item.type)}></i>
                      )}
                      <div>
                        <span>{item.name}</span>
                        {item.isConverted && <span className={styles.webpTag}>WebP</span>}
                      </div>
                    </div>
                  </td>
                  <td><span className={styles.fileType}>{item.type}</span></td>
                  <td>{formatSize(item.size)}</td>
                  <td>{item.width && item.height ? `${item.width}×${item.height}` : '-'}</td>
                  <td>{new Date(item.createdAt).toLocaleDateString('vi-VN')}</td>
                  <td>
                    <div className={styles.actions}>
                      <button className={styles.actionBtn} onClick={() => setPreviewItem(item)} title="Xem">
                        <i className="ri-eye-line"></i>
                      </button>
                      <button className={styles.actionBtn} onClick={() => copyUrl(item.url)} title="Copy URL">
                        <i className="ri-link"></i>
                      </button>
                      <button className={styles.actionBtn} onClick={() => window.open(item.url, '_blank')} title="Tải xuống">
                        <i className="ri-download-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {pagination.totalPages > 1 && (
          <div className={styles.pagination}>
            <button 
              disabled={pagination.page === 1}
              onClick={() => setPagination(p => ({ ...p, page: p.page - 1 }))}
            >
              <i className="ri-arrow-left-line"></i>
            </button>
            <span>Trang {pagination.page} / {pagination.totalPages}</span>
            <button 
              disabled={pagination.page === pagination.totalPages}
              onClick={() => setPagination(p => ({ ...p, page: p.page + 1 }))}
            >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        )}
      </Card>

      {/* Preview Modal */}
      {previewItem && (
        <div className={styles.modal} onClick={() => setPreviewItem(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setPreviewItem(null)}>
              <i className="ri-close-line"></i>
            </button>
            
            <div className={styles.previewArea}>
              {previewItem.type === 'image' ? (
                <img src={previewItem.url} alt={previewItem.name} />
              ) : previewItem.type === 'video' ? (
                <video src={previewItem.url} controls />
              ) : (
                <div className={styles.filePreview}>
                  <i className={getIcon(previewItem.type)}></i>
                  <span>{previewItem.name}</span>
                </div>
              )}
            </div>
            
            <div className={styles.previewInfo}>
              <h4>{previewItem.name}</h4>
              <div className={styles.infoGrid}>
                <div>
                  <label>Tên gốc:</label>
                  <span>{previewItem.originalName}</span>
                </div>
                <div>
                  <label>Loại:</label>
                  <span>{previewItem.mimeType}</span>
                </div>
                <div>
                  <label>Kích thước:</label>
                  <span>{formatSize(previewItem.size)}</span>
                </div>
                {previewItem.width && previewItem.height && (
                  <div>
                    <label>Dimensions:</label>
                    <span>{previewItem.width} × {previewItem.height}</span>
                  </div>
                )}
                <div>
                  <label>Đã chuyển WebP:</label>
                  <span>{previewItem.isConverted ? 'Có' : 'Không'}</span>
                </div>
                <div>
                  <label>Ngày tải:</label>
                  <span>{new Date(previewItem.createdAt).toLocaleString('vi-VN')}</span>
                </div>
              </div>
              <div className={styles.urlBox}>
                <label>URL:</label>
                <div className={styles.urlInput}>
                  <input type="text" value={previewItem.url} readOnly />
                  <button onClick={() => copyUrl(previewItem.url)}>
                    <i className="ri-file-copy-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MediaPage
