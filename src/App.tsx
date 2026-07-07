import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import WhyMe from './components/sections/WhyMe'
import Testimonials from './components/sections/Testimonials'
import About from './components/sections/About'
import TechStack from './components/sections/TechStack'
import InsightsList from './components/insights/InsightsList'
import ArticlePage from './components/insights/ArticlePage'
import usePath from './hooks/usePath'
import { AnimatePresence, motion } from 'framer-motion'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'

export default function App() {
  const path = usePath()
  const isInsights = path.startsWith('/insights')
  const parts = path.split('/').filter(Boolean)

  return (
    <div className="bg-bg text-white min-h-screen font-sans antialiased">
      <Navigation />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={path}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {!isInsights ? (
              <>
                <Hero />          {/* Home */}
                <About />         {/* About */}
                <TechStack />     {/* skills — under About */}
                <Services />      {/* Services */}
                <WhyMe />         {/* supports Services */}
                <Projects />      {/* Work */}
                <Testimonials />  {/* social proof — under Work */}
                <FAQ />           {/* before Contact */}
                <Contact />       {/* Contact */}
              </>
            ) : parts.length === 1 ? (
              <InsightsList />
            ) : (
              <ArticlePage slug={parts[1]} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
