export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: { url: string; alt: string };
  category: Category;
  author: Author;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  seo?: SEO;
  readingTime?: number;
  viewCount?: number;
  isFeatured?: boolean;
  discourseTopicId?: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  is_default?: boolean;
}

export interface Author {
  id: number;
  name: string;
  avatar?: string;
  bio?: string;
}

export interface CommunityPost {
  id: number;
  title: string;
  content: string;
  author: Author;
  status: 'pending' | 'approved' | 'rejected';
  discourseTopicId?: number;
  createdAt: string;
}

export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export interface DiscourseUser {
  id: number;
  username: string;
  trustLevel: number;
  badges: string[];
}
