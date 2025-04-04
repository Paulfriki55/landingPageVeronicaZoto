import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  return (
    <section id="educación" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Educación</h2>
        <div className="max-w-3xl mx-auto">
          <div className="card flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-primary/20 p-4 rounded-full">
              <GraduationCap size={40} className="text-accent" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Fonoaudióloga, Trastornos del habla y del lenguaje</h3>
              <p className="text-lg font-medium text-accent">Universidad Central del Ecuador (UCE)</p>
              <div className="flex items-center gap-1 text-gray-500">
                <Calendar size={16} />
                <span>septiembre de 2019 - enero de 2024</span>
              </div>
              <p className="pt-4 text-gray-700">
                Formación especializada en evaluación, diagnóstico y tratamiento de trastornos de la comunicación,
                lenguaje, habla, voz y deglución en diversas poblaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

