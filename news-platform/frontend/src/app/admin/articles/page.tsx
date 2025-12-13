'use client';

import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';

interface Article {
  id: number;
  title: string;
  slug: string;
  status: string;
  published_at: string | null;
  created_at: string;
  author_name: string;
  category_name: string;
  category_id: number;
  view_count: number;
  reviewed_at: string | null;
  reviewer_name: string | null;
  rejection_reason: string | null;
}

interface Category {
  id: number;
  name: string;
}

type TabType = 'all' | 'pending_review' | 'published' | 'rejected' | 'draft';

const tabs: { key: TabType; label: string }[] = [
  { key: 'all', label: 'Tất cả' },
  { key: 'pending_review', label: 'Chờ duyệt' },
  { key: 'published', label: 'Đã xuất bản' },
  { key: 'rejected', label: 'Đã từ chối' },
  { key: 'draft', label: 'Bản nháp' },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatDateTime(dateStr: string) {
  const d = new Date(dateStr);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('/api/admin/categories');
        if (res.ok) {
          const data = await res.json();
          setCategories(data.categories || []);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchCategories();
  }, []);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (activeTab !== 'all') params.set('status', activeTab);
      if (search.trim()) params.set('search', search.trim());
      if (categoryId) params.set('category_id', categoryId);
      
      const queryString = params.toString();
      const res = await fetch(`/api/admin/articles${queryString ? `?${queryString}` : ''}`);
      if (res.ok) {
        const data = await res.json();
        setArticles(data.articles || []);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  }, [activeTab, search, categoryId]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchArticles();
    }, 300);
    return () => clearTimeout(debounce);
  }, [fetchArticles]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Quản lý bài viết</h1>
          <p className="text-gray-500 mt-1">Tổng cộng {articles.length} bài viết</p>
        </div>
        <Link href="/admin/articles/new" className="flex items-center gap-2 px-5 py-3 rounded-md bg-[#2A85FF] text-white hover:bg-[#2A85FF]/90 transition-colors font-semibold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Tạo bài viết mới
        </Link>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? 'border-[#2A85FF] text-[#2A85FF]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Filters */}
      <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[250px]">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Tìm theo tiêu đề hoặc tên tác giả..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {search && (
                <button 
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <select 
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Tất cả danh mục</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          {(search || categoryId) && (
            <button
              onClick={() => { setSearch(''); setCategoryId(''); }}
              className="px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              Xóa bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md bg-white dark:bg-[#1A1D1F] overflow-hidden">
        {!mounted || loading ? (
          <div className="p-12 text-center">
            <div className="animate-spin w-8 h-8 border-4 border-[#2A85FF] border-t-transparent rounded-full mx-auto"></div>
            <p className="text-gray-500 mt-4">Đang tải...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#EFEFEF] dark:border-[#272B30]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Tiêu đề</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Tác giả</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Danh mục</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Trạng thái</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Lượt xem</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Ngày tạo</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-500">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id} className="border-b border-[#EFEFEF] dark:border-[#272B30] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <Link href={`/admin/articles/${article.id}/edit`} className="font-semibold text-gray-900 dark:text-white hover:text-gray-600 truncate block max-w-[300px]">{article.title}</Link>
                          <Link href={`/article/${article.slug}`} target="_blank" className="text-xs text-gray-500 hover:text-gray-600">/{article.slug}</Link>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900 dark:text-white">{article.author_name || 'N/A'}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500">{article.category_name || 'Chưa phân loại'}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-md ${
                          article.status === 'published' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' : 
                          article.status === 'pending_review' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400' :
                          article.status === 'rejected' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400' :
                          article.status === 'draft' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400' : 
                          'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                        }`}>
                          {article.status === 'published' ? '✓ Đã xuất bản' : 
                           article.status === 'pending_review' ? '⏳ Chờ duyệt' :
                           article.status === 'rejected' ? '✗ Từ chối' :
                           article.status === 'draft' ? 'Nháp' : 
                           article.status === 'archived' ? 'Lưu trữ' : article.status}
                        </span>
                        {article.reviewer_name && article.reviewed_at && (
                          <div className="mt-1 text-[10px] text-gray-500">
                            {article.status === 'published' ? 'Duyệt bởi' : 'Từ chối bởi'}: {article.reviewer_name}
                            <br />
                            {formatDateTime(article.reviewed_at)}
                          </div>
                        )}
                        {article.status === 'rejected' && article.rejection_reason && (
                          <div className="mt-1 text-[10px] text-red-600 dark:text-red-400 max-w-[200px] truncate" title={article.rejection_reason}>
                            Lý do: {article.rejection_reason}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900 dark:text-white">{article.view_count.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-500">{formatDate(article.created_at)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {article.status === 'pending_review' && (
                          <Link href={`/admin/articles/${article.id}/edit`} className="px-3 py-1.5 rounded-md bg-green-500 text-white text-xs font-medium hover:bg-green-600 transition-colors">
                            Duyệt bài
                          </Link>
                        )}
                        <Link href={`/admin/articles/${article.id}/edit`} className="w-9 h-9 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-900/10 transition-colors" title="Chỉnh sửa">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </Link>
                        <Link href={`/article/${article.slug}`} target="_blank" className="w-9 h-9 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-600/10 transition-colors" title="Xem trước">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </Link>
                        <button className="w-9 h-9 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Xóa">
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
        {mounted && !loading && articles.length === 0 && (
          <div className="p-12 text-center">
            <div className="w-16 h-16 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500">
              {search || categoryId ? 'Không tìm thấy bài viết phù hợp' :
               activeTab === 'pending_review' ? 'Không có bài viết nào đang chờ duyệt' :
               activeTab === 'published' ? 'Không có bài viết nào đã xuất bản' :
               activeTab === 'rejected' ? 'Không có bài viết nào bị từ chối' :
               activeTab === 'draft' ? 'Không có bản nháp nào' :
               'Chưa có bài viết nào'}
            </p>
            {!search && !categoryId && (
              <Link href="/admin/articles/new" className="inline-flex items-center gap-2 mt-4 text-[#2A85FF] hover:underline font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Tạo bài viết đầu tiên
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
