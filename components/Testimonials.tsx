"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import WavePattern from "./WavePattern"
import ParallaxSection from "./ParallaxSection"
import SmoothParallax from "./SmoothParallax"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <SmoothParallax speed={0.05}>
            <div className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Testimonios
            </div>
          </SmoothParallax>

          <SmoothParallax speed={0.07}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
              Lo que dicen mis <span className="text-primary">pacientes</span>
            </h2>
          </SmoothParallax>

          <SmoothParallax speed={0.09}>
            <p className="max-w-3xl mx-auto text-gray-600">
              Experiencias de quienes han confiado en mi trabajo profesional
            </p>
          </SmoothParallax>
        </div>

        <SmoothParallax speed={0.05}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative shadow-sm">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <blockquote className="text-center text-lg md:text-xl italic mb-8 text-gray-700">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            <div className="text-center">
              <p className="font-bold text-lg text-gray-800">{testimonials[activeIndex].name}</p>
              <p className="text-gray-600">{testimonials[activeIndex].role}</p>
            </div>

            <div className="flex justify-center mt-8 testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  aria-label={`Testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </SmoothParallax>
      </div>

      <WavePattern position="bottom" color="#f8fafa" />
    </ParallaxSection>
  )
}

