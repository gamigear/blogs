'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface KYCStatus {
  kycVerified: boolean;
  kycVerifiedAt: string | null;
  latestRequest: {
    id: number;
    status: string;
    rejection_reason: string | null;
    created_at: string;
  } | null;
}

export default function KYCPage() {
  const { data: session, status: authStatus } = useSession();
  const router = useRouter();
  const [kycStatus, setKycStatus] = useState<KYCStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    date_of_birth: '',
    id_type: 'cccd',
    id_number: '',
    id_front_image: '',
    id_back_image: '',
    selfie_image: '',
    address: '',
    phone: '',
  });
  const [uploading, setUploading] = useState<string | null>(null);

  useEffect(() => {
    if (authStatus === 'unauthenticated') {
      router.push('/auth/signin');
    } else if (authStatus === 'authenticated') {
      fetchKYCStatus();
    }
  }, [authStatus]);

  const fetchKYCStatus = async () => {
    try {
      const res = await fetch('/api/kyc');
      const data = await res.json();
      setKycStatus(data);
    } catch (error) {
      console.error('Error fetching KYC status:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert('Ảnh quá lớn. Vui lòng chọn ảnh dưới 2MB');
      return;
    }

    setUploading(field);
    try {
      const formDataUpload = new FormData();
      formDataUpload.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formDataUpload,
      });

      if (res.ok) {
        const { url } = await res.json();
        setFormData({ ...formData, [field]: url });
      } else {
        alert('Không thể tải ảnh lên');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Không thể tải ảnh lên');
    } finally {
      setUploading(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.full_name || !formData.date_of_birth || !formData.id_number || !formData.id_front_image || !formData.selfie_image) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/kyc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Gửi yêu cầu xác minh thành công! Chúng tôi sẽ xem xét trong 24-48 giờ.');
        fetchKYCStatus();
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Đã có lỗi xảy ra');
    } finally {
      setSubmitting(false);
    }
  };

  if (authStatus === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-indigo-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  // Already verified
  if (kycStatus?.kycVerified) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <Link href="/profile" className="text-indigo-600 hover:underline mb-6 inline-block">← Quay lại</Link>
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-green-600 mb-2">Đã xác minh danh tính</h1>
            <p className="text-gray-600">Tài khoản của bạn đã được xác minh KYC thành công.</p>
            {kycStatus.kycVerifiedAt && (
              <p className="text-sm text-gray-500 mt-2">
                Xác minh ngày: {new Date(kycStatus.kycVerifiedAt).toLocaleDateString('vi-VN')}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Has pending request
  if (kycStatus?.latestRequest?.status === 'pending') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <Link href="/profile" className="text-indigo-600 hover:underline mb-6 inline-block">← Quay lại</Link>
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-yellow-600 mb-2">Đang chờ xác minh</h1>
            <p className="text-gray-600">Yêu cầu xác minh của bạn đang được xem xét.</p>
            <p className="text-sm text-gray-500 mt-2">
              Gửi ngày: {new Date(kycStatus.latestRequest.created_at).toLocaleDateString('vi-VN')}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href="/profile" className="text-indigo-600 hover:underline mb-6 inline-block">← Quay lại</Link>

        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-2">Xác minh danh tính (KYC)</h1>
          <p className="text-gray-600 mb-6">Xác minh danh tính để nhận huy hiệu và tăng độ tin cậy cho tài khoản.</p>

          {/* Rejected notice */}
          {kycStatus?.latestRequest?.status === 'rejected' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="font-medium text-red-700">Yêu cầu trước đã bị từ chối</p>
              <p className="text-sm text-red-600">{kycStatus.latestRequest.rejection_reason}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div>
              <h3 className="font-semibold mb-3">Thông tin cá nhân</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Họ và tên *</label>
                  <input
                    type="text"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Ngày sinh *</label>
                  <input
                    type="date"
                    value={formData.date_of_birth}
                    onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Số điện thoại</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Địa chỉ</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* ID Info */}
            <div>
              <h3 className="font-semibold mb-3">Thông tin giấy tờ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Loại giấy tờ *</label>
                  <select
                    value={formData.id_type}
                    onChange={(e) => setFormData({ ...formData, id_type: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    <option value="cccd">Căn cước công dân (CCCD)</option>
                    <option value="cmnd">Chứng minh nhân dân (CMND)</option>
                    <option value="passport">Hộ chiếu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Số giấy tờ *</label>
                  <input
                    type="text"
                    value={formData.id_number}
                    onChange={(e) => setFormData({ ...formData, id_number: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Images */}
            <div>
              <h3 className="font-semibold mb-3">Hình ảnh giấy tờ</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ImageUpload label="Mặt trước CMND/CCCD *" field="id_front_image" value={formData.id_front_image} uploading={uploading} onChange={handleImageUpload} />
                <ImageUpload label="Mặt sau CMND/CCCD" field="id_back_image" value={formData.id_back_image} uploading={uploading} onChange={handleImageUpload} />
                <ImageUpload label="Ảnh selfie cầm giấy tờ *" field="selfie_image" value={formData.selfie_image} uploading={uploading} onChange={handleImageUpload} />
              </div>
              <p className="text-xs text-gray-500 mt-2">* Ảnh rõ nét, không bị mờ, che khuất. Tối đa 2MB mỗi ảnh.</p>
            </div>

            <button
              type="submit"
              disabled={submitting || uploading !== null}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 font-medium"
            >
              {submitting ? 'Đang gửi...' : 'Gửi yêu cầu xác minh'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ImageUpload({ label, field, value, uploading, onChange }: {
  label: string;
  field: string;
  value: string;
  uploading: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <label className="block cursor-pointer">
        {value ? (
          <div className="relative">
            <img src={value} alt="" className="w-full h-32 object-cover rounded-lg border" />
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">Đổi ảnh</span>
            </div>
          </div>
        ) : (
          <div className="w-full h-32 border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-indigo-400 hover:text-indigo-400 transition-colors">
            {uploading === field ? (
              <div className="animate-spin h-6 w-6 border-2 border-indigo-600 border-t-transparent rounded-full" />
            ) : (
              <>
                <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">Tải ảnh lên</span>
              </>
            )}
          </div>
        )}
        <input type="file" accept="image/*" className="hidden" onChange={(e) => onChange(e, field)} disabled={uploading !== null} />
      </label>
    </div>
  );
}
