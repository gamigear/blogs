'use client'

interface MediaFiltersProps {
  filters: { type: string; folder: string; search: string }
  folders: string[]
  viewMode: 'grid' | 'list'
  onFilterChange: (filters: { type: string; folder: string; search: string }) => void
  onViewModeChange: (mode: 'grid' | 'list') => void
  selectedCount: number
  onDeleteSelected: () => void
}

export default function MediaFilters({
  filters,
  folders,
  viewMode,
  onFilterChange,
  onViewModeChange,
  selectedCount,
  onDeleteSelected,
}: MediaFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <div className="flex flex-wrap gap-3 items-center">
        {/* Search */}
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={filters.search}
            onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
            className="pl-9 pr-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Type Filter */}
        <select
          value={filters.type}
          onChange={(e) => onFilterChange({ ...filters, type: e.target.value })}
          className="px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-sm focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Tất cả loại</option>
          <option value="image">Hình ảnh</option>
          <option value="video">Video</option>
          <option value="document">Tài liệu</option>
          <option value="other">Khác</option>
        </select>

        {/* Folder Filter */}
        <select
          value={filters.folder}
          onChange={(e) => onFilterChange({ ...filters, folder: e.target.value })}
          className="px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-sm focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Tất cả thư mục</option>
          {folders.map((folder) => (
            <option key={folder} value={folder}>{folder}</option>
          ))}
        </select>

        {/* Clear Filters */}
        {(filters.type || filters.folder || filters.search) && (
          <button
            onClick={() => onFilterChange({ type: '', folder: '', search: '' })}
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            Xóa bộ lọc
          </button>
        )}
      </div>

      <div className="flex items-center gap-3">
        {/* Bulk Delete */}
        {selectedCount > 0 && (
          <button
            onClick={onDeleteSelected}
            className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Xóa ({selectedCount})
          </button>
        )}

        {/* View Mode Toggle */}
        <div className="flex items-center border border-gray-300 dark:border-neutral-600 rounded-lg overflow-hidden">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 ${viewMode === 'grid' ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-neutral-700'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 ${viewMode === 'list' ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-neutral-700'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
