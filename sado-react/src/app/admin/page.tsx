"use client"

import React, { useEffect, useState } from 'react'
import PageHeader from './shared/components/PageHeader'
import Card from './shared/components/Card'
import useApi from './shared/hooks/useApi'
import styles from './dashboard.module.scss'

interface DashboardData {
  stats: {
    totalUsers: number
    totalBookings: number
    totalPosts: number
    totalProducts: number
    revenue: string
  }
  recentBookings: Array<{
    id: number
    bookingCode: string
    customerName: string
    destination: string
    travelDate: string
    totalAmount: string
    status: string
    paymentStatus: string
  }>
  bookingStats: Record<string, number>
}

const DashboardPage = () => {
  const [data, setData] = useState<DashboardData | null>(null)
  const { loading, get } = useApi<DashboardData>()

  useEffect(() => {
    const fetchData = async () => {
      const result = await get('/api/admin/dashboard')
      if (result) setData(result)
    }
    fetchData()
  }, [])

  const statsData = data ? [
    { title: 'Tổng người dùng', value: data.stats.totalUsers.toLocaleString(), icon: 'ri-user-line', color: 'primary', change: '+12%' },
    { title: 'Đơn đặt vé', value: data.stats.totalBookings.toLocaleString(), icon: 'ri-ticket-line', color: 'success', change: '+8%' },
    { title: 'Bài viết', value: data.stats.totalPosts.toLocaleString(), icon: 'ri-article-line', color: 'info', change: '+5%' },
    { title: 'Doanh thu', value: `₫${Number(data.stats.revenue || 0).toLocaleString('vi-VN')}`, icon: 'ri-money-dollar-circle-line', color: 'warning', change: '+15%' },
  ] : [
    { title: 'Tổng người dùng', value: '0', icon: 'ri-user-line', color: 'primary', change: '+0%' },
    { title: 'Đơn đặt vé', value: '0', icon: 'ri-ticket-line', color: 'success', change: '+0%' },
    { title: 'Bài viết', value: '0', icon: 'ri-article-line', color: 'info', change: '+0%' },
    { title: 'Doanh thu', value: '₫0', icon: 'ri-money-dollar-circle-line', color: 'warning', change: '+0%' },
  ]

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string, class: string }> = {
      'CONFIRMED': { label: 'Đã xác nhận', class: styles.success },
      'PENDING': { label: 'Chờ xử lý', class: styles.warning },
      'CANCELLED': { label: 'Đã hủy', class: styles.danger }
    }
    const s = statusMap[status] || { label: status, class: '' }
    return <span className={`${styles.badge} ${s.class}`}>{s.label}</span>
  }

  return (
    <>
      <PageHeader title="Dashboard" />

      <div className={styles.statsGrid}>
        {statsData.map((stat, idx) => (
          <div key={idx} className={`${styles.statCard} ${styles[stat.color]}`}>
            <div className={styles.statIcon}>
              <i className={stat.icon}></i>
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statTitle}>{stat.title}</span>
              <h3 className={styles.statValue}>{loading ? '...' : stat.value}</h3>
              <span className={styles.statChange}>{stat.change} so với tháng trước</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.row}>
        <div className={styles.col8}>
          <Card title="Đơn đặt vé gần đây">
            {loading ? (
              <div className={styles.loading}>Đang tải...</div>
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Mã đơn</th>
                    <th>Khách hàng</th>
                    <th>Điểm đến</th>
                    <th>Ngày</th>
                    <th>Trạng thái</th>
                    <th>Số tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.recentBookings && data.recentBookings.length > 0 ? (
                    data.recentBookings.map((booking) => (
                      <tr key={booking.id}>
                        <td><strong>{booking.bookingCode}</strong></td>
                        <td>{booking.customerName}</td>
                        <td>{booking.destination}</td>
                        <td>{new Date(booking.travelDate).toLocaleDateString('vi-VN')}</td>
                        <td>{getStatusBadge(booking.status)}</td>
                        <td>{Number(booking.totalAmount).toLocaleString('vi-VN')}đ</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} style={{ textAlign: 'center', padding: '40px' }}>
                        Chưa có đơn đặt vé nào
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </Card>
        </div>

        <div className={styles.col4}>
          <Card title="Thống kê đơn hàng">
            <div className={styles.activityList}>
              <div className={styles.activityItem}>
                <div className={`${styles.activityIcon} ${styles.success}`}>
                  <i className="ri-check-line"></i>
                </div>
                <div className={styles.activityContent}>
                  <p>Đã xác nhận</p>
                  <small>{data?.bookingStats?.CONFIRMED || 0} đơn</small>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.activityIcon} ${styles.warning}`}>
                  <i className="ri-time-line"></i>
                </div>
                <div className={styles.activityContent}>
                  <p>Chờ xử lý</p>
                  <small>{data?.bookingStats?.PENDING || 0} đơn</small>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.activityIcon} ${styles.danger}`}>
                  <i className="ri-close-line"></i>
                </div>
                <div className={styles.activityContent}>
                  <p>Đã hủy</p>
                  <small>{data?.bookingStats?.CANCELLED || 0} đơn</small>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.activityIcon} ${styles.primary}`}>
                  <i className="ri-shopping-bag-line"></i>
                </div>
                <div className={styles.activityContent}>
                  <p>Sản phẩm</p>
                  <small>{data?.stats?.totalProducts || 0} tour</small>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
