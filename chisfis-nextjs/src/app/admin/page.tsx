import DashboardStats from '@/components/admin/dashboard/DashboardStats'
import RecentBookings from '@/components/admin/dashboard/RecentBookings'
import RevenueChart from '@/components/admin/dashboard/RevenueChart'
import TopListings from '@/components/admin/dashboard/TopListings'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Welcome back! Here's what's happening.</p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <TopListings />
      </div>

      <RecentBookings />
    </div>
  )
}
