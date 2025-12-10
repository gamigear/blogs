'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Page {
  id: number;
  title: string;
  slug: string;
  status: string;
  template: string;
  show_in_menu: boolean;
  created_at: string;
  created_by_name: string | null;
}

export default function PagesPage() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPages = async () => {
    try {
      const res = await fetch('/api/admin/pages');
      const data = await res.json();
      setPages(data.pages || []);
    } catch (error) {
      console.error('Error fetching pages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPages(); }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Bạn có chắc muốn xóa trang này?')) return;
    try {
      const res = await fetch(`/api/admin/pages/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      fetchPages();
    } catch (error) {
      alert('Có lỗi xảy ra');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Quản lý trang</h1>
          <p className="text-gray-500 mt-1">Tổng cộng {pages.length} trang</p>
        </div>
        <Link href="/admin/pages/new" className="flex items-center gap-2 px-5 py-3 rounded-md bg-[#2A85FF] text-white hover:bg-[#2A85FF]/90 transition-colors font-semibold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Tạo trang mới
        </Link>
      </div>

      <div className="rounded-md bg-white dark:bg-[#1A1D1F] overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500">Đang tải...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Tiêu đề</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Slug</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Template</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Trạng thái</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Menu</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-500">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page) => (
                  <tr key={page.id} className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">{page.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-500 font-mono">/{page.slug}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500">{page.template}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-md ${page.status === 'published' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'}`}>
                        {page.status === 'published' ? 'Đã xuất bản' : 'Nháp'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {page.show_in_menu ? (
                        <span className="text-[#83BF6E]">✓</span>
                      ) : (
                        <span className="text-gray-500">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/admin/pages/${page.id}/edit`} className="w-9 h-9 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-900/10 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </Link>
                        <Link href={`/${page.slug}`} target="_blank" className="w-9 h-9 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-600/10 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </Link>
                        <button onClick={() => handleDelete(page.id)} className="w-9 h-9 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-800/10 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {!loading && pages.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-gray-500">Chưa có trang nào</p>
          </div>
        )}
      </div>
    </div>
  );
}
