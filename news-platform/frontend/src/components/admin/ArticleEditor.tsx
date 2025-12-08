'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Article {
  id?: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category_id: number;
  status: string;
  featured_image: string;
  seo: {
    meta_title: string;
    meta_description: string;
  };
}

interface Props {
  categories: Category[];
  article?: Article;
}

export function ArticleEditor({ categories, article }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Article>({
    title: article?.title || '',
    slug: article?.slug || '',
    excerpt: article?.excerpt || '',
    content: article?.content || '',
    category_id: article?.category_id || (categories[0]?.id || 0),
    status: article?.status || 'draft',
    featured_image: article?.featured_image || '',
    seo: {
      meta_title: article?.seo?.meta_title || '',
      meta_description: article?.seo?.meta_description || '',
    },
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: formData.slug || generateSlug(title),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content || !formData.category_id) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    setLoading(true);
    try {
      const url = article?.id 
        ? `/api/admin/articles/${article.id}` 
        : '/api/admin/articles';
      
      const method = article?.id ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to save article');
      }

      const data = await res.json();
      alert(article?.id ? 'Cập nhật thành công!' : 'Tạo bài viết thành công!');
      router.push('/admin/articles');
    } catch (error) {
      console.error('Error saving article:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const handlePublish = async () => {
    setFormData({ ...formData, status: 'published' });
    // Submit will be triggered by form
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tiêu đề *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-lg"
                  placeholder="Nhập tiêu đề bài viết..."
                  disabled={loading}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Slug
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg text-sm font-mono"
                  placeholder="url-friendly-slug"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tóm tắt
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  rows={3}
                  placeholder="Mô tả ngắn về bài viết..."
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung * (Markdown)
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg font-mono text-sm"
                  rows={20}
                  placeholder="Viết nội dung bài viết bằng Markdown..."
                  disabled={loading}
                  required
                />
              </div>
            </div>
          </div>

          {/* SEO Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">SEO</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={formData.seo.meta_title}
                  onChange={(e) => setFormData({
                    ...formData,
                    seo: { ...formData.seo, meta_title: e.target.value }
                  })}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Tiêu đề hiển thị trên Google..."
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Description
                </label>
                <textarea
                  value={formData.seo.meta_description}
                  onChange={(e) => setFormData({
                    ...formData,
                    seo: { ...formData.seo, meta_description: e.target.value }
                  })}
                  className="w-full px-3 py-2 border rounded-lg"
                  rows={2}
                  placeholder="Mô tả hiển thị trên Google..."
                  disabled={loading}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish Box */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Xuất bản</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Trạng thái
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  disabled={loading}
                >
                  <option value="draft">Bản nháp</option>
                  <option value="pending_review">Chờ duyệt</option>
                  <option value="published">Đã xuất bản</option>
                  <option value="archived">Lưu trữ</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Danh mục *
                </label>
                <select
                  value={formData.category_id}
                  onChange={(e) => setFormData({ ...formData, category_id: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border rounded-lg"
                  disabled={loading}
                  required
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50"
                >
                  {loading ? 'Đang lưu...' : 'Lưu nháp'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, status: 'published' });
                    setTimeout(() => {
                      document.querySelector('form')?.requestSubmit();
                    }, 0);
                  }}
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  Xuất bản
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Ảnh đại diện</h3>
            <div>
              <input
                type="url"
                value={formData.featured_image}
                onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg text-sm"
                placeholder="https://example.com/image.jpg"
                disabled={loading}
              />
              {formData.featured_image && (
                <img
                  src={formData.featured_image}
                  alt="Preview"
                  className="mt-3 w-full rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
