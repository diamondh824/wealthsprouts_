import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wealth Sprouts",
  description: "Empowering financial growth through knowledge and tools.",
  keywords: "financial planning, wealth building, financial education, budgeting, investing, financial professionals",
  authors: [{ name: "Wealth Sprouts" }],
  creator: "Wealth Sprouts",
  publisher: "Wealth Sprouts",
  openGraph: {
    title: "Wealth Sprouts",
    description: "Empowering financial growth through knowledge and tools.",
    type: "website",
    locale: "en_US",
    siteName: "Wealth Sprouts",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Sprouts",
    description: "Empowering financial growth through knowledge and tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
