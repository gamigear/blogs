'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import MediaPicker from './MediaPicker';
import { MediaFile } from '@/types/media';
import { slugify } from '@/lib/slugify';

// Dynamic import to avoid SSR issues with TinyMCE
const RichTextEditor = dynamic(() => import('./RichTextEditor'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
      <span className="text-gray-500">Đang tải trình soạn thảo...</span>
    </div>
  )
});

interface Category { id: number; name: string; slug: string; }
interface Tag { id: number; name: string; slug: string; }
interface Article {
  id?: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category_id: number;
  status: string;
  featured_image: string;
  seo: { meta_title: string; meta_description: string; };
  tag_ids?: number[];
}
interface Props { categories: Category[]; article?: Article; initialTags?: number[]; }

export function ArticleEditor({ categories, article, initialTags = [] }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<number[]>(initialTags);
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const [showContentMediaPicker, setShowContentMediaPicker] = useState(false);
  const editorRef = useRef<any>(null);
  const [formData, setFormData] = useState<Article>({
    title: article?.title || '',
    slug: article?.slug || '',
    excerpt: article?.excerpt || '',
    content: article?.content || '',
    category_id: article?.category_id || (categories[0]?.id || 0),
    status: article?.status || 'draft',
    featured_image: article?.featured_image || '',
    seo: { meta_title: article?.seo?.meta_title || '', meta_description: article?.seo?.meta_description || '' },
  });

  useEffect(() => {
    fetch('/api/admin/tags').then(res => res.json()).then(data => setTags(data.tags || [])).catch(() => {});
  }, []);

  const handleTitleChange = (title: string) => setFormData({ ...formData, title, slug: formData.slug || slugify(title) });

  const toggleTag = (tagId: number) => {
    setSelectedTags(prev => prev.includes(tagId) ? prev.filter(id => id !== tagId) : [...prev, tagId]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.category_id) { alert('Vui lòng điền đầy đủ thông tin bắt buộc'); return; }
    setLoading(true);
    try {
      const url = article?.id ? `/api/admin/articles/${article.id}` : '/api/admin/articles';
      const res = await fetch(url, { method: article?.id ? 'PATCH' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, tag_ids: selectedTags }) });
      if (!res.ok) { const error = await res.json(); throw new Error(error.message || 'Failed to save article'); }
      alert(article?.id ? 'Cập nhật thành công!' : 'Tạo bài viết thành công!');
      router.push('/admin/articles');
    } catch (error) { console.error('Error saving article:', error); alert('Có lỗi xảy ra. Vui lòng thử lại.'); }
    finally { setLoading(false); }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-6">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Tiêu đề *</label>
                <input type="text" value={formData.title} onChange={(e) => handleTitleChange(e.target.value)} disabled={loading} required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nhập tiêu đề bài viết..." />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Slug</label>
                <div className="flex gap-2">
                  <input type="text" value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} disabled={loading}
                    className="flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="url-friendly-slug" />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, slug: slugify(formData.title) })}
                    disabled={loading || !formData.title}
                    className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
                    title="Tạo slug từ tiêu đề"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Tóm tắt</label>
                <textarea value={formData.excerpt} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} disabled={loading} rows={3}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Mô tả ngắn về bài viết..." />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Nội dung *</label>
                <RichTextEditor
                  value={formData.content}
                  onChange={(content) => setFormData({ ...formData, content })}
                  disabled={loading}
                  placeholder="Viết nội dung bài viết..."
                  onMediaInsert={() => setShowContentMediaPicker(true)}
                />
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-6">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">SEO</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Meta Title</label>
                <input type="text" value={formData.seo.meta_title} onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, meta_title: e.target.value } })} disabled={loading}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tiêu đề hiển thị trên Google..." />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Meta Description</label>
                <textarea value={formData.seo.meta_description} onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, meta_description: e.target.value } })} disabled={loading} rows={2}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Mô tả hiển thị trên Google..." />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-6">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Xuất bản</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Trạng thái</label>
                <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} disabled={loading}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="draft">Bản nháp</option>
                  <option value="pending_review">Chờ duyệt</option>
                  <option value="published">Đã xuất bản</option>
                  <option value="archived">Lưu trữ</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Danh mục *</label>
                <select value={formData.category_id} onChange={(e) => setFormData({ ...formData, category_id: parseInt(e.target.value) })} disabled={loading} required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  {categories.map((cat) => (<option key={cat.id} value={cat.id}>{cat.name}</option>))}
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="submit" disabled={loading} className="flex-1 px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-semibold disabled:opacity-50">
                  {loading ? 'Đang lưu...' : 'Lưu nháp'}
                </button>
                <button type="button" disabled={loading} onClick={() => { setFormData({ ...formData, status: 'published' }); setTimeout(() => document.querySelector('form')?.requestSubmit(), 0); }}
                  className="flex-1 px-4 py-3 rounded-md bg-[#2A85FF] text-white hover:bg-[#2A85FF]/90 transition-colors font-semibold disabled:opacity-50">
                  Xuất bản
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-6">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button key={tag.id} type="button" onClick={() => toggleTag(tag.id)}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors ${selectedTags.includes(tag.id) ? 'bg-[#2A85FF] text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                  {tag.name}
                </button>
              ))}
              {tags.length === 0 && <p className="text-sm text-gray-500">Chưa có tag nào</p>}
            </div>
          </div>

          <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-6">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Ảnh đại diện</h3>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setShowMediaPicker(true)}
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Chọn từ thư viện
              </button>
              <div className="text-center text-xs text-gray-500">hoặc</div>
              <input type="url" value={formData.featured_image} onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })} disabled={loading}
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nhập URL ảnh..." />
            </div>
            {formData.featured_image && (
              <div className="mt-4 relative group">
                <img src={formData.featured_image} alt="Preview" className="w-full rounded-md" />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, featured_image: '' })}
                  className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Media Picker Modal for Featured Image */}
      {showMediaPicker && (
        <MediaPicker
          accept="image/*"
          onSelect={(file: MediaFile) => {
            setFormData({ ...formData, featured_image: file.url });
            setShowMediaPicker(false);
          }}
          onClose={() => setShowMediaPicker(false)}
        />
      )}

      {/* Media Picker Modal for Content */}
      {showContentMediaPicker && (
        <MediaPicker
          accept="image/*,video/*"
          onSelect={(file: MediaFile) => {
            // Insert media into content
            const isVideo = file.mime_type?.startsWith('video/');
            const mediaHtml = isVideo 
              ? `<video controls src="${file.url}" style="max-width: 100%;"></video>`
              : `<img src="${file.url}" alt="${file.filename || 'Image'}" style="max-width: 100%;" />`;
            setFormData({ ...formData, content: formData.content + '\n' + mediaHtml });
            setShowContentMediaPicker(false);
          }}
          onClose={() => setShowContentMediaPicker(false)}
        />
      )}
    </form>
  );
}
