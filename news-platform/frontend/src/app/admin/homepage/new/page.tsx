'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Tag {
  id: number;
  name: string;
  slug: string;
}

interface User {
  id: number;
  username: string;
  display_name: string;
  avatar: string | null;
  role: string;
}

const SECTION_TYPES = [
  { value: 'hero_slider', label: 'Slider nổi bật', description: 'Slider lớn ở đầu trang' },
  { value: 'featured_grid', label: 'Lưới bài viết', description: 'Hiển thị bài viết dạng lưới' },
  { value: 'category_articles', label: 'Bài theo danh mục', description: 'Bài viết từ danh mục cụ thể' },
  { value: 'latest_articles', label: 'Bài mới nhất', description: 'Danh sách bài mới nhất' },
  { value: 'tag_articles', label: 'Bài theo tag', description: 'Bài viết theo tag' },
  { value: 'manual_articles', label: 'Chọn thủ công', description: 'Tự chọn từng bài viết' },
  { value: 'sidebar_widget', label: 'Widget sidebar', description: 'Widget cho sidebar' },
  { value: 'search_widget', label: 'Tìm kiếm nâng cao', description: 'Widget tìm kiếm với bộ lọc' },
  { value: 'featured_users', label: 'Featured Users', description: 'Hiển thị người dùng nổi bật' },
];

const SELECTION_TYPES = [
  { value: 'auto', label: 'Tự động (mới nhất)' },
  { value: 'manual', label: 'Chọn thủ công' },
  { value: 'category', label: 'Theo 1 danh mục' },
  { value: 'categories', label: 'Theo nhiều danh mục' },
  { value: 'tag', label: 'Theo 1 tag' },
  { value: 'tags', label: 'Theo nhiều tags' },
  { value: 'featured', label: 'Bài nổi bật' },
  { value: 'popular', label: 'Đọc nhiều nhất' },
];

const USER_SELECTION_TYPES = [
  { value: 'contributors', label: 'Top đóng góp', description: 'Người dùng có nhiều bài viết và follower' },
  { value: 'experts', label: 'Chuyên gia', description: 'Người dùng có nhiều bài viết nhất' },
  { value: 'admins', label: 'Ban quản trị', description: 'Admin và Moderator' },
  { value: 'custom_users', label: 'Chọn thủ công', description: 'Tự chọn người dùng' },
];

const LAYOUTS = [
  { value: 'grid', label: 'Lưới' },
  { value: 'list', label: 'Danh sách' },
  { value: 'slider', label: 'Slider' },
  { value: 'featured_large', label: 'Nổi bật lớn' },
  { value: 'sidebar', label: 'Sidebar' },
  { value: 'compact', label: 'Thu gọn' },
  { value: 'cards', label: 'Cards' },
  { value: 'magazine', label: 'Magazine' },
];

// SVG icons for layouts
const LayoutIcons: Record<string, JSX.Element> = {
  grid: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
  list: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>,
  slider: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>,
  featured_large: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9h16" /></svg>,
  sidebar: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 4v16" /></svg>,
  compact: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>,
  cards: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  magazine: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>,
};

export default function NewHomepageSectionPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [userSearch, setUserSearch] = useState('');
  const [userSearchResults, setUserSearchResults] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    section_type: 'featured_grid',
    selection_type: 'auto',
    display_limit: 6,
    display_layout: 'grid',
    position: 'main',
    is_visible: true,
    selection_data: {
      category_ids: [] as number[],
      tag_ids: [] as number[],
      user_type: 'contributors',
      user_ids: [] as number[],
    },
  });

  useEffect(() => {
    // Fetch categories, tags, and users
    Promise.all([
      fetch('/api/admin/categories').then(r => r.json()),
      fetch('/api/admin/tags').then(r => r.json()),
      fetch('/api/admin/users?limit=100').then(r => r.json()),
    ]).then(([catData, tagData, userData]) => {
      setCategories(catData.categories || []);
      setTags(tagData.tags || []);
      setUsers(userData.users || []);
    });
  }, []);

  // Search users
  useEffect(() => {
    if (!userSearch.trim()) {
      setUserSearchResults([]);
      return;
    }
    const filtered = users.filter(u => 
      u.display_name?.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.username?.toLowerCase().includes(userSearch.toLowerCase())
    ).slice(0, 10);
    setUserSearchResults(filtered);
  }, [userSearch, users]);

  const addUser = (user: User) => {
    if (!selectedUsers.find(u => u.id === user.id)) {
      setSelectedUsers([...selectedUsers, user]);
      setFormData({
        ...formData,
        selection_data: {
          ...formData.selection_data,
          user_ids: [...formData.selection_data.user_ids, user.id]
        }
      });
    }
    setUserSearch('');
  };

  const removeUser = (userId: number) => {
    setSelectedUsers(selectedUsers.filter(u => u.id !== userId));
    setFormData({
      ...formData,
      selection_data: {
        ...formData.selection_data,
        user_ids: formData.selection_data.user_ids.filter(id => id !== userId)
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      alert('Vui lòng nhập tên section');
      return;
    }

    setSaving(true);
    try {
      const res = await fetch('/api/admin/homepage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to create');
      
      const data = await res.json();
      router.push(`/admin/homepage/${data.id}/edit`);
    } catch (error) {
      alert('Có lỗi xảy ra');
    } finally {
      setSaving(false);
    }
  };

  const toggleCategory = (id: number) => {
    const current = formData.selection_data.category_ids;
    const updated = current.includes(id) 
      ? current.filter(c => c !== id)
      : [...current, id];
    setFormData({
      ...formData,
      selection_data: { ...formData.selection_data, category_ids: updated }
    });
  };

  const toggleTag = (id: number) => {
    const current = formData.selection_data.tag_ids;
    const updated = current.includes(id)
      ? current.filter(t => t !== id)
      : [...current, id];
    setFormData({
      ...formData,
      selection_data: { ...formData.selection_data, tag_ids: updated }
    });
  };

  const showCategorySelect = ['category', 'categories'].includes(formData.selection_type);
  const showTagSelect = ['tag', 'tags'].includes(formData.selection_type);
  const isFeaturedUsers = formData.section_type === 'featured_users';
  const showUserSelect = isFeaturedUsers && formData.selection_data.user_type === 'custom_users';

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Thêm section mới</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Tạo section mới cho trang chủ</p>
        </div>
        <Link href="/admin/homepage" className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Quay lại
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic info */}
        <div className="bg-white dark:bg-[#1A1D1F] rounded-lg p-6 space-y-4 border border-gray-200 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white">Thông tin cơ bản</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tên section *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="VD: hero_slider, latest_news..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tiêu đề hiển thị</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="VD: Tin mới nhất, Đọc nhiều..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Loại section</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {SECTION_TYPES.map(type => (
                <label
                  key={type.value}
                  className={`flex flex-col p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                    formData.section_type === type.value
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="section_type"
                    value={type.value}
                    checked={formData.section_type === type.value}
                    onChange={(e) => setFormData({ ...formData, section_type: e.target.value })}
                    className="sr-only"
                  />
                  <span className="font-medium text-gray-900 dark:text-white">{type.label}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{type.description}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Content selection */}
        <div className="bg-white dark:bg-[#1A1D1F] rounded-lg p-6 space-y-4 border border-gray-200 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white">Nguồn nội dung</h2>

          {/* User selection for featured_users */}
          {isFeaturedUsers ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Loại người dùng</label>
                <div className="grid grid-cols-2 gap-3">
                  {USER_SELECTION_TYPES.map(type => (
                    <label
                      key={type.value}
                      className={`flex flex-col p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                        formData.selection_data.user_type === type.value
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="user_type"
                        value={type.value}
                        checked={formData.selection_data.user_type === type.value}
                        onChange={(e) => setFormData({
                          ...formData,
                          selection_type: e.target.value,
                          selection_data: { ...formData.selection_data, user_type: e.target.value }
                        })}
                        className="sr-only"
                      />
                      <span className="font-medium text-gray-900 dark:text-white">{type.label}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{type.description}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Custom user selection */}
              {showUserSelect && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Chọn người dùng</label>
                  <input
                    type="text"
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    placeholder="Tìm kiếm người dùng..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md mb-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  {userSearchResults.length > 0 && (
                    <div className="space-y-2 max-h-40 overflow-y-auto mb-3 border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                      {userSearchResults.map(user => (
                        <div
                          key={user.id}
                          onClick={() => addUser(user)}
                          className="flex items-center gap-3 p-2 bg-white dark:bg-gray-700 rounded-md cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm">
                            {user.avatar ? (
                              <img src={user.avatar} alt="" className="w-full h-full rounded-full object-cover" />
                            ) : (
                              user.display_name?.charAt(0).toUpperCase()
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 dark:text-white text-sm">{user.display_name}</p>
                            <p className="text-xs text-gray-500">@{user.username}</p>
                          </div>
                          <span className="text-blue-500">+</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Selected users */}
                  <div className="flex flex-wrap gap-2">
                    {selectedUsers.map(user => (
                      <span
                        key={user.id}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm"
                      >
                        {user.display_name}
                        <button type="button" onClick={() => removeUser(user.id)} className="hover:text-red-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cách lấy bài viết</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {SELECTION_TYPES.map(type => (
                  <label
                    key={type.value}
                    className={`flex items-center justify-center p-2 border-2 rounded-md cursor-pointer text-sm transition-colors ${
                      formData.selection_type === type.value
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="selection_type"
                      value={type.value}
                      checked={formData.selection_type === type.value}
                      onChange={(e) => setFormData({ ...formData, selection_type: e.target.value })}
                      className="sr-only"
                    />
                    {type.label}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Category selection */}
          {showCategorySelect && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Chọn danh mục {formData.selection_type === 'category' ? '(1)' : '(nhiều)'}
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                      formData.selection_data.category_ids.includes(cat.id)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tag selection */}
          {showTagSelect && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Chọn tag {formData.selection_type === 'tag' ? '(1)' : '(nhiều)'}
              </label>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                {tags.map(tag => (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => toggleTag(tag.id)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                      formData.selection_data.tag_ids.includes(tag.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    #{tag.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Số lượng bài hiển thị</label>
            <input
              type="number"
              min="1"
              max="50"
              value={formData.display_limit}
              onChange={(e) => setFormData({ ...formData, display_limit: parseInt(e.target.value) || 5 })}
              className="w-32 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Display settings */}
        <div className="bg-white dark:bg-[#1A1D1F] rounded-lg p-6 space-y-4 border border-gray-200 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white">Hiển thị</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Giao diện</label>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
              {LAYOUTS.map(layout => (
                <button
                  key={layout.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, display_layout: layout.value })}
                  className={`flex flex-col items-center p-3 border-2 rounded-lg transition-colors ${
                    formData.display_layout === layout.value
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {LayoutIcons[layout.value]}
                  <span className="text-xs mt-1 text-gray-700 dark:text-gray-300">{layout.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Vị trí</label>
              <div className="flex gap-2">
                <label className={`flex-1 flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer text-gray-700 dark:text-gray-300 ${
                  formData.position === 'main' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' : 'border-gray-200 dark:border-gray-700'
                }`}>
                  <input
                    type="radio"
                    name="position"
                    value="main"
                    checked={formData.position === 'main'}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="sr-only"
                  />
                  <span>Nội dung chính</span>
                </label>
                <label className={`flex-1 flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer text-gray-700 dark:text-gray-300 ${
                  formData.position === 'sidebar' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' : 'border-gray-200 dark:border-gray-700'
                }`}>
                  <input
                    type="radio"
                    name="position"
                    value="sidebar"
                    checked={formData.position === 'sidebar'}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="sr-only"
                  />
                  <span>Sidebar</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Trạng thái</label>
              <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={formData.is_visible}
                  onChange={(e) => setFormData({ ...formData, is_visible: e.target.checked })}
                  className="w-5 h-5 rounded text-blue-500"
                />
                <span>Hiển thị section này</span>
              </label>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <Link
            href="/admin/homepage"
            className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Hủy
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 bg-[#2A85FF] text-white rounded-md hover:bg-[#2A85FF]/90 disabled:opacity-50 font-semibold"
          >
            {saving ? 'Đang tạo...' : 'Tạo section'}
          </button>
        </div>
      </form>
    </div>
  );
}
