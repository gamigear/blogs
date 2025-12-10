// utils/token.ts
export function generateFakeToken(user: { id: number; username: string }) {
  const tokenData = btoa(`${user.id}:${user.username}:${Date.now()}`);
  return `Bearer ${tokenData}`;
}

export function isTokenValid(token: string | null) {
  if (!token) return false;
  try {
    const decoded = atob(token.replace('Bearer ', ''));
    const [id, username, timestamp] = decoded.split(':');
    const age = Date.now() - parseInt(timestamp);
    return age < 3600000; // 1 hour validity
  } catch {
    return false;
  }
}
