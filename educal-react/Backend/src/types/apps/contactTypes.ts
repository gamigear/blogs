// Type for Contact Message
export type ContactType = {
  id: number
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  status: 'new' | 'read' | 'replied' | 'archived'
  createdAt: string
}

export type ContactTypeWithAction = ContactType & {
  action?: string
}
