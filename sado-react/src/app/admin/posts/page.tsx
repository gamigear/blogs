"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../shared/components/PageHeader'
import Card from '../shared/components/Card'
import DataTable from '../shared/components/DataTable'
import useApi from '../shared/hooks/useApi'
import styles from './posts.module.scss'

interface Post {
  id: number
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  category: string | null
  status: string
  views: number
  author: { name: string } | null
  createdAt: string
}

const PostsPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const { loading, get, post, put, del } = useApi<Post[]>()

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    status: 'DRAFT'
  })

  const fetchPosts = async () => {
    const data = await get('/api/admin/posts')
    if (data) setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const columns = [
    { key: 'id', label: 'ID' },
    { 
      key: 'title', 
      label: 'Tiêu đề',
      render: (value: string) => <strong>{value}</strong>
    },
    { 
      key: 'category', 
      label: 'Danh mục',
      render: (value: string) => value ? <span className={styles.category}>{value}</span> : '-'
    },
    { 
      key: 'author', 
      label: 'Tác giả',
      render: (value: { name: string } | null) => value?.name || 'Admin'
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
      key: 'views', 
      label: 'Lượt xem',
      render: (value: number) => value.toLocaleString()
    },
    { 
      key: 'createdAt', 
      label: 'Ngày tạo',
      render: (v: string) => new Date(v).toLocaleDateString('vi-VN')
    },
  ]

  const handleEdit = (postItem: Post) => {
    setEditingPost(postItem)
    setFormData({
      title: postItem.title,
      excerpt: postItem.excerpt || '',
      content: postItem.content || '',
      category: postItem.category || '',
      status: postItem.status
    })
    setShowModal(true)
  }

  const handleDelete = async (postItem: Post) => {
    if (confirm(`Bạn có chắc muốn xóa bài viết "${postItem.title}"?`)) {
      await del(`/api/admin/posts/${postItem.id}`)
      fetchPosts()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingPost) {
      await put(`/api/admin/posts/${editingPost.id}`, formData)
    } else {
      await post('/api/admin/posts', formData)
    }
    
    setShowModal(false)
    setEditingPost(null)
    resetForm()
    fetchPosts()
  }

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      status: 'DRAFT'
    })
  }

  const openAddModal = () => {
    setEditingPost(null)
    resetForm()
    setShowModal(true)
  }

  return (
    <>
      <PageHeader 
        title="Quản lý bài viết" 
        breadcrumbs={[{ label: 'Bài viết' }]}
        actions={
          <button className={styles.addBtn} onClick={openAddModal}>
            <i className="ri-add-line"></i>
            Thêm bài viết
          </button>
        }
      />

      <Card>
        {loading ? (
          <div className={styles.loading}>Đang tải...</div>
        ) : (
          <DataTable
            columns={columns}
            data={posts}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Card>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>{editingPost ? 'Sửa bài viết' : 'Thêm bài viết mới'}</h3>
              <button onClick={() => setShowModal(false)}>
                <i className="ri-close-line"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.modalBody}>
                <div className={styles.formGroup}>
                  <label>Tiêu đề *</label>
                  <input 
                    type="text" 
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    placeholder="Nhập tiêu đề bài viết" 
                    required
                  />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Danh mục</label>
                    <select 
                      value={formData.category}
                      onChange={e => setFormData({...formData, category: e.target.value})}
                    >
                      <option value="">Chọn danh mục</option>
                      <option value="Du lịch">Du lịch</option>
                      <option value="Kinh nghiệm">Kinh nghiệm</option>
                      <option value="Tin tức">Tin tức</option>
                      <option value="Hướng dẫn">Hướng dẫn</option>
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
                  <label>Mô tả ngắn</label>
                  <textarea 
                    value={formData.excerpt}
                    onChange={e => setFormData({...formData, excerpt: e.target.value})}
                    placeholder="Nhập mô tả ngắn" 
                    rows={3}
                  ></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Nội dung</label>
                  <textarea 
                    value={formData.content}
                    onChange={e => setFormData({...formData, content: e.target.value})}
                    placeholder="Nhập nội dung bài viết" 
                    rows={8}
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

export default PostsPage
