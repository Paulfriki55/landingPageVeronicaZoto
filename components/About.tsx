"use client"

import Image from "next/image"

export default function About() {
  return (
    <section id="sobre-mí" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Soy una fonoaudióloga con amplia experiencia en la evaluación, diagnóstico e intervención de trastornos
              del lenguaje, voz, habla y comunicación en diversas poblaciones.
            </p>
            <p>
              Mi carrera se ha enfocado en proporcionar atención integral y personalizada, tanto en niños como en
              adultos mayores, adaptando mis técnicas terapéuticas a las necesidades específicas de cada paciente.
            </p>
            <p>
              Estoy comprometida con el trabajo multidisciplinario y la mejora continua de mis habilidades para ofrecer
              una atención de calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="mailto:lisbetveronik@hotmail.com"
                className="bg-accent text-white px-6 py-3 rounded-md text-center hover:bg-accent/90 transition-colors"
              >
                Contactar
              </a>
              <a
                href="https://www.linkedin.com/in/verónica-zoto-36577a30a"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-accent border border-accent px-6 py-3 rounded-md text-center hover:bg-accent/10 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Verónica Zoto"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

