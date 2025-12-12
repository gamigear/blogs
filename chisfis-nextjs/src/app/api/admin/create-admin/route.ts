import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { hashPassword } from '@/lib/auth'
import { initAuthTables } from '@/lib/db-auth'

// This endpoint creates a default admin user
// Should only be used once during initial setup
export async function POST(request: NextRequest) {
  try {
    // Initialize auth tables first
    await initAuthTables()

    const { email, password, name } = await request.json()

    // Default values
    const adminEmail = email || 'admin@chisfis.com'
    const adminPassword = password || 'admin123'
    const adminName = name || 'Admin'

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
            email_verified = TRUE
        WHERE email = ${adminEmail}
      `
      return NextResponse.json({ 
        success: true, 
        message: 'Admin user updated',
        email: adminEmail
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
      message: 'Admin user created',
      email: adminEmail,
      note: 'Please change the password after first login'
    })
  } catch (error) {
    console.error('Create admin error:', error)
    return NextResponse.json({ success: false, error: 'Failed to create admin' }, { status: 500 })
  }
}
