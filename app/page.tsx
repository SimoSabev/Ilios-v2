"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CollectionStrip } from "@/components/collection-strip"
import { MaterialsSection } from "@/components/materials-section"
import { Footer } from "@/components/footer"
import { YachtShowcaseSection } from "@/components/yacht-showcase-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      {/*<FeaturedProducts />*/}
      <YachtShowcaseSection />
      <CollectionStrip />
      <MaterialsSection />
      {/*<NewsletterSection />*/}
      <Footer />
    </main>
  )
}
