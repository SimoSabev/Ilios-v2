"use client"

import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {motion, useScroll, useTransform} from "framer-motion"
import {Reveal} from "@/components/reveal"
import Image from "next/image"
import {useRef, useState} from "react"

export interface Product {
    id: number
    name: string
    category: string
    image: string
    description: string
    features: string[]
}

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState("all")

    const categories = [
        {id: "all", name: "All Products"},
        {id: "linens", name: "Luxury Linens"},
        {id: "cushions", name: "Designer Cushions"},
        {id: "tableware", name: "Premium Tableware"},
        {id: "toiletries", name: "Yacht Toiletries"},
    ]

    const products = [
        {
            id: 1,
            name: "Bed & Table Linen",
            category: "linens",
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Products%20-%20Linen.jpg-Sc4mE3k83swQdskrycXFVIXwM1zEif.jpeg",
            description: "Exquisite Egyptian cotton bedding with hand-embroidered nautical rope patterns.",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        },
        {
            id: 2,
            name: "Cushions",
            category: "linens",
            image:
                "/Products%20-%20Cushions.jpg",
            description: "Exquisite Egyptian cotton bedding with hand-embroidered nautical rope patterns.",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 3,
            name: "Decorative Objects",
            category: "linens",
            image:
                "/Products-%20Deco%20Objects.jpg",
            description: "Exquisite Egyptian cotton bedding with hand-embroidered nautical rope patterns.",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 4,
            name: "Exterior Furniture & Accessories",
            category: "linens",
            image:
                "/Products%20-Leather%20Accessories.png",
            description: "Exquisite Egyptian cotton bedding with hand-embroidered nautical rope patterns.",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 5,
            name: "Galley Equipment & Holloware",
            category: "linens",
            image:
                "/Holloware.jpg",
            description: "Exquisite Egyptian cotton bedding with hand-embroidered nautical rope patterns.",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 6,
            name: "Tableware",
            category: "linens",
            image:
                "/Products%20-Tableware.jpg",
            description: "Exquisite Egyptian cotton bedding with hand-embroidered nautical rope patterns.",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 7,
            name: "Toiletries & Guest Amenities",
            category: "linens",
            image:
                "/Products%20-Toiletries.jpg",
            description: "Exquisite Egyptian cotton bedding with hand-embroidered nautical rope patterns.",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 8,
            name: "Uniforms & Crew Supplies",
            category: "linens",
            image:
                "/Products_Crew%20Uniforms.jpeg",
            description: "Exquisite Egyptian cotton bedding with hand-embroidered nautical rope patterns.",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        },{
            id: 9,
            name: "Deck Towels",
            category: "linens",
            image:
                "/Deck%20Towels.jpg",
            description: "Exquisite Egyptian cotton bedding with hand-embroidered nautical rope patterns.",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        },{
            id: 10,
            name: "Soft Furnishings",
            category: "linens",
            image:
                "/Soft%20Furnishings.png",
            description: "Exquisite Egyptian cotton bedding with hand-embroidered nautical rope patterns.",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        },
    ]

    const filteredProducts =
        selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

    const containerRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])
    const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const ProductCard = ({product}: { product: Product }) => (

        <motion.div
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            whileHover={{y: -5}}
            layout
        >
            <div className="relative aspect-square overflow-hidden">
                <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-6">


                <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-[#bfaa95] transition-colors">
                    {product.name}
                </h3>

                <p className="text-sm text-neutral-600 mb-4 line-clamp-2">{product.description}</p>
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
                        src="/Products%20Page.jpg"
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
                                Luxury Yacht
                                <br/>
                                <span className="italic font-light">Products</span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <motion.p
                                className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98]}}
                            >
                                Our product offerings range from well-known luxury brands, carefully sourced decorative
                                objects and rare art pieces from the world’s finest artisans, along with crew-friendly
                                supplies, crew uniforms and guest amenities
                            </motion.p>
                        </Reveal>
                    </div>
                </motion.div>
            </section>

            {/* Category Filter */}
            <section className="py-20 lg:py-32">
                <div className="container-custom">
                    <Reveal>
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                        selectedCategory === category.id
                                            ? "bg-neutral-900 text-white"
                                            : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Products Grid */}
            <section className="pb-20 lg:pb-32">
                <div className="container-custom">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        layout
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {opacity: 0},
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                    >
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                variants={{
                                    hidden: {opacity: 0, y: 20},
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            ease: [0.21, 0.47, 0.32, 0.98],
                                        },
                                    },
                                }}
                                layout
                            >
                                <Reveal delay={index * 0.05}>
                                    <ProductCard product={product}/>
                                </Reveal>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-neutral-50">
                <div className="container-custom">
                    <Reveal>
                        <div className="text-center mb-16">
                            <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                                Why Choose Our <span className="italic font-light">Products</span>
                            </h3>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                                Every product in our collection is selected for its exceptional quality and suitability
                                for the marine
                                environment.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Marine Grade Quality",
                                description: "All products are tested and approved for marine environments with superior durability.",
                            },
                            {
                                title: "Luxury Materials",
                                description: "Premium materials sourced from the finest suppliers worldwide for exceptional quality.",
                            },
                            {
                                title: "Custom Options",
                                description: "Many products can be customized to match your yacht's specific design and requirements.",
                            },
                        ].map((feature, index) => (
                            <Reveal key={index} delay={index * 0.1}>
                                <motion.div
                                    className="text-center p-6 bg-white rounded-xl shadow-sm"
                                    whileHover={{y: -5}}
                                    transition={{duration: 0.3}}
                                >
                                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
                                    <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
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
                            Need Custom <span className="italic font-light">Products?</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Contact us to discuss custom product solutions tailored specifically for your yacht&apos;s
                            unique
                            requirements.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            Request Custom Quote
                        </motion.a>
                    </Reveal>
                </div>
            </section>

            <Footer/>
        </main>
    )
}
