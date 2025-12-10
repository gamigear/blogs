'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CommentSettings {
  enabled: boolean;
  require_login: boolean;
  require_approval: boolean;
  auto_approve_trusted_users: boolean;
  trusted_user_min_trust_level: number;
  max_comment_length: number;
  min_comment_length: number;
  allow_links: boolean;
  allow_images: boolean;
  allow_html: boolean;
  nested_replies_depth: number;
  comments_per_page: number;
  sort_order: 'newest' | 'oldest' | 'popular';
}

interface ModerationSettings {
  auto_moderation_enabled: boolean;
  spam_detection_enabled: boolean;
  profanity_filter_enabled: boolean;
  link_moderation: 'allow' | 'review' | 'block';
  new_user_moderation: boolean;
  new_user_threshold_days: number;
  flag_threshold_for_review: number;
  flag_threshold_for_hide: number;
}

export default function CommentSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'moderation'>('general');
  const [general, setGeneral] = useState<CommentSettings>({
    enabled: true,
    require_login: true,
    require_approval: false,
    auto_approve_trusted_users: true,
    trusted_user_min_trust_level: 2,
    max_comment_length: 5000,
    min_comment_length: 10,
    allow_links: true,
    allow_images: false,
    allow_html: false,
    nested_replies_depth: 3,
    comments_per_page: 20,
    sort_order: 'newest',
  });
  const [moderation, setModeration] = useState<ModerationSettings>({
    auto_moderation_enabled: true,
    spam_detection_enabled: true,
    profanity_filter_enabled: true,
    link_moderation: 'review',
    new_user_moderation: true,
    new_user_threshold_days: 7,
    flag_threshold_for_review: 3,
    flag_threshold_for_hide: 5,
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/admin/comment-settings');
      const data = await res.json();
      if (data.data) {
        if (data.data.general) setGeneral(data.data.general);
        if (data.data.moderation) setModeration(data.data.moderation);
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const key = activeTab;
      const value = activeTab === 'general' ? general : moderation;

      await fetch('/api/admin/comment-settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value }),
      });

      alert('Đã lưu cài đặt!');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Có lỗi xảy ra!');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Đang tải...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link href="/admin/comments" className="hover:text-[#2A85FF]">
              Quản lý bình luận
            </Link>
            <span>/</span>
            <span>Cài đặt</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Cài đặt bình luận</h1>
          <p className="text-gray-500 mt-1">Cấu hình hệ thống bình luận và kiểm duyệt tự động</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-4 py-2 bg-[#2A85FF] text-white rounded-lg hover:bg-[#2A85FF]/90 transition-colors disabled:opacity-50"
        >
          {saving ? 'Đang lưu...' : 'Lưu cài đặt'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
        {[
          { key: 'general', label: 'Cài đặt chung' },
          { key: 'moderation', label: 'Kiểm duyệt tự động' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as 'general' | 'moderation')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.key
                ? 'border-[#2A85FF] text-[#2A85FF]'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* General Settings */}
      {activeTab === 'general' && (
        <div className="bg-white dark:bg-[#1A1D1F] rounded-lg p-6 space-y-6 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Toggle Settings */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Cài đặt cơ bản</h3>
              
              <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Bật bình luận</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cho phép người dùng bình luận trên bài viết</p>
                </div>
                <input
                  type="checkbox"
                  checked={general.enabled}
                  onChange={(e) => setGeneral({ ...general, enabled: e.target.checked })}
                  className="w-5 h-5 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Yêu cầu đăng nhập</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Chỉ người dùng đã đăng nhập mới được bình luận</p>
                </div>
                <input
                  type="checkbox"
                  checked={general.require_login}
                  onChange={(e) => setGeneral({ ...general, require_login: e.target.checked })}
                  className="w-5 h-5 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Yêu cầu xét duyệt</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tất cả bình luận phải được duyệt trước khi hiển thị</p>
                </div>
                <input
                  type="checkbox"
                  checked={general.require_approval}
                  onChange={(e) => setGeneral({ ...general, require_approval: e.target.checked })}
                  className="w-5 h-5 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Tự động duyệt người dùng tin cậy</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Bỏ qua xét duyệt cho người dùng có trust level cao</p>
                </div>
                <input
                  type="checkbox"
                  checked={general.auto_approve_trusted_users}
                  onChange={(e) => setGeneral({ ...general, auto_approve_trusted_users: e.target.checked })}
                  className="w-5 h-5 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Cho phép link</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cho phép chèn liên kết trong bình luận</p>
                </div>
                <input
                  type="checkbox"
                  checked={general.allow_links}
                  onChange={(e) => setGeneral({ ...general, allow_links: e.target.checked })}
                  className="w-5 h-5 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Cho phép hình ảnh</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cho phép chèn hình ảnh trong bình luận</p>
                </div>
                <input
                  type="checkbox"
                  checked={general.allow_images}
                  onChange={(e) => setGeneral({ ...general, allow_images: e.target.checked })}
                  className="w-5 h-5 rounded"
                />
              </label>
            </div>

            {/* Number Settings */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Giới hạn</h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Trust level tối thiểu để tự động duyệt
                </label>
                <select
                  value={general.trusted_user_min_trust_level}
                  onChange={(e) => setGeneral({ ...general, trusted_user_min_trust_level: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value={1}>Level 1 - Người dùng mới</option>
                  <option value={2}>Level 2 - Người dùng thường</option>
                  <option value={3}>Level 3 - Người dùng tích cực</option>
                  <option value={4}>Level 4 - Người dùng tin cậy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Độ dài tối thiểu (ký tự)
                </label>
                <input
                  type="number"
                  value={general.min_comment_length}
                  onChange={(e) => setGeneral({ ...general, min_comment_length: parseInt(e.target.value) })}
                  min={1}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Độ dài tối đa (ký tự)
                </label>
                <input
                  type="number"
                  value={general.max_comment_length}
                  onChange={(e) => setGeneral({ ...general, max_comment_length: parseInt(e.target.value) })}
                  min={100}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Độ sâu reply tối đa
                </label>
                <input
                  type="number"
                  value={general.nested_replies_depth}
                  onChange={(e) => setGeneral({ ...general, nested_replies_depth: parseInt(e.target.value) })}
                  min={1}
                  max={10}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Số bình luận mỗi trang
                </label>
                <input
                  type="number"
                  value={general.comments_per_page}
                  onChange={(e) => setGeneral({ ...general, comments_per_page: parseInt(e.target.value) })}
                  min={5}
                  max={100}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Sắp xếp mặc định
                </label>
                <select
                  value={general.sort_order}
                  onChange={(e) => setGeneral({ ...general, sort_order: e.target.value as 'newest' | 'oldest' | 'popular' })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="newest">Mới nhất</option>
                  <option value="oldest">Cũ nhất</option>
                  <option value="popular">Phổ biến nhất</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Moderation Settings */}
      {activeTab === 'moderation' && (
        <div className="bg-white dark:bg-[#1A1D1F] rounded-lg p-6 space-y-6 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Toggle Settings */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Kiểm duyệt tự động</h3>

              <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Bật kiểm duyệt tự động</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tự động kiểm tra nội dung bình luận</p>
                </div>
                <input
                  type="checkbox"
                  checked={moderation.auto_moderation_enabled}
                  onChange={(e) => setModeration({ ...moderation, auto_moderation_enabled: e.target.checked })}
                  className="w-5 h-5 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Phát hiện spam</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tự động phát hiện và đánh dấu spam</p>
                </div>
                <input
                  type="checkbox"
                  checked={moderation.spam_detection_enabled}
                  onChange={(e) => setModeration({ ...moderation, spam_detection_enabled: e.target.checked })}
                  className="w-5 h-5 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Lọc từ ngữ thô tục</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Kiểm tra từ khóa cấm trong bình luận</p>
                </div>
                <input
                  type="checkbox"
                  checked={moderation.profanity_filter_enabled}
                  onChange={(e) => setModeration({ ...moderation, profanity_filter_enabled: e.target.checked })}
                  className="w-5 h-5 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Kiểm duyệt người dùng mới</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Yêu cầu xét duyệt bình luận từ tài khoản mới</p>
                </div>
                <input
                  type="checkbox"
                  checked={moderation.new_user_moderation}
                  onChange={(e) => setModeration({ ...moderation, new_user_moderation: e.target.checked })}
                  className="w-5 h-5 rounded"
                />
              </label>
            </div>

            {/* Number Settings */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Ngưỡng kiểm duyệt</h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Xử lý liên kết
                </label>
                <select
                  value={moderation.link_moderation}
                  onChange={(e) => setModeration({ ...moderation, link_moderation: e.target.value as 'allow' | 'review' | 'block' })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="allow">Cho phép - Không kiểm duyệt</option>
                  <option value="review">Xét duyệt - Đưa vào hàng đợi</option>
                  <option value="block">Chặn - Không cho phép</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Ngưỡng ngày cho người dùng mới
                </label>
                <input
                  type="number"
                  value={moderation.new_user_threshold_days}
                  onChange={(e) => setModeration({ ...moderation, new_user_threshold_days: parseInt(e.target.value) })}
                  min={1}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Tài khoản dưới số ngày này được coi là mới</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Số báo cáo để đưa vào xét duyệt
                </label>
                <input
                  type="number"
                  value={moderation.flag_threshold_for_review}
                  onChange={(e) => setModeration({ ...moderation, flag_threshold_for_review: parseInt(e.target.value) })}
                  min={1}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Số báo cáo để tự động ẩn
                </label>
                <input
                  type="number"
                  value={moderation.flag_threshold_for_hide}
                  onChange={(e) => setModeration({ ...moderation, flag_threshold_for_hide: parseInt(e.target.value) })}
                  min={1}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
