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


                <Reveal delay={0.4}>
                    <div className="text-center">
                        <motion.a
                            href="/products"
                            className="inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-neutral-800 transition-colors text-lg"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            View Products
                            <ArrowRight size={20}/>
                        </motion.a>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
