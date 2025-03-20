import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ILC - Integrated Learning Circle",
  description: "Customized Learning for Your Unique Experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden relative`} >
        <Menu />
        {children}
        <Footer />
        </body>
    </html>
  );
}
