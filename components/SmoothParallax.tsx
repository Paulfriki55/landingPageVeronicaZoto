"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface SmoothParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}

export default function SmoothParallax({
  children,
  speed = 0.1,
  className = "",
  direction = "up",
  delay = 0,
}: SmoothParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setVisible(true)
      }, delay)
      return () => clearTimeout(timer)
    } else {
      setVisible(true)
    }
  }, [delay])

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Verificar si el elemento está en el viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calcular qué tan lejos está el elemento del centro de la pantalla
        const distanceFromCenter = rect.top + rect.height / 2 - windowHeight / 2
        const maxDistance = windowHeight / 2 + rect.height / 2
        const percentage = distanceFromCenter / maxDistance

        // Aplicar una curva de aceleración suave
        const easeOutQuad = (t: number) => t * (2 - t)
        const smoothPercentage = easeOutQuad(Math.max(0, Math.min(1, Math.abs(percentage)))) * Math.sign(percentage)

        // Calcular el desplazamiento basado en la dirección
        let xOffset = 0
        let yOffset = 0

        switch (direction) {
          case "up":
            yOffset = smoothPercentage * speed * 50
            break
          case "down":
            yOffset = -smoothPercentage * speed * 50
            break
          case "left":
            xOffset = smoothPercentage * speed * 50
            break
          case "right":
            xOffset = -smoothPercentage * speed * 50
            break
        }

        setOffset({ x: xOffset, y: yOffset })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Cálculo inicial
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction])

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${className} ${visible ? "opacity-100" : "opacity-0"}`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transitionProperty: "transform, opacity",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDuration: "0.8s",
      }}
    >
      {children}
    </div>
  )
}

