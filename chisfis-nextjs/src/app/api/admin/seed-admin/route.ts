import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { hashPassword } from '@/lib/auth'
import { initAuthTables } from '@/lib/db-auth'

// Tạo admin user dteanh
export async function GET() {
  try {
    // Initialize auth tables first
    await initAuthTables()

    const adminEmail = 'dteanh@admin.com'
    const adminPassword = 'dteanh123'
    const adminName = 'dteanh'

    // Check if admin already exists
    const existing = await sql`SELECT id FROM users WHERE email = ${adminEmail}`

    if (existing.length > 0) {
      // Update existing user to admin with password
      const passwordHash = await hashPassword(adminPassword)
      await sql`
        UPDATE users 
        SET password_hash = ${passwordHash}, 
            role = 'Admin', 
            status = 'Active',
            email_verified = TRUE,
            name = ${adminName}
        WHERE email = ${adminEmail}
      `
      return NextResponse.json({
        success: true,
        message: 'Admin user dteanh updated',
        credentials: {
          email: adminEmail,
          password: adminPassword,
        },
      })
    }

    // Create new admin user
    const passwordHash = await hashPassword(adminPassword)
    await sql`
      INSERT INTO users (name, email, password_hash, role, status, email_verified, joined)
      VALUES (${adminName}, ${adminEmail}, ${passwordHash}, 'Admin', 'Active', TRUE, CURRENT_DATE)
    `

    return NextResponse.json({
      success: true,
      message: 'Admin user dteanh created successfully',
      credentials: {
        email: adminEmail,
        password: adminPassword,
      },
      note: 'Hãy đổi mật khẩu sau khi đăng nhập lần đầu!',
    })
  } catch (error) {
    console.error('Create admin error:', error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
