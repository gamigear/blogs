import Layout from "@/components/Layout";
import Image from "next/image";

export const metadata = {
  title: "Giới thiệu - Du Lịch Việt Nam",
  description: "Tìm hiểu về trang tin tức du lịch Việt Nam",
};

export default function AboutPage() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-primary mb-8 text-center">Về chúng tôi</h1>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-10">
              <Image
                src="https://images.unsplash.com/photo-1528127269322-539801943592?w=1200"
                alt="Du lịch Việt Nam"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Chào mừng bạn đến với Du Lịch Việt - nơi chia sẻ những câu chuyện, 
                trải nghiệm và thông tin hữu ích về du lịch Việt Nam.
              </p>

              <h2 className="text-2xl font-primary mt-10 mb-4">Sứ mệnh của chúng tôi</h2>
              <p>
                Chúng tôi tin rằng Việt Nam là một đất nước tuyệt vời với vô vàn điểm đến 
                hấp dẫn, từ những bãi biển xanh ngắt đến những ngọn núi hùng vĩ, từ những 
                thành phố sôi động đến những làng quê yên bình.
              </p>
              <p>
                Sứ mệnh của chúng tôi là giúp bạn khám phá vẻ đẹp của Việt Nam qua những 
                bài viết chất lượng, hình ảnh đẹp và thông tin hữu ích.
              </p>

              <h2 className="text-2xl font-primary mt-10 mb-4">Nội dung của chúng tôi</h2>
              <ul className="space-y-2">
                <li><strong>Điểm đến:</strong> Giới thiệu các địa điểm du lịch nổi tiếng và ẩn mình</li>
                <li><strong>Ẩm thực:</strong> Khám phá văn hóa ẩm thực đặc sắc của từng vùng miền</li>
                <li><strong>Văn hóa:</strong> Tìm hiểu về lịch sử, phong tục và con người Việt Nam</li>
                <li><strong>Trải nghiệm:</strong> Chia sẻ những hoạt động và trải nghiệm độc đáo</li>
              </ul>

              <h2 className="text-2xl font-primary mt-10 mb-4">Liên hệ</h2>
              <p>
                Nếu bạn có câu hỏi, góp ý hoặc muốn hợp tác, đừng ngần ngại liên hệ với 
                chúng tôi qua trang <a href="/contact" className="text-primary">Liên hệ</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
