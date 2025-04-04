"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ParallaxElementProps {
  children: React.ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export default function ParallaxElement({
  children,
  speed = 0.2,
  className = "",
  direction = "up",
}: ParallaxElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const { top, height } = elementRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if element is in viewport
      if (top < windowHeight && top + height > 0) {
        // Calculate how far the element is from the center of the viewport
        const scrollPosition = window.scrollY
        const elementPosition = scrollPosition + top
        const windowCenter = scrollPosition + windowHeight / 2
        const distanceFromCenter = elementPosition - windowCenter

        // Apply different transformations based on direction
        switch (direction) {
          case "up":
            setOffset({ x: 0, y: -distanceFromCenter * speed })
            break
          case "down":
            setOffset({ x: 0, y: distanceFromCenter * speed })
            break
          case "left":
            setOffset({ x: -distanceFromCenter * speed, y: 0 })
            break
          case "right":
            setOffset({ x: distanceFromCenter * speed, y: 0 })
            break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initial calculation
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction])

  return (
    <div
      ref={elementRef}
      className={`${className}`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  )
}

