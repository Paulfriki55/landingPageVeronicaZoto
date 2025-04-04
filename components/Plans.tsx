"use client"

import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import WavePattern from "./WavePattern"
import SmoothParallax from "./SmoothParallax"
import DecorativeCircle from "./DecorativeCircle"
import DecorativePattern from "./DecorativePattern"

export default function Plans() {
  const plans = [
    {
      title: "Evaluación Inicial",
      price: "$40",
      description: "Evaluación completa para determinar necesidades específicas",
      features: [
        "Evaluación exhaustiva del lenguaje",
        "Evaluación de habla y comunicación",
        "Informe detallado de resultados",
        "Plan de tratamiento personalizado",
      ],
      highlighted: false,
    },
    {
      title: "Plan Mensual",
      price: "$160",
      description: "4 sesiones mensuales de terapia personalizada",
      features: [
        "Sesiones semanales de 45 minutos",
        "Seguimiento personalizado",
        "Material de apoyo para casa",
        "Informe mensual de progreso",
      ],
      highlighted: true,
    },
    {
      title: "Plan Intensivo",
      price: "$300",
      description: "8 sesiones mensuales para casos que requieren mayor atención",
      features: [
        "Sesiones de 45 minutos (2 por semana)",
        "Seguimiento constante",
        "Material de apoyo especializado",
        "Coordinación con otros especialistas",
        "Informe quincenal de progreso",
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="especialidades" className="relative bg-white py-20 md:py-28">
      {/* Elementos decorativos */}
      <DecorativeCircle size="300px" left="-150px" bottom="-50px" animate animationType="float" />
      <DecorativePattern type="dots" top="10%" right="5%" width="200px" height="200px" />
      <DecorativePattern type="lines" bottom="20%" left="10%" width="150px" height="150px" rotate={30} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <SmoothParallax speed={0.05} animation="slide-down">
            <div className="inline-block bg-secondary px-3 py-1 rounded-full text-sm font-medium text-primary uppercase tracking-wider mb-4 hover-lift">
              Planes
            </div>
          </SmoothParallax>

          <SmoothParallax speed={0.07} animation="fade">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide text-shadow">
              Planes y <span className="text-gradient">Servicios</span>
            </h2>
          </SmoothParallax>

          <SmoothParallax speed={0.09} animation="slide-up">
            <p className="max-w-3xl mx-auto text-gray-600">
              Ofrezco diferentes planes adaptados a las necesidades específicas de cada paciente, con el objetivo de
              proporcionar una atención personalizada y efectiva.
            </p>
          </SmoothParallax>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <SmoothParallax key={index} speed={0.05} delay={index * 200} animation="fade" className="h-full">
              <div
                className={`card flex flex-col h-full ${
                  plan.highlighted
                    ? "border-2 border-primary relative shadow-lg bg-gradient-soft bg-opacity-30"
                    : "border border-gray-200"
                } hover-lift hover-glow transition-all duration-500 group overflow-hidden`}
              >
                {/* Fondo decorativo */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wider hover-scale">
                    Más Popular
                  </div>
                )}
                <div className="text-center mb-6 relative z-10">
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                    {plan.title}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {plan.price}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow relative z-10">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className="bg-primary/10 rounded-full p-1 group-hover/item:bg-primary/20 transition-colors duration-300">
                        <Check size={16} className="text-primary" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contacto"
                  className={`text-center py-3 px-6 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-sm relative z-10 ${
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-accent"
                      : "bg-secondary text-primary hover:bg-secondary/70"
                  } group-hover:shadow-md`}
                >
                  Solicitar Plan
                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-300 ${plan.highlighted ? "group-hover:translate-x-1" : ""}`}
                  />
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

