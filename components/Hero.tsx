import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import WavePattern from "./WavePattern"
import SmoothParallax from "./SmoothParallax"

export default function Hero() {
  return (
    <section className="relative bg-secondary/30 overflow-hidden py-20 md:py-28">
      <div className="decorative-circle w-[500px] h-[500px] right-0 top-0 -mr-64 -mt-64"></div>
      <div className="decorative-circle w-[400px] h-[400px] left-0 bottom-0 -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SmoothParallax speed={0.05} delay={100}>
              <div className="inline-block bg-white/80 px-3 py-1 rounded-full text-sm font-medium text-primary uppercase tracking-wider">
                Profesional certificada
              </div>
            </SmoothParallax>

            <SmoothParallax speed={0.07} delay={300}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase tracking-wide">
                Terapia del <span className="text-primary">Lenguaje</span>
              </h1>
            </SmoothParallax>

            <SmoothParallax speed={0.09} delay={500}>
              <p className="text-lg text-gray-600">
                Soy una fonoaudióloga con amplia experiencia en la evaluación, diagnóstico e intervención de trastornos
                del lenguaje, voz, habla y comunicación en diversas poblaciones.
              </p>
            </SmoothParallax>

            <SmoothParallax speed={0.11} delay={700}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="#contacto"
                  className="bg-primary text-white px-6 py-3 rounded-md text-center hover:bg-accent transition-colors flex items-center justify-center gap-2 uppercase tracking-wider text-sm"
                >
                  Agendar Consulta
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="#servicios"
                  className="bg-white text-primary border border-primary px-6 py-3 rounded-md text-center hover:bg-primary/5 transition-colors uppercase tracking-wider text-sm"
                >
                  Conocer Más
                </Link>
              </div>
            </SmoothParallax>

            <SmoothParallax speed={0.13} delay={900}>
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-primary" />
                  <span className="text-sm">Profesional certificada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-primary" />
                  <span className="text-sm">+500 pacientes atendidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-primary" />
                  <span className="text-sm">Métodos actualizados</span>
                </div>
              </div>
            </SmoothParallax>
          </div>

          <SmoothParallax speed={0.08} direction="down" delay={400}>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </SmoothParallax>
        </div>
      </div>

      <WavePattern position="bottom" color="#f8fafa" />
    </section>
  )
}

