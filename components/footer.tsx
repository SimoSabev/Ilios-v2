"use client"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: "Interior Design", href: "#services" },
      { name: "Exterior Design", href: "#services" },
      { name: "Custom Furnishing", href: "#services" },
      { name: "Project Management", href: "#services" },
      { name: "Consultation", href: "#services" },
    ],
    Products: [
      { name: "Luxury Linens", href: "#products" },
      { name: "Designer Cushions", href: "#products" },
      { name: "Premium Tableware", href: "#products" },
      { name: "Yacht Toiletries", href: "#products" },
      { name: "Custom Pieces", href: "#products" },
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Process", href: "#" },
      { name: "Testimonials", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ]

  return (
    <footer className="bg-white/[0.02] border-t border-white/[0.02] mt-16" id="contact">
      <div className="py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="w-full mb-12">
          {/* Links Sections */}
          <div className="w-full">
            <div className="w-full flex justify-around items-center">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-neutral-900 mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 group flex items-center"
                        >
                          {link.name}
                          <ArrowUpRight
                            size={14}
                            className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 pb-4 border-t border-neutral-200 flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-neutral-500 text-center">
            <p>&copy; {currentYear} Ilios Decor. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
