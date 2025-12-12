import Layout from "@/components/Layout";
import PostCard from "@/components/posts/PostCard";
import { slugify } from "@/libs/utils/slugify";
import { getAllCategories } from "@/functions/categories";
import allPosts from "@/data/posts.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const categories = getAllCategories(allPosts);
  return categories.map((category) => ({ category: slugify(category) }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const categoryPosts = allPosts.filter(
    (post) => slugify(post.frontmatter.category) === category
  );
  
  if (categoryPosts.length === 0) return { title: "Không tìm thấy danh mục" };
  
  const categoryName = categoryPosts[0].frontmatter.category;
  return {
    title: `${categoryName} - Du Lịch Việt Nam`,
    description: `Khám phá các bài viết về ${categoryName}`,
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categoryPosts = allPosts.filter(
    (post) => slugify(post.frontmatter.category) === category
  );

  if (categoryPosts.length === 0) notFound();

  const categoryName = categoryPosts[0].frontmatter.category;

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-12">
            <span className="text-primary text-sm uppercase tracking-wider">Danh mục</span>
            <h1 className="text-4xl md:text-5xl font-primary mt-2 mb-4">{categoryName}</h1>
            <p className="text-gray-600 text-lg">
              {categoryPosts.length} bài viết trong danh mục này
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
