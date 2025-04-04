"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  autoplay?: boolean
  interval?: number
}

export default function ImageCarousel({ images, autoplay = true, interval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))

    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 700)
  }, [images.length, isTransitioning])

  const prevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))

    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 700)
  }

  useEffect(() => {
    if (!autoplay) return

    const intervalId = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(intervalId)
  }, [autoplay, interval, nextSlide])

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      {/* Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Imagen anterior"
        disabled={isTransitioning}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Imagen siguiente"
        disabled={isTransitioning}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true)
                setCurrentIndex(index)
                setTimeout(() => {
                  setIsTransitioning(false)
                }, 700)
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-6 bg-primary" : "bg-white/70"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  )
}

