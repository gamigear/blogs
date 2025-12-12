import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { slugify } from "@/libs/utils/slugify";

export default function PostCard({ post, featured = false }) {
  const { title, image, category, date, author, authorImage, readingTime } = post.frontmatter;

  if (featured) {
    return (
      <article className="relative rounded-2xl overflow-hidden group h-[500px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <Link
            href={`/category/${slugify(category)}`}
            className="inline-block px-4 py-1.5 bg-primary text-white text-xs uppercase tracking-wider rounded-full mb-4 hover:bg-primary/90 transition-colors"
          >
            {category}
          </Link>
          <h2 className="text-3xl md:text-4xl font-primary text-white mb-4 leading-tight">
            <Link href={`/${post.slug}`} className="hover:text-primary/90 transition-colors">
              {title}
            </Link>
          </h2>
          <div className="flex items-center gap-4 text-white/80 text-sm">
            {authorImage && (
              <Image src={authorImage} alt={author} width={32} height={32} className="rounded-full" />
            )}
            <span>{author}</span>
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
      </article>
    );
  }

  return (
    <article className="group">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Link
          href={`/category/${slugify(category)}`}
          className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs uppercase tracking-wider rounded-full text-dark hover:bg-primary hover:text-white transition-colors"
        >
          {category}
        </Link>
      </div>
      <h3 className="text-xl font-primary mb-2 leading-snug">
        <Link href={`/${post.slug}`} className="text-dark hover:text-primary transition-colors">
          {title}
        </Link>
      </h3>
      <div className="flex items-center gap-3 text-gray-500 text-sm">
        <span>{formatDate(date)}</span>
        {readingTime && (
          <>
            <span>•</span>
            <span>{readingTime}</span>
          </>
        )}
      </div>
    </article>
  );
}
