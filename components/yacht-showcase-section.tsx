"use client"

import {motion} from "framer-motion"
import {Reveal} from "./reveal"
import Image from "next/image"
import {ArrowRight, Anchor, Compass, Waves} from "lucide-react"

export function YachtShowcaseSection() {
    const showcaseItems = [
        {
            icon: Anchor,
            title: "Interior Excellence",
            description: "Sophisticated living spaces designed for luxury and comfort at sea",
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20Page%20Bottom%20Services.jpg-7WFTJ4P3DGyzs5ICddcHiNYqVnBoYx.jpeg",
            stats: "200+ Interiors",
        },
        {
            icon: Compass,
            title: "Exterior Design",
            description: "Elegant deck spaces that blend functionality with breathtaking aesthetics",
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Projects%20Page.jpg-7WFTJ4P3DGyzs5ICddcHiNYqVnBoYx.jpeg",
            stats: "150+ Exteriors",
        },
        {
            icon: Waves,
            title: "Complete Renovations",
            description: "Full yacht transformations from concept to stunning reality",
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Services%20Page.jpg-7WFTJ4P3DGyzs5ICddcHiNYqVnBoYx.jpeg",
            stats: "50+ Renovations",
        },
    ]

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
            <div className="container-custom">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-12 leading-tight">
                            TRANSFORM SPACES <span className="italic font-light">CREATE DREAMS</span>
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-5xl mx-auto leading-relaxed">
                            ILIOS Décor is offering a comprehensive styling and interior refurbishment service to create
                            the client’s dream environment on board and at home.
                            With years of proven expertise, we specialize in sourcing and supplying high-quality
                            interior accessories and furniture tailored to your unique style and needs.
                            Whether you are outfitting a luxury yacht or transforming your residential space, our
                            extensive network of trusted manufacturers - luxury brands, carefully sourced artisants and
                            crew-friendly suppliers - ensures we offer the finest selection of products.

                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {showcaseItems.map((item, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <motion.div
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500"
                                whileHover={{y: -10}}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"/>

                                    <div className="absolute top-6 left-6">
                                        <div
                                            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <item.icon className="w-6 h-6 text-blue-600"/>
                                        </div>
                                    </div>

                                    <div className="absolute top-6 right-6">
                                        <div
                                            className="bg-white/90 backdrop-blur-sm text-neutral-900 px-3 py-1 rounded-full text-sm font-semibold">
                                            {item.stats}
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/90 mb-4 leading-relaxed">{item.description}</p>
                                        <motion.div
                                            className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            whileHover={{x: 5}}
                                        >
                                            <span>Explore Projects</span>
                                            <ArrowRight size={16}/>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.4}>
                    <div className="text-center">
                        <motion.a
                            href="/projects"
                            className="inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-neutral-800 transition-colors text-lg"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            View All Projects
                            <ArrowRight size={20}/>
                        </motion.a>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
