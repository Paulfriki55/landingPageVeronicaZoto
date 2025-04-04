"use client"

import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const menuItems = [
    { name: "Servicios", href: "#servicios" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl">VZ</span>
              </div>
              <div>
                <h1 className="text-xl font-bold leading-tight uppercase tracking-wide">
                  Verónica <span className="font-extrabold">Zoto</span>
                </h1>
                <p className="text-xs text-gray-600 -mt-1 uppercase tracking-wider">Fonoaudióloga</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contacto"
              className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors uppercase tracking-wider text-sm"
            >
              <Phone size={16} />
              <span>Agendar Cita</span>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:text-accent transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors uppercase tracking-wider text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contacto"
                className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors mt-2 uppercase tracking-wider text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={16} />
                <span>Agendar Cita</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

