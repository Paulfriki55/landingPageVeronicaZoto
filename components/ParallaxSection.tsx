"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  bgImage?: string
  speed?: number
  className?: string
  overlay?: boolean
  overlayColor?: string
  overlayOpacity?: number
  height?: string
  id?: string
}

export default function ParallaxSection({
  children,
  bgImage = "/placeholder.svg?height=1000&width=2000",
  speed = 0.15,
  className = "",
  overlay = false,
  overlayColor = "#8ca9a3",
  overlayOpacity = 0.3,
  height = "auto",
  id,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const elementTop = scrollTop + rect.top
      const windowHeight = window.innerHeight

      // Solo aplicar el efecto cuando la sección está visible
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calcular el desplazamiento basado en la posición de scroll
        // Usar una función más suave para el movimiento
        const scrollPosition = scrollTop - elementTop + windowHeight
        const sectionHeight = rect.height + windowHeight
        const percentage = scrollPosition / sectionHeight

        // Aplicar una curva de aceleración suave
        const easeOutQuad = (t: number) => t * (2 - t)
        const smoothPercentage = easeOutQuad(Math.max(0, Math.min(1, percentage)))

        setOffsetY(smoothPercentage * speed * 100)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Cálculo inicial
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <section ref={sectionRef} id={id} className={`relative overflow-hidden ${className}`} style={{ height }}>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {overlay && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}

      <div className="relative z-10 h-full">{children}</div>
    </section>
  )
}

