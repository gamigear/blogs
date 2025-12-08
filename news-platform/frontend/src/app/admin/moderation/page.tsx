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
    const items = await query<ModerationItem>(`
      SELECT 
        mq.id,
        mq.content_type,
        mq.content_id,
        mq.reason,
        mq.status,
        mq.created_at,
        mq.reporter_id,
        u.display_name as reporter_name,
        CASE 
          WHEN mq.content_type = 'community_post' THEN cp.title
          WHEN mq.content_type = 'article' THEN a.title
          ELSE 'Unknown'
        END as content_title,
        CASE 
          WHEN mq.content_type = 'community_post' THEN LEFT(cp.content, 200)
          WHEN mq.content_type = 'article' THEN LEFT(a.excerpt, 200)
          ELSE ''
        END as content_excerpt,
        CASE 
          WHEN mq.content_type = 'community_post' THEN cpu.display_name
          WHEN mq.content_type = 'article' THEN au.display_name
          ELSE 'Unknown'
        END as author_name
      FROM moderation_queue mq
      LEFT JOIN users u ON mq.reporter_id = u.id
      LEFT JOIN community_posts cp ON mq.content_type = 'community_post' AND mq.content_id = cp.id
      LEFT JOIN users cpu ON cp.author_id = cpu.id
      LEFT JOIN articles a ON mq.content_type = 'article' AND mq.content_id = a.id
      LEFT JOIN users au ON a.author_id = au.id
      WHERE mq.status = 'pending'
      ORDER BY mq.created_at DESC
      LIMIT 50
    `);
    return items;
  } catch (error) {
    console.error('Error fetching moderation queue:', error);
    return [];
  }
}

export default async function ModerationPage() {
  const items = await getModerationQueue();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Hàng đợi kiểm duyệt</h1>

      {items.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <span className="text-6xl mb-4 block">✅</span>
          <p className="text-gray-600">Không có nội dung nào cần kiểm duyệt!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 text-xs rounded ${
                      item.content_type === 'community_post' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {item.content_type === 'community_post' ? 'Bài cộng đồng' : 'Bài viết'}
                    </span>
                    <span className="text-sm text-gray-500">
                      Báo cáo bởi: {item.reporter_name || 'Hệ thống'}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-1">{item.content_title}</h3>
                  <p className="text-sm text-gray-600 mb-2">Tác giả: {item.author_name}</p>
                  <p className="text-gray-700 mb-3">{item.content_excerpt}...</p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                    <p className="text-sm font-medium text-yellow-800">Lý do báo cáo:</p>
                    <p className="text-sm text-yellow-700">{item.reason}</p>
                  </div>
                </div>
              </div>
              
              <ModerationActions itemId={item.id} contentType={item.content_type} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
