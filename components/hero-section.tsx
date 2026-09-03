"use client"

import Image from "next/image"
import { useState, useRef, MouseEvent } from "react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (sectionRef.current && overlayRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Update CSS variables directly for ultra-smooth 60fps tracking without React re-renders
      overlayRef.current.style.setProperty("--mouse-x", `${x}px`)
      overlayRef.current.style.setProperty("--mouse-y", `${y}px`)
    }
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white pb-12"
    >
      {/* Base Images */}
      <div className="pointer-events-none absolute top-[20%] left-[-10%] z-20 h-[80%] w-[40%] mix-blend-multiply">
        <Image
          src="/herosection/Left1.jpg"
          alt="Left Mountain"
          fill
          className="object-cover object-right-top"
          priority
        />
      </div>
      <div className="pointer-events-none absolute top-[20%] -right-[10%] z-20 h-[80%] w-[40%] mix-blend-multiply">
        <Image
          src="/herosection/Right1.jpg"
          alt="Right Mountain"
          fill
          className="object-cover object-left-top"
          priority
        />
      </div>

      {/* Overlay Images (Revealed on Hover) */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-700 ease-out"
        style={{
          opacity: isHovering ? 1 : 0,
          maskImage: `radial-gradient(circle at center, black 0%, black 70%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle at center, black 0%, black 70%, transparent 100%)`,
          maskSize: `200px 200px`,
          WebkitMaskSize: `200px 200px`,
          maskRepeat: `no-repeat`,
          WebkitMaskRepeat: `no-repeat`,
          maskPosition: `calc(var(--mouse-x, -1000px) - 100px) calc(var(--mouse-y, -1000px) - 100px)`,
          WebkitMaskPosition: `calc(var(--mouse-x, -1000px) - 100px) calc(var(--mouse-y, -1000px) - 100px)`,
        }}
      >
        <div className="absolute top-[20%] left-[-10%] h-[80%] w-[40%] mix-blend-multiply">
          <Image
            src="/herosection/Left2.jpg"
            alt="Left Mountain Overlay"
            fill
            className="object-cover object-right-top"
            priority
          />
        </div>
        <div className="absolute top-[20%] -right-[10%] h-[80%] w-[40%] mix-blend-multiply">
          <Image
            src="/herosection/Right2.jpg"
            alt="Right Mountain Overlay"
            fill
            className="object-cover object-left-top"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-40 mx-auto mt-8 flex max-w-4xl flex-col items-center px-4 text-center pointer-events-none">
        <h2 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">
          Finance Reimagined
        </h2>
        <h1 className="mb-6 text-6xl font-medium tracking-tight text-gray-900 md:text-8xl">
          <span className="text-gray-400">A New Standard</span>
          <br />
          in Wealth Management
        </h1>
        <p className="max-w-2xl text-lg font-light text-gray-400 md:text-xl">
          Take full control of your assets with a unified platform for
          investing, tracking, and growing your portfolio in real time.
        </p>
      </div>
    </section>
  )
}
