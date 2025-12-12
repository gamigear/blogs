import Layout from "@/components/Layout";
import PostCard from "@/components/posts/PostCard";
import allPosts from "@/data/posts.json";

export const metadata = {
  title: "Tất cả bài viết - Du Lịch Việt Nam",
  description: "Khám phá tất cả bài viết về du lịch, văn hóa, ẩm thực Việt Nam",
};

export default function BlogPage() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-primary mb-4">Tất cả bài viết</h1>
            <p className="text-gray-600 text-lg">
              Khám phá {allPosts.length} bài viết về du lịch Việt Nam
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
