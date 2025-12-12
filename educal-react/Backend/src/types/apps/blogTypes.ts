// Type for Blog
export type BlogType = {
  id: number
  title: string
  excerpt?: string
  content?: string
  image?: string
  tag?: string
  tagClass?: string
  author: string
  authorAvatar?: string
  status: 'draft' | 'published' | 'archived'
  featured: boolean
  views: number
  publishedAt: string | null
  createdAt: string
}

export type BlogTypeWithAction = BlogType & {
  action?: string
}
