import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import WavePattern from "./WavePattern"
import SmoothParallax from "./SmoothParallax"

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
      <div className="decorative-circle w-[300px] h-[300px] left-0 bottom-0 -ml-36"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <SmoothParallax speed={0.05}>
            <div className="inline-block bg-secondary px-3 py-1 rounded-full text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Planes
            </div>
          </SmoothParallax>

          <SmoothParallax speed={0.07}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
              Planes y <span className="text-primary">Servicios</span>
            </h2>
          </SmoothParallax>

          <SmoothParallax speed={0.09}>
            <p className="max-w-3xl mx-auto text-gray-600">
              Ofrezco diferentes planes adaptados a las necesidades específicas de cada paciente, con el objetivo de
              proporcionar una atención personalizada y efectiva.
            </p>
          </SmoothParallax>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <SmoothParallax key={index} speed={0.05} delay={index * 200} className="h-full">
              <div
                className={`card flex flex-col h-full ${
                  plan.highlighted ? "border-2 border-primary relative shadow-lg" : "border border-gray-200"
                } hover:shadow-md transition-all duration-500`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wider">
                    Más Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">{plan.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contacto"
                  className={`text-center py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center gap-2 uppercase tracking-wider text-sm ${
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-accent"
                      : "bg-secondary text-primary hover:bg-secondary/70"
                  }`}
                >
                  Solicitar Plan
                  {plan.highlighted && <ArrowRight size={16} />}
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

