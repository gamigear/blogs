// Type for Category
export type CategoryType = {
  id: number
  title: string
  description?: string
  icon?: string
  color?: string
  coursesCount: number
  status: 'active' | 'inactive'
  createdAt: string
}

export type CategoryTypeWithAction = CategoryType & {
  action?: string
}
