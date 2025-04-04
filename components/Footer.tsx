import Link from "next/link"
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xl">VZ</span>
            </div>
            <div>
              <h2 className="text-xl font-bold leading-tight text-primary uppercase tracking-wide">
                Verónica <span className="font-extrabold">Zoto</span>
              </h2>
              <p className="text-xs text-gray-600 -mt-1 uppercase tracking-wider">Fonoaudióloga</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            <Link href="#" className="text-sm text-gray-600 hover:text-primary uppercase tracking-wider">
              Términos
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-primary uppercase tracking-wider">
              Privacidad
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-primary uppercase tracking-wider">
              Política de Cookies
            </Link>
            <Link href="#contacto" className="text-sm text-gray-600 hover:text-primary uppercase tracking-wider">
              Contacto
            </Link>
          </div>

          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          © 2025 Verónica Zoto - Fonoaudióloga. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

