'use client';

import { useState, useEffect } from 'react';

interface ActivityLog {
  id: number;
  action: string;
  resource_type: string;
  resource_id: number;
  details: Record<string, any>;
  created_at: string;
}

interface Props {
  userId: number;
}

export function UserActivityLog({ userId }: Props) {
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch(`/api/admin/users/${userId}/activity`);
        if (res.ok) {
          const data = await res.json();
          setLogs(data.logs);
        }
      } catch (error) {
        console.error('Error fetching activity logs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, [userId]);

  const actionLabels: Record<string, string> = {
    login: '🔑 Đăng nhập',
    logout: '🚪 Đăng xuất',
    create_post: '📝 Tạo bài viết',
    update_post: '✏️ Sửa bài viết',
    delete_post: '🗑️ Xóa bài viết',
    create_comment: '💬 Bình luận',
    report_content: '🚩 Báo cáo nội dung',
    profile_update: '👤 Cập nhật hồ sơ',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Lịch sử hoạt động</h3>

      {loading ? (
        <div className="text-center py-4 text-gray-500">Đang tải...</div>
      ) : logs.length === 0 ? (
        <div className="text-center py-4 text-gray-500">
          Chưa có hoạt động nào được ghi nhận
        </div>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {logs.map((log) => (
            <div
              key={log.id}
              className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex-1">
                <p className="font-medium text-sm">
                  {actionLabels[log.action] || log.action}
                </p>
                {log.resource_type && (
                  <p className="text-xs text-gray-600">
                    {log.resource_type} #{log.resource_id}
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(log.created_at).toLocaleString('vi-VN')}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
