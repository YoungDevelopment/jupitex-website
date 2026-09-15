"use client"

import React, { useEffect, useState, useRef } from "react"

type Cell = [number, number] // [x, y] in 2x2 grid

const SHAPES: Cell[][] = [
  [[0,0]], // single
  [[0,0], [1,0]], // horizontal
  [[0,0], [0,1]], // vertical
  [[0,0], [1,1]], // diagonal 1
  [[1,0], [0,1]], // diagonal 2
  [[0,0], [1,0], [0,1]], // L1
  [[0,0], [1,0], [1,1]], // L2
  [[1,0], [0,1], [1,1]], // L3
  [[0,0], [0,1], [1,1]], // L4
]

interface PixelData {
  id: number
  x: number // absolute px
  y: number // absolute px
  shapeIndex: number
  zone: "left" | "right"
}

const FALL_STEP = 32 // The jump distance in pixels
const FALL_SPEED_MS = 250 // Interval time

export function RandomPixels({ count = 18, show = false }: { count?: number, show?: boolean }) {
  const [pixels, setPixels] = useState<PixelData[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const pixelsRef = useRef<PixelData[]>([])

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
    
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Initialize pixels
  useEffect(() => {
    if (dimensions.width === 0) return

    const initialPixels: PixelData[] = []
    
    for (let i = 0; i < count; i++) {
      const isLeft = Math.random() > 0.5
      
      const minX = isLeft ? dimensions.width * 0.05 : dimensions.width * 0.8
      const maxX = isLeft ? dimensions.width * 0.2 : dimensions.width * 0.95
      
      let x = minX + Math.random() * (maxX - minX)
      x = Math.floor(x / FALL_STEP) * FALL_STEP
      
      let y = Math.random() * dimensions.height
      y = Math.floor(y / FALL_STEP) * FALL_STEP
      
      const shapeIndex = Math.floor(Math.random() * SHAPES.length)
      
      initialPixels.push({
        id: i,
        x,
        y,
        shapeIndex,
        zone: isLeft ? "left" : "right"
      })
    }
    
    pixelsRef.current = initialPixels
    setPixels([...initialPixels])
  }, [dimensions, count])

  // Falling interval
  useEffect(() => {
    if (dimensions.height === 0) return

    const interval = setInterval(() => {
      let changed = false
      const newPixels = pixelsRef.current.map(p => {
        let newX = p.x
        let newY = p.y + FALL_STEP
        let newShapeIndex = p.shapeIndex

        // Randomly change shape (simulate morphing/rotation)
        if (Math.random() < 0.25) {
          newShapeIndex = Math.floor(Math.random() * SHAPES.length)
        }

        // Random horizontal drift (snap left or right)
        const rand = Math.random()
        if (rand < 0.15) {
          newX -= FALL_STEP
        } else if (rand > 0.85) {
          newX += FALL_STEP
        }

        // Keep within zones
        const minX = p.zone === "left" ? dimensions.width * 0.02 : dimensions.width * 0.78
        const maxX = p.zone === "left" ? dimensions.width * 0.22 : dimensions.width * 0.98

        if (newX < minX) newX = minX
        if (newX > maxX) newX = maxX

        // Wrap around bottom
        if (newY > dimensions.height) {
          newY = -FALL_STEP * 2
          newX = minX + Math.random() * (maxX - minX)
          newShapeIndex = Math.floor(Math.random() * SHAPES.length)
        }

        // Snap precisely
        newX = Math.floor(newX / FALL_STEP) * FALL_STEP
        newY = Math.floor(newY / FALL_STEP) * FALL_STEP

        if (newX !== p.x || newY !== p.y || newShapeIndex !== p.shapeIndex) {
          changed = true
        }

        return { ...p, x: newX, y: newY, shapeIndex: newShapeIndex }
      })

      if (changed) {
        pixelsRef.current = newPixels
        setPixels(newPixels)
      }
    }, FALL_SPEED_MS)

    return () => clearInterval(interval)
  }, [dimensions])

  if (dimensions.width === 0) return null

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-1000 ease-in"
      style={{ opacity: show ? 1 : 0 }}
    >
      {pixels.map((p) => {
        const shape = SHAPES[p.shapeIndex]
        return (
          <div
            key={p.id}
            className="absolute"
            style={{ 
              left: `${p.x}px`, 
              top: `${p.y}px`,
            }}
          >
            <div className="relative w-6 h-6 md:w-8 md:h-8">
              {shape.map((cell, idx) => (
                <div 
                  key={idx}
                  className="absolute bg-orange-500 w-3 h-3 md:w-4 md:h-4"
                  style={{
                    left: `${cell[0] * 50}%`,
                    top: `${cell[1] * 50}%`
                  }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
