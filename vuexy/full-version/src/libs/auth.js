// Third-party Imports
import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'

// Local Imports
import prisma from '@/libs/prisma'
import { verifyPassword } from '@/libs/password'

export const authOptions = {
  // Note: PrismaAdapter is only used for OAuth providers, not for credentials
  // adapter: PrismaAdapter(prisma),

  providers: [
    CredentialProvider({
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials

        if (!email || !password) {
          throw new Error(JSON.stringify({ message: ['Vui lòng nhập email và mật khẩu'] }))
        }

        // Find user in database
        const user = await prisma.user.findUnique({
          where: { email: email.toLowerCase() }
        })

        if (!user || !user.password) {
          throw new Error(JSON.stringify({ message: ['Email hoặc mật khẩu không đúng'] }))
        }

        // Check if account is locked
        if (user.lockedUntil && user.lockedUntil > new Date()) {
          const remainingMinutes = Math.ceil((user.lockedUntil - new Date()) / 60000)
          throw new Error(JSON.stringify({ message: [`Tài khoản bị khóa. Thử lại sau ${remainingMinutes} phút`] }))
        }

        // Check account status
        if (user.status === 'SUSPENDED') {
          throw new Error(JSON.stringify({ message: ['Tài khoản đã bị đình chỉ'] }))
        }

        if (user.status === 'INACTIVE') {
          throw new Error(JSON.stringify({ message: ['Tài khoản chưa được kích hoạt'] }))
        }

        // Verify password
        const isValidPassword = await verifyPassword(password, user.password)

        if (!isValidPassword) {
          // Increment failed attempts
          const failedAttempts = user.failedLoginAttempts + 1
          const updateData = { failedLoginAttempts: failedAttempts }

          if (failedAttempts >= 5) {
            updateData.lockedUntil = new Date(Date.now() + 15 * 60 * 1000) // 15 minutes
          }

          await prisma.user.update({
            where: { id: user.id },
            data: updateData
          })

          const remainingAttempts = 5 - failedAttempts
          if (remainingAttempts > 0) {
            throw new Error(JSON.stringify({ message: [`Mật khẩu không đúng. Còn ${remainingAttempts} lần thử`] }))
          } else {
            throw new Error(JSON.stringify({ message: ['Tài khoản bị khóa 15 phút do đăng nhập sai quá nhiều'] }))
          }
        }

        // Reset failed attempts and update last login
        await prisma.user.update({
          where: { id: user.id },
          data: {
            failedLoginAttempts: 0,
            lockedUntil: null,
            lastLoginAt: new Date(),
            lastLoginIp: req?.headers?.['x-forwarded-for'] || 'unknown'
          }
        })

        // Log successful login
        await prisma.activityLog.create({
          data: {
            userId: user.id,
            action: 'LOGIN',
            details: 'Đăng nhập thành công',
            ipAddress: req?.headers?.['x-forwarded-for'] || 'unknown'
          }
        })

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
          status: user.status
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      allowDangerousEmailAccountLinking: true
    })
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  pages: {
    signIn: '/login',
    error: '/login'
  },

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.role = user.role
        token.status = user.status
        token.image = user.image
      }

      // Handle session update
      if (trigger === 'update' && session) {
        token.name = session.name || token.name
        token.image = session.image || token.image
      }

      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.role = token.role
        session.user.status = token.status
        session.user.image = token.image
      }

      return session
    },
    async signIn({ user, account }) {
      // For OAuth providers, ensure user has proper role
      if (account?.provider !== 'credentials') {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email }
        })

        if (!existingUser) {
          // New OAuth user - set default role
          await prisma.user.update({
            where: { email: user.email },
            data: { role: 'USER', status: 'ACTIVE' }
          })
        } else if (existingUser.status === 'SUSPENDED') {
          return false // Block suspended users
        }
      }

      return true
    }
  }
}
