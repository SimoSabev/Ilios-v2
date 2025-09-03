"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { HiMenu, HiX } from "react-icons/hi"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
      <motion.header
          className={cn(
              "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
              "backdrop-blur-md border-b border-white",
              isScrolled ? "bg-white shadow-md" : "bg-white"
          )}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-12 lg:h-16 relative">
            {/* Logo */}
            <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
              <Link
                  href="/"
                  className={cn(
                      "transition-opacity flex items-center",
                      isScrolled ? "opacity-100 hover:opacity-80" : "opacity-90 hover:opacity-70"
                  )}
                  aria-label="Ilios Decor Home"
              >
                <Image
                    src="/logo.jpg"
                    alt="Ilios Decor Logo"
                    width={120}
                    height={40}
                    priority
                    className="h-8 w-auto lg:h-12"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                  <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                          "text-sm font-medium transition-colors hover:text-neutral-900",
                          isScrolled ? "text-neutral-700 hover:text-neutral-900" : ""
                      )}
                  >
                    {link.label}
                  </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle Menu"
                  className="text-2xl text-neutral-800 hover:text-neutral-600 transition-colors"
              >
                {isMenuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden bg-white border-t border-neutral-200"
                >
                  <div className="flex flex-col px-4 py-4 space-y-3 justify-center items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-base font-medium text-neutral-700 hover:text-neutral-900"
                            onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                    ))}
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
  )
}
