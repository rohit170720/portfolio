"use client";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <body className='bg-gray-900 text-white'>
        <Navbar />
        <main className='container mx-auto px-4 py-10'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
