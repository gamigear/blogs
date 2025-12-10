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

const SECTION_TYPES = [
  { value: 'hero_slider', label: 'Slider nổi bật', description: 'Slider lớn ở đầu trang' },
  { value: 'featured_grid', label: 'Lưới bài viết', description: 'Hiển thị bài viết dạng lưới' },
  { value: 'category_articles', label: 'Bài theo danh mục', description: 'Bài viết từ danh mục cụ thể' },
  { value: 'latest_articles', label: 'Bài mới nhất', description: 'Danh sách bài mới nhất' },
  { value: 'tag_articles', label: 'Bài theo tag', description: 'Bài viết theo tag' },
  { value: 'manual_articles', label: 'Chọn thủ công', description: 'Tự chọn từng bài viết' },
  { value: 'sidebar_widget', label: 'Widget sidebar', description: 'Widget cho sidebar' },
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

const LAYOUTS = [
  { value: 'grid', label: 'Lưới', icon: '▦' },
  { value: 'list', label: 'Danh sách', icon: '☰' },
  { value: 'slider', label: 'Slider', icon: '◀▶' },
  { value: 'featured_large', label: 'Nổi bật lớn', icon: '▣' },
  { value: 'sidebar', label: 'Sidebar', icon: '▤' },
  { value: 'compact', label: 'Thu gọn', icon: '▥' },
  { value: 'cards', label: 'Cards', icon: '▢' },
  { value: 'magazine', label: 'Magazine', icon: '▧' },
];

export default function NewHomepageSectionPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

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
    },
  });

  useEffect(() => {
    // Fetch categories and tags
    Promise.all([
      fetch('/api/admin/categories').then(r => r.json()),
      fetch('/api/admin/tags').then(r => r.json()),
    ]).then(([catData, tagData]) => {
      setCategories(catData.categories || []);
      setTags(tagData.tags || []);
    });
  }, []);

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

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Thêm section mới</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Tạo section mới cho trang chủ</p>
        </div>
        <Link href="/admin/homepage" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white">
          ← Quay lại
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
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <span className="text-2xl">{layout.icon}</span>
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
