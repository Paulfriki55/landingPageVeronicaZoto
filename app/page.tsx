import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Experience from "@/components/Experience"
import Plans from "@/components/Plans"
import Gallery from "@/components/Gallery"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Experience />
        <Plans />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

