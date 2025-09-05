"use client"

import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {motion, useScroll, useTransform} from "framer-motion"
import {Reveal} from "@/components/reveal"
import Image from "next/image"
import {Award, Layers, LineSquiggle, Monitor, Box} from "lucide-react"
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
            icon: Award, // Could represent recognition or premium quality
            label: "Sourcing & Space Optimization",
            image: "/About_Cards_1.png",
        },
        {
            icon: LineSquiggle, // Tools for materials or craftsmanship
            label: "Materials Selection",
            image: "/About_Cards_3.jpeg",
        },
        {
            icon: Layers, // Layering spaces or optimization
            label: "Delivery & Installation",
            image: "/About_Cards_2.png",
        },
        {
            icon: Box, // Refurbishment or organization
            label: "Interior Set Up",
            image: "/About_Cards_4.jpg",
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
                        src="/About_Page.png"
                        alt="Luxury yacht interior design - elegant dining room with sophisticated lighting"
                        fill
                        className="object-cover object-[50%_25%]"
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
                    {/*<div className="container-custom text-center text-white">*/}
                    {/*    <Reveal>*/}
                    {/*        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight mb-6">*/}
                    {/*            Meet the*/}
                    {/*            <br/>*/}
                    {/*            <span className="italic font-light">Designer</span>*/}
                    {/*        </h1>*/}
                    {/*    </Reveal>*/}

                    {/*    <Reveal delay={0.2}>*/}
                    {/*        <motion.p*/}
                    {/*            className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"*/}
                    {/*            initial={{opacity: 0, y: 20}}*/}
                    {/*            animate={{opacity: 1, y: 0}}*/}
                    {/*            transition={{duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98]}}*/}
                    {/*        >*/}
                    {/*            Crafting extraordinary yacht experiences through sophisticated design and uncompromising*/}
                    {/*            attention to*/}
                    {/*            detail.*/}
                    {/*        </motion.p>*/}
                    {/*    </Reveal>*/}
                    {/*</div>*/}
                </motion.div>
            </section>

            {/* Designer Story Section */}
            <section className="py-16 lg:py-32">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                        {/* Text Content */}
                        <div className="flex flex-col justify-center text-justify">
                            <Reveal>
                                <h2 className="text-4xl lg:text-5xl font-bold text-left text-neutral-900 mb-8 lg:mb-12">
                                    Passion for <span className="italic font-light">Excellence</span>
                                </h2>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <div className="space-y-6 text-neutral-700 leading-relaxed max-w-xl">
                                    <p>
                                        My name is Iliyana, and I founded ILIOS Décor with a simple yet profound
                                        mission: to blend my passion for excellence with my dedication to creating
                                        exceptional spaces that truly resonate with the people who live in them.
                                    </p>
                                    <p>
                                        Through multiple years of experience as a Project Manager at a Monaco based
                                        Interior Design company and as part of the Owners’ Team of two truly outstanding
                                        superyachts, MY A and SY A, I had the opportunity to be closely involved with
                                        various aspects of creating, maintaining and refurbishing the interior of
                                        numerous luxury assets.
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Image Content */}
                        <div className="flex justify-center lg:justify-end">
                            <Reveal delay={0.3}>
                                <motion.div
                                    className="relative aspect-[4/5] shadow-2xl rounded-2xl overflow-hidden w-64 sm:w-72 lg:w-96
                                               border border-white/20 backdrop-blur-sm
                                               hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                                    whileHover={{scale: 1.03}}
                                    transition={{duration: 0.3}}
                                >

                                    <Image
                                        src="/BIO-Image.jpg"
                                        alt="Yacht Designer Portrait"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>


            {/* Expertise / Collections Section */}
            <section className="py-20 bg-neutral-100">
                <div className="container-custom">
                    {/* Section Header */}
                    <Reveal>
                        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 text-center">
                            Experience & <span className="italic font-light">Expertise</span>
                        </h2>
                        <p className="text-lg lg:text-xl font-light text-neutral-700 text-center max-w-3xl mx-auto mt-12">
                            10+ Years Experience in sourcing, supplying, setting-up, curating and maintaining various
                            Interiors.
                        </p>
                    </Reveal>
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
                                        src="/AboutPage.jpg"
                                        alt="Yacht exterior seating with custom cushions"
                                        fill
                                        className="object-cover object-[50%_30%]"
                                    />
                                </motion.div>
                            </Reveal>
                        </div>

                        <div>
                            <Reveal>
                                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-12">
                                    Our <span className="italic font-light">Philosophy</span>
                                </h2>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <div className="space-y-6 text-neutral-700 leading-relaxed">
                                    <p className={"text-base text-justify md:text-lg"}>
                                        At ILIOS Décor, our vocation is to assist clients discover personalized styling
                                        solutions that perfectly reflect their unique tastes while ensuring their spaces
                                        are both functional and inviting. Whether it’s sourcing the finest materials,
                                        selecting the perfect furniture, or managing complex refits, we approach each
                                        project with care, attention to detail, and a commitment to service excellence.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
