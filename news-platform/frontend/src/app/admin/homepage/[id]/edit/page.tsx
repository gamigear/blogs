'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

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

interface Article {
  id: number;
  title: string;
  slug: string;
  featured_image: string | null;
  published_at: string;
  category_name?: string;
  sort_order?: number;
}

interface HomepageSection {
  id: number;
  name: string;
  title: string | null;
  section_type: string;
  selection_type: string;
  selection_data: any;
  display_limit: number;
  display_layout: string;
  display_settings: any;
  is_visible: boolean;
  position: string;
}

const SECTION_TYPES = [
  { value: 'hero_slider', label: 'Slider nổi bật' },
  { value: 'featured_grid', label: 'Lưới bài viết' },
  { value: 'category_articles', label: 'Bài theo danh mục' },
  { value: 'latest_articles', label: 'Bài mới nhất' },
  { value: 'tag_articles', label: 'Bài theo tag' },
  { value: 'manual_articles', label: 'Chọn thủ công' },
  { value: 'sidebar_widget', label: 'Widget sidebar' },
];

const SELECTION_TYPES = [
  { value: 'auto', label: 'Tự động' },
  { value: 'manual', label: 'Thủ công' },
  { value: 'category', label: '1 danh mục' },
  { value: 'categories', label: 'Nhiều danh mục' },
  { value: 'tag', label: '1 tag' },
  { value: 'tags', label: 'Nhiều tags' },
  { value: 'featured', label: 'Nổi bật' },
  { value: 'popular', label: 'Đọc nhiều' },
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

export default function EditHomepageSectionPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedArticles, setSelectedArticles] = useState<Article[]>([]);
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showArticlePicker, setShowArticlePicker] = useState(false);

  const [formData, setFormData] = useState<HomepageSection>({
    id: 0,
    name: '',
    title: '',
    section_type: 'featured_grid',
    selection_type: 'auto',
    selection_data: { category_ids: [], tag_ids: [] },
    display_limit: 6,
    display_layout: 'grid',
    display_settings: {},
    is_visible: true,
    position: 'main',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sectionRes, catRes, tagRes] = await Promise.all([
          fetch(`/api/admin/homepage/${id}`),
          fetch('/api/admin/categories'),
          fetch('/api/admin/tags'),
        ]);

        const sectionData = await sectionRes.json();
        const catData = await catRes.json();
        const tagData = await tagRes.json();

        if (sectionData.section) {
          setFormData(sectionData.section);
          setSelectedArticles(sectionData.selectedArticles || []);
        }
        setCategories(catData.categories || []);
        setTags(tagData.tags || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const searchArticles = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    try {
      const res = await fetch(`/api/admin/homepage/articles?search=${encodeURIComponent(query)}&limit=10`);
      const data = await res.json();
      setSearchResults(data.articles || []);
    } catch (error) {
      console.error('Error searching articles:', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => searchArticles(searchQuery), 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/homepage/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          article_ids: selectedArticles.map(a => a.id),
        }),
      });

      if (!res.ok) throw new Error('Failed to update');
      router.push('/admin/homepage');
    } catch (error) {
      alert('Có lỗi xảy ra');
    } finally {
      setSaving(false);
    }
  };

  const addArticle = (article: Article) => {
    if (!selectedArticles.find(a => a.id === article.id)) {
      setSelectedArticles([...selectedArticles, article]);
    }
    setSearchQuery('');
    setSearchResults([]);
  };

  const removeArticle = (articleId: number) => {
    setSelectedArticles(selectedArticles.filter(a => a.id !== articleId));
  };

  const moveArticle = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= selectedArticles.length) return;
    const newArticles = [...selectedArticles];
    [newArticles[index], newArticles[newIndex]] = [newArticles[newIndex], newArticles[index]];
    setSelectedArticles(newArticles);
  };

  const toggleCategory = (catId: number) => {
    const current = formData.selection_data?.category_ids || [];
    const updated = current.includes(catId)
      ? current.filter((c: number) => c !== catId)
      : [...current, catId];
    setFormData({
      ...formData,
      selection_data: { ...formData.selection_data, category_ids: updated }
    });
  };

  const toggleTag = (tagId: number) => {
    const current = formData.selection_data?.tag_ids || [];
    const updated = current.includes(tagId)
      ? current.filter((t: number) => t !== tagId)
      : [...current, tagId];
    setFormData({
      ...formData,
      selection_data: { ...formData.selection_data, tag_ids: updated }
    });
  };

  if (loading) {
    return <div className="p-12 text-center text-gray-500">Đang tải...</div>;
  }

  const showCategorySelect = ['category', 'categories'].includes(formData.selection_type);
  const showTagSelect = ['tag', 'tags'].includes(formData.selection_type);
  const showManualSelect = formData.selection_type === 'manual';

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Chỉnh sửa section</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{formData.name}</p>
        </div>
        <Link href="/admin/homepage" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white">
          ← Quay lại
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic info */}
            <div className="bg-white dark:bg-[#1A1D1F] rounded-lg p-6 space-y-4 border border-gray-200 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white">Thông tin cơ bản</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tên section</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tiêu đề hiển thị</label>
                  <input
                    type="text"
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Loại section</label>
                  <select
                    value={formData.section_type}
                    onChange={(e) => setFormData({ ...formData, section_type: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    {SECTION_TYPES.map(t => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cách lấy bài</label>
                  <select
                    value={formData.selection_type}
                    onChange={(e) => setFormData({ ...formData, selection_type: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    {SELECTION_TYPES.map(t => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Category/Tag selection */}
            {(showCategorySelect || showTagSelect) && (
              <div className="bg-white dark:bg-[#1A1D1F] rounded-lg p-6 space-y-4 border border-gray-200 dark:border-gray-700">
                <h2 className="font-semibold text-gray-900 dark:text-white">Lọc nội dung</h2>
                
                {showCategorySelect && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Danh mục</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(cat => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => toggleCategory(cat.id)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                            (formData.selection_data?.category_ids || []).includes(cat.id)
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

                {showTagSelect && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags</label>
                    <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                      {tags.map(tag => (
                        <button
                          key={tag.id}
                          type="button"
                          onClick={() => toggleTag(tag.id)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                            (formData.selection_data?.tag_ids || []).includes(tag.id)
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
              </div>
            )}

            {/* Manual article selection */}
            {showManualSelect && (
              <div className="bg-white dark:bg-[#1A1D1F] rounded-lg p-6 space-y-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-gray-900 dark:text-white">Chọn bài viết ({selectedArticles.length})</h2>
                  <button
                    type="button"
                    onClick={() => setShowArticlePicker(!showArticlePicker)}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    {showArticlePicker ? 'Đóng' : '+ Thêm bài viết'}
                  </button>
                </div>

                {showArticlePicker && (
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Tìm kiếm bài viết..."
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md mb-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    {searchResults.length > 0 && (
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {searchResults.map(article => (
                          <div
                            key={article.id}
                            onClick={() => addArticle(article)}
                            className="flex items-center gap-3 p-2 bg-white dark:bg-gray-700 rounded-md cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30"
                          >
                            {article.featured_image && (
                              <Image
                                src={article.featured_image}
                                alt=""
                                width={48}
                                height={48}
                                className="w-12 h-12 object-cover rounded"
                              />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-gray-900 dark:text-white truncate">{article.title}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{article.category_name}</p>
                            </div>
                            <span className="text-blue-500">+</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Selected articles list */}
                <div className="space-y-2">
                  {selectedArticles.map((article, index) => (
                    <div key={article.id} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="text-gray-400 font-mono text-sm w-6">{index + 1}</span>
                      {article.featured_image && (
                        <Image
                          src={article.featured_image}
                          alt=""
                          width={48}
                          height={48}
                          className="w-12 h-12 object-cover rounded"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 dark:text-white truncate">{article.title}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => moveArticle(index, 'up')}
                          disabled={index === 0}
                          className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30"
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          onClick={() => moveArticle(index, 'down')}
                          disabled={index === selectedArticles.length - 1}
                          className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30"
                        >
                          ↓
                        </button>
                        <button
                          type="button"
                          onClick={() => removeArticle(article.id)}
                          className="p-1 text-red-400 hover:text-red-600"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                  {selectedArticles.length === 0 && (
                    <p className="text-center text-gray-400 py-4">Chưa chọn bài viết nào</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar settings */}
          <div className="space-y-6">
            {/* Display settings */}
            <div className="bg-white dark:bg-[#1A1D1F] rounded-lg p-6 space-y-4 border border-gray-200 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white">Hiển thị</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Giao diện</label>
                <select
                  value={formData.display_layout}
                  onChange={(e) => setFormData({ ...formData, display_layout: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  {LAYOUTS.map(l => (
                    <option key={l.value} value={l.value}>{l.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Số bài hiển thị</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={formData.display_limit}
                  onChange={(e) => setFormData({ ...formData, display_limit: parseInt(e.target.value) || 5 })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Vị trí</label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="main">Nội dung chính</option>
                  <option value="sidebar">Sidebar</option>
                </select>
              </div>

              <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={formData.is_visible}
                  onChange={(e) => setFormData({ ...formData, is_visible: e.target.checked })}
                  className="w-5 h-5 rounded text-blue-500"
                />
                <span>Hiển thị section</span>
              </label>
            </div>

            {/* Actions */}
            <div className="bg-white dark:bg-[#1A1D1F] rounded-lg p-6 space-y-3 border border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={saving}
                className="w-full px-6 py-3 bg-[#2A85FF] text-white rounded-md hover:bg-[#2A85FF]/90 disabled:opacity-50 font-semibold"
              >
                {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
              </button>
              <Link
                href="/admin/homepage"
                className="block w-full px-6 py-3 text-center text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Hủy
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
