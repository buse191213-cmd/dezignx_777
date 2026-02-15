import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import CardFan from "./components/CardFan.jsx"
import Process from "./components/Process.jsx"
import BentoSection from "./components/BentoSection.jsx"
import MobileApp from "./components/MobileApp.jsx"
import Dashboard from "./components/Dashboard.jsx"
import Projects from "./components/Projects.jsx"
import Satisfaction from "./components/Satisfaction.jsx"
import About from "./components/About.jsx"
import Why from "./components/Why.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import CookieConsent from "./components/CookieConsent.jsx"

export default function App() {
  return (
    <div className="min-h-screen bg-[#070B18] text-white">
      <Navbar />
      <main>
        <Hero />
        <CardFan />
        <Process />
        <MobileApp />
        <BentoSection />
        
        <Dashboard />
        <Projects />
        <Satisfaction />
        <About />
        <Why />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
