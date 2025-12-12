// Component Imports
import ContactList from '@views/apps/contacts/list'

// Data Imports
import { db as contactData } from '@/fake-db/apps/contacts'

const ContactListPage = () => {
  return <ContactList contactData={contactData} />
}

export default ContactListPage
