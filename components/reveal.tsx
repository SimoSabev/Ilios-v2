"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface RevealProps {
    children: ReactNode
    delay?: number
    className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px", amount: 0.3 }} // animate every time in view
            transition={{
                duration: 0.6,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
