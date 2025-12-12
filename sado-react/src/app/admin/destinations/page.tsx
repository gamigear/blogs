"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../shared/components/PageHeader'
import Card from '../shared/components/Card'
import DataTable from '../shared/components/DataTable'
import useApi from '../shared/hooks/useApi'
import styles from './destinations.module.scss'

interface Destination {
  id: number
  name: string
  slug: string
  description: string | null
  thumbnail: string | null
  images: string[]
  region: string | null
  country: string
  isFeatured: boolean
  isPopular: boolean
  order: number
  status: 'ACTIVE' | 'INACTIVE'
  createdAt: string
}

const DestinationsPage = () => {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editingItem, setEditingItem] = useState<Destination | null>(null)
  const { loading, get, post, put, del } = useApi()

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    thumbnail: '',
    region: '',
    country: 'Việt Nam',
    isFeatured: false,
    isPopular: false,
    order: 0,
    status: 'ACTIVE' as 'ACTIVE' | 'INACTIVE'
  })

  const fetchDestinations = async () => {
    const data = await get('/api/admin/destinations')
    if (data) setDestinations(data as Destination[])
  }

  useEffect(() => {
    fetchDestinations()
  }, [])

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (editingItem) {
      await put(`/api/admin/destinations/${editingItem.id}`, formData)
    } else {
      await post('/api/admin/destinations', formData)
    }
    setShowModal(false)
    resetForm()
    fetchDestinations()
  }

  const handleEdit = (item: Destination) => {
    setEditingItem(item)
    setFormData({
      name: item.name,
      slug: item.slug,
      description: item.description || '',
      thumbnail: item.thumbnail || '',
      region: item.region || '',
      country: item.country,
      isFeatured: item.isFeatured,
      isPopular: item.isPopular,
      order: item.order,
      status: item.status
    })
    setShowModal(true)
  }

  const handleDelete = async (item: Destination) => {
    if (confirm(`Bạn có chắc muốn xóa điểm đến "${item.name}"?`)) {
      await del(`/api/admin/destinations/${item.id}`)
      fetchDestinations()
    }
  }

  const resetForm = () => {
    setEditingItem(null)
    setFormData({
      name: '',
      slug: '',
      description: '',
      thumbnail: '',
      region: '',
      country: 'Việt Nam',
      isFeatured: false,
      isPopular: false,
      order: 0,
      status: 'ACTIVE'
    })
  }

  const openCreateModal = () => {
    resetForm()
    setShowModal(true)
  }

  const columns = [
    {
      key: 'thumbnail',
      label: 'Ảnh',
      render: (value: string | null, row: Destination) => (
        <div className={styles.thumbnail}>
          {value ? (
            <img src={value} alt={row.name} />
          ) : (
            <i className="ri-image-line"></i>
          )}
        </div>
      )
    },
    { key: 'name', label: 'Tên điểm đến' },
    { key: 'region', label: 'Vùng miền' },
    {
      key: 'isFeatured',
      label: 'Nổi bật',
      render: (value: boolean) => (
        <span className={`${styles.badge} ${value ? styles.featured : ''}`}>
          {value ? 'Có' : 'Không'}
        </span>
      )
    },
    {
      key: 'isPopular',
      label: 'Phổ biến',
      render: (value: boolean) => (
        <span className={`${styles.badge} ${value ? styles.popular : ''}`}>
          {value ? 'Có' : 'Không'}
        </span>
      )
    },
    {
      key: 'status',
      label: 'Trạng thái',
      render: (value: string) => (
        <span className={`${styles.status} ${styles[value.toLowerCase()]}`}>
          {value === 'ACTIVE' ? 'Hoạt động' : 'Ẩn'}
        </span>
      )
    }
  ]

  return (
    <>
      <PageHeader
        title="Quản lý Điểm đến"
        breadcrumbs={[{ label: 'Điểm đến' }]}
        actions={
          <button className={styles.addBtn} onClick={openCreateModal}>
            <i className="ri-add-line"></i>
            Thêm điểm đến
          </button>
        }
      />

      <Card>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>Đang tải...</div>
        ) : (
          <DataTable
            columns={columns}
            data={destinations}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Card>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>{editingItem ? 'Sửa điểm đến' : 'Thêm điểm đến mới'}</h3>
              <button onClick={() => setShowModal(false)}>
                <i className="ri-close-line"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.modalBody}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Tên điểm đến *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => {
                        setFormData({
                          ...formData,
                          name: e.target.value,
                          slug: editingItem ? formData.slug : generateSlug(e.target.value)
                        })
                      }}
                      placeholder="VD: Phú Quốc, Đà Nẵng..."
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Slug *</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={e => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="phu-quoc"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Vùng miền</label>
                    <select
                      value={formData.region}
                      onChange={e => setFormData({ ...formData, region: e.target.value })}
                    >
                      <option value="">-- Chọn vùng miền --</option>
                      <option value="Miền Bắc">Miền Bắc</option>
                      <option value="Miền Trung">Miền Trung</option>
                      <option value="Miền Nam">Miền Nam</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Quốc gia</label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={e => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Việt Nam"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Ảnh đại diện (URL)</label>
                  <input
                    type="text"
                    value={formData.thumbnail}
                    onChange={e => setFormData({ ...formData, thumbnail: e.target.value })}
                    placeholder="https://..."
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Mô tả</label>
                  <textarea
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Mô tả về điểm đến..."
                    rows={4}
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Thứ tự</label>
                    <input
                      type="number"
                      value={formData.order}
                      onChange={e => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Trạng thái</label>
                    <select
                      value={formData.status}
                      onChange={e => setFormData({ ...formData, status: e.target.value as 'ACTIVE' | 'INACTIVE' })}
                    >
                      <option value="ACTIVE">Hoạt động</option>
                      <option value="INACTIVE">Ẩn</option>
                    </select>
                  </div>
                </div>

                <div className={styles.checkboxRow}>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      checked={formData.isFeatured}
                      onChange={e => setFormData({ ...formData, isFeatured: e.target.checked })}
                    />
                    <span>Điểm đến nổi bật</span>
                  </label>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      checked={formData.isPopular}
                      onChange={e => setFormData({ ...formData, isPopular: e.target.checked })}
                    />
                    <span>Điểm đến phổ biến</span>
                  </label>
                </div>
              </div>
              <div className={styles.modalFooter}>
                <button type="button" className={styles.cancelBtn} onClick={() => setShowModal(false)}>
                  Hủy
                </button>
                <button type="submit" className={styles.saveBtn}>
                  {editingItem ? 'Cập nhật' : 'Thêm mới'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default DestinationsPage
