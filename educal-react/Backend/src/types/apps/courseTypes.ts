// Type for Course
export type CourseType = {
  id: number
  title: string
  category: string
  categoryClass?: string
  image?: string
  lesson: number
  ratingAve: number
  ratingCount: number
  author: string
  authorAvatar?: string
  videoUrl?: string
  price: number
  oldPrice: number
  status: 'active' | 'inactive' | 'draft'
  featured: boolean
  createdAt: string
}

export type CourseTypeWithAction = CourseType & {
  action?: string
}
