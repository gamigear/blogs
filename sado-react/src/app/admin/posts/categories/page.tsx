"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../../shared/components/PageHeader'
import Card from '../../shared/components/Card'
import DataTable from '../../shared/components/DataTable'
import useApi from '../../shared/hooks/useApi'
import styles from '../posts.module.scss'

interface Category {
  id: number
  name: string
  slug: string
  description: string | null
  thumbnail: string | null
  parentId: number | null
  parent: { id: number; name: string } | null
  order: number
  _count: { posts: number }
}

const CategoriesPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<Category | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const { loading, get, post, put, del } = useApi()

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    parentId: '',
    order: 0
  })

  const fetchCategories = async () => {
    const data = await get('/api/admin/posts/categories')
    if (data) setCategories(data)
  }

  useEffect(() => { fetchCategories() }, [])

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Tên danh mục', render: (v: string) => <strong>{v}</strong> },
    { key: 'slug', label: 'Slug' },
    { 
      key: 'parent', 
      label: 'Danh mục cha',
      render: (v: { name: string } | null) => v?.name || '-'
    },
    { 
      key: '_count', 
      label: 'Số bài viết',
      render: (v: { posts: number }) => v.posts
    },
    { key: 'order', label: 'Thứ tự' }
  ]

  const handleEdit = (item: Category) => {
    setEditing(item)
    setFormData({
      name: item.name,
      description: item.description || '',
      parentId: item.parentId?.toString() || '',
      order: item.order
    })
    setShowModal(true)
  }

  const handleDelete = async (item: Category) => {
    if (confirm(`Bạn có chắc muốn xóa danh mục "${item.name}"?`)) {
      const result = await del(`/api/admin/posts/categories/${item.id}`)
      if (result?.error) {
        alert(result.error)
      } else {
        fetchCategories()
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = {
      ...formData,
      parentId: formData.parentId ? parseInt(formData.parentId) : null
    }
    
    if (editing) {
      await put(`/api/admin/posts/categories/${editing.id}`, payload)
    } else {
      await post('/api/admin/posts/categories', payload)
    }
    
    setShowModal(false)
    setEditing(null)
    resetForm()
    fetchCategories()
  }

  const resetForm = () => {
    setFormData({ name: '', description: '', parentId: '', order: 0 })
  }

  const openAddModal = () => {
    setEditing(null)
    resetForm()
    setShowModal(true)
  }

  // Get parent options (exclude current editing category and its children)
  const parentOptions = categories.filter(c => !editing || c.id !== editing.id)

  return (
    <>
      <PageHeader 
        title="Danh mục bài viết" 
        breadcrumbs={[{ label: 'Bài viết', path: '/admin/posts' }, { label: 'Danh mục' }]}
        actions={
          <button className={styles.addBtn} onClick={openAddModal}>
            <i className="ri-add-line"></i>
            Thêm danh mục
          </button>
        }
      />

      <Card>
        {loading ? (
          <div className={styles.loading}>Đang tải...</div>
        ) : (
          <DataTable
            columns={columns}
            data={categories}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Card>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>{editing ? 'Sửa danh mục' : 'Thêm danh mục mới'}</h3>
              <button onClick={() => setShowModal(false)}>
                <i className="ri-close-line"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.modalBody}>
                <div className={styles.formGroup}>
                  <label>Tên danh mục *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Nhập tên danh mục" 
                    required
                  />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Danh mục cha</label>
                    <select 
                      value={formData.parentId}
                      onChange={e => setFormData({...formData, parentId: e.target.value})}
                    >
                      <option value="">Không có</option>
                      {parentOptions.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Thứ tự</label>
                    <input 
                      type="number" 
                      value={formData.order}
                      onChange={e => setFormData({...formData, order: parseInt(e.target.value) || 0})}
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Mô tả</label>
                  <textarea 
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    placeholder="Nhập mô tả danh mục" 
                    rows={3}
                  ></textarea>
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

export default CategoriesPage
