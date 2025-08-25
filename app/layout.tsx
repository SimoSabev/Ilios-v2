import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Ilios Decor — Luxury Yacht Interior & Exterior Design",
  description:
    "Bespoke yacht interior and exterior design services. Creating sophisticated maritime spaces with premium materials and timeless elegance.",
  generator: "v0.app",
  alternates: {
    canonical: "https://iliosdecor.example/",
  },
  openGraph: {
    siteName: "Ilios Decor",
    title: "Luxury Yacht Interior & Exterior Design | Ilios Decor",
    description:
      "Bespoke yacht interior and exterior design services. Creating sophisticated maritime spaces with premium materials and timeless elegance.",
    type: "website",
    url: "https://iliosdecor.example/",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20TOP%20Page%20Image.jpg-7WFTJ4P3DGyzs5ICddcHiNYqVnBoYx.jpeg",
        alt: "Ilios Decor luxury yacht design — sophisticated maritime interiors",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Yacht Interior & Exterior Design | Ilios Decor",
    description:
      "Bespoke yacht interior and exterior design services. Creating sophisticated maritime spaces with premium materials and timeless elegance.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20TOP%20Page%20Image.jpg-7WFTJ4P3DGyzs5ICddcHiNYqVnBoYx.jpeg",
        alt: "Ilios Decor luxury yacht design — sophisticated maritime interiors",
      },
    ],
    site: "@iliosdecor",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
