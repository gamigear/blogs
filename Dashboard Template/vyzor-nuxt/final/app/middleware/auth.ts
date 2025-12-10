
// middleware/auth.global.ts
import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';
import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();
  auth.restoreSession();

  if (auth.authenticated && to.name === 'auth-login') {
    return navigateTo('/');
  }

  if (!auth.authenticated && to.name !== 'auth-login') {
    return navigateTo('/auth/login');
  }
});
