import { Open_Sans } from "next/font/google";
import config from "@/config/site.config.json";
import NextTopLoader from "nextjs-toploader";
import "@/styles/styles.scss";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-opensans",
});

export const metadata = {
  title: config.metaData.title,
  description: config.metaData.description,
  icons: { icon: "/images/favicon.png" },
  openGraph: {
    title: config.metaData.title,
    description: config.metaData.description,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={openSans.variable} suppressHydrationWarning>
      <body className="font-opensans" suppressHydrationWarning>
        <NextTopLoader color="#006885" shadow="none" showSpinner={false} zIndex={9999999} height={2} />
        {children}
      </body>
    </html>
  );
}
