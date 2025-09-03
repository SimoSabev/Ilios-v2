"use client"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
      <footer className="bg-neutral-200 relative overflow-hidden py-10" id="contact">
        <div className="absolute inset-0 bg-neutral-50/50" />

        <div className="container-custom relative py-16 lg:py-20">
          {/* Quick Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 lg:gap-12 mb-12 text-center sm:text-left">
            {quickLinks.map((link, index) => (
                <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                  <a
                      href={link.href}
                      className="text-neutral-900 hover:text-neutral-900 text-lg font-light tracking-wide transition-colors duration-200 group inline-flex items-center justify-center sm:justify-start"
                  >
                    {link.name}
                    <ArrowUpRight
                        size={14}
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </a>
                </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
              className="pt-6 border-t border-neutral-900 flex justify-center items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
          >
            <p className="text-sm text-neutral-900 tracking-wide">
              &copy; {currentYear} Ilios Decor. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
  )
}
