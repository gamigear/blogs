import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export const dynamic = 'force-dynamic';

// Webhook endpoint for Strapi to trigger revalidation
export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-revalidate-secret');
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  try {
    const { model, entry } = await req.json();

    switch (model) {
      case 'article':
        revalidatePath('/');
        revalidatePath(`/article/${entry.slug}`);
        if (entry.category?.slug) {
          revalidatePath(`/category/${entry.category.slug}`);
        }
        break;
      case 'community-post':
        revalidatePath('/community');
        break;
      case 'category':
        revalidatePath('/');
        revalidateTag('categories');
        break;
    }

    return NextResponse.json({ revalidated: true });
  } catch (error) {
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 });
  }
}
