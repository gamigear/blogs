"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../shared/components/PageHeader'
import Card from '../shared/components/Card'
import DataTable from '../shared/components/DataTable'
import useApi from '../shared/hooks/useApi'
import styles from './products.module.scss'

interface Product {
  id: number
  name: string
  slug: string
  description: string | null
  price: string
  salePrice: string | null
  category: string | null
  stock: number
  status: string
  duration: string | null
  location: string | null
  createdAt: string
}

const ProductsPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const { loading, get, post, put, del } = useApi<Product[]>()

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    salePrice: '',
    category: '',
    stock: 0,
    status: 'ACTIVE',
    duration: '',
    location: ''
  })

  const fetchProducts = async () => {
    const data = await get('/api/admin/products')
    if (data) setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const columns = [
    { key: 'id', label: 'ID' },
    { 
      key: 'name', 
      label: 'Tên sản phẩm',
      render: (value: string) => <strong>{value}</strong>
    },
    { 
      key: 'category', 
      label: 'Danh mục',
      render: (value: string) => value ? <span className={styles.category}>{value}</span> : '-'
    },
    { 
      key: 'price', 
      label: 'Giá',
      render: (value: string) => <span className={styles.price}>{Number(value).toLocaleString('vi-VN')}đ</span>
    },
    { key: 'stock', label: 'Tồn kho' },
    { key: 'duration', label: 'Thời gian', render: (v: string) => v || '-' },
    { 
      key: 'status', 
      label: 'Trạng thái',
      render: (value: string) => {
        const statusMap: Record<string, string> = {
          'ACTIVE': 'Còn hàng',
          'INACTIVE': 'Tạm ẩn',
          'OUT_OF_STOCK': 'Hết hàng'
        }
        return (
          <span className={`${styles.status} ${value === 'ACTIVE' ? styles.inStock : styles.outStock}`}>
            {statusMap[value] || value}
          </span>
        )
      }
    },
  ]

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      description: product.description || '',
      price: product.price,
      salePrice: product.salePrice || '',
      category: product.category || '',
      stock: product.stock,
      status: product.status,
      duration: product.duration || '',
      location: product.location || ''
    })
    setShowModal(true)
  }

  const handleDelete = async (product: Product) => {
    if (confirm(`Bạn có chắc muốn xóa sản phẩm "${product.name}"?`)) {
      await del(`/api/admin/products/${product.id}`)
      fetchProducts()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingProduct) {
      await put(`/api/admin/products/${editingProduct.id}`, formData)
    } else {
      await post('/api/admin/products', formData)
    }
    
    setShowModal(false)
    setEditingProduct(null)
    resetForm()
    fetchProducts()
  }

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      salePrice: '',
      category: '',
      stock: 0,
      status: 'ACTIVE',
      duration: '',
      location: ''
    })
  }

  const openAddModal = () => {
    setEditingProduct(null)
    resetForm()
    setShowModal(true)
  }

  return (
    <>
      <PageHeader 
        title="Quản lý sản phẩm" 
        breadcrumbs={[{ label: 'Sản phẩm' }]}
        actions={
          <button className={styles.addBtn} onClick={openAddModal}>
            <i className="ri-add-line"></i>
            Thêm sản phẩm
          </button>
        }
      />

      <Card>
        {loading ? (
          <div className={styles.loading}>Đang tải...</div>
        ) : (
          <DataTable
            columns={columns}
            data={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Card>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>{editingProduct ? 'Sửa sản phẩm' : 'Thêm sản phẩm mới'}</h3>
              <button onClick={() => setShowModal(false)}>
                <i className="ri-close-line"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.modalBody}>
                <div className={styles.formGroup}>
                  <label>Tên sản phẩm *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Nhập tên sản phẩm" 
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
                      <option value="Tour biển">Tour biển</option>
                      <option value="Tour văn hóa">Tour văn hóa</option>
                      <option value="Tour núi">Tour núi</option>
                      <option value="Tour city">Tour city</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Địa điểm</label>
                    <input 
                      type="text" 
                      value={formData.location}
                      onChange={e => setFormData({...formData, location: e.target.value})}
                      placeholder="VD: Phú Quốc" 
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Giá *</label>
                    <input 
                      type="number" 
                      value={formData.price}
                      onChange={e => setFormData({...formData, price: e.target.value})}
                      placeholder="Nhập giá" 
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Giá khuyến mãi</label>
                    <input 
                      type="number" 
                      value={formData.salePrice}
                      onChange={e => setFormData({...formData, salePrice: e.target.value})}
                      placeholder="Nhập giá KM" 
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Số lượng</label>
                    <input 
                      type="number" 
                      value={formData.stock}
                      onChange={e => setFormData({...formData, stock: parseInt(e.target.value)})}
                      placeholder="Nhập số lượng" 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Thời gian tour</label>
                    <input 
                      type="text" 
                      value={formData.duration}
                      onChange={e => setFormData({...formData, duration: e.target.value})}
                      placeholder="VD: 3N2Đ" 
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Trạng thái</label>
                  <select 
                    value={formData.status}
                    onChange={e => setFormData({...formData, status: e.target.value})}
                  >
                    <option value="ACTIVE">Còn hàng</option>
                    <option value="INACTIVE">Tạm ẩn</option>
                    <option value="OUT_OF_STOCK">Hết hàng</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Mô tả</label>
                  <textarea 
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    placeholder="Nhập mô tả sản phẩm" 
                    rows={5}
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

export default ProductsPage
