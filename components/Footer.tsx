import Link from "next/link"
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react"
import DecorativePattern from "./DecorativePattern"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 relative overflow-hidden">
      {/* Elementos decorativos */}
      <DecorativePattern type="dots" top="10%" right="5%" width="150px" height="150px" opacity={0.2} />
      <DecorativePattern type="lines" bottom="10%" left="5%" width="150px" height="150px" rotate={45} opacity={0.1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0 hover-scale transition-transform duration-300">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
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
            <Link href="#" className="text-sm text-gray-600 hover:text-primary uppercase tracking-wider relative group">
              Términos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-primary uppercase tracking-wider relative group">
              Privacidad
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-primary uppercase tracking-wider relative group">
              Política de Cookies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contacto"
              className="text-sm text-gray-600 hover:text-primary uppercase tracking-wider relative group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors hover-scale">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors hover-scale">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors hover-scale">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors hover-scale">
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

