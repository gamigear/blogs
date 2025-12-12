// Type for Testimonial
export type TestimonialType = {
  id: number
  name: string
  title?: string
  company?: string
  avatar?: string
  content: string
  rating: number
  status: 'active' | 'inactive'
  featured: boolean
  createdAt: string
}

export type TestimonialTypeWithAction = TestimonialType & {
  action?: string
}
