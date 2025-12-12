'use client'

import { useState, useEffect } from 'react'

interface VerificationRequest {
  id: number
  user_id: number
  user_name: string
  user_email: string
  type: string
  document_url?: string
  status: string
  admin_notes?: string
  created_at: string
  reviewed_at?: string
}

const statusColors: Record<string, string> = {
  Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
  Approved: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
  Rejected: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
}

const typeLabels: Record<string, string> = {
  email: 'Email',
  phone: 'Số điện thoại',
  identity: 'Danh tính',
}

export default function VerificationsPage() {
  const [requests, setRequests] = useState<VerificationRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [reviewingRequest, setReviewingRequest] = useState<VerificationRequest | null>(null)
  const [notes, setNotes] = useState('')
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    fetchRequests()
  }, [filter])

  const fetchRequests = async () => {
    try {
      const url = filter === 'all' ? '/api/admin/verifications' : `/api/admin/verifications?status=${filter}`
      const res = await fetch(url)
      const data = await res.json()
      setRequests(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching requests:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleReview = async (approved: boolean) => {
    if (!reviewingRequest) return
    setProcessing(true)

    try {
      const res = await fetch('/api/admin/verifications', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requestId: reviewingRequest.id,
          approved,
          notes,
        }),
      })

      if (res.ok) {
        fetchRequests()
        setReviewingRequest(null)
        setNotes('')
      }
    } catch (error) {
      console.error('Error reviewing request:', error)
    } finally {
      setProcessing(false)
    }
  }


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Yêu cầu xác minh</h1>
          <p className="text-gray-500 dark:text-gray-400">Xem xét và phê duyệt yêu cầu xác minh từ người dùng</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {['all', 'Pending', 'Approved', 'Rejected'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === status
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600'
            }`}
          >
            {status === 'all' ? 'Tất cả' : status === 'Pending' ? 'Đang chờ' : status === 'Approved' ? 'Đã duyệt' : 'Từ chối'}
          </button>
        ))}
      </div>

      {/* Table */}
      {loading ? (
        <div className="bg-white dark:bg-neutral-800 rounded-xl border p-8 text-center text-gray-500">Đang tải...</div>
      ) : requests.length === 0 ? (
        <div className="bg-white dark:bg-neutral-800 rounded-xl border p-8 text-center text-gray-500">Không có yêu cầu nào</div>
      ) : (
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-700/50">
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Người dùng</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Loại</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Ngày gửi</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {requests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50 dark:hover:bg-neutral-700/50">
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{request.user_name}</p>
                        <p className="text-xs text-gray-500">{request.user_email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm">{typeLabels[request.type] || request.type}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[request.status]}`}>
                        {request.status === 'Pending' ? 'Đang chờ' : request.status === 'Approved' ? 'Đã duyệt' : 'Từ chối'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      {new Date(request.created_at).toLocaleDateString('vi-VN')}
                    </td>
                    <td className="py-4 px-4">
                      {request.status === 'Pending' ? (
                        <button
                          onClick={() => setReviewingRequest(request)}
                          className="px-3 py-1 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                        >
                          Xem xét
                        </button>
                      ) : (
                        <span className="text-sm text-gray-500">{request.admin_notes || '-'}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {reviewingRequest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Xem xét yêu cầu xác minh</h2>
            
            <div className="space-y-3 mb-4">
              <p><span className="text-gray-500">Người dùng:</span> {reviewingRequest.user_name}</p>
              <p><span className="text-gray-500">Email:</span> {reviewingRequest.user_email}</p>
              <p><span className="text-gray-500">Loại:</span> {typeLabels[reviewingRequest.type]}</p>
              {reviewingRequest.document_url && (
                <p><span className="text-gray-500">Tài liệu:</span> <a href={reviewingRequest.document_url} target="_blank" className="text-primary-600 underline">Xem</a></p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Ghi chú (tùy chọn)</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Nhập ghi chú..."
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => { setReviewingRequest(null); setNotes('') }}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700"
              >
                Hủy
              </button>
              <button
                onClick={() => handleReview(false)}
                disabled={processing}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
              >
                Từ chối
              </button>
              <button
                onClick={() => handleReview(true)}
                disabled={processing}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                Phê duyệt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
