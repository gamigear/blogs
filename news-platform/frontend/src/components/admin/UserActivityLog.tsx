'use client';

import { useState, useEffect } from 'react';

interface ActivityLog { id: number; action: string; resource_type: string; resource_id: number; details: Record<string, unknown>; created_at: string; }
interface Props { userId: number; }

export function UserActivityLog({ userId }: Props) {
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch(`/api/admin/users/${userId}/activity`);
        if (res.ok) { const data = await res.json(); setLogs(data.logs); }
      } catch (error) { console.error('Error fetching activity logs:', error); }
      finally { setLoading(false); }
    };
    fetchLogs();
  }, [userId]);

  const actionConfig: Record<string, { icon: JSX.Element; color: string; label: string }> = {
    login: { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />, color: 'bg-gray-200', label: 'Đăng nhập' },
    logout: { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />, color: 'bg-gray-100 dark:bg-gray-800', label: 'Đăng xuất' },
    create_post: { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />, color: 'bg-gray-200', label: 'Tạo bài viết' },
    update_post: { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />, color: 'bg-gray-300', label: 'Sửa bài viết' },
    delete_post: { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />, color: 'bg-gray-300', label: 'Xóa bài viết' },
    create_comment: { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />, color: 'bg-gray-200', label: 'Bình luận' },
    report_content: { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />, color: 'bg-gray-800/20', label: 'Báo cáo nội dung' },
    profile_update: { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />, color: 'bg-gray-200', label: 'Cập nhật hồ sơ' },
  };

  const getActionConfig = (action: string) => actionConfig[action] || { icon: <circle cx="12" cy="12" r="10" />, color: 'bg-gray-100 dark:bg-gray-800', label: action };

  return (
    <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Lịch sử hoạt động</h3>

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="w-8 h-8 border-4 border-[#2A85FF] border-t-transparent animate-spin"></div>
        </div>
      ) : logs.length === 0 ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-500">Chưa có hoạt động nào được ghi nhận</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
          {logs.map((log) => {
            const config = getActionConfig(log.action);
            return (
              <div key={log.id} className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-gray-800">
                <div className={`w-10 h-10 ${config.color} flex items-center justify-center flex-shrink-0`}>
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">{config.icon}</svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 dark:text-white">{config.label}</p>
                  {log.resource_type && <p className="text-sm text-gray-500">{log.resource_type} #{log.resource_id}</p>}
                  <p className="text-xs text-gray-500 mt-1">{new Date(log.created_at).toLocaleString('vi-VN')}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
