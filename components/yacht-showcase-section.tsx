"use client"

import {motion} from "framer-motion"
import {Reveal} from "./reveal"
import {ArrowRight} from "lucide-react"

export function YachtShowcaseSection() {
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
                            Whether&nbsp;you are outfitting a luxury yacht or transforming your residential space, our
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
