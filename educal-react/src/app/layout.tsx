import "./globals.css";
import "../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
import { AuthProvider } from "@/contextApi/AuthContext";
import ReduxProvider from "@/redux/provider";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "GameHub - Tổng hợp Mini Game trên Mạng Xã Hội",
  description: "Nền tảng tổng hợp các mini game trên mạng xã hội hấp dẫn nhất Việt Nam. Cập nhật nhanh chóng các mini game từ Facebook, TikTok, Zalo và nhiều nền tảng khác.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="vi">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="GameHub - Tổng hợp Mini Game trên Mạng Xã Hội hấp dẫn nhất Việt Nam" />
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="keywords" content="mini game, mini game facebook, mini game tiktok, mini game zalo, game mạng xã hội" />
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
        </head>

        <body>
          <ReduxProvider>
            <AuthProvider>
              <AppProvider>{children}</AppProvider>
            </AuthProvider>
            <ToastContainer />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
