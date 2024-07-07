import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModelProvider from "@/providers/modelProvider";
import ToastProvider from "@/providers/toastProvider";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModelProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
