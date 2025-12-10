/**
 * Change Password API
 * For authenticated users to change their password
 */

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { queryOne, execute } from '@/lib/db';
import { hashPassword, verifyPassword, validatePassword, logAuditAction } from '@/lib/security';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin' },
        { status: 400 }
      );
    }

    // Validate new password
    const passwordValidation = validatePassword(newPassword);
    if (!passwordValidation.valid) {
      return NextResponse.json(
        { error: passwordValidation.message },
        { status: 400 }
      );
    }

    // Get user's current password hash
    const user = await queryOne<{ password_hash: string | null }>(
      'SELECT password_hash FROM users WHERE id = $1',
      [session.userId]
    );

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // If user has no password (SSO only), they can't change password this way
    if (!user.password_hash) {
      return NextResponse.json(
        { error: 'Tài khoản của bạn sử dụng SSO, không thể đổi mật khẩu tại đây' },
        { status: 400 }
      );
    }

    // Verify current password
    const isValid = await verifyPassword(currentPassword, user.password_hash);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Mật khẩu hiện tại không đúng' },
        { status: 400 }
      );
    }

    // Hash and update new password
    const newPasswordHash = await hashPassword(newPassword);
    await execute(
      'UPDATE users SET password_hash = $1 WHERE id = $2',
      [newPasswordHash, session.userId]
    );

    // Log the action
    await logAuditAction(
      session.userId,
      'user.password_change',
      'user',
      session.userId,
      {},
      request.headers.get('x-forwarded-for') || undefined
    );

    return NextResponse.json({
      success: true,
      message: 'Đổi mật khẩu thành công',
    });
  } catch (error) {
    console.error('Change password error:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra. Vui lòng thử lại sau.' },
      { status: 500 }
    );
  }
}
