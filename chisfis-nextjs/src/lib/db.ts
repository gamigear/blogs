import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

export { sql }

// Types
export interface Listing {
  id: number
  name: string
  type: 'Hotel' | 'Car' | 'Experience'
  location: string
  price: string
  rating: number
  reviews_count: number
  status: 'Active' | 'Pending' | 'Inactive'
  image: string
  description?: string
  created_at: Date
  updated_at: Date
}

export interface Booking {
  id: string
  guest_name: string
  guest_email: string
  listing_id: number
  listing_name: string
  listing_type: string
  check_in: string
  check_out: string
  total: string
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled'
  created_at: Date
}

export interface User {
  id: number
  name: string
  email: string
  role: 'Admin' | 'Host' | 'User'
  status: 'Active' | 'Inactive' | 'Suspended'
  joined: string
  bookings_count: number
  avatar: string
}

export interface Review {
  id: number
  user_id: number
  user_name: string
  user_avatar: string
  listing_id: number
  listing_name: string
  rating: number
  comment: string
  status: 'Published' | 'Pending' | 'Flagged'
  created_at: string
}

export interface Media {
  id: number
  filename: string
  original_name: string
  url: string
  type: 'image' | 'video' | 'document' | 'other'
  mime_type: string
  size: number
  width?: number
  height?: number
  alt_text?: string
  folder: string
  uploaded_by?: number
  created_at: Date
  updated_at: Date
}
