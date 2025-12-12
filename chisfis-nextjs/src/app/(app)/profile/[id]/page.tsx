import { sql } from '@/lib/db'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ id: string }>
}

async function getUser(id: string) {
  try {
    const users = await sql`
      SELECT id, name, avatar, bio, joined, role, email_verified, phone_verified, identity_verified
      FROM users WHERE id = ${id} AND status = 'Active'
    `
    return users.length > 0 ? users[0] : null
  } catch {
    return null
  }
}

async function getUserReviews(userId: string) {
  try {
    const reviews = await sql`
      SELECT r.*, l.name as listing_name
      FROM reviews r
      LEFT JOIN listings l ON r.listing_id = l.id
      WHERE r.user_id = ${userId} AND r.status = 'Published'
      ORDER BY r.created_at DESC
      LIMIT 10
    `
    return reviews
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const user = await getUser(id)
  return {
    title: user ? `${user.name} - Hồ sơ` : 'Không tìm thấy',
  }
}

export default async function ProfilePage({ params }: Props) {
  const { id } = await params
  const user = await getUser(id)

  if (!user) {
    notFound()
  }

  const reviews = await getUserReviews(id)

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-neutral-700">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {user.avatar ? (
              <Image
                src={user.avatar}
                alt={user.name}
                width={150}
                height={150}
                className="w-36 h-36 rounded-full object-cover"
              />
            ) : (
              <div className="w-36 h-36 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-5xl text-primary-600">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                <h1 className="text-3xl font-semibold">{user.name}</h1>
                {user.identity_verified && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Đã xác minh
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>Thành viên từ {user.joined}</span>
                {user.role === 'Host' && (
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded">Host</span>
                )}
              </div>

              {user.bio && (
                <p className="text-gray-600 dark:text-gray-300">{user.bio}</p>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {user.email_verified && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-neutral-700 rounded text-xs text-gray-600 dark:text-gray-400">
                    ✓ Email đã xác minh
                  </span>
                )}
                {user.phone_verified && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-neutral-700 rounded text-xs text-gray-600 dark:text-gray-400">
                    ✓ SĐT đã xác minh
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        {reviews.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Đánh giá từ {user.name}</h2>
            <div className="space-y-4">
              {reviews.map((review: any) => (
                <div
                  key={review.id}
                  className="bg-white dark:bg-neutral-800 rounded-xl p-4 border border-gray-100 dark:border-neutral-700"
                >
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">{review.listing_name}</h4>
                    <span className="text-sm text-gray-500">{review.created_at}</span>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
