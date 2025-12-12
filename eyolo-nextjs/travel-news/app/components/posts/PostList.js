import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { slugify } from "@/libs/utils/slugify";

export default function PostList({ post }) {
  const { title, image, category, date, author, readingTime, excerpt } = post.frontmatter;

  return (
    <article className="group flex flex-col md:flex-row gap-6 py-6 border-b border-border last:border-0">
      <div className="relative w-full md:w-72 aspect-[4/3] md:aspect-[3/2] rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center">
        <Link
          href={`/category/${slugify(category)}`}
          className="text-primary text-xs uppercase tracking-wider font-medium mb-2 hover:text-primary/80 transition-colors"
        >
          {category}
        </Link>
        <h3 className="text-xl md:text-2xl font-primary mb-2 leading-snug">
          <Link href={`/${post.slug}`} className="text-dark hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        {excerpt && (
          <p className="text-gray-600 mb-3 line-clamp-2">{excerpt}</p>
        )}
        <div className="flex items-center gap-3 text-gray-500 text-sm">
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
