import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import prisma from '@/libs/prisma'
import { authOptions } from '@/libs/auth'

// POST - Unlock user account
export async function POST(req, { params }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    if (!['ADMIN', 'SUPER_ADMIN'].includes(session.user.role)) {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
    }

    const { id } = await params

    const user = await prisma.user.findUnique({ where: { id } })

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    await prisma.user.update({
      where: { id },
      data: {
        failedLoginAttempts: 0,
        lockedUntil: null
      }
    })

    await prisma.activityLog.create({
      data: {
        userId: session.user.id,
        action: 'USER_UNLOCK',
        details: `Mở khóa tài khoản: ${user.email}`
      }
    })

    return NextResponse.json({ message: 'Account unlocked' })

  } catch (error) {
    console.error('Unlock user error:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
