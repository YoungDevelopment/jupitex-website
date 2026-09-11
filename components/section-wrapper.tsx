"use client"

import React from "react"

export function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative w-full bg-white min-h-screen snap-start">
      {children}
    </section>
  )
}
