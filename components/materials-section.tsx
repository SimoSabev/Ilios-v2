"use client"

import Image from "next/image"
import { Reveal } from "./reveal"

export function MaterialsSection() {
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

            <div className="absolute top-20 right-8 z-10 px-8 lg:px-0 min-w-full lg:min-w-md lg:max-w-md left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:top-20 lg:right-8">
                <Reveal delay={0.3}>
                    <blockquote className="w-full pl-0 py-4 text-center lg:text-left">
                        <p className="w-full text-base text-white leading-relaxed italic font-medium">
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