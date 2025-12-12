import ReviewsTable from '@/components/admin/reviews/ReviewsTable'
import ReviewsFilters from '@/components/admin/reviews/ReviewsFilters'

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reviews</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage and moderate user reviews</p>
        </div>
      </div>

      <ReviewsFilters />
      <ReviewsTable />
    </div>
  )
}
