'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ButtonPrimary from '@/shared/ButtonPrimary'
import ButtonSecondary from '@/shared/ButtonSecondary'
import { Divider } from '@/shared/divider'

interface User {
  email_verified: boolean
  phone_verified: boolean
  identity_verified: boolean
}

interface VerificationRequest {
  id: number
  type: string
  status: string
  created_at: string
  admin_notes?: string
}

export default function AccountVerificationPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [requests, setRequests] = useState<VerificationRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [userRes, requestsRes] = await Promise.all([
        fetch('/api/auth/me'),
        fetch('/api/auth/verification'),
      ])

      const userData = await userRes.json()
      if (userData.user) {
        setUser(userData.user)
      } else {
        router.push('/login')
        return
      }

      const requestsData = await requestsRes.json()
      if (Array.isArray(requestsData)) {
        setRequests(requestsData)
      }
    } catch {
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }

  const submitVerification = async (type: string) => {
    setSubmitting(true)
    setMessage({ type: '', text: '' })

    try {
      const res = await fetch('/api/auth/verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type }),
      })

      const data = await res.json()

      if (data.success) {
        setMessage({ type: 'success', text: 'Yêu cầu xác minh đã được gửi!' })
        fetchData()
      } else {
        setMessage({ type: 'error', text: data.error || 'Gửi yêu cầu thất bại' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Gửi yêu cầu thất bại' })
    } finally {
      setSubmitting(false)
    }
  }

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      Pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      Approved: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      Rejected: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    }
    return styles[status] || styles.Pending
  }

  const hasPendingRequest = (type: string) => {
    return requests.some(r => r.type === type && r.status === 'Pending')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-gray-500">Đang tải...</div>
      </div>
    )
  }

  if (!user) return null


  return (
    <div>
      <h1 className="text-3xl font-semibold">Xác minh tài khoản</h1>
      <Divider className="my-8 w-14!" />

      {message.text && (
        <div className={`mb-6 p-3 rounded-lg text-sm ${
          message.type === 'success' 
            ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
            : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
        }`}>
          {message.text}
        </div>
      )}

      <div className="space-y-6">
        {/* Email Verification */}
        <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-lg">Xác minh Email</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Xác minh địa chỉ email của bạn để nhận thông báo quan trọng
              </p>
            </div>
            {user.email_verified ? (
              <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-sm">
                ✓ Đã xác minh
              </span>
            ) : (
              <ButtonSecondary
                onClick={() => submitVerification('email')}
                disabled={submitting || hasPendingRequest('email')}
              >
                {hasPendingRequest('email') ? 'Đang chờ xử lý' : 'Xác minh ngay'}
              </ButtonSecondary>
            )}
          </div>
        </div>

        {/* Phone Verification */}
        <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-lg">Xác minh Số điện thoại</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Xác minh số điện thoại để tăng độ tin cậy cho tài khoản
              </p>
            </div>
            {user.phone_verified ? (
              <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-sm">
                ✓ Đã xác minh
              </span>
            ) : (
              <ButtonSecondary
                onClick={() => submitVerification('phone')}
                disabled={submitting || hasPendingRequest('phone')}
              >
                {hasPendingRequest('phone') ? 'Đang chờ xử lý' : 'Xác minh ngay'}
              </ButtonSecondary>
            )}
          </div>
        </div>

        {/* Identity Verification */}
        <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-lg">Xác minh Danh tính</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Xác minh danh tính bằng CMND/CCCD để mở khóa đầy đủ tính năng
              </p>
            </div>
            {user.identity_verified ? (
              <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-sm">
                ✓ Đã xác minh
              </span>
            ) : (
              <ButtonPrimary
                onClick={() => submitVerification('identity')}
                disabled={submitting || hasPendingRequest('identity')}
              >
                {hasPendingRequest('identity') ? 'Đang chờ xử lý' : 'Xác minh ngay'}
              </ButtonPrimary>
            )}
          </div>
        </div>
      </div>

      {/* Verification History */}
      {requests.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Lịch sử yêu cầu xác minh</h2>
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-700/50">
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Loại</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Ngày gửi</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td className="py-3 px-4 text-sm capitalize">{request.type}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadge(request.status)}`}>
                        {request.status === 'Pending' ? 'Đang chờ' : request.status === 'Approved' ? 'Đã duyệt' : 'Từ chối'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500">
                      {new Date(request.created_at).toLocaleDateString('vi-VN')}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500">{request.admin_notes || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
