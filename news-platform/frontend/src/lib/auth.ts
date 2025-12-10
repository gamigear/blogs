/**
 * Authentication Module
 * Requirements: 1.1, 1.2, 1.3, 10.1
 */

import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { query, queryOne } from './db';
import { verifyPassword } from './security';

// User role type
export type UserRole = 'reader' | 'contributor' | 'moderator' | 'editor' | 'admin' | 'superadmin';

export const authOptions: NextAuthOptions = {
  providers: [
    // Credentials Provider for email/password login
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const user = await queryOne<{
            id: number;
            email: string;
            username: string;
            display_name: string;
            password_hash: string;
            role: string;
            trust_level: number;
            banned_until: string | null;
          }>(
            'SELECT id, email, username, display_name, password_hash, role, trust_level, banned_until FROM users WHERE email = $1',
            [credentials.email.toLowerCase()]
          );

          if (!user || !user.password_hash) {
            return null;
          }

          // Check if user is banned
          if (user.banned_until && new Date(user.banned_until) > new Date()) {
            throw new Error('Tài khoản đã bị khóa');
          }

          // Verify password
          const isValid = await verifyPassword(credentials.password, user.password_hash);
          if (!isValid) {
            return null;
          }

          // Update last login
          await query('UPDATE users SET last_login_at = CURRENT_TIMESTAMP WHERE id = $1', [user.id]);

          return {
            id: String(user.id),
            email: user.email,
            name: user.display_name,
            role: user.role,
            trustLevel: user.trust_level,
            username: user.username,
          };
        } catch (error) {
          console.error('Credentials auth error:', error);
          return null;
        }
      },
    }),
    // Keycloak via OpenID Connect
    // Requirements: 1.1 - SSO via Keycloak
    {
      id: 'keycloak',
      name: 'Keycloak',
      type: 'oauth',
      wellKnown: `${process.env.KEYCLOAK_ISSUER || 'http://localhost:8080/realms/news-platform'}/.well-known/openid-configuration`,
      clientId: process.env.KEYCLOAK_CLIENT_ID || '',
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || '',
      authorization: { params: { scope: 'openid email profile' } },
      idToken: true,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name || profile.preferred_username,
          email: profile.email,
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, account, profile, user }) {
      // Handle credentials login
      if (user && !account?.provider) {
        token.userId = parseInt(user.id);
        token.roles = [(user as any).role];
        token.trustLevel = (user as any).trustLevel;
        token.username = (user as any).username;
        return token;
      }

      // Handle credentials provider
      if (account?.provider === 'credentials' && user) {
        token.userId = parseInt(user.id);
        token.roles = [(user as any).role];
        token.trustLevel = (user as any).trustLevel;
        token.username = (user as any).username;
        return token;
      }

      // Handle Keycloak login
      if (account && profile) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.idToken = account.id_token;
        token.keycloakId = (profile as any).sub;
        
        // Get roles from Keycloak token
        const keycloakRoles = (profile as any)?.realm_access?.roles || [];
        token.keycloakRoles = keycloakRoles;

        // Sync user to database and get local user info
        try {
          const dbUser = await syncUserToDatabase({
            keycloakId: (profile as any).sub,
            email: (profile as any).email,
            username: (profile as any).preferred_username,
            displayName: (profile as any).name,
            keycloakRoles,
          });
          
          if (dbUser) {
            token.userId = dbUser.id;
            token.roles = [dbUser.role];
            token.trustLevel = dbUser.trust_level;
            token.username = dbUser.username;
          } else {
            token.roles = keycloakRoles;
          }
        } catch (error) {
          console.error('Failed to sync user:', error);
          token.roles = keycloakRoles;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.roles = token.roles as string[];
      session.userId = token.userId as number;
      session.trustLevel = token.trustLevel as number;
      session.username = token.username as string;
      if (session.user) {
        (session.user as any).role = token.roles?.[0];
        (session.user as any).username = token.username;
      }
      return session;
    },
  },
  events: {
    async signIn({ user, account, profile }) {
      // Log sign in event
      console.log(`User signed in: ${user.email}`);
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
};

/**
 * Sync user from Keycloak to local database
 * Requirements: 1.2 - Sync user roles to database
 */
interface SyncUserInput {
  keycloakId: string;
  email: string;
  username: string;
  displayName?: string;
  keycloakRoles: string[];
}

interface DbUser {
  id: number;
  role: UserRole;
  trust_level: number;
  username: string;
}

async function syncUserToDatabase(input: SyncUserInput): Promise<DbUser | null> {
  try {
    // Check if user exists
    let user = await queryOne<DbUser>(
      'SELECT id, role, trust_level, username FROM users WHERE keycloak_id = $1',
      [input.keycloakId]
    );

    if (user) {
      // Update last login
      await query(
        'UPDATE users SET last_login_at = CURRENT_TIMESTAMP WHERE id = $1',
        [user.id]
      );
      return user;
    }

    // Determine role from Keycloak roles
    let role: UserRole = 'reader';
    if (input.keycloakRoles.includes('admin') || input.keycloakRoles.includes('superadmin')) {
      role = 'admin';
    } else if (input.keycloakRoles.includes('editor')) {
      role = 'editor';
    } else if (input.keycloakRoles.includes('moderator')) {
      role = 'moderator';
    } else if (input.keycloakRoles.includes('contributor')) {
      role = 'contributor';
    }

    // Create new user
    // Requirements: 6.1 - New users start with trust_level 0
    const result = await query<DbUser>(
      `INSERT INTO users (keycloak_id, email, username, display_name, role, trust_level, last_login_at)
       VALUES ($1, $2, $3, $4, $5, 0, CURRENT_TIMESTAMP)
       RETURNING id, role, trust_level, username`,
      [input.keycloakId, input.email, input.username, input.displayName || input.username, role]
    );

    return result[0] || null;
  } catch (error) {
    console.error('Error syncing user to database:', error);
    return null;
  }
}

// ============================================
// ROLE CHECKING UTILITIES
// Requirements: 10.1 - Role-based access control
// ============================================

export function hasRole(roles: string[], requiredRole: string): boolean {
  return roles.includes(requiredRole);
}

export function isModerator(roles: string[]): boolean {
  return hasRole(roles, 'moderator') || hasRole(roles, 'admin') || hasRole(roles, 'superadmin');
}

export function isEditor(roles: string[]): boolean {
  return hasRole(roles, 'editor') || hasRole(roles, 'admin') || hasRole(roles, 'superadmin');
}

export function isAdmin(roles: string[]): boolean {
  return hasRole(roles, 'admin') || hasRole(roles, 'superadmin');
}

export function canPublish(roles: string[]): boolean {
  return isEditor(roles);
}

export function canModerate(roles: string[]): boolean {
  return isModerator(roles);
}

export function canManageUsers(roles: string[]): boolean {
  return isAdmin(roles);
}

// ============================================
// TRUST LEVEL UTILITIES
// Requirements: 6.4 - Trust level permissions
// ============================================

export function canAutoApprovePost(trustLevel: number): boolean {
  return trustLevel >= 2;
}

export function canModerateByTrustLevel(trustLevel: number): boolean {
  return trustLevel >= 4;
}
