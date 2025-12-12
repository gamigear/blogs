import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET dashboard stats
export async function GET() {
  try {
    const [
      totalUsers,
      totalBookings,
      totalPosts,
      totalProducts,
      recentBookings,
      bookingStats
    ] = await Promise.all([
      prisma.user.count(),
      prisma.booking.count(),
      prisma.post.count(),
      prisma.product.count(),
      prisma.booking.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: {
          product: { select: { name: true } }
        }
      }),
      prisma.booking.groupBy({
        by: ['status'],
        _count: { status: true }
      })
    ])

    // Calculate revenue
    const revenue = await prisma.booking.aggregate({
      where: { paymentStatus: 'PAID' },
      _sum: { totalAmount: true }
    })

    return NextResponse.json({
      stats: {
        totalUsers,
        totalBookings,
        totalPosts,
        totalProducts,
        revenue: revenue._sum.totalAmount || 0
      },
      recentBookings,
      bookingStats: bookingStats.reduce((acc, item) => {
        acc[item.status] = item._count.status
        return acc
      }, {} as Record<string, number>)
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 })
  }
}
