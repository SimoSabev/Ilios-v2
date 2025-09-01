"use client"

import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {motion, useScroll, useTransform} from "framer-motion"
import {Reveal} from "@/components/reveal"
import Image from "next/image"
import {Compass, Palette, Users, Settings} from "lucide-react"
import {useRef} from "react"

export default function ServicesPage() {
    const services = [
        {
            icon: Palette,
            title: "Key Services",
            features: [
                "Tailored-made Interior Décor Proposals",
                "Personalised Product Development",
                "Competitive & Transparent Pricing",
                "Detailed Quotes",
                "Delivery Schedules & Updates",
                "Sea stowing & Fastening",
                "Worldwide Delivery & Installation",
            ],
            image: "/About_Cards_1.png",
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
            image: "/Services_Page.png",
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
            images: [
                "/Before.png", // Before
                "/After.png", // After
            ],
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
            image: "/About_Cards_2.png",
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
            description:
                "Creating detailed design concepts and 3D visualizations to bring your vision to life.",
        },
        {
            step: "03",
            title: "Design Refinement",
            description:
                "Collaborative refinement of designs, material selection, and technical specifications.",
        },
        {
            step: "04",
            title: "Implementation",
            description:
                "Professional project management and installation with attention to every detail.",
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
                ></motion.div>
            </section>

            <Reveal className={"w-full flex justify-center items-center"}>
                <h2 className="text-xl max-w-[175vh] lg:text-2xl text-center p-12 w-full text-neutral-900 mb-6">
                    Our services expand from New Build full interior setup, FFE & Owner’s
                    supply, interior support for refit projects, upholstery, furniture
                    restoration to crew uniforms and guest amenities. From the initial
                    consultation to final delivery, our personalised service and
                    consistent communication keeps you informed about your project and
                    order status every step of the way.
                </h2>
            </Reveal>

            {/* Services Grid */}
            <section className="py-20 lg:py-32">
                <div className="container-custom">
                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                                }`}
                            >
                                {/* Left Content */}
                                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                                    <Reveal>
                                        <div
                                            className="w-16 h-16 bg-gray-200/70 rounded-full flex items-center justify-center mb-6">
                                            <service.icon className="w-8 h-8 text-[#bfaa95]"/>
                                        </div>
                                    </Reveal>
                                    <Reveal delay={0.1}>
                                        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                                            {service.title}
                                        </h2>
                                    </Reveal>
                                    <Reveal delay={0.3}>
                                        <div className="mt-10">
                                            <ul className="space-y-2">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li
                                                        key={featureIndex}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <div className="w-2 h-2 bg-[#bfaa95] rounded-full"/>
                                                        <span className="text-neutral-700">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Reveal>
                                </div>

                                {/* Right Content (Images) */}
                                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                                    <Reveal delay={0.4}>
                                        {service.title === "Soft Refurbishment" ? (
                                            <div className="grid grid-rows-2 gap-4">
                                                {service.images?.map((img, imgIndex) => (
                                                    <motion.div
                                                        key={imgIndex}
                                                        className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                                                        whileHover={{scale: 1.02}}
                                                        transition={{duration: 0.3}}
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={`${
                                                                imgIndex === 0 ? "Before" : "After"
                                                            } - ${service.title}`}
                                                            fill
                                                            className="object-cover object-[50%_70%]"
                                                        />
                                                        <div
                                                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
                                                        <span
                                                            className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded">
                                                            {imgIndex === 0 ? "Before" : "After"}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        ) : (
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
                                        )}
                                    </Reveal>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer/>
        </main>
    )
}
