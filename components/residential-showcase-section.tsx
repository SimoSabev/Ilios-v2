"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"

type ResidentialImage = {
    src: string
    alt: string
}

type ResidentialProject = {
    name: string
    location: string
    images: ResidentialImage[]
}

const residentialProjects: ResidentialProject[] = [
    {
        name: "Villa Alcyone",
        location: "Cap Ferrat",
        images: [
            { src: "/Residential_CapFerrat_1.jpg", alt: "Villa Alcyone, Cap Ferrat - sea view terrace lounge" },
            { src: "/Residential_CapFerrat_2.jpg", alt: "Villa Alcyone, Cap Ferrat - dining room with sea view" },
            { src: "/Residential_CapFerrat_3.jpg", alt: "Villa Alcyone, Cap Ferrat - living room styling detail" },
        ],
    },
    {
        name: "Le Renzo Apartment",
        location: "Mareterra, Monaco",
        images: [
            { src: "/Residential_Monaco_1.jpg", alt: "Le Renzo Apartment, Monaco - balcony seating with sea view" },
            { src: "/Residential_Monaco_2.jpg", alt: "Le Renzo Apartment, Monaco - terrace daybeds" },
            { src: "/Residential_Monaco_3.jpg", alt: "Le Renzo Apartment, Monaco - outdoor dining setting" },
        ],
    },
]

export function ResidentialShowcaseSection() {
    return (
        <section className="py-20 lg:py-32 bg-neutral-50">
            <div className="container-custom">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-neutral-900 mb-4 text-4xl lg:text-6xl font-normal">
                            Residential <span className="italic font-light">Interiors</span>
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                            Beyond yachts, ILIOS Décor brings the same styling and sourcing expertise to
                            private homes on the French Riviera and in Monaco - from villas to
                            waterfront apartments.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {residentialProjects.map((project, projectIndex) => (
                        <Reveal key={project.name} delay={projectIndex * 0.15}>
                            <div>
                                <div className="grid grid-cols-2 gap-4 mb-5">
                                    <motion.div
                                        className="relative col-span-2 rounded-2xl overflow-hidden aspect-[16/10]"
                                        whileHover={{ scale: 1.01 }}
                                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                                    >
                                        <Image
                                            src={project.images[0].src}
                                            alt={project.images[0].alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            quality={95}
                                        />
                                    </motion.div>
                                    {project.images.slice(1).map((image) => (
                                        <motion.div
                                            key={image.src}
                                            className="relative rounded-2xl overflow-hidden aspect-[4/5]"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 50vw, 25vw"
                                                quality={95}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-semibold text-neutral-900">{project.name}</h3>
                                <p className="text-neutral-500">{project.location}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.3}>
                    <div className="text-center mt-16">
                        <motion.a
                            href="/projects"
                            className="inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-neutral-800 transition-colors text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                            <ArrowRight size={20} />
                        </motion.a>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
