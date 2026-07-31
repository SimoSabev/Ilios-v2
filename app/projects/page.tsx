"use client"

import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {motion, useScroll, useTransform} from "framer-motion"
import {Reveal} from "@/components/reveal"
import Image from "next/image"
import {useRef} from "react"

type Project = {
    category: string
    subtitle: string
    items: string[]
    title?: string
    description?: string
    image?: string
    year?: string
    location?: string
    size?: string
    featured?: boolean
}

export default function ProjectsPage() {
    const projects: Project[] = [
        {
            category: "Yachting",
            subtitle: "New Build FFE Supply & Interior Refit Enhancement",
            items: [
                "MY REALLY WILD II",
                "MY CARLY",
                "MY SOUNDWAVE",
                "MY KHALIDAH",
                "MY O’LION",
                "MY ZEN",
                "MY SHINKAI",
                "MY PI, ex. SYZYGY",
                "MY LUNA B",
                "MY NAUTILUS",
                "MY OLOKUN",
                "MY STORMBORN",
                "MY LELOU",
                "MY EXUMA",
                "MY GLADIATOR",
                "MY SONIC",
                "MY BARTALY",
                "MY BABBO",
            ],
        },
        {
            category: "Residential & Commercial",
            subtitle: "Furniture & Loose Equipment Supply",
            items: [
                "Private apartments in Monaco and Dubai",
                "Restaurant project in Dubai",
                "Villas in Ibiza and on the French Riviera",
            ],
        },
        {
            category: "Private Aviation",
            subtitle: "Loose Equipment Supply",
            items: [
                "A319CJ",
                "A320",
                "A340",
                "BBJ 737-700",
                "BBJ 777",
                "BBJ 787",
                "BBJ Max 8",
                "Global 5000",
                "Global 6000",
            ],
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
                        src="/Services%20Page2.png"
                        alt="Luxury yacht interior design - elegant dining room with sophisticated lighting"
                        fill
                        className="object-cover object-[50%_100%]"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0"/>
                </motion.div>

                {/* Content */}
                <motion.div
                    className="relative z-10 h-full flex items-center justify-center"
                    style={{y: contentY, opacity: contentOpacity}}
                >
                </motion.div>
            </section>

            <Reveal className={"w-full flex justify-center items-center"}>
                <h2 className="text-xl text-center p-6 text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                    Completed projects with private and corporate clients, through a close collaboration with Dahlgren
                    Duck and during years of work experience at Boutsen Design Monaco.
                </h2>
            </Reveal>

            {/* Projects Gallery */}
            <section className="py-20 lg:py-32 bg-neutral-50">
                <div className="container-custom space-y-20">
                    {projects.map((project, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div
                                className="bg-gradient-to-r from-white via-white to-[#fff9f1] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all border-l-8 border-[#bfaa95]">
                                {/* Category Title */}
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#bfaa95] mb-3">{project.category}</h2>

                                {/* Subtitle */}
                                <p className="text-neutral-600 mb-6 italic">{project.subtitle}</p>

                                {/* Items List */}
                                <ul className={`list-disc list-inside text-neutral-800 grid gap-2 ${
                                    project.items.length > 6 ? "md:grid-cols-2" : "grid-cols-1"
                                }`}>
                                    {project.items.map((item, i) => (
                                        <li key={i} className="hover:text-[#bfaa95] transition-colors font-medium">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>


            {/* Stats Section */}
            <section className="py-20 bg-neutral-50">
                <div className="container-custom">
                    <Reveal>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                                Project <span className="italic font-light">Achievements</span>
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                                Our portfolio represents years of dedication to creating exceptional environments at
                                sea, on land and in the air.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                number: "30+",
                                label: "Delivered Projects",
                                description: "Yachting, Private Aviation, Residences, Hospitality"
                            },
                            {number: "15+", label: "Countries", description: "International project delivery"},
                            {
                                number: "10+",
                                label: "Years Experience",
                                description: "Procurement & Interior Enhancement"
                            },
                        ].map((stat, index) => (
                            <Reveal key={index} delay={index * 0.1}>
                                <motion.div
                                    className="text-center p-6 bg-white rounded-xl shadow-sm"
                                    whileHover={{y: -5}}
                                    transition={{duration: 0.3}}
                                >
                                    <div className="text-4xl font-bold text-[#bfaa95] mb-2">{stat.number}</div>
                                    <div className="text-lg font-semibold text-neutral-900 mb-2">{stat.label}</div>
                                    <div className="text-sm text-neutral-600">{stat.description}</div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                    {/* Secondary Image Section */}
                    <section className="relative w-full h-[500px] md:h-[700px] mt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src="/Projects_Bottom.png"
                                alt="Project secondary showcase"
                                fill
                                className="object-cover object-[50%_100%] rounded-3xl shadow-lg"
                                priority
                            />
                        </motion.div>
                    </section>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
