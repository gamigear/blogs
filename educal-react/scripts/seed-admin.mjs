import dotenv from 'dotenv'
dotenv.config({ quiet: true })
import { neon } from '@neondatabase/serverless'
import bcrypt from 'bcryptjs'

const connectionString = process.env.DATABASE_URL
console.log('DATABASE_URL:', connectionString ? connectionString.substring(0, 30) + '...' : 'NOT SET')

if (!connectionString) {
  console.error('DATABASE_URL is not set!')
  process.exit(1)
}

const sql = neon(connectionString)

async function main() {
  const email = 'dteanh'
  const password = 'Matkhau@123'
  const hashedPassword = await bcrypt.hash(password, 10)

  console.log('Checking for existing admin...')

  // Check if admin already exists
  const existingUsers = await sql`SELECT * FROM "User" WHERE email = ${email} OR role = 'admin' LIMIT 1`

  if (existingUsers.length > 0) {
    const existingUser = existingUsers[0]
    console.log('Admin user already exists:', existingUser.email)
    
    // Update existing admin
    await sql`UPDATE "User" SET email = ${email}, password = ${hashedPassword}, role = 'admin', status = 'active', "updatedAt" = NOW() WHERE id = ${existingUser.id}`
    console.log('Admin user updated!')
    return
  }

  // Create admin user
  const result = await sql`
    INSERT INTO "User" (email, name, password, role, status, "createdAt", "updatedAt") 
    VALUES (${email}, 'Admin', ${hashedPassword}, 'admin', 'active', NOW(), NOW())
    RETURNING id, email, role
  `

  console.log('Admin user created successfully!')
  console.log('Email:', result[0].email)
  console.log('Role:', result[0].role)
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
