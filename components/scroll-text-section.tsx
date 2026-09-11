"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import { AnimatePresence, motion } from "motion/react"
import { DiaTextReveal } from "@/components/ui/dia-text-reveal"
import { MagneticText } from "@/components/ui/morphing-cursor"

const LINES = [
  "You want to implement AI Automations but not sure how to get started?",
  "Your Team is still creating Reports manually?",
  "You Collection portal is not user friendly?",
  "Database slowness, Manual Processes, Data Entry Errors?",
  "You want to improve your customer experience?",
]

export function ScrollTextSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  
  // Custom cursor ball refs
  const ballRef = useRef<HTMLDivElement>(null)
  const targetPos = useRef({ x: -100, y: -100 })
  const currentPos = useRef({ x: -100, y: -100 })
  const [isHoveringSection, setIsHoveringSection] = useState(false)
  const [isHoveringText, setIsHoveringText] = useState(false)

  // Scroll logic
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false
            return
          }
          
          const rect = containerRef.current.getBoundingClientRect()
          const windowHeight = window.innerHeight
          
          // Fade in logic for the sticky part
          const visibility = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)))
          const opacity = Math.pow(visibility, 2)
          containerRef.current.style.setProperty("--scroll-opacity", opacity.toString())

          // Active Index Logic
          const scrollableDistance = rect.height - windowHeight
          let progress = -rect.top / scrollableDistance
          progress = Math.max(0, Math.min(1, progress))

          const sectionLength = 1 / LINES.length
          let newIndex = Math.floor((progress + 0.05) / sectionLength)
          if (newIndex >= LINES.length) newIndex = LINES.length - 1
          if (newIndex < 0) newIndex = 0

          setActiveIndex((prev) => {
            if (prev !== newIndex) return newIndex
            return prev
          })

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    handleScroll() // initial
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  // Custom Cursor Ball Animation Loop
  useEffect(() => {
    let animationFrameId: number

    const render = () => {
      // Slower lerp for a more delayed, trailing feel
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.1
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.1

      if (ballRef.current) {
        ballRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`
      }
      animationFrameId = requestAnimationFrame(render)
    }
    render()

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    // The system cursor is hidden, so this ball must act as the exact pointer tip
    targetPos.current.x = e.clientX
    targetPos.current.y = e.clientY
  }, [])

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-white cursor-none"
      style={{ "--scroll-opacity": "0" } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
    >
      
      {/* The Ball */}
      <div 
        ref={ballRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-black pointer-events-none z-[60] transition-opacity duration-300"
        style={{ opacity: isHoveringSection && !isHoveringText ? 1 : 0 }}
      />

      {/* Sticky visual part */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10 pointer-events-none">
        
        <div 
          className="relative w-full max-w-5xl h-[250px] px-6 text-center flex items-center justify-center pointer-events-auto"
          style={{ opacity: "var(--scroll-opacity)" }}
        >
          <AnimatePresence>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)", scale: 0.98 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)", scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center px-4"
            >
              <div 
                className="inline-flex"
                onMouseEnter={() => setIsHoveringText(true)}
                onMouseLeave={() => setIsHoveringText(false)}
              >
                <MagneticText 
                  className="w-full flex items-center justify-center"
                  base={
                    <DiaTextReveal 
                      text={LINES[activeIndex]}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center"
                      colors={["#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c"]}
                      textColor="#1f2937" 
                      delay={0}
                      duration={2.0}
                    />
                  }
                  hover={
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center text-background">
                      {LINES[activeIndex]}
                    </span>
                  }
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Snap Points to provide height and native CSS scrolling snap */}
      <div className="-mt-[100vh] relative z-0 w-full">
        {LINES.map((_, i) => (
          <div key={i} className="h-screen w-full snap-start snap-always" />
        ))}
      </div>
    </section>
  )
}
