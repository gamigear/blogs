import "../../public/css/bootstrap.min.css";
import "../../public/css/remixicon.css";
import "../../public/css/flaticon.css";
import "../../public/css/header.css";
import "../../public/css/footer.css";
import "../../public/css/dark-switch-btn.css";
import 'swiper/css/bundle';
import 'react-accessible-accordion/dist/fancy-example.css';

// Globals Style
import "../../public/css/globals.css";
import "../../public/css/responsive.css";
// Dark Mode Style
import '../../public/css/dark-mode.css'
// RTL Style
import '../../public/css/rtl.css'

import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import BackToTop from "@/components/Layout/BackToTop";
import AosAnimation from "@/components/Layout/AosAnimation";
import RtlDemoSidebar from "@/components/Layout/RtlDemoSidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VéXanh - Nền Tảng Đặt Vé Du Lịch Trực Tuyến",
  description: "VéXanh - Đặt vé du lịch trực tuyến hàng đầu Việt Nam. Khám phá các điểm đến tuyệt vời với giá tốt nhất.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}

        <BackToTop />

        <AosAnimation />

        <RtlDemoSidebar />
      </body>
    </html>
  );
}
