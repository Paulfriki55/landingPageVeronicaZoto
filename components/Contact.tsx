"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import SmoothParallax from "./SmoothParallax"
import DecorativeCircle from "./DecorativeCircle"
import DecorativePattern from "./DecorativePattern"

export default function Contact() {
  return (
    <section id="contacto" className="bg-primary/90 text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1000&width=2000')] bg-cover bg-center opacity-10"></div>

      {/* Elementos decorativos */}
      <DecorativeCircle
        size="500px"
        right="-250px"
        bottom="-250px"
        color="#ffffff"
        opacity={0.05}
        animate
        animationType="pulse"
      />
      <DecorativeCircle
        size="500px"
        left="-250px"
        top="-250px"
        color="#ffffff"
        opacity={0.05}
        animate
        animationType="pulse"
        delay={500}
      />
      <DecorativePattern type="waves" top="0" left="0" width="100%" height="100%" opacity={0.05} color="#ffffff" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <SmoothParallax speed={0.05} animation="slide-down">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white uppercase tracking-wide text-shadow">
              ¿Necesitas una <span className="text-white font-extrabold">consulta</span>?
            </h2>
          </SmoothParallax>

          <SmoothParallax speed={0.07} animation="fade">
            <p className="max-w-2xl mx-auto text-white/80">
              Estoy comprometida con el trabajo multidisciplinario y la mejora continua de mis habilidades para ofrecer
              una atención de calidad.
            </p>
          </SmoothParallax>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <SmoothParallax speed={0.05} delay={100} animation="slide-right">
              <div className="glass-effect rounded-lg p-6 flex items-center gap-4 transition-all duration-500 hover-lift hover-glow group cursor-pointer">
                <div className="bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <p className="font-medium text-lg">+593 98 765 4321</p>
                </div>
              </div>
            </SmoothParallax>

            <SmoothParallax speed={0.05} delay={200} animation="slide-right">
              <div className="glass-effect rounded-lg p-6 flex items-center gap-4 transition-all duration-500 hover-lift hover-glow group cursor-pointer">
                <div className="bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <p className="font-medium text-lg">lisbetveronik@hotmail.com</p>
                </div>
              </div>
            </SmoothParallax>

            <SmoothParallax speed={0.05} delay={300} animation="slide-right">
              <div className="glass-effect rounded-lg p-6 flex items-center gap-4 transition-all duration-500 hover-lift hover-glow group cursor-pointer">
                <div className="bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <p className="font-medium text-lg">Quito, Ecuador - Consulta privada</p>
                </div>
              </div>
            </SmoothParallax>

            <SmoothParallax speed={0.05} delay={400} animation="slide-right">
              <div className="glass-effect rounded-lg p-6 flex items-center gap-4 transition-all duration-500 hover-lift hover-glow group cursor-pointer">
                <div className="bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-6 w-6 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <p className="font-medium text-lg">Horario: Lunes a Viernes 9:00 - 18:00</p>
                </div>
              </div>
            </SmoothParallax>
          </div>

          <SmoothParallax speed={0.07} direction="up" animation="fade">
            <div className="bg-white rounded-lg shadow-lg p-8 hover-lift hover-glow transition-all duration-500 relative overflow-hidden">
              {/* Elementos decorativos del formulario */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary/5 rounded-full"></div>

              <h3 className="text-xl font-bold mb-6 text-primary uppercase tracking-wide">Envíame un mensaje</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 group">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700 group-focus-within:text-primary transition-colors duration-300"
                    >
                      Nombre
                    </label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      required
                      className="bg-light-gray border-medium-gray focus:border-primary transition-all duration-300 hover:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 group-focus-within:text-primary transition-colors duration-300"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="bg-light-gray border-medium-gray focus:border-primary transition-all duration-300 hover:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700 group-focus-within:text-primary transition-colors duration-300"
                  >
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    placeholder="Asunto del mensaje"
                    required
                    className="bg-light-gray border-medium-gray focus:border-primary transition-all duration-300 hover:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2 group">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700 group-focus-within:text-primary transition-colors duration-300"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    required
                    className="bg-light-gray border-medium-gray focus:border-primary transition-all duration-300 hover:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent uppercase tracking-wider hover-lift hover-glow transition-all duration-300 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Enviar Mensaje</span>
                </Button>
              </form>
            </div>
          </SmoothParallax>
        </div>
      </div>
    </section>
  )
}

