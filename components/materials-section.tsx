"use client"

import Image from "next/image"

export function MaterialsSection() {
  return (
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
              src="/Main-Page-Bottom-Services.jpg"
              alt="Background"
              fill
              priority
              className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" /> {/* darker overlay for readability */}
        </div>

        {/* Content */}
        <div className="relative container-custom px-6 md:px-10 max-w-4xl text-center">
          <p className="text-white text-xl sm:text-2xl leading-relaxed font-light drop-shadow-lg">
            Whether it’s sourcing the finest materials, selecting the perfect furniture
            and accessories, or managing complex refits, we approach each project with
            care, attention to detail, and a commitment to service excellence.
          </p>
        </div>
      </section>
  )
}
