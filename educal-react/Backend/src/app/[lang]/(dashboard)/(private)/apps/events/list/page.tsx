// Component Imports
import EventList from '@views/apps/events/list'

// Data Imports
import { db as eventData } from '@/fake-db/apps/events'

const EventListPage = () => {
  return <EventList eventData={eventData} />
}

export default EventListPage
