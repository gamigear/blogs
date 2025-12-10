/**
 * Forgot Password API
 * Note: In production, this should send an email with reset link
 */

import { NextRequest, NextResponse } from 'next/server';
import { queryOne } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email là bắt buộc' },
        { status: 400 }
      );
    }

    // Check if user exists (don't reveal if email exists for security)
    const user = await queryOne(
      'SELECT id, email FROM users WHERE email = $1',
      [email.toLowerCase()]
    );

    if (user) {
      // TODO: In production, generate reset token and send email
      // For now, just log it
      console.log(`Password reset requested for: ${email}`);
      
      // Generate reset token (in production, store this in DB with expiry)
      // const resetToken = crypto.randomUUID();
      // await query(
      //   'UPDATE users SET reset_token = $1, reset_token_expires = NOW() + INTERVAL \'1 hour\' WHERE id = $2',
      //   [resetToken, user.id]
      // );
      
      // Send email with reset link
      // await sendEmail({
      //   to: email,
      //   subject: 'Đặt lại mật khẩu',
      //   html: `Click vào link sau để đặt lại mật khẩu: ${process.env.NEXT_PUBLIC_URL}/auth/reset-password?token=${resetToken}`
      // });
    }

    // Always return success to prevent email enumeration
    return NextResponse.json({
      success: true,
      message: 'Nếu email tồn tại, hướng dẫn đặt lại mật khẩu đã được gửi',
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra. Vui lòng thử lại sau.' },
      { status: 500 }
    );
  }
}
