import { DiscourseUser } from '@/types';

const DISCOURSE_URL = process.env.DISCOURSE_URL || 'http://localhost:3000';
const DISCOURSE_API_KEY = process.env.DISCOURSE_API_KEY;
const DISCOURSE_API_USERNAME = process.env.DISCOURSE_API_USERNAME || 'system';

async function discourseAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${DISCOURSE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Api-Key': DISCOURSE_API_KEY || '',
      'Api-Username': DISCOURSE_API_USERNAME,
      ...options.headers,
    },
  });

  if (!res.ok) throw new Error(`Discourse API error: ${res.status}`);
  return res.json();
}

export async function getDiscourseUser(username: string): Promise<DiscourseUser | null> {
  try {
    const data = await discourseAPI<{ user: DiscourseUser }>(`/users/${username}.json`);
    return data.user;
  } catch {
    return null;
  }
}

export async function getUserTrustLevel(username: string): Promise<number> {
  const user = await getDiscourseUser(username);
  return user?.trustLevel || 0;
}

export async function createTopic(title: string, content: string, categoryId: number) {
  return discourseAPI('/posts.json', {
    method: 'POST',
    body: JSON.stringify({
      title,
      raw: content,
      category: categoryId,
    }),
  });
}

export async function getTopicReplies(topicId: number) {
  return discourseAPI(`/t/${topicId}.json`);
}

// Trust Level thresholds for auto-moderation
export const TRUST_LEVELS = {
  NEW_USER: 0,
  BASIC: 1,
  MEMBER: 2,
  REGULAR: 3,
  LEADER: 4,
} as const;

export function canPostWithoutModeration(trustLevel: number): boolean {
  return trustLevel >= TRUST_LEVELS.MEMBER;
}

export function canModerate(trustLevel: number): boolean {
  return trustLevel >= TRUST_LEVELS.LEADER;
}
