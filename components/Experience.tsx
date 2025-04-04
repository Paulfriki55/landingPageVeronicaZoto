"use client"


import { Calendar, MapPin, Briefcase } from "lucide-react"
import WavePattern from "./WavePattern"
import SmoothParallax from "./SmoothParallax"

export default function Experience() {
  const experiences = [
    {
      title: "Audióloga",
      company: 'Centro auditivo "Sordera"',
      period: "enero de 2025 - Presente",
      location: "Ecuador",
      description:
        "Evaluación auditiva completa y manejo de problemas relacionados con la audición en pacientes de todas las edades.",
    },
    {
      title: "Terapista de lenguaje",
      company: "Grupo iSmart",
      period: "mayo de 2024 - diciembre de 2024",
      location: "Tumbaco, Pichincha, Ecuador",
      description:
        "Evaluación y diagnóstico del desarrollo del lenguaje, habla y comunicación. Diseño de planes de intervención personalizados y trabajo multidisciplinario.",
    },
    {
      title: "Fonoaudióloga Pediátrica Integral",
      company: 'Centro Integral "CERVAU"',
      period: "enero de 2024 - abril de 2024",
      location: "Sangolquí, Pichincha, Ecuador",
      description:
        "Evaluación integral del desarrollo del lenguaje, voz, habla, comunicación y funciones cognitivas en niños. Implementación de planes de intervención personalizados.",
    },
  ]

  return (
    <section id="experiencia" className="relative bg-secondary/30 py-20 md:py-28">
      <div className="decorative-circle w-[300px] h-[300px] right-0 top-0 -mr-36"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <SmoothParallax speed={0.05}>
            <div className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Trayectoria
            </div>
          </SmoothParallax>

          <SmoothParallax speed={0.07}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
              Mi <span className="text-primary">experiencia</span> profesional
            </h2>
          </SmoothParallax>

          <SmoothParallax speed={0.09}>
            <p className="max-w-3xl mx-auto text-gray-600">
              Conoce mi recorrido profesional y las instituciones donde he desarrollado mi carrera
            </p>
          </SmoothParallax>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-light/50 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <SmoothParallax
                key={index}
                speed={0.07}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 200}
                className={`relative ${index % 2 === 0 ? "md:pr-12 md:ml-auto md:mr-0" : "md:pl-12 md:mr-auto md:ml-0"} md:w-1/2`}
              >
                <div className="hidden md:block absolute top-6 -left-3 w-6 h-6 rounded-full bg-primary z-10"></div>
                <div className="card border-l-4 border-primary hover:shadow-md transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary uppercase tracking-wide">{exp.title}</h3>
                      <div className="flex items-center gap-1 text-gray-700 mb-1">
                        <Briefcase size={16} className="text-primary" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </SmoothParallax>
            ))}
          </div>
        </div>
      </div>

      <WavePattern position="bottom" color="#f8fafa" />
    </section>
  )
}

