import { sql } from './db'
import { hashPassword, verifyPassword, AuthUser } from './auth'

// Initialize auth tables
export async function initAuthTables() {
  // Update users table with auth fields
  await sql`
    ALTER TABLE users 
    ADD COLUMN IF NOT EXISTS password_hash VARCHAR(255),
    ADD COLUMN IF NOT EXISTS phone VARCHAR(50),
    ADD COLUMN IF NOT EXISTS address TEXT,
    ADD COLUMN IF NOT EXISTS bio TEXT,
    ADD COLUMN IF NOT EXISTS gender VARCHAR(20),
    ADD COLUMN IF NOT EXISTS date_of_birth DATE,
    ADD COLUMN IF NOT EXISTS email_verified BOOLEAN DEFAULT FALSE,
    ADD COLUMN IF NOT EXISTS phone_verified BOOLEAN DEFAULT FALSE,
    ADD COLUMN IF NOT EXISTS identity_verified BOOLEAN DEFAULT FALSE,
    ADD COLUMN IF NOT EXISTS verification_token VARCHAR(255),
    ADD COLUMN IF NOT EXISTS verification_expires TIMESTAMP,
    ADD COLUMN IF NOT EXISTS reset_token VARCHAR(255),
    ADD COLUMN IF NOT EXISTS reset_expires TIMESTAMP,
    ADD COLUMN IF NOT EXISTS last_login TIMESTAMP,
    ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT NOW()
  `

  // Create sessions table
  await sql`
    CREATE TABLE IF NOT EXISTS sessions (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      token VARCHAR(500) NOT NULL,
      expires_at TIMESTAMP NOT NULL,
      ip_address VARCHAR(50),
      user_agent TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `

  // Create verification_requests table
  await sql`
    CREATE TABLE IF NOT EXISTS verification_requests (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      type VARCHAR(50) NOT NULL,
      document_url TEXT,
      status VARCHAR(20) DEFAULT 'Pending',
      admin_notes TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      reviewed_at TIMESTAMP,
      reviewed_by INTEGER REFERENCES users(id)
    )
  `

  console.log('Auth tables initialized')
}


// Register new user
export async function registerUser(data: {
  name: string
  email: string
  password: string
}): Promise<{ success: boolean; user?: AuthUser; error?: string }> {
  try {
    // Check if email exists
    const existing = await sql`SELECT id FROM users WHERE email = ${data.email}`
    if (existing.length > 0) {
      return { success: false, error: 'Email đã được sử dụng' }
    }

    const passwordHash = await hashPassword(data.password)
    const verificationToken = crypto.randomUUID()

    const result = await sql`
      INSERT INTO users (name, email, password_hash, role, status, verification_token, verification_expires, joined)
      VALUES (${data.name}, ${data.email}, ${passwordHash}, 'User', 'Pending', ${verificationToken}, NOW() + INTERVAL '24 hours', CURRENT_DATE)
      RETURNING id, name, email, role, status, avatar, email_verified, phone_verified, identity_verified
    `

    return {
      success: true,
      user: result[0] as AuthUser
    }
  } catch (error) {
    console.error('Register error:', error)
    return { success: false, error: 'Đăng ký thất bại' }
  }
}

// Login user
export async function loginUser(email: string, password: string): Promise<{ success: boolean; user?: AuthUser; error?: string }> {
  try {
    const users = await sql`
      SELECT id, name, email, password_hash, role, status, avatar, phone, address, bio, gender, date_of_birth,
             email_verified, phone_verified, identity_verified
      FROM users WHERE email = ${email}
    `

    if (users.length === 0) {
      return { success: false, error: 'Email không tồn tại' }
    }

    const user = users[0]

    if (!user.password_hash) {
      return { success: false, error: 'Tài khoản chưa được thiết lập mật khẩu' }
    }

    const isValid = await verifyPassword(password, user.password_hash)
    if (!isValid) {
      return { success: false, error: 'Mật khẩu không đúng' }
    }

    if (user.status === 'Suspended') {
      return { success: false, error: 'Tài khoản đã bị khóa' }
    }

    // Update last login
    await sql`UPDATE users SET last_login = NOW() WHERE id = ${user.id}`

    const { password_hash, ...userWithoutPassword } = user
    return { success: true, user: userWithoutPassword as AuthUser }
  } catch (error) {
    console.error('Login error:', error)
    return { success: false, error: 'Đăng nhập thất bại' }
  }
}

// Get user by ID
export async function getUserById(id: number): Promise<AuthUser | null> {
  try {
    const users = await sql`
      SELECT id, name, email, role, status, avatar, phone, address, bio, gender, date_of_birth,
             email_verified, phone_verified, identity_verified, joined, bookings_count
      FROM users WHERE id = ${id}
    `
    return users.length > 0 ? (users[0] as AuthUser) : null
  } catch {
    return null
  }
}

// Update user profile
export async function updateUserProfile(id: number, data: Partial<AuthUser>): Promise<{ success: boolean; error?: string }> {
  try {
    await sql`
      UPDATE users SET
        name = COALESCE(${data.name}, name),
        phone = COALESCE(${data.phone}, phone),
        address = COALESCE(${data.address}, address),
        bio = COALESCE(${data.bio}, bio),
        gender = COALESCE(${data.gender}, gender),
        date_of_birth = COALESCE(${data.date_of_birth}, date_of_birth),
        avatar = COALESCE(${data.avatar}, avatar),
        updated_at = NOW()
      WHERE id = ${id}
    `
    return { success: true }
  } catch (error) {
    console.error('Update profile error:', error)
    return { success: false, error: 'Cập nhật thất bại' }
  }
}

// Change password
export async function changePassword(id: number, oldPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
  try {
    const users = await sql`SELECT password_hash FROM users WHERE id = ${id}`
    if (users.length === 0) return { success: false, error: 'User không tồn tại' }

    const isValid = await verifyPassword(oldPassword, users[0].password_hash)
    if (!isValid) return { success: false, error: 'Mật khẩu cũ không đúng' }

    const newHash = await hashPassword(newPassword)
    await sql`UPDATE users SET password_hash = ${newHash}, updated_at = NOW() WHERE id = ${id}`

    return { success: true }
  } catch (error) {
    console.error('Change password error:', error)
    return { success: false, error: 'Đổi mật khẩu thất bại' }
  }
}

// Update user role (admin only)
export async function updateUserRole(userId: number, role: string): Promise<{ success: boolean; error?: string }> {
  try {
    await sql`UPDATE users SET role = ${role}, updated_at = NOW() WHERE id = ${userId}`
    return { success: true }
  } catch (error) {
    console.error('Update role error:', error)
    return { success: false, error: 'Cập nhật quyền thất bại' }
  }
}

// Update user status (admin only)
export async function updateUserStatus(userId: number, status: string): Promise<{ success: boolean; error?: string }> {
  try {
    await sql`UPDATE users SET status = ${status}, updated_at = NOW() WHERE id = ${userId}`
    return { success: true }
  } catch (error) {
    console.error('Update status error:', error)
    return { success: false, error: 'Cập nhật trạng thái thất bại' }
  }
}

// Verify email
export async function verifyEmail(token: string): Promise<{ success: boolean; error?: string }> {
  try {
    const result = await sql`
      UPDATE users SET email_verified = TRUE, status = 'Active', verification_token = NULL
      WHERE verification_token = ${token} AND verification_expires > NOW()
      RETURNING id
    `
    if (result.length === 0) return { success: false, error: 'Token không hợp lệ hoặc đã hết hạn' }
    return { success: true }
  } catch (error) {
    console.error('Verify email error:', error)
    return { success: false, error: 'Xác minh email thất bại' }
  }
}

// Request password reset
export async function requestPasswordReset(email: string): Promise<{ success: boolean; token?: string; error?: string }> {
  try {
    const resetToken = crypto.randomUUID()
    const result = await sql`
      UPDATE users SET reset_token = ${resetToken}, reset_expires = NOW() + INTERVAL '1 hour'
      WHERE email = ${email}
      RETURNING id
    `
    if (result.length === 0) return { success: false, error: 'Email không tồn tại' }
    return { success: true, token: resetToken }
  } catch (error) {
    console.error('Request reset error:', error)
    return { success: false, error: 'Yêu cầu thất bại' }
  }
}

// Reset password
export async function resetPassword(token: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
  try {
    const newHash = await hashPassword(newPassword)
    const result = await sql`
      UPDATE users SET password_hash = ${newHash}, reset_token = NULL, reset_expires = NULL
      WHERE reset_token = ${token} AND reset_expires > NOW()
      RETURNING id
    `
    if (result.length === 0) return { success: false, error: 'Token không hợp lệ hoặc đã hết hạn' }
    return { success: true }
  } catch (error) {
    console.error('Reset password error:', error)
    return { success: false, error: 'Đặt lại mật khẩu thất bại' }
  }
}

// Submit verification request
export async function submitVerificationRequest(userId: number, type: string, documentUrl?: string): Promise<{ success: boolean; error?: string }> {
  try {
    await sql`
      INSERT INTO verification_requests (user_id, type, document_url, status)
      VALUES (${userId}, ${type}, ${documentUrl}, 'Pending')
    `
    return { success: true }
  } catch (error) {
    console.error('Submit verification error:', error)
    return { success: false, error: 'Gửi yêu cầu thất bại' }
  }
}

// Review verification request (admin)
export async function reviewVerificationRequest(
  requestId: number,
  adminId: number,
  approved: boolean,
  notes?: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const request = await sql`SELECT user_id, type FROM verification_requests WHERE id = ${requestId}`
    if (request.length === 0) return { success: false, error: 'Yêu cầu không tồn tại' }

    await sql`
      UPDATE verification_requests 
      SET status = ${approved ? 'Approved' : 'Rejected'}, admin_notes = ${notes}, reviewed_at = NOW(), reviewed_by = ${adminId}
      WHERE id = ${requestId}
    `

    if (approved) {
      const { type, user_id } = request[0]
      if (type === 'identity') {
        await sql`UPDATE users SET identity_verified = TRUE WHERE id = ${user_id}`
      } else if (type === 'phone') {
        await sql`UPDATE users SET phone_verified = TRUE WHERE id = ${user_id}`
      }
    }

    return { success: true }
  } catch (error) {
    console.error('Review verification error:', error)
    return { success: false, error: 'Xử lý yêu cầu thất bại' }
  }
}

// Get verification requests (admin)
export async function getVerificationRequests(status?: string) {
  try {
    if (status) {
      return await sql`
        SELECT vr.*, u.name as user_name, u.email as user_email
        FROM verification_requests vr
        JOIN users u ON vr.user_id = u.id
        WHERE vr.status = ${status}
        ORDER BY vr.created_at DESC
      `
    }
    return await sql`
      SELECT vr.*, u.name as user_name, u.email as user_email
      FROM verification_requests vr
      JOIN users u ON vr.user_id = u.id
      ORDER BY vr.created_at DESC
    `
  } catch (error) {
    console.error('Get verification requests error:', error)
    return []
  }
}
