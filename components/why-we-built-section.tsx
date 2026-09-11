"use client"

import Image from "next/image"
import { useState, useRef, MouseEvent } from "react"

export function WhyWeBuiltSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      sectionRef.current.style.setProperty("--mouse-x", `${x}px`)
      sectionRef.current.style.setProperty("--mouse-y", `${y}px`)
    }
  }

  const maskStyle = {
    opacity: isHovering ? 1 : 0,
    maskImage: `radial-gradient(circle closest-side at center, black 0%, black 70%, transparent 100%)`,
    WebkitMaskImage: `radial-gradient(circle closest-side at center, black 0%, black 70%, transparent 100%)`,
    maskSize: `500px 500px`,
    WebkitMaskSize: `500px 500px`,
    maskRepeat: `no-repeat`,
    WebkitMaskRepeat: `no-repeat`,
    maskPosition: `calc(var(--mouse-x, -1000px) - 250px) calc(var(--mouse-y, -1000px) - 250px)`,
    WebkitMaskPosition: `calc(var(--mouse-x, -1000px) - 250px) calc(var(--mouse-y, -1000px) - 250px)`,
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white snap-start"
    >
      {/* Background Images Wrapper */}
      <div className="pointer-events-none absolute inset-0 z-10">
        
        {/* Base Image */}
        <div className="absolute inset-0">
          <Image
            src="/Why We Build/wood1.jpg"
            alt="Wood Base"
            fill
            className="object-fill"
            priority
          />
        </div>

        {/* Overlay Image with Flashlight Mask */}
        <div className="absolute inset-0 transition-opacity duration-700 ease-out" style={maskStyle}>
          <Image
            src="/Why We Build/wood2.jpg"
            alt="Wood Overlay"
            fill
            className="object-fill"
            priority
          />
        </div>

      </div>

      {/* Content */}
      <div className="relative z-30 mx-auto flex max-w-4xl flex-col items-center px-4 text-center space-y-8 pointer-events-none">
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          That&apos;s why we <span className="text-[#fdba74]">built Jupitex.</span>
        </h2>

        <div className="space-y-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl">
          <p>
            Engineering that actually moves the needle.
          </p>
          
          <p>
            Jupitex defines what&apos;s worth building, builds it for you, then trains your people to make it stick.
          </p>
          
          <p>
            Stop paying to experiment. <span className="font-bold text-white">Start paying for results.</span>
          </p>
        </div>

      </div>
    </section>
  )
}
