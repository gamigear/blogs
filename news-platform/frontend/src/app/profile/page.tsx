'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface UserProfile {
  id: number;
  username: string;
  email: string;
  display_name: string;
  avatar: string | null;
  role: string;
  trust_level: number;
  posts_created: number;
  likes_received: number;
  created_at: string;
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.userId) {
      fetchProfile();
    }
  }, [session]);

  const fetchProfile = async () => {
    try {
      const res = await fetch('/api/profile');
      if (res.ok) {
        const data = await res.json();
        setProfile(data.user);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!session) return null;

  const trustLevelLabels: Record<number, string> = {
    0: 'Mới',
    1: 'Cơ bản',
    2: 'Thành viên',
    3: 'Thường xuyên',
    4: 'Lãnh đạo',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="text-indigo-600 hover:underline">← Về trang chủ</Link>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-8">
            <div className="flex items-center gap-4">
              {profile?.avatar ? (
                <img src={profile.avatar} alt="" className="w-20 h-20 rounded-full border-4 border-white" />
              ) : (
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-3xl text-white">
                  {profile?.display_name?.charAt(0) || '?'}
                </div>
              )}
              <div className="text-white">
                <h1 className="text-2xl font-bold">{profile?.display_name}</h1>
                <p className="opacity-90">@{profile?.username}</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'profile'
                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Thông tin
              </button>
              <button
                onClick={() => setActiveTab('password')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'password'
                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Đổi mật khẩu
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'profile' && profile && (
              <ProfileInfo profile={profile} trustLevelLabels={trustLevelLabels} onUpdate={fetchProfile} />
            )}
            {activeTab === 'password' && <ChangePasswordForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileInfo({
  profile,
  trustLevelLabels,
  onUpdate,
}: {
  profile: UserProfile;
  trustLevelLabels: Record<number, string>;
  onUpdate: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState(profile.display_name);

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ display_name: displayName }),
      });

      if (res.ok) {
        setEditing(false);
        onUpdate();
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
          <p className="text-gray-900">{profile.email}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Tên đăng nhập</label>
          <p className="text-gray-900">@{profile.username}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Tên hiển thị</label>
          {editing ? (
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          ) : (
            <p className="text-gray-900">{profile.display_name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Vai trò</label>
          <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">
            {profile.role}
          </span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Cấp độ tin cậy</label>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
            Lv.{profile.trust_level} - {trustLevelLabels[profile.trust_level]}
          </span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Ngày tham gia</label>
          <p className="text-gray-900">{new Date(profile.created_at).toLocaleDateString('vi-VN')}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="text-center">
          <p className="text-2xl font-bold text-indigo-600">{profile.posts_created}</p>
          <p className="text-sm text-gray-600">Bài viết</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-pink-600">{profile.likes_received}</p>
          <p className="text-sm text-gray-600">Lượt thích</p>
        </div>
      </div>

      <div className="flex gap-3">
        {editing ? (
          <>
            <button
              onClick={handleSave}
              disabled={loading}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            >
              {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
            </button>
            <button
              onClick={() => { setEditing(false); setDisplayName(profile.display_name); }}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Hủy
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            Chỉnh sửa
          </button>
        )}
      </div>
    </div>
  );
}

function ChangePasswordForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setSuccess(true);
      setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}
      {success && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
          Đổi mật khẩu thành công!
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu hiện tại</label>
        <input
          type="password"
          value={formData.currentPassword}
          onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu mới</label>
        <input
          type="password"
          value={formData.newPassword}
          onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
        <p className="text-xs text-gray-500 mt-1">Ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu mới</label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? 'Đang xử lý...' : 'Đổi mật khẩu'}
      </button>
    </form>
  );
}
