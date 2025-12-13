'use client';

import { useSession } from 'next-auth/react';

interface Props {
  articleId: number;
  authorUserId?: number;
}

export function EditArticleButton({ articleId, authorUserId }: Props) {
  const { data: session, status } = useSession();

  // Check if current user can edit (admin/editor or author)
  const sessionLoaded = status === 'authenticated';
  const userRole = (session?.user as any)?.role || '';
  const sessionUserId = (session as any)?.userId;
  const isAdmin = sessionLoaded && ['admin', 'editor', 'superadmin'].includes(userRole);
  const isAuthor = sessionLoaded && sessionUserId && authorUserId && sessionUserId === authorUserId;
  const canEdit = isAdmin || isAuthor;

  if (!canEdit) return null;

  return (
    <a
      href={`/admin/articles/${articleId}/edit`}
      className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
      title="Chỉnh sửa"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    </a>
  );
}
