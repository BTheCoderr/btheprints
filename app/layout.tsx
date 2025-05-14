import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3050'),
  title: {
    template: '%s | BthePrints',
    default: 'BthePrints - Custom Screen Printing',
  },
  description: "Custom screen printing for any occasion. Quality apparel and designs.",
  keywords: ["screen printing", "custom t-shirts", "apparel printing", "custom merchandise", "BthePrints"],
  authors: [{ name: "BthePrints" }],
  creator: "BthePrints",
  publisher: "BthePrints",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://btheprints.com",
    siteName: "BthePrints",
    title: "BthePrints - Custom Screen Printing",
    description: "Custom screen printing for any occasion. Quality apparel and designs.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BthePrints - Custom Screen Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BthePrints - Custom Screen Printing",
    description: "Custom screen printing for any occasion. Quality apparel and designs.",
    images: ["/images/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "verification_token", // Replace with actual Google verification token
    yandex: "verification_token", // Replace with actual Yandex verification token
  },
  alternates: {
    canonical: "https://btheprints.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-black`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
