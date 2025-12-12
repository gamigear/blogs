// Type for Banner/Slider
export type BannerType = {
  id: number
  title: string
  subtitle?: string
  image: string
  link?: string
  buttonText?: string
  position: number
  status: 'active' | 'inactive'
  startDate?: string
  endDate?: string
  createdAt: string
}

export type BannerTypeWithAction = BannerType & {
  action?: string
}
