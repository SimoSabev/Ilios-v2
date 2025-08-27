"use client"

import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {motion, useScroll, useTransform} from "framer-motion"
import {Reveal} from "@/components/reveal"
import Image from "next/image"
import {MapPin, Users, Maximize,} from "lucide-react"
import {useRef, useState} from "react"

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
    const [selectedCategory, ] = useState("all")
    const [, setSelectedProject] = useState<Project | null>(null)

    const categories = [
        {id: "all", name: "All Projects"},
        {id: "interior", name: "Interior Design"},
        {id: "exterior", name: "Exterior Design"},
        {id: "complete", name: "Complete Renovation"},
    ]

    const projects = [
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

    const filteredProjects =
        selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)


    const containerRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])
    const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const ProjectCard = ({project, index}: { project: Project; index: number }) => (
        <motion.div
            className={`group cursor-pointer ${
                project.featured ? "md:col-span-2 md:row-span-2" : ""
            } relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500`}
            whileHover={{y: -5}}
            onClick={() => setSelectedProject(project)}
            layout
        >
            <div className={`relative ${project.featured ? "aspect-[4/3]" : "aspect-square"} overflow-hidden`}>
                <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title || "Project Image"}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"/>

                <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-neutral-900 px-3 py-1 rounded-full text-xs font-semibold">
            {project.year}
          </span>
                </div>

                <div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white">
                        <Maximize size={16}/>
                    </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#bfaa95] transition-colors">{project.title}</h3>
                    <p className="text-sm text-white/80 mb-3 line-clamp-2">{project.description}</p>

                    <div className="flex items-center gap-4 text-xs text-white/70">
                        <div className="flex items-center gap-1">
                            <MapPin size={12}/>
                            <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Users size={12}/>
                            <span>{project.size}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )

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
                        src="/Projects%20Page.jpg"
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
                    <div className="container-custom text-center text-white">
                        <Reveal>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight mb-6">
                                Project
                                <br/>
                                <span className="italic font-light">Portfolio</span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <motion.p
                                className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98]}}
                            >
                                Explore our collection of luxury yacht design projects, each showcasing our commitment
                                to excellence and attention to detail in creating extraordinary maritime experiences.
                            </motion.p>
                        </Reveal>
                    </div>
                </motion.div>
            </section>

            {/* Projects Gallery */}
            <section className="py-20 lg:py-32 bg-neutral-50">
                <div className="container-custom space-y-20">
                    {projects.map((project, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="bg-gradient-to-r from-white via-white to-[#fff9f1] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all border-l-8 border-[#bfaa95]">
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
                                Our portfolio represents years of dedication to creating exceptional yacht experiences
                                worldwide.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {number: "300+", label: "Yachts Designed", description: "From 30m to 150m superyachts"},
                            {number: "50+", label: "Countries", description: "International project delivery"},
                            {number: "15+", label: "Years Experience", description: "Luxury yacht design expertise"},
                            {number: "200+", label: "Happy Clients", description: "Satisfied yacht owners worldwide"},
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
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="container-custom text-center">
                    <Reveal>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Ready for Your <span className="italic font-light">Next Project?</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Let&apos;s create something extraordinary together. Contact us to discuss your yacht design
                            vision and join our
                            portfolio of satisfied clients.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            Start Your Project
                        </motion.a>
                    </Reveal>
                </div>
            </section>

            <Footer/>
        </main>
    )
}
