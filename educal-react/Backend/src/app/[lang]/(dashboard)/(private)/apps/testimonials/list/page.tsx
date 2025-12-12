// Component Imports
import TestimonialList from '@views/apps/testimonials/list'

// Data Imports
import { db as testimonialData } from '@/fake-db/apps/testimonials'

const TestimonialListPage = () => {
  return <TestimonialList testimonialData={testimonialData} />
}

export default TestimonialListPage
