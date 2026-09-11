"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { name: "Home", href: "/", active: true },
  { name: "Features", href: "#features", active: false },
  { name: "Pricing", href: "#pricing", active: false },
  { name: "About", href: "#about", active: false },
  { name: "Contact", href: "#contact", active: false },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-md">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo (Left) */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image 
                src="/Logo/nav_logo_light.png" 
                alt="Jupitex Logo" 
                width={150} 
                height={40} 
                className="w-auto h-8 sm:h-10 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Nav Links (Center Desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-orange-500",
                    link.active ? "text-orange-500" : "text-gray-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side spacer to keep center aligned perfectly */}
          <div className="hidden md:block w-[150px]"></div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  link.active 
                    ? "text-orange-500 bg-orange-50" 
                    : "text-gray-600 hover:text-orange-500 hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
