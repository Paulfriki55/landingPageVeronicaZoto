"use client"

import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Detectar sección activa
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
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
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors group">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white text-xl">VZ</span>
              </div>
              <div>
                <h1 className="text-xl font-bold leading-tight uppercase tracking-wide group-hover:text-gradient transition-all duration-300">
                  Verónica <span className="font-extrabold">Zoto</span>
                </h1>
                <p className="text-xs text-gray-600 -mt-1 uppercase tracking-wider">Fonoaudióloga</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => {
              const isActive = `#${activeSection}` === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 font-medium transition-all duration-300 text-sm uppercase tracking-wider hover:text-primary relative group ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contacto"
              className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 uppercase tracking-wider text-sm hover-lift hover-glow group"
            >
              <Phone size={16} className="group-hover:animate-pulse" />
              <span className="group-hover:translate-x-0.5 transition-transform duration-300">Agendar Cita</span>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:text-accent transition-colors p-2 rounded-md hover:bg-primary/5"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => {
                const isActive = `#${activeSection}` === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-gray-700 hover:text-primary font-medium transition-colors uppercase tracking-wider ${
                      isActive ? "text-primary" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link
                href="#contacto"
                className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors mt-2 uppercase tracking-wider hover-lift"
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

