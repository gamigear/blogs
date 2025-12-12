import { SignJWT, jwtVerify } from 'jose'
import bcrypt from 'bcryptjs'
import { sql } from './db'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key-change-in-production')

export interface AuthUser {
  id: number
  name: string
  email: string
  role: 'Admin' | 'Host' | 'User'
  status: 'Active' | 'Inactive' | 'Suspended' | 'Pending'
  avatar?: string
  phone?: string
  address?: string
  bio?: string
  gender?: string
  date_of_birth?: string
  email_verified: boolean
  phone_verified: boolean
  identity_verified: boolean
}

export interface JWTPayload {
  userId: number
  email: string
  role: string
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

// Generate JWT token
export async function generateToken(payload: JWTPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(JWT_SECRET)
}

// Verify JWT token
export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload as unknown as JWTPayload
  } catch {
    return null
  }
}
