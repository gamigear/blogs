'use client'

const monthlyData = [
  { month: 'Jan', revenue: 12500 },
  { month: 'Feb', revenue: 15800 },
  { month: 'Mar', revenue: 18200 },
  { month: 'Apr', revenue: 16400 },
  { month: 'May', revenue: 21000 },
  { month: 'Jun', revenue: 24500 },
  { month: 'Jul', revenue: 28000 },
  { month: 'Aug', revenue: 32000 },
  { month: 'Sep', revenue: 27500 },
  { month: 'Oct', revenue: 29800 },
  { month: 'Nov', revenue: 31200 },
  { month: 'Dec', revenue: 35000 },
]

const maxRevenue = Math.max(...monthlyData.map(d => d.revenue))

export default function RevenueChart() {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Monthly revenue for 2024</p>
        </div>
        <select className="px-3 py-1.5 text-sm border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300">
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>

      <div className="flex items-end gap-2 h-48">
        {monthlyData.map((data) => (
          <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="w-full bg-primary-500 rounded-t-sm hover:bg-primary-600 transition-colors cursor-pointer"
              style={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
              title={`$${data.revenue.toLocaleString('en-US')}`}
            />
            <span className="text-xs text-gray-500 dark:text-gray-400">{data.month}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-neutral-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">$292,900</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">vs Last Year</p>
            <p className="text-lg font-semibold text-green-600">+18.2%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
