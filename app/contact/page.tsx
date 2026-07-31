"use client"

import type React from "react"

import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {motion} from "framer-motion"
import {Reveal} from "@/components/reveal"
import Image from "next/image"
import {Linkedin, Phone, Mail, Instagram, Send, CheckCircle2, AlertCircle} from "lucide-react"
import {useState} from "react"

type SubmitStatus = "idle" | "submitting" | "success" | "error"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        company: "",
        website: "", // honeypot, must stay empty
    })
    const [status, setStatus] = useState<SubmitStatus>("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("submitting")
        setErrorMessage("")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error ?? "Something went wrong. Please try again.")
            }

            setStatus("success")
            setFormData({name: "", email: "", phone: "", message: "", company: "", website: ""})
        } catch (error) {
            setStatus("error")
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.")
        }
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
            link: "https://www.linkedin.com/in/ilios",
        },
    ]

    return (
        <main className="min-h-screen">
            <Header/>

            {/* Hero Section with Split Design */}
            {/* Hero Section with Split Design */}
            <section className={""}>
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full">
                    {/* Left Side - Contact Form */}
                    <div className="bg-white p-6 sm:p-10 lg:p-16 mt-12 flex items-center">
                        <div className="w-full max-w-lg mx-auto">
                            <Reveal>
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                                    Let&apos;s Create <span className="italic font-light">Together</span>
                                </h1>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <p className="text-base sm:text-lg text-neutral-600 mb-8">
                                    A beautiful space that feels like home - elegant, comfortable, and uniquely yours.
                                </p>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#bfaa95] focus:border-transparent transition-colors text-sm sm:text-base"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#bfaa95] focus:border-transparent transition-colors text-sm sm:text-base"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#bfaa95] focus:border-transparent transition-colors text-sm sm:text-base"
                                                placeholder="+33 6 12 34 56 78"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#bfaa95] focus:border-transparent transition-colors text-sm sm:text-base"
                                                placeholder="Company"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#bfaa95] focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                                            placeholder="Tell us about your vision and requirements..."
                                        />
                                    </div>

                                    {/* Honeypot field - hidden from real visitors, catches bots */}
                                    <input
                                        type="text"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        tabIndex={-1}
                                        autoComplete="off"
                                        className="hidden"
                                        aria-hidden="true"
                                    />

                                    <motion.button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full bg-neutral-900 text-white py-3.5 sm:py-4 px-6 rounded-lg font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
                                        whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                                        whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
                                    >
                                        <Send size={18} />
                                        {status === "submitting" ? "Sending..." : "Send Message"}
                                    </motion.button>

                                    {status === "success" && (
                                        <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm">
                                            <CheckCircle2 size={18} />
                                            Thanks! Your message has been sent - we&apos;ll be in touch soon.
                                        </div>
                                    )}

                                    {status === "error" && (
                                        <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
                                            <AlertCircle size={18} />
                                            {errorMessage}
                                        </div>
                                    )}
                                </form>
                            </Reveal>
                        </div>
                    </div>

                    {/* Right Side - Hero Image */}
                    <div className="relative h-64 sm:h-auto bg-neutral-100">
                        <Image
                            src="/contact2.jpg"
                            alt="Luxury yacht design consultation"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" />
                    </div>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="pt-16 sm:pt-20 lg:pt-32 bg-neutral-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon
                            const content = (
                                <>
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                                        <Icon size={20} className="text-neutral-900" />
                                    </div>
                                    <h3 className="font-semibold text-neutral-900 mb-2">{info.title}</h3>
                                    {info.details.map((detail) => (
                                        <p key={detail} className="text-sm text-neutral-600">
                                            {detail}
                                        </p>
                                    ))}
                                </>
                            )

                            return (
                                <Reveal key={info.title} delay={index * 0.1}>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            {content}
                                        </a>
                                    ) : (
                                        <div className="bg-white rounded-xl p-6 shadow-sm">{content}</div>
                                    )}
                                </Reveal>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom Image */}
            <section className="relative w-screen h-64 sm:h-[400px] md:h-[700px] my-20 sm:my-36">
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
                    <div className="absolute inset-0 rounded-none md:rounded-3xl overflow-hidden" />
                </motion.div>
            </section>

            {/* Call to Action */}
            <section className="py-16 sm:py-20 bg-neutral-900 text-white text-center">
                <div className="container-custom">
                    <Reveal>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Ready to Start Your <span className="italic font-light">Project?</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Contact us to discuss your requirements and discover how we can bring your vision to life.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <motion.a
                            href="mailto:office@iliosdecor.com"
                            className="inline-flex items-center gap-2 bg-white text-neutral-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-neutral-100 transition-colors text-sm sm:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
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
