"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: {
    id: number
    name: string
    image: string
    description: string
    features: string[]
  }
  onQuickLook?: (product: ProductCardProps["product"]) => void
}

export function ProductCard({ product, onQuickLook }: ProductCardProps) {
  return (
      <motion.div
          className="group relative bg-white overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
          whileHover={{ y: -5 }}
          layout
          onClick={() => onQuickLook && onQuickLook(product)}
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">{product.name}</h3>
          <p className="text-sm text-neutral-600 mb-4 line-clamp-2">{product.description}</p>

          <div className="flex flex-wrap gap-2">
            {product.features.map((f, i) => (
                <span key={i} className="text-xs bg-neutral-100 px-2 py-1 rounded">
              {f}
            </span>
            ))}
          </div>
        </div>
      </motion.div>
  )
}
