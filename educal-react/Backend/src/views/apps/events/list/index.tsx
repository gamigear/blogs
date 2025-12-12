// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { EventType } from '@/types/apps/eventTypes'

// Component Imports
import EventListTable from './EventListTable'
import EventListCards from './EventListCards'

const EventList = ({ eventData }: { eventData?: EventType[] }) => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <EventListCards />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <EventListTable tableData={eventData} />
      </Grid>
    </Grid>
  )
}

export default EventList
