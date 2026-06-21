import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Credibility from './components/sections/Credibility'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import WhyMe from './components/sections/WhyMe'
import Testimonials from './components/sections/Testimonials'
import About from './components/sections/About'
import TechStack from './components/sections/TechStack'
import Insights from './components/sections/Insights'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="bg-bg text-white min-h-screen font-sans antialiased">
      <Navigation />
      <main>
        <Hero />
        <Credibility />
        <Projects />
        <Services />
        <WhyMe />
        <Testimonials />
        <About />
        <TechStack />
        <Insights />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
