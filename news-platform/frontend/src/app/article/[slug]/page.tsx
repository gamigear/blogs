import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/strapi';
import { ArticleContent } from '@/components/ArticleContent';
import { DiscourseComments } from '@/components/DiscourseComments';

interface Props {
  params: { slug: string };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://news.example.com';

export async function generateStaticParams() {
  // Skip static generation during build if database is not available
  // Pages will be generated on-demand with ISR
  try {
    const slugs = await getAllArticleSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.log('Skipping static params generation - database not available during build');
    return [];
  }
}

/**
 * Generate SEO metadata for article page
 * Requirements: 4.3 - SEO meta tags
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return {};

  const title = article.seo?.metaTitle || article.title;
  const description = article.seo?.metaDescription || article.excerpt;
  const imageUrl = article.featuredImage?.url;
  const canonicalUrl = article.seo?.canonical || `${SITE_URL}/article/${params.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'News Platform',
      images: imageUrl ? [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: article.title,
      }] : [],
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: article.author?.name ? [article.author.name] : [],
      section: article.category?.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ISR: Revalidate every 5 minutes
// Requirements: 4.1, 4.2 - Static generation with ISR
export const revalidate = 300;

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  // JSON-LD structured data for SEO
  // Requirements: 4.3 - Valid JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage?.url,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      name: article.author?.name || 'Unknown',
      ...(article.author?.bio && { description: article.author.bio }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'News Platform',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/article/${params.slug}`,
    },
    articleSection: article.category?.name,
    wordCount: article.content?.split(/\s+/).length || 0,
    ...(article.readingTime && { timeRequired: `PT${article.readingTime}M` }),
  };

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: article.category?.name || 'Articles',
        item: `${SITE_URL}/category/${article.category?.slug || 'all'}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `${SITE_URL}/article/${params.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article className="max-w-4xl mx-auto">
        <ArticleContent article={article} />
        {article.discourseTopicId && (
          <DiscourseComments articleSlug={params.slug} />
        )}
      </article>
    </>
  );
}
