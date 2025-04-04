import ImageCarousel from "./ImageCarousel"
import WavePattern from "./WavePattern"
import SmoothParallax from "./SmoothParallax"

export default function Gallery() {
  const images = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Evaluación Auditiva",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Terapia del Lenguaje",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Sesión con niños",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Consulta profesional",
    },
  ]

  return (
    <section id="galeria" className="relative bg-secondary/30 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <SmoothParallax speed={0.05}>
            <div className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Galería
            </div>
          </SmoothParallax>

          <SmoothParallax speed={0.07}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
              Conoce mi <span className="text-primary">trabajo</span>
            </h2>
          </SmoothParallax>

          <SmoothParallax speed={0.09}>
            <p className="max-w-3xl mx-auto text-gray-600">Imágenes de mi consulta y sesiones terapéuticas</p>
          </SmoothParallax>
        </div>

        <SmoothParallax speed={0.05}>
          <div className="h-[500px] max-w-5xl mx-auto rounded-xl overflow-hidden shadow-md">
            <ImageCarousel images={images} />
          </div>
        </SmoothParallax>
      </div>

      <WavePattern position="bottom" color="#f8fafa" />
    </section>
  )
}

