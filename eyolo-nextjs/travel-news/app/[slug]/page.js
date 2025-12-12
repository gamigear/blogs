import Layout from "@/components/Layout";
import PostCard from "@/components/posts/PostCard";
import { formatDate } from "@/utils/formatDate";
import { slugify } from "@/libs/utils/slugify";
import allPosts from "@/data/posts.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Không tìm thấy bài viết" };
  
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt || post.frontmatter.title,
    openGraph: {
      title: post.frontmatter.title,
      images: [post.frontmatter.image],
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  
  if (!post) notFound();

  const { title, image, category, date, author, authorImage, readingTime } = post.frontmatter;
  
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.frontmatter.category === category)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container">
            <Link
              href={`/category/${slugify(category)}`}
              className="inline-block px-4 py-1.5 bg-primary text-white text-xs uppercase tracking-wider rounded-full mb-4"
            >
              {category}
            </Link>
            <h1 className="text-3xl md:text-5xl font-primary text-white mb-6 max-w-4xl leading-tight">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-white/80">
              {authorImage && (
                <Image src={authorImage} alt={author} width={40} height={40} className="rounded-full" />
              )}
              <span className="font-medium">{author}</span>
              <span>•</span>
              <span>{formatDate(date)}</span>
              {readingTime && (
                <>
                  <span>•</span>
                  <span>{readingTime}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-slate">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }} />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-500">Chủ đề:</span>
                <Link
                  href={`/category/${slugify(category)}`}
                  className="px-3 py-1 bg-light rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  {category}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-light">
          <div className="container">
            <h2 className="section-title mb-10">Bài viết liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
