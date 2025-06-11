import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import CursorEffects from "./components/CursorEffects";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3050'),
  title: "BthePrints - Custom Screen Printing For The Future",
  description: "Experience the next generation of custom screen printing with AI-enhanced designs, quantum quality, and lightning-fast turnaround. Transform your ideas into reality with BthePrints.",
  keywords: "custom screen printing, apparel printing, t-shirt printing, custom merchandise, AI design, futuristic printing",
  authors: [{ name: "BthePrints" }],
  creator: "BthePrints",
  publisher: "BthePrints",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "BthePrints",
    title: "BthePrints - Custom Screen Printing For The Future",
    description: "Experience the next generation of custom screen printing with AI-enhanced designs and quantum quality.",
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
    title: "BthePrints - Custom Screen Printing For The Future",
    description: "Experience the next generation of custom screen printing with AI-enhanced designs and quantum quality.",
    images: ["/images/og-image.jpg"],
    creator: "@btheprints",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: 'your-google-verification-code',
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
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#fbae17" />
        <meta name="msapplication-TileColor" content="#fbae17" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Futuristic cursor effects */}
        <CursorEffects />
        
        {/* Global particle background */}
        <ParticleBackground />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main content with proper spacing for fixed navbar */}
        <main className="pt-20 relative z-10">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Loading screen overlay */}
        <div id="loading-screen" className="fixed inset-0 bg-black z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-500">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
            <div className="text-brand-primary font-mono text-sm">INITIALIZING...</div>
          </div>
        </div>
      </body>
    </html>
  );
}
