import { MessageSquare, Ear, Brain, ArrowRight } from "lucide-react"
import Link from "next/link"
import WavePattern from "./WavePattern"
import SmoothParallax from "./SmoothParallax"

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
      <div className="decorative-circle w-[300px] h-[300px] left-0 top-1/4 -ml-36"></div>
      <div className="decorative-circle w-[300px] h-[300px] right-0 bottom-1/4 -mr-36"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <SmoothParallax speed={0.05}>
            <div className="inline-block bg-secondary px-3 py-1 rounded-full text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Servicios
            </div>
          </SmoothParallax>

          <SmoothParallax speed={0.07}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
              Servicios <span className="text-primary">profesionales</span>
            </h2>
          </SmoothParallax>

          <SmoothParallax speed={0.09}>
            <p className="max-w-3xl mx-auto text-gray-600">
              Ofrezco atención integral y personalizada, adaptando mis técnicas terapéuticas a las necesidades
              específicas de cada paciente.
            </p>
          </SmoothParallax>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <SmoothParallax key={index} speed={0.05} delay={index * 200} className="h-full">
              <div className="service-card group hover:shadow-md transition-all duration-500 h-full">
                <div className="service-icon group-hover:bg-primary/10 transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link href={service.link} className="service-link">
                  Más información <ArrowRight size={16} />
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

