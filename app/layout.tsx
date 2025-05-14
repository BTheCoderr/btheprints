import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ProductProvider } from './contexts/ProductContext';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3050'),
  title: "BthePrints - Custom Apparel & Prints",
  description: "Shop custom apparel, prints, and more at BthePrints. Quality custom designs for every occasion.",
  keywords: ["screen printing", "custom t-shirts", "apparel printing", "custom merchandise", "BthePrints"],
  authors: [{ name: "BthePrints" }],
  creator: "BthePrints",
  publisher: "BthePrints",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "BthePrints",
    title: "BthePrints - Custom Apparel & Prints",
    description: "Shop custom apparel, prints, and more at BthePrints. Quality custom designs for every occasion.",
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
    title: "BthePrints - Custom Apparel & Prints",
    description: "Shop custom apparel, prints, and more at BthePrints. Quality custom designs for every occasion.",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-black`}>
        <ProductProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ProductProvider>
      </body>
    </html>
  );
}
