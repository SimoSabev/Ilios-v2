"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Reveal } from "./reveal"
import { usePathname } from "next/navigation"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Track pathname to reset animation on page change
  const pathname = usePathname()
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    // Increment key to force remount of AnimatedText when navigating
    setAnimationKey(prev => prev + 1)
  }, [pathname])

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
        <span key={animationKey}>
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
      <section ref={containerRef} className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <motion.div
            className="absolute inset-0"
            style={{ scale: imageScale, y: imageY }}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Image
              src="/Main%20TOP%20Page%20Image.jpg"
              alt="Ilios Decor - Luxury yacht exterior dining area"
              fill
              className="object-cover"
              priority
              sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* Content */}
        <motion.div
            className="relative z-10 h-full flex items-center justify-center"
            style={{ y: contentY, opacity: contentOpacity }}
        >
          <div className="container-custom text-center text-white">
            <Reveal>
              <h1 className="text-6xl font-bold leading-none flex flex-col tracking-tight mb-6">
                <AnimatedText text="TRANSFORM SPACES" delay={0.5} />
                <br />
                <span className="italic font-light">
                <AnimatedText text="CREATE DREAMS" delay={1.1} />
              </span>
              </h1>
            </Reveal>
          </div>
        </motion.div>
      </section>
  )
}
