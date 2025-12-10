import 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    roles?: string[];
    userId?: number;
    trustLevel?: number;
    username?: string;
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
      username?: string;
    };
  }

  interface User {
    id: string;
    email?: string | null;
    name?: string | null;
    role?: string;
    trustLevel?: number;
    username?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    idToken?: string;
    keycloakId?: string;
    keycloakRoles?: string[];
    roles?: string[];
    userId?: number;
    trustLevel?: number;
    username?: string;
  }
}
