/**
 * User Registration API
 * Requirements: 1.1 - User registration with credentials
 */

import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';
import { hashPassword, validatePassword } from '@/lib/security';

interface RegisterInput {
  username: string;
  email: string;
  displayName: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: RegisterInput = await request.json();
    const { username, email, displayName, password } = body;

    // Validate required fields
    if (!username || !email || !displayName || !password) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin' },
        { status: 400 }
      );
    }

    // Validate username format
    if (username.length < 3 || !/^[a-zA-Z0-9_]+$/.test(username)) {
      return NextResponse.json(
        { error: 'Tên đăng nhập không hợp lệ' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Email không hợp lệ' },
        { status: 400 }
      );
    }

    // Validate password strength
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return NextResponse.json(
        { error: passwordValidation.message },
        { status: 400 }
      );
    }

    // Check if username already exists
    const existingUsername = await queryOne(
      'SELECT id FROM users WHERE username = $1',
      [username.toLowerCase()]
    );
    if (existingUsername) {
      return NextResponse.json(
        { error: 'Tên đăng nhập đã được sử dụng' },
        { status: 409 }
      );
    }

    // Check if email already exists
    const existingEmail = await queryOne(
      'SELECT id FROM users WHERE email = $1',
      [email.toLowerCase()]
    );
    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email đã được sử dụng' },
        { status: 409 }
      );
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create user with trust_level 0 (new user)
    const result = await query<{ id: number; username: string; email: string }>(
      `INSERT INTO users (username, email, display_name, password_hash, role, trust_level, created_at)
       VALUES ($1, $2, $3, $4, 'reader', 0, CURRENT_TIMESTAMP)
       RETURNING id, username, email`,
      [username.toLowerCase(), email.toLowerCase(), displayName, passwordHash]
    );

    if (!result[0]) {
      throw new Error('Failed to create user');
    }

    // Log registration
    await query(
      `INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details, ip_address)
       VALUES ($1, 'user.register', 'user', $2, $3, $4)`,
      [
        result[0].id,
        result[0].id,
        JSON.stringify({ method: 'credentials' }),
        request.headers.get('x-forwarded-for') || 'unknown',
      ]
    );

    return NextResponse.json({
      success: true,
      message: 'Đăng ký thành công',
      user: {
        id: result[0].id,
        username: result[0].username,
        email: result[0].email,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra. Vui lòng thử lại sau.' },
      { status: 500 }
    );
  }
}
