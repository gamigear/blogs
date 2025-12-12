import Layout from "@/components/Layout";
import config from "@/config/site.config.json";

export const metadata = {
  title: "Liên hệ - Du Lịch Việt Nam",
  description: "Liên hệ với chúng tôi",
};

export default function ContactPage() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-primary mb-4 text-center">Liên hệ</h1>
            <p className="text-gray-600 text-center mb-10">
              Chúng tôi luôn sẵn sàng lắng nghe ý kiến của bạn
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-light rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href={`mailto:${config.footerWidgets.email}`} className="text-primary hover:underline">
                  {config.footerWidgets.email}
                </a>
              </div>
              <div className="bg-light rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Điện thoại</h3>
                <a href={`tel:${config.footerWidgets.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">
                  {config.footerWidgets.phone}
                </a>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Họ tên</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Nhập họ tên"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Nhập email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tiêu đề</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Nhập tiêu đề"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Nội dung</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Nhập nội dung tin nhắn"
                />
              </div>
              <button type="submit" className="button button-primary button-lg w-full justify-center">
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
