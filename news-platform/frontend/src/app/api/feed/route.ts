import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getFeedPosts, createFeedPost } from '@/lib/feed';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id ? parseInt(session.user.id as string) : undefined;
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');

    const result = await getFeedPosts(page, pageSize, userId);
    
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Feed GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch feed' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userId = parseInt(session.user.id as string);
    const body = await request.json();
    
    const { content, images, title } = body;

    if (!content?.trim()) {
      return NextResponse.json(
        { error: 'Vui lòng nhập nội dung bài viết' },
        { status: 400 }
      );
    }

    if (!images || images.length === 0) {
      return NextResponse.json(
        { error: 'Vui lòng thêm ít nhất 1 hình ảnh' },
        { status: 400 }
      );
    }

    const post = await createFeedPost(userId, {
      title,
      content: content.trim(),
      images: images || [],
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error: any) {
    console.error('Feed POST error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create post' },
      { status: 500 }
    );
  }
}
