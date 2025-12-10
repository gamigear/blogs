'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewPagePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    status: 'draft',
    template: 'default',
    show_in_menu: false,
    seo: { meta_title: '', meta_description: '' },
  });

  const generateSlug = (title: string) => title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) { alert('Vui lòng nhập tiêu đề'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to create');
      alert('Tạo trang thành công!');
      router.push('/admin/pages');
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/pages" className="w-10 h-10 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tạo trang mới</h1>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-6 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Tiêu đề *</label>
              <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: formData.slug || generateSlug(e.target.value) })} required
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" placeholder="Nhập tiêu đề trang..." />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Slug</label>
              <input type="text" value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700" placeholder="url-slug" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Nội dung (Markdown)</label>
              <textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} rows={15}
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 resize-none" placeholder="Viết nội dung trang..." />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-6 space-y-4">
            <h3 className="font-bold text-gray-900 dark:text-white">Xuất bản</h3>
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Trạng thái</label>
              <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700">
                <option value="draft">Bản nháp</option>
                <option value="published">Đã xuất bản</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Template</label>
              <select value={formData.template} onChange={(e) => setFormData({ ...formData, template: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700">
                <option value="default">Mặc định</option>
                <option value="full-width">Full Width</option>
                <option value="contact">Liên hệ</option>
              </select>
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={formData.show_in_menu} onChange={(e) => setFormData({ ...formData, show_in_menu: e.target.checked })} className="w-5 h-5" />
              <span className="text-gray-900 dark:text-white">Hiển thị trong menu</span>
            </label>
            <button type="submit" disabled={loading} className="w-full px-4 py-3 rounded-md bg-[#2A85FF] text-white hover:bg-[#2A85FF]/90 transition-colors font-semibold disabled:opacity-50">
              {loading ? 'Đang lưu...' : 'Lưu trang'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
