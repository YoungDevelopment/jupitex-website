"use client"

import Image from "next/image"
import { useState, useRef, MouseEvent } from "react"
import { DummyHeroSection } from "@/components/dummy-hero-section"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Update CSS variables directly for ultra-smooth 60fps tracking
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
      className="relative flex h-screen min-h-[700px] w-full flex-col items-center justify-start pt-20 overflow-hidden bg-white pb-8"
    >
      {/* LEFT IMAGES (z-10: Behind Dashboard) */}
      <div className="pointer-events-none absolute inset-0 z-10 mix-blend-multiply">
        {/* Base Image */}
        <div className="absolute top-[-0%] left-[-15%] h-[100%] w-[60%]">
          <Image
            src="/herosection/Left1.jpg"
            alt="Left Mountain"
            fill
            className="object-contain object-right-bottom -scale-x-100"
            priority
          />
        </div>
        {/* Overlay Image with Mask */}
        <div className="absolute inset-0 transition-opacity duration-700 ease-out" style={maskStyle}>
          <div className="absolute top-[-0%] left-[-15%] h-[100%] w-[60%]">
            <Image
              src="/herosection/Left2.jpg"
              alt="Left Mountain Overlay"
              fill
              className="object-contain object-right-bottom -scale-x-100"
              priority
            />
          </div>
        </div>
      </div>

      {/* RIGHT IMAGES (z-30: Above Dashboard) */}
      <div className="pointer-events-none absolute inset-0 z-30 mix-blend-multiply">
        {/* Base Image */}
        <div className="absolute right-[-10%] top-[-0%] h-[100%] w-[60%]">
          <Image
            src="/herosection/Right1.jpg"
            alt="Right Mountain"
            fill
            className="object-contain object-right-bottom"
            priority
          />
        </div>
        {/* Overlay Image with Mask */}
        <div className="absolute inset-0 transition-opacity duration-700 ease-out" style={maskStyle}>
          <div className="absolute right-[-10%] top-[-0%] h-[100%] w-[60%]">
            <Image
              src="/herosection/Right2.jpg"
              alt="Right Mountain Overlay"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* CONTENT (z-40: Above Everything) */}
      <div className="relative z-40 mx-auto mb-8 flex max-w-4xl flex-col items-center px-4 text-center pointer-events-none">
        <h2 className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
          Finance Reimagined
        </h2>
        <h1 className="mb-4 text-4xl font-medium tracking-tight text-gray-900 md:text-6xl">
          <span className="text-gray-400">Automations and AI</span>
          <br />
          for Debt Collections Agencies
        </h1>
        <p className="max-w-2xl text-base font-light text-gray-400 md:text-lg">
          Automations and AI for Debt Collections Agencies
        </p>
      </div>

      {/* DASHBOARD (z-20: Above Left Image, Behind Right Image) */}
      <div className="relative z-20 flex w-full justify-center mt-2 scale-80 origin-top mb-[-10px]">
        <DummyHeroSection />
      </div>
    </section>
  )
}
