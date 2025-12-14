// Component Imports
import AdminUserList from '@views/apps/admin/users'
import RoleGuard from '@/hocs/RoleGuard'

const AdminUsersPage = async ({ params }) => {
  const { lang } = await params

  return (
    <RoleGuard locale={lang} allowedRoles={['ADMIN', 'SUPER_ADMIN']}>
      <AdminUserList />
    </RoleGuard>
  )
}

export default AdminUsersPage
