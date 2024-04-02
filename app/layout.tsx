import { ReactNode } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

// components
import { Navbar } from "@/components/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jewelery Store",
  description: "A simple jewelery store online..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
