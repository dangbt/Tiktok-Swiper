import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiktok",
  description: "",
  icons: {
    icon: "/icon.png",
    shortcut: '/icon.png',
    apple: '/icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black bg-opacity-80`}>
        <div className={` relative max-w-screen-sm w-full bg-white mx-auto flex-col flex  min-h-screen`}>
          <Header />
          <main className="flex-1 relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
