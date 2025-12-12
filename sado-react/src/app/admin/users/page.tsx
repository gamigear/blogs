"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../shared/components/PageHeader'
import Card from '../shared/components/Card'
import DataTable from '../shared/components/DataTable'
import useApi from '../shared/hooks/useApi'
import styles from './users.module.scss'

interface User {
  id: number
  name: string | null
  email: string
  phone: string | null
  role: string
  status: string
  createdAt: string
}

const UsersPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const { loading, get, post, put, del } = useApi<User[]>()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'USER',
    status: 'ACTIVE',
    password: ''
  })

  const fetchUsers = async () => {
    const data = await get('/api/admin/users')
    if (data) setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Họ tên', render: (v: string) => v || '-' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'SĐT', render: (v: string) => v || '-' },
    { 
      key: 'role', 
      label: 'Vai trò',
      render: (value: string) => (
        <span className={`${styles.badge} ${styles[value.toLowerCase()]}`}>{value}</span>
      )
    },
    { 
      key: 'status', 
      label: 'Trạng thái',
      render: (value: string) => (
        <span className={`${styles.status} ${value === 'ACTIVE' ? styles.active : styles.inactive}`}>
          {value === 'ACTIVE' ? 'Hoạt động' : 'Khóa'}
        </span>
      )
    },
    { 
      key: 'createdAt', 
      label: 'Ngày tạo',
      render: (v: string) => new Date(v).toLocaleDateString('vi-VN')
    },
  ]

  const handleEdit = (user: User) => {
    setEditingUser(user)
    setFormData({
      name: user.name || '',
      email: user.email,
      phone: user.phone || '',
      role: user.role,
      status: user.status,
      password: ''
    })
    setShowModal(true)
  }

  const handleDelete = async (user: User) => {
    if (confirm(`Bạn có chắc muốn xóa người dùng "${user.name || user.email}"?`)) {
      await del(`/api/admin/users/${user.id}`)
      fetchUsers()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingUser) {
      await put(`/api/admin/users/${editingUser.id}`, formData)
    } else {
      await post('/api/admin/users', formData)
    }
    
    setShowModal(false)
    setEditingUser(null)
    setFormData({ name: '', email: '', phone: '', role: 'USER', status: 'ACTIVE', password: '' })
    fetchUsers()
  }

  const openAddModal = () => {
    setEditingUser(null)
    setFormData({ name: '', email: '', phone: '', role: 'USER', status: 'ACTIVE', password: '' })
    setShowModal(true)
  }

  return (
    <>
      <PageHeader 
        title="Quản lý người dùng" 
        breadcrumbs={[{ label: 'Người dùng' }]}
        actions={
          <button className={styles.addBtn} onClick={openAddModal}>
            <i className="ri-add-line"></i>
            Thêm người dùng
          </button>
        }
      />

      <Card>
        {loading ? (
          <div className={styles.loading}>Đang tải...</div>
        ) : (
          <DataTable
            columns={columns}
            data={users}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Card>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>{editingUser ? 'Sửa người dùng' : 'Thêm người dùng mới'}</h3>
              <button onClick={() => setShowModal(false)}>
                <i className="ri-close-line"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.modalBody}>
                <div className={styles.formGroup}>
                  <label>Họ tên</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Nhập họ tên" 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email *</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="Nhập email" 
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Số điện thoại</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="Nhập số điện thoại" 
                  />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Vai trò</label>
                    <select 
                      value={formData.role}
                      onChange={e => setFormData({...formData, role: e.target.value})}
                    >
                      <option value="ADMIN">Admin</option>
                      <option value="EDITOR">Editor</option>
                      <option value="USER">User</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Trạng thái</label>
                    <select 
                      value={formData.status}
                      onChange={e => setFormData({...formData, status: e.target.value})}
                    >
                      <option value="ACTIVE">Hoạt động</option>
                      <option value="INACTIVE">Khóa</option>
                    </select>
                  </div>
                </div>
                {!editingUser && (
                  <div className={styles.formGroup}>
                    <label>Mật khẩu *</label>
                    <input 
                      type="password" 
                      value={formData.password}
                      onChange={e => setFormData({...formData, password: e.target.value})}
                      placeholder="Nhập mật khẩu" 
                      required={!editingUser}
                    />
                  </div>
                )}
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

export default UsersPage
