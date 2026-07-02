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
import InsightsList from './components/insights/InsightsList'
import ArticlePage from './components/insights/ArticlePage'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'

export default function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/'
  const isInsights = path.startsWith('/insights')
  const parts = path.split('/').filter(Boolean)

  return (
    <div className="bg-bg text-white min-h-screen font-sans antialiased">
      <Navigation />
      <main>
        {!isInsights ? (
          <>
            <Hero />          {/* Home */}
            <About />         {/* About */}
            <TechStack />     {/* skills — under About */}
            <Services />      {/* Services */}
            <WhyMe />         {/* supports Services */}
            <Projects />      {/* Work */}
            <Testimonials />  {/* social proof — under Work */}
            <Insights />      {/* Insights section preview */}
            <FAQ />           {/* before Contact */}
            <Contact />       {/* Contact */}
          </>
        ) : (
          parts.length === 1 ? (
            <InsightsList />
          ) : (
            <ArticlePage slug={parts[1]} />
          )
        )}
      </main>
      <Footer />
    </div>
  )
}
