"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"

const collections = [
  { id: "modern-seating", name: "", image: "/project1.jpg" },
  { id: "cloud-collection", name: "", image: "/Project_3.png" },
  { id: "artistic-pieces", name: "", image: "/Project_4.jpg" },
  { id: "contemporary", name: "", image: "/Project_5.png" },
  { id: "modular-design", name: "", image: "/Services_Page2.jpg" },
  { id: "textural-craft", name: "", image: "/Extra_Image.png" },
  { id: "aerial-decor", name: "", image: "/plane_project.jpg" },
]

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  const [windowWidth, setWindowWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 1200
  )

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const cardWidth = windowWidth < 768 ? 260 : 384
  const gap = 32
  const totalWidth = collections.length * (cardWidth + gap) - gap
  const maxDrag = Math.max(0, totalWidth - windowWidth + 32) // always draggable to the end

  // const getAspectRatio = () => (windowWidth < 768 ? 12 / 16 : 10 / 6)
  // Replace getAspectRatio with a fixed horizontal ratio for all screens
  const getAspectRatio = () => 10 / 6 // same as desktop, always horizontal


  return (
      <section ref={containerRef} className="py-20 lg:py-32 overflow-hidden">
        <div className="mb-12">
          <Reveal>
            <div className="container-custom text-center">
              <h2 className="text-neutral-900 mb-4 text-6xl font-normal">
                Projects
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <motion.div
              className="flex gap-8 px-6"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -maxDrag, right: 0 }}
              dragElastic={0.1}
          >
            {collections.map((collection) => (
                <motion.div
                    key={collection.id}
                    className="flex-shrink-0 group cursor-pointer"
                    style={{ width: cardWidth }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div
                      className="relative rounded-2xl overflow-hidden mb-4"
                      style={{ aspectRatio: getAspectRatio() }}
                  >
                    <motion.div className="relative w-full h-full">
                      <Image
                          src={collection.image || "/placeholder.svg"}
                          alt={collection.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 320px"
                          quality={100}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                    </motion.div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                          className="text-center text-white"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-3xl font-bold tracking-wider mb-2">
                          {collection.name}
                        </h3>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>

          <div className="mt-6 flex justify-center">
            <motion.div
                className="text-neutral-500 text-lg md:text-2xl font-semibold flex items-center gap-2 select-none"
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <span>Drag to explore the projects</span>
              <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              >
                ➤
              </motion.span>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
