import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'BthePrints - Custom Apparel & Merchandise',
  description: 'YOU THINK IT, WE PRINT IT - Custom screen printing for all your apparel and merchandise needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-brand-black text-white min-h-screen">
        {children}
      </body>
    </html>
  )
} 