"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../../shared/components/PageHeader'
import Card from '../../shared/components/Card'
import DataTable from '../../shared/components/DataTable'
import useApi from '../../shared/hooks/useApi'
import styles from '../posts.module.scss'

interface Tag {
  id: number
  name: string
  slug: string
  _count: { posts: number }
}

const TagsPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<Tag | null>(null)
  const [tags, setTags] = useState<Tag[]>([])
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const { loading, get, post, put, del } = useApi()
  const [formData, setFormData] = useState({ name: '' })

  const fetchTags = async () => {
    const data = await get('/api/admin/posts/tags')
    if (data) setTags(data)
  }

  useEffect(() => { fetchTags() }, [])

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Tên tag', render: (v: string) => <span className={styles.tag}>{v}</span> },
    { key: 'slug', label: 'Slug' },
    { key: '_count', label: 'Số bài viết', render: (v: { posts: number }) => v.posts }
  ]

  const handleEdit = (item: Tag) => {
    setEditing(item)
    setFormData({ name: item.name })
    setShowModal(true)
  }

  const handleDelete = async (item: Tag) => {
    if (confirm(`Bạn có chắc muốn xóa tag "${item.name}"?`)) {
      await del(`/api/admin/posts/tags/${item.id}`)
      fetchTags()
    }
  }

  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return
    if (confirm(`Bạn có chắc muốn xóa ${selectedIds.length} tag đã chọn?`)) {
      await del('/api/admin/posts/tags', { ids: selectedIds })
      setSelectedIds([])
      fetchTags()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editing) {
      await put(`/api/admin/posts/tags/${editing.id}`, formData)
    } else {
      await post('/api/admin/posts/tags', formData)
    }
    
    setShowModal(false)
    setEditing(null)
    setFormData({ name: '' })
    fetchTags()
  }

  const openAddModal = () => {
    setEditing(null)
    setFormData({ name: '' })
    setShowModal(true)
  }

  return (
    <>
      <PageHeader 
        title="Tags bài viết" 
        breadcrumbs={[{ label: 'Bài viết', path: '/admin/posts' }, { label: 'Tags' }]}
        actions={
          <div style={{ display: 'flex', gap: 12 }}>
            {selectedIds.length > 0 && (
              <button className={styles.deleteBtn} onClick={handleBulkDelete}>
                <i className="ri-delete-bin-line"></i>
                Xóa ({selectedIds.length})
              </button>
            )}
            <button className={styles.addBtn} onClick={openAddModal}>
              <i className="ri-add-line"></i>
              Thêm tag
            </button>
          </div>
        }
      />

      <Card>
        {loading ? (
          <div className={styles.loading}>Đang tải...</div>
        ) : (
          <DataTable
            columns={columns}
            data={tags}
            onEdit={handleEdit}
            onDelete={handleDelete}
            selectable
            selectedIds={selectedIds}
            onSelectionChange={setSelectedIds}
          />
        )}
      </Card>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent} style={{ maxWidth: 450 }}>
            <div className={styles.modalHeader}>
              <h3>{editing ? 'Sửa tag' : 'Thêm tag mới'}</h3>
              <button onClick={() => setShowModal(false)}>
                <i className="ri-close-line"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.modalBody}>
                <div className={styles.formGroup}>
                  <label>Tên tag *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({ name: e.target.value })}
                    placeholder="Nhập tên tag" 
                    required
                  />
                </div>
              </div>
              <div className={styles.modalFooter}>
                <button type="button" className={styles.cancelBtn} onClick={() => setShowModal(false)}>Hủy</button>
                <button type="submit" className={styles.saveBtn}>Lưu</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default TagsPage
