import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
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
        <Hero />          {/* Home */}
        <About />         {/* About */}
        <TechStack />     {/* skills — under About */}
        <Services />      {/* Services */}
        <WhyMe />         {/* supports Services */}
        <Projects />      {/* Work */}
        <Testimonials />  {/* social proof — under Work */}
        <Insights />      {/* Insights */}
        <FAQ />           {/* before Contact */}
        <Contact />       {/* Contact */}
      </main>
      <Footer />
    </div>
  )
}
