"use client"

import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {motion, useScroll, useTransform} from "framer-motion"
import {Reveal} from "@/components/reveal"
import Image from "next/image"
import {Compass, Palette, Users, Settings,} from "lucide-react"
import {useRef} from "react";

export default function ServicesPage() {
    const services = [
        {
            icon: Palette,
            title: "Text",
            features: ["Tailored-made Interior Décor Proposals", "Personalised Product Development", "Competitive & Transparent Pricing", "Detailed Quotes", "Delivery Schedules & Updates", "Sea stowing & Fastening", "Worldwide Delivery & Installation"],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20Page%20Bottom%20Services.jpg-7WFTJ4P3DGyzs5ICddcHiNYqVnBoYx.jpeg",
        },
        {
            icon: Compass,
            title: "Sourcing & Procurement",
            features: [
                "Identifying the needs, preferences and vision",
                "Defining budget and timeline",
                "Reviewing suitable products and stock availability",
                "Quantity evaluation",
                "Creating detailed proposals",
                "Coordinating logistics",
                "Delivery and after-sale service",
            ],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Projects%20Page.jpg-7WFTJ4P3DGyzs5ICddcHiNYqVnBoYx.jpeg",
        },
        {
            icon: Settings,
            title: "Soft Refurbishment",
            features: [
                "Initial assessment and planning",
                "Items to retain, refresh and replace",
                "Budget and timeline constrain",
                "Optimisation of furniture arrangement",
                "Visuals and materials selection",
                "Procurement and Logistics",
                "Finishing Touches",
                "Furniture Placement and Installation",
            ],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Services%20Page.jpg-7WFTJ4P3DGyzs5ICddcHiNYqVnBoYx.jpeg",
        },
        {
            icon: Users,
            title: "Project Management",
            features: [
                "Discovery and feasibility assessment",
                "Scope of work definition",
                "Planning and Timeline",
                "Budget and cost control",
                "Vendor and Contractors Liaison ",
                "Storage solution and organisation",
                "On site inspection and quality control",
                "Installation and implementation ",
                "Handover and post-project support",
            ],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Extra%20Image.jpg-7WFTJ4P3DGyzs5ICddcHiNYqVnBoYx.jpeg",
        },
    ]

    const process = [
        {
            step: "01",
            title: "Consultation",
            description:
                "Initial meeting to understand your vision, lifestyle, and requirements for your yacht design project.",
        },
        {
            step: "02",
            title: "Concept Development",
            description: "Creating detailed design concepts and 3D visualizations to bring your vision to life.",
        },
        {
            step: "03",
            title: "Design Refinement",
            description: "Collaborative refinement of designs, material selection, and technical specifications.",
        },
        {
            step: "04",
            title: "Implementation",
            description: "Professional project management and installation with attention to every detail.",
        },
    ]

    const containerRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])
    const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <main className="min-h-screen">
            <Header/>

            {/* Hero Section */}
            <section ref={containerRef} className="relative h-screen overflow-hidden">
                {/* Background Image with Cinematic Effects */}
                <motion.div
                    className="absolute inset-0"
                    style={{scale: imageScale, y: imageY}}
                    initial={{scale: 1.05}}
                    animate={{scale: 1}}
                    transition={{duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98]}}
                >
                    <Image
                        src="/Services%20Page.jpg"
                        alt="Luxury yacht interior design - elegant dining room with sophisticated lighting"
                        fill
                        className="object-cover object-[50%_25%]"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/40"/>
                </motion.div>

                {/* Content */}
                <motion.div
                    className="relative z-10 h-full flex items-center justify-center"
                    style={{y: contentY, opacity: contentOpacity}}
                >
                    {/*<div className="container-custom text-center text-white">*/}
                    {/*    <Reveal>*/}
                    {/*        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight mb-6">*/}
                    {/*            Yacht Design*/}
                    {/*            <br/>*/}
                    {/*            <span className="italic font-light">Services</span>*/}
                    {/*        </h1>*/}
                    {/*    </Reveal>*/}

                    {/*    <Reveal delay={0.2}>*/}
                    {/*        <motion.p*/}
                    {/*            className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"*/}
                    {/*            initial={{opacity: 0, y: 20}}*/}
                    {/*            animate={{opacity: 1, y: 0}}*/}
                    {/*            transition={{duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98]}}*/}
                    {/*        >*/}
                    {/*            Our services expand from New Build full interior setup, FFE & Owner’s supply, interior*/}
                    {/*            support for refit projects, upholstery, furniture restoration to crew uniforms and guest*/}
                    {/*            amenities. From the initial consultation to final delivery, our personalised service and*/}
                    {/*            consistent communication keeps you informed about your order status every step of the*/}
                    {/*            way.*/}
                    {/*        </motion.p>*/}
                    {/*    </Reveal>*/}
                    {/*</div>*/}
                </motion.div>
            </section>
            <Reveal className={"w-full flex justify-center items-center"}>
                <h2 className="text-xl max-w-[175vh] lg:text-2xl text-center p-12 w-full text-neutral-900 mb-6">
                    Our services expand from New Build full interior setup, FFE & Owner’s supply, interior support for
                    refit projects, upholstery, furniture restoration to crew uniforms and guest amenities. From the
                    initial consultation to final delivery, our personalised service and consistent communication keeps
                    you informed about your project and order status every step of the way.
                </h2>
            </Reveal>
            {/* Services Grid */}
            <section className="py-20 lg:py-32">
                <div className="container-custom">
                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                            >
                                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                                    <Reveal>
                                        <div
                                            className="w-16 h-16 bg-gray-200/70 rounded-full flex items-center justify-center mb-6">
                                            <service.icon className="w-8 h-8 text-[#bfaa95]"/>
                                        </div>
                                    </Reveal>

                                    <Reveal delay={0.1}>
                                        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">{service.title}</h2>
                                    </Reveal>

                                    <Reveal delay={0.3}>
                                        <div className="mt-10">
                                            <ul className="space-y-2">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-[#bfaa95] rounded-full"/>
                                                        <span className="text-neutral-700">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Reveal>
                                </div>

                                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                                    <Reveal delay={0.4}>
                                        <motion.div
                                            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                                            whileHover={{scale: 1.02}}
                                            transition={{duration: 0.3}}
                                        >
                                            <Image
                                                src={service.image || "/placeholder.svg"}
                                                alt={`${service.title} showcase`}
                                                fill
                                                className="object-cover"
                                            />
                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
                                        </motion.div>
                                    </Reveal>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 lg:py-32 bg-neutral-50">
                <div className="container-custom">
                    <Reveal>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                                Our Design <span className="italic font-light">Process</span>
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                                A structured approach that ensures every project is delivered with exceptional quality
                                and attention to
                                detail.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <Reveal key={index} delay={index * 0.1}>
                                <motion.div
                                    className="text-center p-6 bg-white rounded-xl shadow-sm"
                                    whileHover={{y: -5}}
                                    transition={{duration: 0.3}}
                                >
                                    <div className="text-4xl font-bold text-[#bfaa95] mb-4">{step.step}</div>
                                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{step.title}</h3>
                                    <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
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
