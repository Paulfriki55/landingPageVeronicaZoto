"use client"

import { useState, useEffect, useCallback } from "react"
import { Star } from "lucide-react"
import WavePattern from "./WavePattern"
import ParallaxSection from "./ParallaxSection"
import SmoothParallax from "./SmoothParallax"
import DecorativeCircle from "./DecorativeCircle"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const testimonials = [
    {
      quote:
        "Después de mi ACV, pensé que nunca recuperaría mi capacidad de comunicación. Gracias a la terapia con Verónica, he logrado avances que no creía posibles.",
      name: "Carlos Mendoza",
      role: "Paciente adulto",
    },
    {
      quote:
        "Mi hijo de 5 años tenía dificultades para comunicarse claramente. Después de 6 meses con Verónica, su progreso ha sido increíble. Ahora puede expresarse con confianza.",
      name: "María Sánchez",
      role: "Madre de paciente",
    },
    {
      quote:
        "Como profesional de la educación, recomiendo ampliamente a Verónica. Su enfoque integral y personalizado ha ayudado a varios de mis estudiantes con dificultades de lenguaje.",
      name: "Laura Jiménez",
      role: "Docente de educación especial",
    },
  ]

  // Envolvemos handleNextTestimonial en useCallback
  const handleNextTestimonial = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )

    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }, [isTransitioning, testimonials.length])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNextTestimonial()
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [isTransitioning, handleNextTestimonial])

  const handlePrevTestimonial = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )

    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === activeIndex) return

    setIsTransitioning(true)
    setActiveIndex(index)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  return (
    <ParallaxSection
      id="testimonios"
      bgImage="/placeholder.svg?height=1000&width=2000"
      speed={0.1}
      overlay={true}
      overlayColor="#8ca9a3"
      overlayOpacity={0.1}
      className="py-20 md:py-28"
    >
      {/* Elementos decorativos */}
      <DecorativeCircle size="200px" top="10%" right="5%" animate animationType="float" />
      <DecorativeCircle size="150px" bottom="15%" left="10%" animate animationType="pulse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <SmoothParallax speed={0.05} animation="slide-down">
            <div className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-primary uppercase tracking-wider mb-4 hover-lift">
              Testimonios
            </div>
          </SmoothParallax>

          <SmoothParallax speed={0.07} animation="fade">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide text-shadow">
              Lo que dicen mis <span className="text-gradient">pacientes</span>
            </h2>
          </SmoothParallax>

          <SmoothParallax speed={0.09} animation="slide-up">
            <p className="max-w-3xl mx-auto text-gray-600">
              Experiencias de quienes han confiado en mi trabajo profesional
            </p>
          </SmoothParallax>
        </div>

        <SmoothParallax speed={0.05}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative shadow-sm hover-glow transition-all duration-500">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-yellow-400 fill-yellow-400 animate-pulse-slow"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>

            <div className="relative h-[180px] overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={index}
                  className={`text-center text-lg md:text-xl italic text-gray-700 absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === activeIndex
                      ? "opacity-100 translate-x-0"
                      : index < activeIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  {`"${testimonial.quote}"`}
                </blockquote>
              ))}
            </div>

            <div className="text-center mt-6 transition-all duration-500 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out ${
                    index === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 absolute"
                  }`}
                >
                  <p className="font-bold text-lg text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`dot ${index === activeIndex ? "active" : ""} hover-scale`}
                  aria-label={`Testimonio ${index + 1}`}
                  disabled={isTransitioning}
                />
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              onClick={handlePrevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary flex items-center justify-center transition-all duration-300 hover-lift opacity-70 hover:opacity-100"
              disabled={isTransitioning}
              aria-label="Testimonio anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary flex items-center justify-center transition-all duration-300 hover-lift opacity-70 hover:opacity-100"
              disabled={isTransitioning}
              aria-label="Testimonio siguiente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </SmoothParallax>
      </div>

      <WavePattern position="bottom" color="#f8fafa" />
    </ParallaxSection>
  )
}
