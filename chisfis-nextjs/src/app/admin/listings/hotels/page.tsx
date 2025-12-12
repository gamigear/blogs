import ListingsTable from '@/components/admin/listings/ListingsTable'
import ListingsFilters from '@/components/admin/listings/ListingsFilters'

export default function HotelsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Hotels</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage hotel listings</p>
        </div>
        <a
          href="/admin/listings/add"
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Hotel
        </a>
      </div>

      <ListingsFilters defaultType="hotel" />
      <ListingsTable filterType="Hotel" />
    </div>
  )
}
