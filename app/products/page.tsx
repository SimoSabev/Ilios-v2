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
    const [selectedCategory,] = useState("all")


    const products = [
        {
            id: 1,
            name: "Bed Linen",
            category: "linens",
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Products%20-%20Linen.jpg-Sc4mE3k83swQdskrycXFVIXwM1zEif.jpeg",
            description: "Variety of styles, thread counts, personalisation",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        },
        {
            id: 2,
            name: "Bath Linen",
            category: "linens",
            image:
                "/Bathlinen_1.png",
            description: "Multiple terry options, models, personalisation",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 3,
            name: "Beach Towels",
            category: "linens",
            image:
                "/Deck%20Towels.jpg",
            description: "Various models, logo and pattern embroidery",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 4,
            name: "Table Linen",
            category: "linens",
            image:
                "/TableLinen.png",
            description: "Finest cotton, linen, tailored design proposals",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 5,
            name: "Tableware",
            category: "linens",
            image:
                "/Tableware.jpg",
            description: "Extensive variety of chinaware, glassware and cutlery in a wide price range to suit every budget",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 6,
            name: "Holloware",
            category: "linens",
            image:
                "/Holloware.jpg",
            description: "A large selection, available in stainless steel and silver-plated finish",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 7,
            name: "Decorative Objects",
            category: "linens",
            image:
                "/Products-%20Deco%20Objects.jpg",
            description: "Featuring exquisite crystal pieces, rare and unique collectables, crafted artisan works",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 8,
            name: "Soft Furnishings",
            category: "linens",
            image:
                "/Soft%20Furnishings.jpg",
            description: "Selection of cashmere, wool and alpaca throws, made to measure rugs and curtains",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 9,
            name: "Cushions",
            category: "linens",
            image:
                "/Products%20-%20Cushions.jpg",
            description: "Bespoke cushions made from an extensive assortment of indoor and outdoor fabrics, suitable inner-foams",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 10,
            name: "Hangers",
            category: "linens",
            image:
                "/Hangers.jpg",
            description: "Available in multiple finishes, sizes and models",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 11,
            name: "Leather Goods",
            category: "linens",
            image:
                "/Leather_Goods_2.jpg",
            description: "Wide assortment of leather products in multiple finishes and colours",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 12,
            name: "Exterior Furniture & Accessories ",
            category: "linens",
            image:
                "/Lightining.jpg",
            description: "Lanterns, Rugs, Umbrellas, Furniture, Planters",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 13,
            name: "Guest Amenities",
            category: "linens",
            image:
                "/Products%20-Toiletries.jpg",
            description: "Selection of toiletries, suncare products, stationary, gift giveaways",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 14,
            name: "Crew Uniforms",
            category: "linens",
            image:
                "/Products_Crew%20Uniforms2.jpg",
            description: "Modern, stylish, functional and customisable pieces",
            features: ["Egyptian Cotton", "Hand Embroidered", "Hypoallergenic", "Machine Washable"],
        }, {
            id: 15,
            name: "Deck Mats",
            category: "linens",
            image:
                "/Deck_Mats.png",
            description: "Available in multiple colours, sizes, thickness and customisation options",
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
                    className="object-cover object-[50%_60%] group-hover:scale-105 transition-transform duration-300"
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
                        className="object-cover object-[50%_35%]"
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
                </motion.div>
            </section>

            <Reveal className={"w-full flex justify-center items-center"}>
                <h2 className="text-xl max-w-[175vh] lg:text-2xl text-center p-12 w-full text-neutral-900 mb-6">
                    Our product offerings range from well-known luxury brands, carefully sourced decorative objects and
                    rare art pieces from the world’s finest artisans, along with crew-friendly supplies, crew uniforms
                    and guest amenities.
                </h2>
            </Reveal>

            {/* Products Grid */}
            <section className="py-20 lg:pb-32">
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
                                Our rigorous selection process prioritizes three core principles: uncompromising
                                quality, proven durability, and marine environmental suitability.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Marine Grade Quality",
                                description: [
                                    "Saltwater and UV tolerance",
                                    "Corrosion resistance",
                                    "Humidity and moisture protection",
                                ],
                            },
                            {
                                title: "Premium Materials",
                                description:
                                    "Carefully sourced from the finest suppliers worldwide.",
                            },
                            {
                                title: "Customisable Options",
                                description:
                                    "Extensive range of customisable products to match specific design and requirements. ",
                            },
                        ].map((feature, index) => (
                            <Reveal key={index} delay={index * 0.1}>
                                <motion.div
                                    className="flex flex-col justify-between text-center p-6 w-full min-h-48 bg-white rounded-xl shadow-sm"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div>
                                        <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                                            {feature.title}
                                        </h3>
                                        {Array.isArray(feature.description) ? (
                                            <ul className="text-neutral-600 leading-relaxed flex flex-col space-y-1 w-full">
                                                {feature.description.map((item, i) => (
                                                    <li key={i} className="text-left">{item}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-neutral-600 text-left leading-relaxed">
                                                {feature.description}
                                            </p>
                                        )}
                                    </div>
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
                           Looking for <span className="italic font-light">Bespoke Products?</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Contact us to discuss custom product solutions tailored specifically for your yacht&apos;s
                            unique requirements.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <motion.a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            Contact Us
                        </motion.a>
                    </Reveal>
                </div>
            </section>

            <Footer/>
        </main>
    )
}
