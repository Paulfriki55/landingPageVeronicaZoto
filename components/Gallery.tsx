import ImageCarousel from "./ImageCarousel"
import WavePattern from "./WavePattern"
import SmoothParallax from "./SmoothParallax"
import DecorativeCircle from "./DecorativeCircle"
import DecorativePattern from "./DecorativePattern"

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
      {/* Elementos decorativos */}
      <DecorativeCircle size="200px" top="10%" left="5%" animate animationType="float" />
      <DecorativeCircle size="150px" bottom="15%" right="10%" animate animationType="pulse" />
      <DecorativePattern type="lines" top="20%" right="5%" width="150px" height="150px" rotate={30} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <SmoothParallax speed={0.05} animation="slide-down">
            <div className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-primary uppercase tracking-wider mb-4 hover-lift">
              Galería
            </div>
          </SmoothParallax>

          <SmoothParallax speed={0.07} animation="fade">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide text-shadow">
              Conoce mi <span className="text-gradient">trabajo</span>
            </h2>
          </SmoothParallax>

          <SmoothParallax speed={0.09} animation="slide-up">
            <p className="max-w-3xl mx-auto text-gray-600">Imágenes de mi consulta y sesiones terapéuticas</p>
          </SmoothParallax>
        </div>

        <SmoothParallax speed={0.05} animation="fade">
          <div className="h-[500px] max-w-5xl mx-auto rounded-xl overflow-hidden shadow-md hover-lift hover-glow transition-all duration-500 relative">
            {/* Elementos decorativos */}
            <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/30 rounded-full z-20 animate-pulse-slow"></div>
            <div className="absolute bottom-16 right-4 w-12 h-12 border border-white/30 rounded-full z-20 animate-float"></div>

            <ImageCarousel images={images} />
          </div>
        </SmoothParallax>

        {/* Miniaturas adicionales */}
        <div className="grid grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <SmoothParallax key={index} speed={0.03} delay={index * 100} animation="fade">
              <div className="aspect-square rounded-lg overflow-hidden relative hover-lift hover-scale cursor-pointer group">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=300')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
            </SmoothParallax>
          ))}
        </div>
      </div>

      <WavePattern position="bottom" color="#f8fafa" />
    </section>
  )
}

