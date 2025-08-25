"use client"

import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {motion, useScroll, useTransform} from "framer-motion"
import {Reveal} from "@/components/reveal"
import {BlurPanel} from "@/components/blur-panel"
import Image from "next/image"
import {Award, Users, Globe, Anchor} from "lucide-react"
import {useRef} from "react"

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])
    const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const achievements = [
        {
            icon: Award,
            number: "15+",
            label: "Years Experience",
            description: "Designing luxury yacht interiors",
        },
        {
            icon: Users,
            number: "200+",
            label: "Satisfied Clients",
            description: "Worldwide yacht owners",
        },
        {
            icon: Globe,
            number: "50+",
            label: "Countries Served",
            description: "International project delivery",
        },
        {
            icon: Anchor,
            number: "300+",
            label: "Yachts Designed",
            description: "From 30m to 150m superyachts",
        },
    ]

    const expertise = [
        "Luxury Interior Design",
        "Marine Architecture",
        "Custom Furniture Design",
        "Space Optimization",
        "Premium Material Selection",
        "Project Management",
    ]

    return (
        <main className="min-h-screen">
            <Header/>

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
                        src="/About%20Page.jpg"
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
                                Meet the
                                <br/>
                                <span className="italic font-light">Designer</span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <motion.p
                                className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98]}}
                            >
                                Crafting extraordinary yacht experiences through sophisticated design and uncompromising
                                attention to
                                detail.
                            </motion.p>
                        </Reveal>
                    </div>
                </motion.div>

                {/* Info Strip */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 z-20 flex justify-center"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98]}}
                >
                    <BlurPanel className="mx-6 mb-6 px-6 py-4 bg-black/24 backdrop-blur-md border-white/20">
                        <div className="flex items-center justify-center gap-6 text-white/90">
                            <div className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-[#bfaa95]"/>
                                <span className="text-sm">15+ years experience</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-[#bfaa95]"/>
                                <span className="text-sm">200+ satisfied clients</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-[#bfaa95]"/>
                                <span className="text-sm">Worldwide service</span>
                            </div>
                        </div>
                    </BlurPanel>
                </motion.div>
            </section>

            {/* Designer Story Section */}
            <section className="py-20 lg:py-32">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <Reveal>
                                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                                    Passion for <span className="italic font-light">Excellence</span>
                                </h2>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <div className="space-y-6 text-neutral-700 leading-relaxed">
                                    <p>
                                        As a founder of ILIOS Décor, I enjoy assisting clients with their interior needs
                                        and offering personalized styling solutions for their home, yacht or aircraft.
                                    </p>
                                    <p>
                                        Through multiple years of experience as a Project Manager at a Monaco based
                                        Interior Design company and as part of the Owners’ Team of two truly outstanding
                                        superyachts, MY A and SY A,
                                    </p>
                                    <p>
                                        I had the opportunity to be closely involved with
                                        various aspects of creating, maintaining and refurbishing the interior of
                                        numerous luxury assets.
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        <div className="relative">
                            <Reveal delay={0.3}>
                                <motion.div
                                    className="relative aspect-[4/5] rounded-2xl overflow-hidden"
                                    whileHover={{scale: 1.02}}
                                    transition={{duration: 0.3}}
                                >
                                    <Image
                                        src="/BIO-Image.jpg"
                                        alt="Yacht Designer Portrait"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
                                </motion.div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-20 bg-neutral-200">
                <div className="container-custom">
                    <Reveal>
                        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 text-center mb-16">
                            Experience & <span className="italic font-light">Expertise</span>
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <Reveal key={index} delay={index * 0.1}>
                                <motion.div
                                    className="text-center p-6 bg-[#bfaa95] rounded-xl shadow-sm"
                                    whileHover={{y: -5}}
                                    transition={{duration: 0.3}}
                                >
                                    <div
                                        className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <achievement.icon className="w-8 h-8 text-[#bfaa95]"/>
                                    </div>
                                    <div className="text-3xl font-bold text-neutral-600 mb-2">{achievement.number}</div>
                                    <div
                                        className="text-lg font-semibold text-neutral-200 mb-2">{achievement.label}</div>
                                    <div className="text-sm text-neutral-600">{achievement.description}</div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 lg:py-32">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative">
                            <Reveal>
                                <motion.div
                                    className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                                    whileHover={{scale: 1.02}}
                                    transition={{duration: 0.3}}
                                >
                                    <Image
                                        src="/Extra%20Image.jpg"
                                        alt="Yacht exterior seating with custom cushions"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </Reveal>
                        </div>

                        <div>
                            <Reveal>
                                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                                    Design <span className="italic font-light">Philosophy</span>
                                </h2>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <div className="space-y-6 text-neutral-700 leading-relaxed">
                                    <p>
                                        Every yacht tells a story, and my role is to ensure that story is told through
                                        exceptional design. I
                                        believe in creating spaces that are not just visually stunning, but also deeply
                                        personal and
                                        functional.
                                    </p>
                                    <p>
                                        My design philosophy centers on the harmony between luxury and livability, where
                                        every element
                                        serves both aesthetic and practical purposes. From the selection of marine-grade
                                        materials to the
                                        careful consideration of natural light and flow, every detail matters.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <div className="mt-8">
                                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">Areas of Expertise</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {expertise.map((skill, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-[#bfaa95] rounded-full"/>
                                                <span className="text-neutral-700">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-[#bfaa95] text-white">
                <div className="container-custom text-center">
                    <Reveal>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Ready to Create Your <span className="italic font-light">Dream Yacht?</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Let's discuss your vision and bring your yacht interior dreams to life with bespoke design
                            solutions.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <motion.a
                            href="/contact"
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
