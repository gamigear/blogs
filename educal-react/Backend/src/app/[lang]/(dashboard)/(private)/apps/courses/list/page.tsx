// Component Imports
import CourseList from '@views/apps/courses/list'

// Data Imports
import { db as courseData } from '@/fake-db/apps/courses'

const CourseListPage = () => {
  return <CourseList courseData={courseData} />
}

export default CourseListPage
