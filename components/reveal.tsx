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
            viewport={{ once: true }} // ✅ plays once per mount
            transition={{
                duration: 0.4,
                delay,
                ease: [0.4, 0, 0.2, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
