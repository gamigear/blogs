import Link from "next/link";
import config from "@/config/site.config.json";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-primary text-white mb-4">{config.logoText}</h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Khám phá vẻ đẹp Việt Nam qua những bài viết chất lượng về du lịch, 
              văn hóa, ẩm thực và trải nghiệm độc đáo tại các vùng miền.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Liên kết</h4>
            <ul className="space-y-2">
              {config.footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="text-gray-400 hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`mailto:${config.footerWidgets.email}`} className="hover:text-primary transition-colors">
                  {config.footerWidgets.email}
                </a>
              </li>
              <li>
                <a href={`tel:${config.footerWidgets.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                  {config.footerWidgets.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          {config.copyright}
        </div>
      </div>
    </footer>
  );
}
