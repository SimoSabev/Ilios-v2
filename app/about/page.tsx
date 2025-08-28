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
            label: "Interior Décor Selection",
            image: "/About_Cards_1.png",
        },
        {
            icon: LineSquiggle, // Tools for materials or craftsmanship
            label: "Premium Materials’ Supply",
            image: "/About_Cards_2.png",
        },
        {
            icon: Layers, // Layering spaces or optimization
            label: "Space Optimization",
            image: "/About_Cards_3.jpeg",
        },
        {
            icon: Box, // Refurbishment or organization
            label: "Interior Refurbishment",
            image: "/About_Cards_4.jpg",
        },
        {
            icon: Monitor, // Project planning or management
            label: "Project Management",
            image: "/About_Cards_1.png",
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
                                    <p>
                                        At ILIOS Décor, our vocation is to assist clients discover personalized styling
                                        solutions that perfectly reflect their unique tastes while ensuring their spaces
                                        are both functional and inviting. Whether it’s sourcing the finest materials,
                                        selecting the perfect furniture, or managing complex refits, we approach each
                                        project with care, attention to detail, and a commitment to service excellence.
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

            {/* Expertise / Collections Section */}
            <section className="py-20 bg-neutral-100">
                <div className="container-custom">
                    {/* Section Header */}
                    <Reveal>
                        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 text-center mb-4">
                            Experience & <span className="italic font-light">Expertise</span>
                        </h2>
                        <p className="text-lg lg:text-xl font-light text-neutral-700 text-center max-w-3xl mx-auto mb-16">
                            15+ years of experience sourcing, supplying, curating, and maintaining exquisite interiors for luxury yachts and high-end properties.
                        </p>
                    </Reveal>

                    {/* Areas of Expertise Header */}
                    <Reveal>
                        <h3 className="text-3xl lg:text-4xl font-semibold text-neutral-900 text-center mb-12">
                            Areas of Expertise
                        </h3>
                    </Reveal>

                    {/* Expertise Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => {

                            return (
                                <Reveal key={index} delay={index * 0.1}>
                                    <motion.div
                                        className="relative w-full h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                        whileHover={{y: -6, scale: 1.03}}
                                    >
                                        {/* Background Image */}
                                        <Image
                                            src={achievement.image}
                                            alt={achievement.label}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6">
                                            {/* Icon */}
                                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-4">
                                                <achievement.icon className="w-10 h-10 text-white" />
                                            </div>

                                            {/* Label */}
                                            <h4 className="text-xl font-semibold text-white text-center">
                                                {achievement.label}
                                            </h4>
                                        </div>
                                    </motion.div>
                                </Reveal>
                            )
                        })}
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
                                        src="/About-Bottom%20Page.jpg"
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
