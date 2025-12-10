'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface UserProfile {
  id: number;
  username: string;
  display_name: string;
  avatar: string | null;
  cover: string | null;
  role: string;
  trust_level: number;
  posts_created: number;
  likes_received: number;
  followers_count: number;
  following_count: number;
  created_at: string;
  account_age: string;
  bio: string | null;
}

interface Post {
  id: number;
  title: string;
  excerpt: string;
  createdAt: string;
}

interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

const roleLabels: Record<string, { label: string; color: string }> = {
  reader: { label: '', color: '' },
  contributor: { label: 'CTV', color: 'bg-blue-500' },
  moderator: { label: 'MOD', color: 'bg-green-500' },
  editor: { label: 'BTV', color: 'bg-purple-500' },
  admin: { label: 'ADMIN', color: 'bg-red-500' },
  superadmin: { label: 'ADMIN', color: 'bg-red-600' },
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function formatTimeAgo(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `${diffMins} phút trước`;
  if (diffHours < 24) return `${diffHours} giờ trước`;
  if (diffDays < 7) return `${diffDays} ngày trước`;
  return formatDate(dateStr);
}

export default function UserProfilePage() {
  const params = useParams();
  const { data: session } = useSession();
  const username = params.username as string;

  const [user, setUser] = useState<UserProfile | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isOwnProfile, setIsOwnProfile] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'posts'>('home');
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', images: [] as string[] });
  const [submittingPost, setSubmittingPost] = useState(false);
  const [uploadingPostImage, setUploadingPostImage] = useState(false);

  useEffect(() => {
    fetchUserProfile();
  }, [username]);

  const handlePostImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Limit to 5 images
    if (newPost.images.length + files.length > 5) {
      alert('Tối đa 5 hình ảnh cho mỗi bài viết');
      return;
    }

    setUploadingPostImage(true);
    try {
      for (const file of Array.from(files)) {
        if (file.size > 2 * 1024 * 1024) {
          alert(`Ảnh ${file.name} quá lớn. Vui lòng chọn ảnh dưới 2MB`);
          continue;
        }

        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (res.ok) {
          const { url } = await res.json();
          setNewPost((prev) => ({ ...prev, images: [...prev.images, url] }));
        }
      }
    } catch (err) {
      console.error('Error uploading image:', err);
      alert('Không thể tải ảnh lên');
    } finally {
      setUploadingPostImage(false);
      e.target.value = '';
    }
  };

  const removePostImage = (index: number) => {
    setNewPost((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.content.trim()) {
      alert('Vui lòng nhập tiêu đề và nội dung');
      return;
    }
    if (newPost.title.length < 10) {
      alert('Tiêu đề phải có ít nhất 10 ký tự');
      return;
    }
    if (newPost.content.length < 50) {
      alert('Nội dung phải có ít nhất 50 ký tự');
      return;
    }

    // Append images to content as markdown
    let contentWithImages = newPost.content;
    if (newPost.images.length > 0) {
      contentWithImages += '\n\n' + newPost.images.map((img) => `![image](${img})`).join('\n');
    }

    setSubmittingPost(true);
    try {
      const res = await fetch('/api/community/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newPost.title, content: contentWithImages }),
      });

      const data = await res.json();
      if (res.ok) {
        setNewPost({ title: '', content: '', images: [] });
        setShowNewPostForm(false);
        fetchUserProfile();
        if (data.needsModeration) {
          alert('Bài viết đã được gửi và đang chờ duyệt!');
        } else {
          alert('Đăng bài thành công!');
        }
      } else {
        alert(data.error || 'Đã có lỗi xảy ra');
      }
    } catch (err) {
      alert('Đã có lỗi xảy ra');
    } finally {
      setSubmittingPost(false);
    }
  };

  const handleImageUpload = async (file: File, type: 'avatar' | 'cover') => {
    // Check file size (1MB limit)
    if (file.size > 1 * 1024 * 1024) {
      alert('Ảnh quá lớn. Vui lòng chọn ảnh dưới 1MB');
      return;
    }

    // Check file type
    if (!['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(file.type)) {
      alert('Định dạng không hỗ trợ. Chỉ chấp nhận JPG, PNG, GIF, WEBP');
      return;
    }

    if (type === 'avatar') setUploadingAvatar(true);
    else setUploadingCover(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', type);

      // Upload to user-specific endpoint
      const uploadRes = await fetch(`/api/users/${username}/upload`, {
        method: 'POST',
        body: formData,
      });

      const uploadData = await uploadRes.json();

      if (!uploadRes.ok) {
        throw new Error(uploadData.error || 'Upload failed');
      }

      // Update profile with new image URL
      const updateRes = await fetch(`/api/users/${username}/profile`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [type]: uploadData.url }),
      });

      if (updateRes.ok && user) {
        setUser({ ...user, [type]: uploadData.url });
      }
    } catch (err: any) {
      console.error('Error uploading image:', err);
      alert(err.message || 'Không thể tải ảnh lên. Vui lòng thử lại.');
    } finally {
      if (type === 'avatar') setUploadingAvatar(false);
      else setUploadingCover(false);
    }
  };

  const fetchUserProfile = async (page = 1) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/users/${username}?page=${page}&pageSize=10`);

      if (!res.ok) {
        if (res.status === 404) {
          setError('Không tìm thấy người dùng');
        } else {
          setError('Đã có lỗi xảy ra');
        }
        return;
      }

      const data = await res.json();
      setUser(data.user);
      setPosts(data.posts);
      setPagination(data.pagination);
      setIsFollowing(data.isFollowing);
      setIsOwnProfile(data.isOwnProfile);
      setError(null);
    } catch (err) {
      setError('Đã có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };

  const handleFollow = async () => {
    if (!session) {
      window.location.href = '/auth/signin';
      return;
    }

    setFollowLoading(true);
    try {
      const res = await fetch(`/api/users/${username}/follow`, {
        method: isFollowing ? 'DELETE' : 'POST',
      });

      if (res.ok) {
        const data = await res.json();
        setIsFollowing(data.isFollowing);
        if (user) {
          setUser({ ...user, followers_count: data.followersCount });
        }
      }
    } catch (err) {
      console.error('Error toggling follow:', err);
    } finally {
      setFollowLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Cover skeleton */}
        <div className="h-32 bg-gradient-to-r from-blue-400 to-blue-600" />
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative -mt-16 pb-4 text-center">
            <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full border-4 border-white animate-pulse" />
            <div className="mt-3 h-6 w-32 mx-auto bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {error || 'Không tìm thấy người dùng'}
          </h1>
          <p className="text-gray-600 mb-4">
            Người dùng này không tồn tại hoặc đã bị xóa.
          </p>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  const roleInfo = roleLabels[user.role] || roleLabels.reader;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover */}
      <div className="relative h-32 md:h-48">
        {user.cover ? (
          <img src={user.cover} alt="Cover" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />
        )}
        {/* Edit cover button */}
        {isOwnProfile && (
          <label className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/50 hover:bg-black/70 text-white text-sm rounded-lg cursor-pointer transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {uploadingCover ? 'Đang tải...' : 'Đổi ảnh bìa'}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(file, 'cover');
              }}
              disabled={uploadingCover}
            />
          </label>
        )}
      </div>

      {/* Profile Header */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative -mt-16 pb-4 text-center">
          {/* Avatar */}
          <div className="relative inline-block">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.display_name}
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover bg-white"
              />
            ) : (
              <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-4xl text-white font-bold">
                  {user.display_name?.charAt(0)?.toUpperCase() || '?'}
                </span>
              </div>
            )}
            {/* Role badge */}
            {roleInfo.label && (
              <div
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 ${roleInfo.color} text-white text-xs font-bold rounded shadow`}
              >
                {roleInfo.label}
              </div>
            )}
            {/* Edit avatar button */}
            {isOwnProfile && (
              <label className="absolute bottom-0 right-0 w-8 h-8 bg-white hover:bg-gray-100 rounded-full shadow-lg cursor-pointer flex items-center justify-center transition-colors border border-gray-200">
                {uploadingAvatar ? (
                  <svg className="animate-spin w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleImageUpload(file, 'avatar');
                  }}
                  disabled={uploadingAvatar}
                />
              </label>
            )}
          </div>

          {/* Name */}
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <h1 className="text-xl font-bold text-gray-900">{user.display_name}</h1>
            {user.trust_level >= 2 && (
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>

          {/* Stats */}
          <div className="mt-3 flex items-center justify-center gap-6 text-sm">
            <div>
              <span className="text-gray-500">Bài đã đăng: </span>
              <span className="font-semibold text-blue-600">{user.posts_created.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-gray-500">Tuổi tinhte: </span>
              <span className="font-semibold text-blue-600">{user.account_age}</span>
            </div>
          </div>
          <div className="mt-1 flex items-center justify-center gap-6 text-sm">
            <div>
              <span className="text-gray-500">Lượt Like: </span>
              <span className="font-semibold text-blue-600">{user.likes_received.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-gray-500">Lượt theo dõi: </span>
              <span className="font-semibold text-blue-600">{user.followers_count.toLocaleString()}</span>
            </div>
          </div>

          {/* Follow button */}
          {!isOwnProfile && (
            <div className="mt-4">
              <button
                onClick={handleFollow}
                disabled={followLoading}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  isFollowing
                    ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                } disabled:opacity-50`}
              >
                {followLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Đang xử lý...
                  </span>
                ) : isFollowing ? (
                  'Đang theo dõi'
                ) : (
                  '+ Theo dõi'
                )}
              </button>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 bg-white rounded-t-lg mt-2">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'home'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Tường nhà
            </button>
            <button
              onClick={() => setActiveTab('posts')}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'posts'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Bài viết ({pagination?.total || 0})
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4">
          {/* Left Sidebar */}
          <div className="space-y-4">
            {/* Bio Card */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Giới thiệu</h3>
              <p className="text-sm text-gray-600">
                {user.bio || 'Chưa có thông tin giới thiệu.'}
              </p>
              <div className="mt-3 pt-3 border-t text-sm text-gray-500">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Tham gia {formatDate(user.created_at)}</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Thống kê</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Cấp độ tin cậy</span>
                  <span className="font-medium text-blue-600">Level {user.trust_level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Bài viết</span>
                  <span className="font-medium">{user.posts_created}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Lượt thích nhận được</span>
                  <span className="font-medium">{user.likes_received.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Người theo dõi</span>
                  <span className="font-medium">{user.followers_count}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Đang theo dõi</span>
                  <span className="font-medium">{user.following_count}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {activeTab === 'home' && (
              <>
                {/* New Post Form */}
                {isOwnProfile && (
                  <div className="bg-white rounded-lg p-4">
                    {!showNewPostForm ? (
                      <button
                        onClick={() => setShowNewPostForm(true)}
                        className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
                      >
                        {user.avatar ? (
                          <img src={user.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-semibold">{user.display_name?.charAt(0)?.toUpperCase()}</span>
                          </div>
                        )}
                        <span className="text-gray-500">Bạn đang nghĩ gì?</span>
                      </button>
                    ) : (
                      <form onSubmit={handleSubmitPost}>
                        <div className="flex items-center gap-3 mb-3">
                          {user.avatar ? (
                            <img src={user.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-blue-600 font-semibold">{user.display_name?.charAt(0)?.toUpperCase()}</span>
                            </div>
                          )}
                          <span className="font-medium">{user.display_name}</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Tiêu đề bài viết (ít nhất 10 ký tự)"
                          value={newPost.title}
                          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                          placeholder="Nội dung bài viết (ít nhất 50 ký tự)"
                          value={newPost.content}
                          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                          rows={4}
                          className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />

                        {/* Image Upload */}
                        <div className="mb-3">
                          {newPost.images.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-2">
                              {newPost.images.map((img, idx) => (
                                <div key={idx} className="relative group">
                                  <img src={img} alt="" className="w-20 h-20 object-cover rounded-lg" />
                                  <button
                                    type="button"
                                    onClick={() => removePostImage(idx)}
                                    className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    ×
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                          <label className="inline-flex items-center gap-2 px-3 py-2 border border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                            {uploadingPostImage ? (
                              <>
                                <svg className="animate-spin w-5 h-5 text-blue-500" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                <span className="text-sm text-gray-500">Đang tải...</span>
                              </>
                            ) : (
                              <>
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm text-gray-500">Thêm ảnh ({newPost.images.length}/5)</span>
                              </>
                            )}
                            <input
                              type="file"
                              accept="image/*"
                              multiple
                              className="hidden"
                              onChange={handlePostImageUpload}
                              disabled={uploadingPostImage || newPost.images.length >= 5}
                            />
                          </label>
                          <p className="text-xs text-gray-400 mt-1">Tối đa 5 ảnh, mỗi ảnh dưới 2MB</p>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            {user.trust_level >= 2 ? '✓ Bài viết sẽ được đăng ngay' : '⏳ Bài viết cần được duyệt'}
                          </span>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => { setShowNewPostForm(false); setNewPost({ title: '', content: '', images: [] }); }}
                              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                            >
                              Hủy
                            </button>
                            <button
                              type="submit"
                              disabled={submittingPost || uploadingPostImage}
                              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                            >
                              {submittingPost ? 'Đang đăng...' : 'Đăng bài'}
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                )}

                {/* Recent Posts */}
                <div className="bg-white rounded-lg">
                  <div className="p-4 border-b flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Bài viết gần đây</h3>
                    {posts.length > 0 && (
                      <button
                        onClick={() => setActiveTab('posts')}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Xem tất cả
                      </button>
                    )}
                  </div>
                  {posts.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      <div className="text-4xl mb-2">📝</div>
                      <p>Chưa có bài viết nào</p>
                    </div>
                  ) : (
                    <div className="divide-y">
                      {posts.slice(0, 5).map((post) => (
                        <div key={post.id} className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            {user.avatar ? (
                              <img src={user.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-blue-600 font-semibold">
                                  {user.display_name?.charAt(0)?.toUpperCase()}
                                </span>
                              </div>
                            )}
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-medium text-gray-900">{user.display_name}</span>
                                {user.trust_level >= 2 && (
                                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                              <span className="text-xs text-gray-500">{formatTimeAgo(post.createdAt)}</span>
                            </div>
                          </div>
                          <Link href={`/feed/${post.id}`} className="block group">
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                              {post.title || 'Bài viết'}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            {activeTab === 'posts' && (
              <div className="bg-white rounded-lg">
                <div className="p-4 border-b">
                  <h3 className="font-semibold text-gray-900">Tất cả bài viết</h3>
                </div>
                {posts.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <div className="text-4xl mb-2">📝</div>
                    <p>Chưa có bài viết nào</p>
                  </div>
                ) : (
                  <>
                    <div className="divide-y">
                      {posts.map((post) => (
                        <div key={post.id} className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            {user.avatar ? (
                              <img src={user.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-blue-600 font-semibold">
                                  {user.display_name?.charAt(0)?.toUpperCase()}
                                </span>
                              </div>
                            )}
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-medium text-gray-900">{user.display_name}</span>
                                {user.trust_level >= 2 && (
                                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                              <span className="text-xs text-gray-500">{formatTimeAgo(post.createdAt)}</span>
                            </div>
                          </div>
                          <Link href={`/feed/${post.id}`} className="block group">
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                              {post.title || 'Bài viết'}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                          </Link>
                        </div>
                      ))}
                    </div>

                    {/* Pagination */}
                    {pagination && pagination.totalPages > 1 && (
                      <div className="p-4 border-t flex justify-center gap-2">
                        {Array.from({ length: Math.min(pagination.totalPages, 5) }, (_, i) => {
                          let pageNum;
                          if (pagination.totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (pagination.page <= 3) {
                            pageNum = i + 1;
                          } else if (pagination.page >= pagination.totalPages - 2) {
                            pageNum = pagination.totalPages - 4 + i;
                          } else {
                            pageNum = pagination.page - 2 + i;
                          }
                          return (
                            <button
                              key={pageNum}
                              onClick={() => fetchUserProfile(pageNum)}
                              className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                                pageNum === pagination.page
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
