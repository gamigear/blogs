// stores/auth.ts
import { defineStore } from 'pinia';
import users from '@/utils/users.json';
import { generateFakeToken, isTokenValid } from '@/utils/token';
import { useSessionToken } from '@/composables/useSession';

interface Credentials {
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }: Credentials) {
      this.loading = true;

      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      const session = useSessionToken();

      if (user) {
        session.set(generateFakeToken(user));
        this.authenticated = true;
        this.loading = false;
        return { authenticated: true };
      } else {
        session.clear();
        this.authenticated = false;
        this.loading = false;
        return { authenticated: false };
      }
    },
    restoreSession() {
      const session = useSessionToken();
      this.authenticated = isTokenValid(session.get());
    },
    logUserOut() {
      const session = useSessionToken();
      session.clear();
      this.authenticated = false;
    },
  },
});
