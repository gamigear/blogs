'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface KYCRequest {
  id: number;
  user_id: number;
  username: string;
  email: string;
  display_name: string;
  avatar: string | null;
  full_name: string;
  date_of_birth: string;
  id_type: string;
  id_number: string;
  status: string;
  created_at: string;
}

export default function AdminKYCPage() {
  const [requests, setRequests] = useState<KYCRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('pending');
  const [pagination, setPagination] = useState({ page: 1, pageSize: 20, total: 0 });

  useEffect(() => {
    fetchRequests();
  }, [status]);

  const fetchRequests = async (page = 1) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/kyc?status=${status}&page=${page}`);
      const data = await res.json();
      setRequests(data.requests || []);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching KYC requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const idTypeLabels: Record<string, string> = {
    cmnd: 'CMND',
    cccd: 'CCCD',
    passport: 'Hộ chiếu',
  };

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-700',
    approved: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700',
  };

  const statusLabels: Record<string, string> = {
    pending: 'Chờ duyệt',
    approved: 'Đã duyệt',
    rejected: 'Từ chối',
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Xác minh KYC</h1>
        <div className="flex gap-2">
          {['pending', 'approved', 'rejected'].map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                status === s ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {statusLabels[s]}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Đang tải...</div>
      ) : requests.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg">
          <p className="text-gray-500">Không có yêu cầu nào</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Người dùng</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Họ tên</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Loại giấy tờ</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Số giấy tờ</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Ngày gửi</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Trạng thái</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {requests.map((req) => (
                <tr key={req.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {req.avatar ? (
                        <img src={req.avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                          {req.display_name?.charAt(0)}
                        </div>
                      )}
                      <div>
                        <p className="font-medium">{req.display_name}</p>
                        <p className="text-xs text-gray-500">@{req.username}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{req.full_name}</td>
                  <td className="px-4 py-3 text-sm">{idTypeLabels[req.id_type] || req.id_type}</td>
                  <td className="px-4 py-3 text-sm font-mono">{req.id_number}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {new Date(req.created_at).toLocaleDateString('vi-VN')}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${statusColors[req.status]}`}>
                      {statusLabels[req.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/admin/kyc/${req.id}`} className="text-indigo-600 hover:underline text-sm">
                      Xem chi tiết
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
