"use client"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ]

  return (
      <footer className="bg-[#bfaa95] border-t border-white/[0.02] mt-16" id="contact">
        <div className="container-custom py-16 lg:py-20">
          {/* Quick Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 lg:gap-12 mb-12 text-center sm:text-left">
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
                      className="text-white hover:text-neutral-900 transition-colors duration-200 group inline-flex items-center"
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
              className="pt-8 pb-4 border-t border-neutral-200 flex justify-center items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-white text-center">
              <p>&copy; {currentYear} Ilios Decor. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </footer>
  )
}
