import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Narek Tamazyan — Content Manager",
  description:
    "Content Manager building and managing content systems that drive engagement, growth, and consistency. Based in Yerevan, Armenia.",
  keywords: [
    "Narek Tamazyan",
    "Content Manager",
    "Social Media Manager",
    "Content Strategy",
    "Short-form Video",
    "Yerevan",
    "Armenia",
  ],
  authors: [{ name: "Narek Tamazyan" }],
  creator: "Narek Tamazyan",
  metadataBase: new URL("https://narek-tamazyan.vercel.app"),
  openGraph: {
    title: "Narek Tamazyan — Content Manager",
    description:
      "Building and managing content systems that drive engagement, growth, and consistency.",
    type: "website",
    locale: "en_US",
    siteName: "Narek Tamazyan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Narek Tamazyan — Content Manager",
    description:
      "Building and managing content systems that drive engagement, growth, and consistency.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
