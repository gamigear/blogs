import Layout from "@/components/Layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-24 text-center">
        <div className="container">
          <h1 className="text-8xl font-primary text-primary mb-4">404</h1>
          <h2 className="text-2xl font-primary mb-4">Không tìm thấy trang</h2>
          <p className="text-gray-600 mb-8">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
          <Link href="/" className="button button-primary">
            Về trang chủ
          </Link>
        </div>
      </section>
    </Layout>
  );
}
