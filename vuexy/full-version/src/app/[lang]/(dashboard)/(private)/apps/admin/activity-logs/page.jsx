// Component Imports
import ActivityLogs from '@views/apps/admin/activity-logs'
import RoleGuard from '@/hocs/RoleGuard'

const ActivityLogsPage = async ({ params }) => {
  const { lang } = await params

  return (
    <RoleGuard locale={lang} allowedRoles={['ADMIN', 'SUPER_ADMIN']}>
      <ActivityLogs />
    </RoleGuard>
  )
}

export default ActivityLogsPage
