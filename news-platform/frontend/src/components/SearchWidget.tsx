'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface SearchWidgetProps {
  categories?: Category[];
  compact?: boolean;
  showTips?: boolean;
}

export function SearchWidget({ categories = [], compact = false, showTips = true }: SearchWidgetProps) {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim() && !category && !dateRange) return;

    setIsLoading(true);
    const params = new URLSearchParams();
    
    if (keyword.trim()) params.set('q', keyword.trim());
    if (category) params.set('category', category);
    
    // Handle date range presets
    if (dateRange) {
      const today = new Date();
      let from = '';
      
      switch (dateRange) {
        case 'today':
          from = today.toISOString().split('T')[0];
          break;
        case 'week':
          from = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
          break;
        case 'month':
          from = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
          break;
        case 'year':
          from = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
          break;
      }
      
      if (from) {
        params.set('from', from);
        params.set('to', today.toISOString().split('T')[0]);
      }
    }

    router.push(`/search?${params.toString()}`);
  };

  const quickSearch = (term: string) => {
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <aside className="bg-white rounded-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-blue-600 px-4 py-3">
        <h3 className="font-semibold text-white flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Tìm kiếm nâng cao
        </h3>
      </div>

      <form onSubmit={handleSearch} className="p-4 space-y-4">
        {/* Keyword input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Từ khóa
          </label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Nhập từ khóa..."
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Category select */}
        {categories.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Danh mục
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
            >
              <option value="">Tất cả danh mục</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Date range */}
        {!compact && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thời gian
            </label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
            >
              <option value="">Tất cả thời gian</option>
              <option value="today">Hôm nay</option>
              <option value="week">7 ngày qua</option>
              <option value="month">30 ngày qua</option>
              <option value="year">Năm nay</option>
            </select>
          </div>
        )}

        {/* Search button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Đang tìm...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Tìm kiếm
            </>
          )}
        </button>

        {/* Advanced search link */}
        <div className="text-center">
          <Link 
            href="/search" 
            className="text-xs text-gray-500 hover:text-primary transition-colors"
          >
            Tìm kiếm chi tiết hơn
          </Link>
        </div>
      </form>

      {/* Quick search tags */}
      {!compact && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-3">
          <p className="text-xs text-gray-500 mb-2">Tìm nhanh:</p>
          <div className="flex flex-wrap gap-1.5">
            {['Công nghệ', 'Kinh tế', 'Thể thao', 'Giải trí'].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => quickSearch(term)}
                className="px-2.5 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search tips */}
      {showTips && !compact && (
        <div className="bg-blue-50 px-4 py-3 border-t border-blue-100">
          <p className="text-xs text-blue-700">
            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            <span className="font-medium">Mẹo:</span> Kết hợp từ khóa với danh mục để có kết quả chính xác hơn
          </p>
        </div>
      )}
    </aside>
  );
}

// Compact version for smaller spaces
export function SearchWidgetCompact({ categories = [] }: { categories?: Category[] }) {
  return <SearchWidget categories={categories} compact showTips={false} />;
}
