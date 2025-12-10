import { query } from '@/lib/db';
import { ModerationActions } from '@/components/admin/ModerationActions';

export const dynamic = 'force-dynamic';

interface ModerationItem {
  id: number;
  content_type: string;
  content_id: number;
  reason: string;
  status: string;
  created_at: string;
  reporter_id: number;
  reporter_name: string;
  content_title: string;
  content_excerpt: string;
  author_name: string;
}

async function getModerationQueue(): Promise<ModerationItem[]> {
  try {
    return await query<ModerationItem>(`
      SELECT mq.id, mq.content_type, mq.content_id, mq.reason, mq.status, mq.created_at, mq.reporter_id,
        u.display_name as reporter_name,
        CASE WHEN mq.content_type = 'community_post' THEN cp.title WHEN mq.content_type = 'article' THEN a.title ELSE 'Unknown' END as content_title,
        CASE WHEN mq.content_type = 'community_post' THEN LEFT(cp.content, 200) WHEN mq.content_type = 'article' THEN LEFT(a.excerpt, 200) ELSE '' END as content_excerpt,
        CASE WHEN mq.content_type = 'community_post' THEN cpu.display_name WHEN mq.content_type = 'article' THEN au.display_name ELSE 'Unknown' END as author_name
      FROM moderation_queue mq
      LEFT JOIN users u ON mq.reporter_id = u.id
      LEFT JOIN community_posts cp ON mq.content_type = 'community_post' AND mq.content_id = cp.id
      LEFT JOIN users cpu ON cp.author_id = cpu.id
      LEFT JOIN articles a ON mq.content_type = 'article' AND mq.content_id = a.id
      LEFT JOIN users au ON a.author_id = au.id
      WHERE mq.status = 'pending' ORDER BY mq.created_at DESC LIMIT 50
    `);
  } catch { return []; }
}

export default async function ModerationPage() {
  const items = await getModerationQueue();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Hàng đợi kiểm duyệt</h1>
        <p className="text-gray-500 mt-1">{items.length} nội dung đang chờ xử lý</p>
      </div>

      {items.length === 0 ? (
        <div className="rounded-md bg-white dark:bg-[#1A1D1F] p-12 text-center">
          <div className="w-20 h-20 rounded-md bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-[#83BF6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Tuyệt vời!</h3>
          <p className="text-gray-500">Không có nội dung nào cần kiểm duyệt</p>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="rounded-md bg-white dark:bg-[#1A1D1F] p-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 flex items-center justify-center flex-shrink-0 ${
                  item.content_type === 'community_post' ? 'bg-gray-200' : 'bg-gray-200'
                }`}>
                  {item.content_type === 'community_post' ? (
                    <svg className="w-6 h-6 text-[#2A85FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-[#8E59FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-md ${
                      item.content_type === 'community_post' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' : 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400'
                    }`}>
                      {item.content_type === 'community_post' ? 'Bài cộng đồng' : 'Bài viết'}
                    </span>
                    <span className="text-sm text-gray-500">Báo cáo bởi: {item.reporter_name || 'Hệ thống'}</span>
                    <span className="text-sm text-gray-500">• {new Date(item.created_at).toLocaleDateString('vi-VN')}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{item.content_title}</h3>
                  <p className="text-sm text-gray-500 mb-2">Tác giả: <span className="text-gray-900 dark:text-white">{item.author_name}</span></p>
                  <p className="text-gray-500 mb-4 line-clamp-2">{item.content_excerpt}...</p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 mb-4 rounded-md">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Lý do báo cáo:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.reason}</p>
                  </div>
                  <ModerationActions itemId={item.id} contentType={item.content_type} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
