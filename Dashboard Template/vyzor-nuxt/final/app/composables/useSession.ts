
import { useCookie } from '#app';

export function useSessionToken() {
  const token = useCookie('token');
  return {
    get: () => token.value,
    set: (val: string) => token.value = val,
    clear: () => token.value = null,
  };
}
