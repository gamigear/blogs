// Type for Event
export type EventType = {
  id: number
  title: string
  description?: string
  image?: string
  date: string
  startTime?: string
  endTime?: string
  location?: string
  status: 'upcoming' | 'active' | 'ended' | 'cancelled'
  featured: boolean
  createdAt: string
}

export type EventTypeWithAction = EventType & {
  action?: string
}
