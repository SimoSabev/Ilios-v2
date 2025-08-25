"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import { QuickLookModal } from "./quick-look-modal"
import { Reveal } from "./reveal"

// Define a clean Product type
export interface Product {
  id: number
  name: string
  image: string
  description: string
  features: string[]
}

// Sample featured products
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Luxury Yacht Linens",
    image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Products%20-%20Linen.jpg-Sc4mE3k83swQdskrycXFVIXwM1zEif.jpeg",
    description:
        "Exquisite Egyptian cotton bedding with hand-embroidered nautical rope patterns.",
    features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
  },
  {
    id: 2,
    name: "Designer Yacht Cushions",
    image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Products%20-%20Cushions.jpg-OPJbfgNf2zUmTFgZBeAoYSTbVWvadX.jpeg",
    description:
        "Luxury cushions designed for comfort and marine durability.",
    features: ["Marine Grade Fabric", "Weather Resistant", "Easy to Clean"],
  },
  {
    id: 3,
    name: "Premium Yacht Tableware",
    image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Products%20-Tableware.jpg-jUB6NqSzwc6wkzko16QxbajeBq5SVP.jpeg",
    description: "Fine porcelain tableware with elegant gold accents.",
    features: ["Fine Porcelain", "Gold Accents", "Dishwasher Safe"],
  },
]

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleQuickLook = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
      <section className="py-20 lg:py-32" id="featured-products">
        <div className="container-custom">
          <Reveal>
            <div className="text-left mb-16">
              <h2 className="text-4xl text-neutral-900 mb-4 lg:text-6xl">
                Premium <span className="italic font-light">Yacht Products</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl">
                Discover our curated collection of luxury yacht furnishings, each piece crafted with marine-grade
                materials and sophisticated design for the discerning yacht owner.
              </p>
            </div>
          </Reveal>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
              }}
          >
            {featuredProducts.map((product, index) => (
                <motion.div
                    key={product.id}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
                    }}
                >
                  <Reveal delay={index * 0.1}>
                    <ProductCard product={product} onQuickLook={handleQuickLook} />
                  </Reveal>
                </motion.div>
            ))}
          </motion.div>
        </div>

        <QuickLookModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
      </section>
  )
}
