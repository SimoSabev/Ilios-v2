import type React from "react"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
})

export const metadata: Metadata = {
    title: "Ilios Decor — Interior Procurement",
    description:
        "Ilios Decor offers bespoke interior decor and procurement for yacht and residences, ensuring aesthetically pleasing and comfortable spaces with premium materials and timeless elegance.",
    alternates: {
        canonical: "https://www.iliosdecor.com",
    },
    icons: {
        icon: "/favicon.jpg",
    },
    openGraph: {
        siteName: "Ilios Decor",
        title: "Ilios Decor — Interior Procurement",
        description:
            "Ilios Decor offers bespoke interior decor and procurement for yachts and residences, ensuring aesthetically pleasing and comfortable spaces with premium materials and timeless elegance.",
        type: "website",
        url: "https://www.iliosdecor.com",
        images: [
            {
                url: "/Main%20TOP%20Page%20Image.jpg",
                alt: "Ilios Decor luxury yacht design — sophisticated maritime interiors",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
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
