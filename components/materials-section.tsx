"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

const materials = [
    {
        id: "teak",
        name: "Premium Teak",
        description: "Marine-grade teak decking with natural oils and exceptional durability for yacht exteriors",
        image: "/material-oak-macro.png",
        backgroundImage:
            "/Main-Page-Bottom-Services.jpg",
        tint: "bg-amber-50",
    },
    {
        id: "leather",
        name: "Marine Leather",
        description: "Luxury marine-grade leather with water-resistant treatment and UV protection",
        image: "/material-walnut-macro.png",
        backgroundImage:
            "/Main-Page-Bottom-Services.jpg",
        tint: "bg-neutral-100",
    },
    {
        id: "fabric",
        name: "Yacht Fabrics",
        description: "High-performance outdoor fabrics with superior weather resistance and elegant patterns",
        image: "/material-steel-macro.png",
        backgroundImage:
            "/Main-Page-Bottom-Services.jpg",
        tint: "bg-blue-50",
    },
]

export function MaterialsSection() {
    const [activeMaterial, setActiveMaterial] = useState("teak")

    const activeMaterialData = materials.find((m) => m.id === activeMaterial) || materials[0]

    const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
        return (
            <span>
        {text.split("").map((char, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: delay + index * 0.03,
                    ease: [0.21, 0.47, 0.32, 0.98],
                }}
                style={{ display: char === " " ? "inline" : "inline-block" }}
            >
                {char === " " ? "\u00A0" : char}
            </motion.span>
        ))}
      </span>
        )
    }

    return (
        <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-start justify-center">
            <div className="absolute inset-0">
                <Image
                    src="/Main-Page-Bottom-Services.jpg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30" /> {/* darker overlay */}
            </div>

            <div className="absolute bottom-8 left-8 z-10 max-w-md hidden lg:block">
                <Reveal delay={0.3}>
                    <blockquote className="pl-0 py-4">
                        <p className="text-xl text-white leading-relaxed italic lg:text-base font-medium">
                            Whether it&apos;s sourcing the finest materials, selecting the perfect furniture
                            and accessories, or managing complex refits, we approach each project with
                            care, attention to detail, and a commitment to service excellence.
                        </p>
                        <footer className="mt-4 text-sm text-white/70">— Ilios Decor Studio</footer>
                    </blockquote>
                </Reveal>
            </div>
        </section>
    )
}