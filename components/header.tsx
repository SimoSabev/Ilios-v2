"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-md border-b border-white/[0.02]",
        isScrolled ? "bg-white/[0.02]" : "bg-white/[0.02]",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-12 lg:h-16 relative">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link
              href="/"
              className={cn(
                "text-xl lg:text-2xl font-bold tracking-tight transition-colors",
                isScrolled ? "text-neutral-900 hover:text-neutral-700" : "text-white hover:text-white/80",
              )}
              aria-label="Ilios Decor Home"
            >
              ILIOS DECOR
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-white/80",
                isScrolled ? "text-neutral-700 hover:text-neutral-900" : "text-white/90",
              )}
            >
              About
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-sm font-medium transition-colors hover:text-white/80",
                isScrolled ? "text-neutral-700 hover:text-neutral-900" : "text-white/90",
              )}
            >
              Services
            </Link>
            <Link
              href="/products"
              className={cn(
                "text-sm font-medium transition-colors hover:text-white/80",
                isScrolled ? "text-neutral-700 hover:text-neutral-900" : "text-white/90",
              )}
            >
              Products
            </Link>
            <Link
              href="/projects"
              className={cn(
                "text-sm font-medium transition-colors hover:text-white/80",
                isScrolled ? "text-neutral-700 hover:text-neutral-900" : "text-white/90",
              )}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-white/80",
                isScrolled ? "text-neutral-700 hover:text-neutral-900" : "text-white/90",
              )}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
