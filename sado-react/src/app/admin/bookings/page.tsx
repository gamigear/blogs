"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../shared/components/PageHeader'
import Card from '../shared/components/Card'
import DataTable from '../shared/components/DataTable'
import useApi from '../shared/hooks/useApi'
import styles from './bookings.module.scss'

interface Booking {
  id: number
  bookingCode: string
  customerName: string
  customerPhone: string
  customerEmail: string | null
  destination: string
  travelDate: string
  guests: number
  totalAmount: string
  status: string
  paymentStatus: string
  notes: string | null
  createdAt: string
}

const BookingsPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [stats, setStats] = useState({ total: 0, confirmed: 0, pending: 0, cancelled: 0 })
  const { loading, get, post, put, del } = useApi<Booking[]>()

  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    destination: '',
    travelDate: '',
    guests: 1,
    totalAmount: '',
    status: 'PENDING',
    paymentStatus: 'UNPAID',
    notes: ''
  })

  const fetchBookings = async () => {
    const data = await get('/api/admin/bookings')
    if (data) {
      setBookings(data)
      // Calculate stats
      setStats({
        total: data.length,
        confirmed: data.filter((b: Booking) => b.status === 'CONFIRMED').length,
        pending: data.filter((b: Booking) => b.status === 'PENDING').length,
        cancelled: data.filter((b: Booking) => b.status === 'CANCELLED').length,
      })
    }
  }

  useEffect(() => {
    fetchBookings()
  }, [])

  const columns = [
    { 
      key: 'bookingCode', 
      label: 'Mã đơn',
      render: (value: string) => <strong>{value}</strong>
    },
    { key: 'customerName', label: 'Khách hàng' },
    { key: 'customerPhone', label: 'SĐT' },
    { key: 'destination', label: 'Điểm đến' },
    { 
      key: 'travelDate', 
      label: 'Ngày đi',
      render: (v: string) => new Date(v).toLocaleDateString('vi-VN')
    },
    { key: 'guests', label: 'Số khách' },
    { 
      key: 'totalAmount', 
      label: 'Tổng tiền',
      render: (value: string) => <span className={styles.amount}>{Number(value).toLocaleString('vi-VN')}đ</span>
    },
    { 
      key: 'status', 
      label: 'Trạng thái',
      render: (value: string) => {
        const statusMap: Record<string, string> = {
          'CONFIRMED': 'Đã xác nhận',
          'PENDING': 'Chờ xử lý',
          'CANCELLED': 'Đã hủy'
        }
        return (
          <span className={`${styles.status} ${styles[value.toLowerCase()]}`}>
            {statusMap[value] || value}
          </span>
        )
      }
    },
    { 
      key: 'paymentStatus', 
      label: 'Thanh toán',
      render: (value: string) => {
        const paymentMap: Record<string, string> = {
          'PAID': 'Đã thanh toán',
          'UNPAID': 'Chờ thanh toán',
          'REFUNDED': 'Đã hoàn tiền'
        }
        return (
          <span className={`${styles.payment} ${styles[value.toLowerCase()]}`}>
            {paymentMap[value] || value}
          </span>
        )
      }
    },
  ]

  const handleEdit = (booking: Booking) => {
    setSelectedBooking(booking)
    setFormData({
      customerName: booking.customerName,
      customerPhone: booking.customerPhone,
      customerEmail: booking.customerEmail || '',
      destination: booking.destination,
      travelDate: booking.travelDate.split('T')[0],
      guests: booking.guests,
      totalAmount: booking.totalAmount,
      status: booking.status,
      paymentStatus: booking.paymentStatus,
      notes: booking.notes || ''
    })
    setShowModal(true)
  }

  const handleDelete = async (booking: Booking) => {
    if (confirm(`Bạn có chắc muốn xóa đơn đặt vé "${booking.bookingCode}"?`)) {
      await del(`/api/admin/bookings/${booking.id}`)
      fetchBookings()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (selectedBooking) {
      await put(`/api/admin/bookings/${selectedBooking.id}`, formData)
    } else {
      await post('/api/admin/bookings', formData)
    }
    
    setShowModal(false)
    setSelectedBooking(null)
    resetForm()
    fetchBookings()
  }

  const resetForm = () => {
    setFormData({
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      destination: '',
      travelDate: '',
      guests: 1,
      totalAmount: '',
      status: 'PENDING',
      paymentStatus: 'UNPAID',
      notes: ''
    })
  }

  const openAddModal = () => {
    setSelectedBooking(null)
    resetForm()
    setShowModal(true)
  }

  return (
    <>
      <PageHeader 
        title="Quản lý Booking / Đặt vé" 
        breadcrumbs={[{ label: 'Booking' }]}
        actions={
          <div className={styles.headerActions}>
            <button className={styles.addBtn} onClick={openAddModal}>
              <i className="ri-add-line"></i>
              Thêm đơn mới
            </button>
          </div>
        }
      />

      <div className={styles.statsRow}>
        <div className={`${styles.statCard} ${styles.total}`}>
          <i className="ri-ticket-line"></i>
          <div>
            <span>Tổng đơn</span>
            <strong>{stats.total}</strong>
          </div>
        </div>
        <div className={`${styles.statCard} ${styles.confirmed}`}>
          <i className="ri-check-double-line"></i>
          <div>
            <span>Đã xác nhận</span>
            <strong>{stats.confirmed}</strong>
          </div>
        </div>
        <div className={`${styles.statCard} ${styles.pending}`}>
          <i className="ri-time-line"></i>
          <div>
            <span>Chờ xử lý</span>
            <strong>{stats.pending}</strong>
          </div>
        </div>
        <div className={`${styles.statCard} ${styles.cancelled}`}>
          <i className="ri-close-circle-line"></i>
          <div>
            <span>Đã hủy</span>
            <strong>{stats.cancelled}</strong>
          </div>
        </div>
      </div>

      <Card>
        {loading ? (
          <div className={styles.loading}>Đang tải...</div>
        ) : (
          <DataTable
            columns={columns}
            data={bookings}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Card>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>{selectedBooking ? `Chi tiết đơn ${selectedBooking.bookingCode}` : 'Tạo đơn đặt vé mới'}</h3>
              <button onClick={() => setShowModal(false)}>
                <i className="ri-close-line"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.modalBody}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Họ tên khách hàng *</label>
                    <input 
                      type="text" 
                      value={formData.customerName}
                      onChange={e => setFormData({...formData, customerName: e.target.value})}
                      placeholder="Nhập họ tên" 
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Số điện thoại *</label>
                    <input 
                      type="tel" 
                      value={formData.customerPhone}
                      onChange={e => setFormData({...formData, customerPhone: e.target.value})}
                      placeholder="Nhập SĐT" 
                      required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input 
                    type="email" 
                    value={formData.customerEmail}
                    onChange={e => setFormData({...formData, customerEmail: e.target.value})}
                    placeholder="Nhập email" 
                  />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Điểm đến *</label>
                    <select 
                      value={formData.destination}
                      onChange={e => setFormData({...formData, destination: e.target.value})}
                      required
                    >
                      <option value="">Chọn điểm đến</option>
                      <option value="Phú Quốc">Phú Quốc</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                      <option value="Nha Trang">Nha Trang</option>
                      <option value="Hạ Long">Hạ Long</option>
                      <option value="Sapa">Sapa</option>
                      <option value="Đà Lạt">Đà Lạt</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Ngày đi *</label>
                    <input 
                      type="date" 
                      value={formData.travelDate}
                      onChange={e => setFormData({...formData, travelDate: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Số khách *</label>
                    <input 
                      type="number" 
                      value={formData.guests}
                      onChange={e => setFormData({...formData, guests: parseInt(e.target.value)})}
                      placeholder="Nhập số khách" 
                      min="1"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Tổng tiền *</label>
                    <input 
                      type="number" 
                      value={formData.totalAmount}
                      onChange={e => setFormData({...formData, totalAmount: e.target.value})}
                      placeholder="Nhập tổng tiền" 
                      required
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Trạng thái đơn</label>
                    <select 
                      value={formData.status}
                      onChange={e => setFormData({...formData, status: e.target.value})}
                    >
                      <option value="PENDING">Chờ xử lý</option>
                      <option value="CONFIRMED">Đã xác nhận</option>
                      <option value="CANCELLED">Đã hủy</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Trạng thái thanh toán</label>
                    <select 
                      value={formData.paymentStatus}
                      onChange={e => setFormData({...formData, paymentStatus: e.target.value})}
                    >
                      <option value="UNPAID">Chờ thanh toán</option>
                      <option value="PAID">Đã thanh toán</option>
                      <option value="REFUNDED">Đã hoàn tiền</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Ghi chú</label>
                  <textarea 
                    value={formData.notes}
                    onChange={e => setFormData({...formData, notes: e.target.value})}
                    placeholder="Nhập ghi chú" 
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

export default BookingsPage
