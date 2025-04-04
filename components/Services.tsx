"use client"


import { MessageSquare, Ear, Brain, ArrowRight } from "lucide-react"
import Link from "next/link"
import WavePattern from "./WavePattern"
import SmoothParallax from "./SmoothParallax"
import DecorativeCircle from "./DecorativeCircle"
import DecorativePattern from "./DecorativePattern"

export default function Services() {
  const services = [
    {
      icon: <MessageSquare size={32} className="text-primary" />,
      title: "Terapia del Lenguaje",
      description: "Evaluación y tratamiento de trastornos del lenguaje en niños y adultos.",
      link: "#",
    },
    {
      icon: <Ear size={32} className="text-primary" />,
      title: "Audiología",
      description: "Evaluación auditiva y manejo de problemas relacionados con la audición.",
      link: "#",
    },
    {
      icon: <Brain size={32} className="text-primary" />,
      title: "Neurorehabilitación",
      description: "Terapia para pacientes con condiciones neurológicas que afectan el habla y la comunicación.",
      link: "#",
    },
  ]

  return (
    <section id="servicios" className="relative bg-white py-20 md:py-28">
      {/* Elementos decorativos */}
      <DecorativeCircle size="300px" left="-150px" top="25%" animate animationType="pulse" />
      <DecorativeCircle size="300px" right="-150px" bottom="25%" animate animationType="pulse" delay={500} />
      <DecorativePattern type="dots" bottom="10%" right="10%" width="200px" height="200px" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <SmoothParallax speed={0.05} animation="slide-down">
            <div className="inline-block bg-secondary px-3 py-1 rounded-full text-sm font-medium text-primary uppercase tracking-wider mb-4 hover-lift">
              Servicios
            </div>
          </SmoothParallax>

          <SmoothParallax speed={0.07} animation="fade">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide text-shadow">
              Servicios <span className="text-gradient">profesionales</span>
            </h2>
          </SmoothParallax>

          <SmoothParallax speed={0.09} animation="slide-up">
            <p className="max-w-3xl mx-auto text-gray-600">
              Ofrezco atención integral y personalizada, adaptando mis técnicas terapéuticas a las necesidades
              específicas de cada paciente.
            </p>
          </SmoothParallax>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <SmoothParallax key={index} speed={0.05} delay={index * 200} animation="fade" className="h-full">
              <div className="service-card group hover-lift hover-glow transition-all duration-500 h-full relative overflow-hidden">
                {/* Fondo decorativo */}
                <div className="absolute inset-0 bg-gradient-soft opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                <div className="service-icon group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="service-title group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="service-description">{service.description}</p>
                <Link href={service.link} className="service-link group-hover:text-primary-dark">
                  Más información <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </SmoothParallax>
          ))}
        </div>
      </div>

      <WavePattern position="bottom" color="#e8efed" />
    </section>
  )
}

