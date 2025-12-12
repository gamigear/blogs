"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../shared/components/PageHeader'
import Card from '../shared/components/Card'
import DataTable from '../shared/components/DataTable'
import useApi from '../shared/hooks/useApi'
import styles from './pages.module.scss'

interface PageItem {
  id: number
  title: string
  slug: string
  content: string | null
  template: string
  status: string
  createdAt: string
  updatedAt: string
}

const PagesPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [editingPage, setEditingPage] = useState<PageItem | null>(null)
  const [pages, setPages] = useState<PageItem[]>([])
  const { loading, get, post, put, del } = useApi<PageItem[]>()

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    template: 'default',
    status: 'DRAFT'
  })

  const fetchPages = async () => {
    const data = await get('/api/admin/pages')
    if (data) setPages(data)
  }

  useEffect(() => {
    fetchPages()
  }, [])

  const columns = [
    { key: 'id', label: 'ID' },
    { 
      key: 'title', 
      label: 'Tiêu đề',
      render: (value: string) => <strong>{value}</strong>
    },
    { 
      key: 'slug', 
      label: 'Đường dẫn',
      render: (value: string) => <code className={styles.slug}>{value}</code>
    },
    { 
      key: 'template', 
      label: 'Template',
      render: (value: string) => <span className={styles.template}>{value}</span>
    },
    { 
      key: 'status', 
      label: 'Trạng thái',
      render: (value: string) => (
        <span className={`${styles.status} ${value === 'PUBLISHED' ? styles.published : styles.draft}`}>
          {value === 'PUBLISHED' ? 'Đã xuất bản' : 'Bản nháp'}
        </span>
      )
    },
    { 
      key: 'updatedAt', 
      label: 'Cập nhật',
      render: (v: string) => new Date(v).toLocaleDateString('vi-VN')
    },
  ]

  const handleEdit = (page: PageItem) => {
    setEditingPage(page)
    setFormData({
      title: page.title,
      slug: page.slug,
      content: page.content || '',
      template: page.template,
      status: page.status
    })
    setShowModal(true)
  }

  const handleDelete = async (page: PageItem) => {
    if (confirm(`Bạn có chắc muốn xóa trang "${page.title}"?`)) {
      await del(`/api/admin/pages/${page.id}`)
      fetchPages()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingPage) {
      await put(`/api/admin/pages/${editingPage.id}`, formData)
    } else {
      await post('/api/admin/pages', formData)
    }
    
    setShowModal(false)
    setEditingPage(null)
    resetForm()
    fetchPages()
  }

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      content: '',
      template: 'default',
      status: 'DRAFT'
    })
  }

  const openAddModal = () => {
    setEditingPage(null)
    resetForm()
    setShowModal(true)
  }

  // Auto generate slug from title
  const handleTitleChange = (title: string) => {
    const slug = '/' + title.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D')
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
    setFormData({...formData, title, slug})
  }

  return (
    <>
      <PageHeader 
        title="Quản lý trang (Pages)" 
        breadcrumbs={[{ label: 'Trang' }]}
        actions={
          <button className={styles.addBtn} onClick={openAddModal}>
            <i className="ri-add-line"></i>
            Thêm trang mới
          </button>
        }
      />

      <Card>
        {loading ? (
          <div className={styles.loading}>Đang tải...</div>
        ) : (
          <DataTable
            columns={columns}
            data={pages}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Card>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>{editingPage ? 'Sửa trang' : 'Thêm trang mới'}</h3>
              <button onClick={() => setShowModal(false)}>
                <i className="ri-close-line"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.modalBody}>
                <div className={styles.formGroup}>
                  <label>Tiêu đề trang *</label>
                  <input 
                    type="text" 
                    value={formData.title}
                    onChange={e => handleTitleChange(e.target.value)}
                    placeholder="Nhập tiêu đề" 
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Đường dẫn (Slug) *</label>
                  <input 
                    type="text" 
                    value={formData.slug}
                    onChange={e => setFormData({...formData, slug: e.target.value})}
                    placeholder="/duong-dan" 
                    required
                  />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Template</label>
                    <select 
                      value={formData.template}
                      onChange={e => setFormData({...formData, template: e.target.value})}
                    >
                      <option value="default">Default</option>
                      <option value="contact">Contact</option>
                      <option value="full-width">Full Width</option>
                      <option value="sidebar">Sidebar</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Trạng thái</label>
                    <select 
                      value={formData.status}
                      onChange={e => setFormData({...formData, status: e.target.value})}
                    >
                      <option value="DRAFT">Bản nháp</option>
                      <option value="PUBLISHED">Đã xuất bản</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Nội dung</label>
                  <textarea 
                    value={formData.content}
                    onChange={e => setFormData({...formData, content: e.target.value})}
                    placeholder="Nhập nội dung trang" 
                    rows={10}
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

export default PagesPage
