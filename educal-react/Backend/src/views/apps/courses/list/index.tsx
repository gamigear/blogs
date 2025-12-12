// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { CourseType } from '@/types/apps/courseTypes'

// Component Imports
import CourseListTable from './CourseListTable'
import CourseListCards from './CourseListCards'

const CourseList = ({ courseData }: { courseData?: CourseType[] }) => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <CourseListCards />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <CourseListTable tableData={courseData} />
      </Grid>
    </Grid>
  )
}

export default CourseList
