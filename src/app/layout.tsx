import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { CustomCursor } from "@/components/custom-cursor";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justie Wu — Product Manager",
  description:
    "Product Manager with 6 years of experience in AI/ML, B2B SaaS, fintech, e-commerce, and wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full bg-white text-black antialiased cursor-none">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
