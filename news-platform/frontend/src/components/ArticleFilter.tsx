'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Category } from '@/types';

interface ArticleFilterProps {
  categories: Category[];
  initialFilters?: {
    keyword?: string;
    category?: string;
    dateFrom?: string;
    dateTo?: string;
    sortBy?: string;
  };
}

export function ArticleFilter({ categories, initialFilters = {} }: ArticleFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [keyword, setKeyword] = useState(initialFilters.keyword || '');
  const [category, setCategory] = useState(initialFilters.category || '');
  const [dateFrom, setDateFrom] = useState(initialFilters.dateFrom || '');
  const [dateTo, setDateTo] = useState(initialFilters.dateTo || '');
  const [sortBy, setSortBy] = useState(initialFilters.sortBy || 'newest');
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if any advanced filter is active
  const hasAdvancedFilters = category || dateFrom || dateTo || sortBy !== 'newest';

  useEffect(() => {
    // Sync with URL params on mount
    setKeyword(searchParams.get('q') || '');
    setCategory(searchParams.get('category') || '');
    setDateFrom(searchParams.get('from') || '');
    setDateTo(searchParams.get('to') || '');
    setSortBy(searchParams.get('sort') || 'newest');
    
    // Auto expand if advanced filters are present
    if (searchParams.get('category') || searchParams.get('from') || searchParams.get('to')) {
      setIsExpanded(true);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (keyword.trim()) params.set('q', keyword.trim());
    if (category) params.set('category', category);
    if (dateFrom) params.set('from', dateFrom);
    if (dateTo) params.set('to', dateTo);
    if (sortBy && sortBy !== 'newest') params.set('sort', sortBy);
    
    router.push(`/search?${params.toString()}`);
  };

  const clearFilters = () => {
    setKeyword('');
    setCategory('');
    setDateFrom('');
    setDateTo('');
    setSortBy('newest');
    router.push('/search');
  };

  // Quick date presets
  const setDatePreset = (preset: string) => {
    const today = new Date();
    let from = '';
    
    switch (preset) {
      case 'today':
        from = today.toISOString().split('T')[0];
        break;
      case 'week':
        const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        from = weekAgo.toISOString().split('T')[0];
        break;
      case 'month':
        const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
        from = monthAgo.toISOString().split('T')[0];
        break;
      case 'year':
        const yearAgo = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);
        from = yearAgo.toISOString().split('T')[0];
        break;
    }
    
    setDateFrom(from);
    setDateTo(today.toISOString().split('T')[0]);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4 mb-6">
      <form onSubmit={handleSearch}>
        {/* Main search input */}
        <div className="relative mb-4">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Nhập từ khóa tìm kiếm..."
            className="w-full px-4 py-3 pr-24 text-base border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <button 
            type="submit" 
            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Tìm kiếm
          </button>
        </div>

        {/* Toggle advanced filters */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary mb-4"
        >
          <svg 
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          Bộ lọc nâng cao
          {hasAdvancedFilters && (
            <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
              Đang lọc
            </span>
          )}
        </button>

        {/* Advanced filters */}
        {isExpanded && (
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Category filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Danh mục
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
                >
                  <option value="">Tất cả danh mục</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date from */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Từ ngày
                </label>
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
                />
              </div>

              {/* Date to */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Đến ngày
                </label>
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
                />
              </div>

              {/* Sort by */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sắp xếp theo
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-sm"
                >
                  <option value="newest">Mới nhất</option>
                  <option value="oldest">Cũ nhất</option>
                  <option value="popular">Phổ biến nhất</option>
                  <option value="views">Xem nhiều nhất</option>
                </select>
              </div>
            </div>

            {/* Quick date presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-500">Nhanh:</span>
              <button
                type="button"
                onClick={() => setDatePreset('today')}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                Hôm nay
              </button>
              <button
                type="button"
                onClick={() => setDatePreset('week')}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                7 ngày qua
              </button>
              <button
                type="button"
                onClick={() => setDatePreset('month')}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                30 ngày qua
              </button>
              <button
                type="button"
                onClick={() => setDatePreset('year')}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                Năm nay
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Áp dụng bộ lọc
              </button>
              <button
                type="button"
                onClick={clearFilters}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm"
              >
                Xóa bộ lọc
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
