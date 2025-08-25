"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    yachtSize: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Studio Location",
      details: ["Monaco Marina", "Port Hercules", "98000 Monaco"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+377 97 97 97 97", "+33 6 12 34 56 78"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@iliosdecor.com", "projects@iliosdecor.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 - 18:00", "Sat: 10:00 - 16:00", "Sun: By appointment"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section with Split Design */}
      <section className="pt-32 pb-0 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
          {/* Left Side - Contact Form */}
          <div className="bg-white p-8 lg:p-16 flex items-center">
            <div className="w-full max-w-lg mx-auto">
              <Reveal>
                <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                  Let's Create <span className="italic font-light">Together</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg text-neutral-600 mb-8">
                  Ready to transform your yacht into a masterpiece? Share your vision with us and let's begin this
                  extraordinary journey.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Yacht Size</label>
                      <select
                        name="yachtSize"
                        value={formData.yachtSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select size</option>
                        <option value="30-50m">30-50m</option>
                        <option value="50-80m">50-80m</option>
                        <option value="80-120m">80-120m</option>
                        <option value="120m+">120m+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="interior">Interior Design</option>
                      <option value="exterior">Exterior Design</option>
                      <option value="complete">Complete Renovation</option>
                      <option value="consultation">Design Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your vision and requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-neutral-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} />
                    Send Message
                  </motion.button>
                </form>
              </Reveal>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative bg-neutral-100">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20TOP%20Page%20Image.jpg-7WFTJ4P3DGyzs5ICddcHiNYqVnBoYx.jpeg"
              alt="Luxury yacht design consultation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" />
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                Get In <span className="italic font-light">Touch</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Multiple ways to reach us. We're here to answer your questions and discuss your yacht design project.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-neutral-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Reveal>
                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                  Visit Our <span className="italic font-light">Studio</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-6 text-neutral-700 leading-relaxed">
                  <p>
                    Located in the heart of Monaco's prestigious marina district, our design studio offers the perfect
                    setting to discuss your yacht design project while surrounded by some of the world's most beautiful
                    superyachts.
                  </p>
                  <p>
                    Schedule a consultation to visit our showroom, view material samples, and experience our design
                    process firsthand. We welcome yacht owners from around the world to explore possibilities for their
                    vessels.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="bg-neutral-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle size={18} />
                    Schedule Visit
                  </motion.button>
                  <motion.button
                    className="border border-neutral-300 text-neutral-700 px-6 py-3 rounded-lg font-semibold hover:border-neutral-400 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MapPin size={18} />
                    Get Directions
                  </motion.button>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <Reveal delay={0.3}>
                <motion.div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Placeholder for map - in real implementation, you'd use Google Maps or similar */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin size={48} className="mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Monaco Marina</h3>
                      <p className="text-blue-100">Port Hercules, 98000 Monaco</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Frequently Asked <span className="italic font-light">Questions</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Common questions about our yacht design process and services.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on scope, but typically range from 3-12 months for complete renovations.",
              },
              {
                question: "Do you work internationally?",
                answer:
                  "Yes, we serve clients worldwide and can coordinate projects in any location where your yacht is based.",
              },
              {
                question: "What's included in the consultation?",
                answer:
                  "Initial consultations include design assessment, concept development, and detailed project proposal.",
              },
              {
                question: "Can you work with existing naval architects?",
                answer:
                  "Absolutely. We collaborate closely with naval architects, shipyards, and other marine professionals.",
              },
            ].map((faq, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
