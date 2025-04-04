import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SmoothParallax from "./SmoothParallax"

export default function Contact() {
  return (
    <section id="contacto" className="bg-primary/90 text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1000&width=2000')] bg-cover bg-center opacity-10"></div>
      <div className="decorative-circle w-[500px] h-[500px] right-0 bottom-0 -mr-64 -mb-64 bg-white opacity-5"></div>
      <div className="decorative-circle w-[500px] h-[500px] left-0 top-0 -ml-64 -mt-64 bg-white opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <SmoothParallax speed={0.05}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white uppercase tracking-wide">
              ¿Necesitas una <span className="text-white font-extrabold">consulta</span>?
            </h2>
          </SmoothParallax>

          <SmoothParallax speed={0.07}>
            <p className="max-w-2xl mx-auto text-white/80">
              Estoy comprometida con el trabajo multidisciplinario y la mejora continua de mis habilidades para ofrecer
              una atención de calidad.
            </p>
          </SmoothParallax>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <SmoothParallax speed={0.05} delay={100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4 transition-all duration-500 hover:bg-white/15">
                <div className="bg-white/20 p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-lg">+593 98 765 4321</p>
                </div>
              </div>
            </SmoothParallax>

            <SmoothParallax speed={0.05} delay={200}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4 transition-all duration-500 hover:bg-white/15">
                <div className="bg-white/20 p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-lg">lisbetveronik@hotmail.com</p>
                </div>
              </div>
            </SmoothParallax>

            <SmoothParallax speed={0.05} delay={300}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4 transition-all duration-500 hover:bg-white/15">
                <div className="bg-white/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-lg">Quito, Ecuador - Consulta privada</p>
                </div>
              </div>
            </SmoothParallax>

            <SmoothParallax speed={0.05} delay={400}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4 transition-all duration-500 hover:bg-white/15">
                <div className="bg-white/20 p-3 rounded-full">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-lg">Horario: Lunes a Viernes 9:00 - 18:00</p>
                </div>
              </div>
            </SmoothParallax>
          </div>

          <SmoothParallax speed={0.07} direction="up">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-primary uppercase tracking-wide">Envíame un mensaje</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      required
                      className="bg-light-gray border-medium-gray focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="bg-light-gray border-medium-gray focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    placeholder="Asunto del mensaje"
                    required
                    className="bg-light-gray border-medium-gray focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    required
                    className="bg-light-gray border-medium-gray focus:border-primary"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-accent uppercase tracking-wider">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </SmoothParallax>
        </div>
      </div>
    </section>
  )
}

