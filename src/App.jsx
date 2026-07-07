import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ApartmentSection from './components/ApartmentSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { APARTMENTS } from './data/apartments'

export default function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <div id="apartamentos">
          {APARTMENTS.map((apt) => (
            <ApartmentSection key={apt.id} apt={apt} />
          ))}
        </div>
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
