import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
          {/* 头部 */}
          <Header />

          <div className="lg:container flex-1 justify-start items-center my-20 px-6 w-full xl:w-4/5 mx-auto">
            {children}
          </div>

          {/* 底部 */}
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-8CD7YMRV33" />
    </html>
  );
}
