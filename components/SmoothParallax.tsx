"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface SmoothParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  threshold?: number
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale" | "rotate" | "none"
  duration?: number
  easing?: string
}

export default function SmoothParallax({
  children,
  speed = 0.1,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.1,
  animation = "fade",
  duration = 800,
  easing = "cubic-bezier(0.22, 1, 0.36, 1)",
}: SmoothParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
          }
        })
      },
      { threshold },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold, hasAnimated])

  useEffect(() => {
    const element = elementRef.current; // Guardar la referencia antes de usarla
    if (!element) return;
  
    const handleScroll = () => {
      if (!element) return;
  
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight && rect.bottom > 0) {
        const distanceFromCenter = rect.top + rect.height / 2 - windowHeight / 2;
        const maxDistance = windowHeight / 2 + rect.height / 2;
        const percentage = distanceFromCenter / maxDistance;
  
        const easeOutQuad = (t: number) => t * (2 - t);
        const smoothPercentage = easeOutQuad(Math.max(0, Math.min(1, Math.abs(percentage)))) * Math.sign(percentage);
  
        let xOffset = 0;
        let yOffset = 0;
  
        switch (direction) {
          case "up":
            yOffset = smoothPercentage * speed * 50;
            break;
          case "down":
            yOffset = -smoothPercentage * speed * 50;
            break;
          case "left":
            xOffset = smoothPercentage * speed * 50;
            break;
          case "right":
            xOffset = -smoothPercentage * speed * 50;
            break;
        }
  
        setOffset({ x: xOffset, y: yOffset });
      }
    };
  
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);
  
  // Determinar la clase de animación
  let animationClass = ""
  if (hasAnimated && animation !== "none") {
    switch (animation) {
      case "fade":
        animationClass = "animate-fade-in"
        break
      case "slide-up":
        animationClass = "animate-slide-up"
        break
      case "slide-down":
        animationClass = "animate-slide-down"
        break
      case "slide-left":
        animationClass = "animate-slide-left"
        break
      case "slide-right":
        animationClass = "animate-slide-right"
        break
      case "scale":
        animationClass = "scale-0 animate-scale"
        break
      case "rotate":
        animationClass = "rotate-0 animate-rotate"
        break
    }
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all ${className} ${animationClass} ${visible ? "opacity-100" : "opacity-0"}`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transitionProperty: "transform, opacity",
        transitionTimingFunction: easing,
        transitionDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

