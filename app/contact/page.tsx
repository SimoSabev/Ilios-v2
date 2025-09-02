"use client"

import type React from "react"

import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {motion} from "framer-motion"
import {Reveal} from "@/components/reveal"
import Image from "next/image"
import {Linkedin, Phone, Mail, Instagram, Send,} from "lucide-react"
import {useState} from "react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        company: "",
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
            icon: Phone,
            title: "Phone",
            details: ["+33 6 60 05 13 91"],
        },
        {
            icon: Mail,
            title: "Email",
            details: ["office@iliosdecor.com"],
        },
        {
            icon: Instagram,
            title: "Instagram",
            details: ["ilios_decor"],
            link: "https://www.instagram.com/ilios_decor",
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            details: ["ILIOS Decor"],
            link: "https://www.linkedin.com/company/ilios-decor",
        },
    ]

    return (
        <main className="min-h-screen">
            <Header/>

            {/* Hero Section with Split Design */}
            <section className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
                    {/* Left Side - Contact Form */}
                    <div className="bg-white p-8 lg:p-16 flex items-center">
                        <div className="w-full max-w-lg mx-auto">
                            <Reveal>
                                <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                                    Let&apos;s Create <span className="italic font-light">Together</span>
                                </h1>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <p className="text-lg text-neutral-600 mb-8">
                                    A beautiful space that feels like home - elegant, comfortable, and uniquely yours.
                                </p>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-700 mb-2">Name
                                                *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#bfaa95] focus:border-transparent transition-colors"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-700 mb-2">Email
                                                *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#bfaa95] focus:border-transparent transition-colors"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-neutral-700 mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#bfaa95] focus:border-transparent transition-colors"
                                                placeholder="+33 6 12 34 56 78"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-neutral-700 mb-2">Company</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#bfaa95] focus:border-transparent transition-colors"
                                                placeholder="Company"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Message
                                            *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#bfaa95] focus:border-transparent transition-colors resize-none"
                                            placeholder="Tell us about your vision and requirements..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="w-full bg-neutral-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                                        whileHover={{scale: 1.02}}
                                        whileTap={{scale: 0.98}}
                                    >
                                        <Send size={18}/>
                                        Send Message
                                    </motion.button>
                                </form>
                            </Reveal>
                        </div>
                    </div>

                    {/* Right Side - Hero Image */}
                    <div className="relative bg-neutral-100">
                        <Image
                            src="/contact2.jpg" //https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20TOP%20Page%20Image.jpg-7WFTJ4P3DGyzs5ICddcHiNYqVnBoYx.jpeg
                            alt="Luxury yacht design consultation"
                            fill
                            className="object-cover object-[50%_100%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20"/>
                    </div>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="pt-20 lg:pt-32 bg-neutral-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => {
                            // Determine the href
                            let href = info.link || "";
                            if (info.title === "Phone") href = `tel:${info.details[0]}`;
                            if (info.title === "Email") href = `mailto:${info.details[0]}`;

                            return (
                                <Reveal key={index} delay={index * 0.1}>
                                    <motion.a
                                        href={href}
                                        target={info.title === "Phone" || info.title === "Email" ? "_self" : "_blank"}
                                        rel={info.link ? "noopener noreferrer" : undefined}
                                        className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-lg transition-all duration-300 cursor-pointer block"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <info.icon className="w-8 h-8 text-[#bfaa95]" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">{info.title}</h3>
                                        <div className="space-y-2">
                                            {info.details.map((detail, detailIndex) => (
                                                <p key={detailIndex} className="text-neutral-600">
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.a>
                                </Reveal>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="relative w-screen h-[500px] md:h-[700px] my-36">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/contact_bottom.jpg"
                        alt="Project secondary showcase"
                        fill
                        className="object-cover object-center shadow-lg"
                        priority
                    />
                    {/* Rounded corners only on desktop */}
                    <div className="absolute inset-0 rounded-none md:rounded-3xl overflow-hidden" />
                </motion.div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="container-custom text-center">
                    <Reveal>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Ready to Start Your <span className="italic font-light">Project?</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Contact us today to discuss your yacht design needs and discover how we can bring your
                            vision to life.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            Get In Touch
                        </motion.a>
                    </Reveal>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
