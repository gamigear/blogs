'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
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
  id_front_image: string;
  id_back_image: string | null;
  selfie_image: string;
  address: string | null;
  phone: string | null;
  status: string;
  rejection_reason: string | null;
  created_at: string;
  reviewed_at: string | null;
}

export default function KYCDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [request, setRequest] = useState<KYCRequest | null>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectModal, setShowRejectModal] = useState(false);

  useEffect(() => {
    fetchRequest();
  }, [params.id]);

  const fetchRequest = async () => {
    try {
      const res = await fetch(`/api/admin/kyc/${params.id}`);
      const data = await res.json();
      setRequest(data.request);
    } catch (error) {
      console.error('Error fetching KYC request:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (action: 'approve' | 'reject') => {
    if (action === 'reject' && !rejectionReason) {
      alert('Vui lòng nhập lý do từ chối');
      return;
    }

    setProcessing(true);
    try {
      const res = await fetch(`/api/admin/kyc/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, rejection_reason: rejectionReason }),
      });

      if (res.ok) {
        router.push('/admin/kyc');
      } else {
        const data = await res.json();
        alert(data.error);
      }
    } catch (error) {
      console.error('Error processing KYC:', error);
    } finally {
      setProcessing(false);
    }
  };

  const idTypeLabels: Record<string, string> = { cmnd: 'CMND', cccd: 'CCCD', passport: 'Hộ chiếu' };

  if (loading) return <div className="p-6 text-center">Đang tải...</div>;
  if (!request) return <div className="p-6 text-center">Không tìm thấy yêu cầu</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/admin/kyc" className="text-indigo-600 hover:underline">← Quay lại</Link>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Chi tiết yêu cầu KYC</h1>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            request.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
            request.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {request.status === 'pending' ? 'Chờ duyệt' : request.status === 'approved' ? 'Đã duyệt' : 'Từ chối'}
          </span>
        </div>

        {/* User info */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-6">
          {request.avatar ? (
            <img src={request.avatar} alt="" className="w-16 h-16 rounded-full object-cover" />
          ) : (
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-2xl text-indigo-600">
              {request.display_name?.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-bold text-lg">{request.display_name}</p>
            <p className="text-gray-500">@{request.username} • {request.email}</p>
          </div>
        </div>

        {/* KYC Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">Thông tin cá nhân</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-500">Họ và tên</span>
                <span className="font-medium">{request.full_name}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-500">Ngày sinh</span>
                <span className="font-medium">{new Date(request.date_of_birth).toLocaleDateString('vi-VN')}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-500">Loại giấy tờ</span>
                <span className="font-medium">{idTypeLabels[request.id_type]}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-500">Số giấy tờ</span>
                <span className="font-medium font-mono">{request.id_number}</span>
              </div>
              {request.phone && (
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-500">Số điện thoại</span>
                  <span className="font-medium">{request.phone}</span>
                </div>
              )}
              {request.address && (
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-500">Địa chỉ</span>
                  <span className="font-medium">{request.address}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Thời gian</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-500">Ngày gửi</span>
                <span className="font-medium">{new Date(request.created_at).toLocaleString('vi-VN')}</span>
              </div>
              {request.reviewed_at && (
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-500">Ngày xử lý</span>
                  <span className="font-medium">{new Date(request.reviewed_at).toLocaleString('vi-VN')}</span>
                </div>
              )}
            </div>
            {request.rejection_reason && (
              <div className="mt-4 p-3 bg-red-50 rounded-lg">
                <p className="text-sm font-medium text-red-700">Lý do từ chối:</p>
                <p className="text-sm text-red-600">{request.rejection_reason}</p>
              </div>
            )}
          </div>
        </div>

        {/* Images */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Hình ảnh giấy tờ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">Mặt trước CMND/CCCD</p>
              <a href={request.id_front_image} target="_blank" rel="noopener noreferrer">
                <img src={request.id_front_image} alt="ID Front" className="w-full h-48 object-cover rounded-lg border hover:opacity-90" />
              </a>
            </div>
            {request.id_back_image && (
              <div>
                <p className="text-sm text-gray-500 mb-2">Mặt sau CMND/CCCD</p>
                <a href={request.id_back_image} target="_blank" rel="noopener noreferrer">
                  <img src={request.id_back_image} alt="ID Back" className="w-full h-48 object-cover rounded-lg border hover:opacity-90" />
                </a>
              </div>
            )}
            <div>
              <p className="text-sm text-gray-500 mb-2">Ảnh selfie</p>
              <a href={request.selfie_image} target="_blank" rel="noopener noreferrer">
                <img src={request.selfie_image} alt="Selfie" className="w-full h-48 object-cover rounded-lg border hover:opacity-90" />
              </a>
            </div>
          </div>
        </div>

        {/* Actions */}
        {request.status === 'pending' && (
          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={() => handleAction('approve')}
              disabled={processing}
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {processing ? 'Đang xử lý...' : '✓ Phê duyệt'}
            </button>
            <button
              onClick={() => setShowRejectModal(true)}
              disabled={processing}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
            >
              ✕ Từ chối
            </button>
          </div>
        )}
      </div>

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-4">Từ chối yêu cầu KYC</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Lý do từ chối *</label>
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                rows={3}
                placeholder="Nhập lý do từ chối..."
              />
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowRejectModal(false)} className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50">
                Hủy
              </button>
              <button onClick={() => handleAction('reject')} disabled={processing} className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50">
                {processing ? 'Đang xử lý...' : 'Xác nhận từ chối'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
