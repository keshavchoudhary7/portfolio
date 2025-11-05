import Navbar from './components/Navbar'
import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import About from './components/sections/About'
const Hero = lazy(() => import('./components/sections/Hero'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Achievements = lazy(() => import('./components/sections/Achievements'))
const Contact = lazy(() => import('./components/sections/Contact'))
import Footer from './components/sections/Footer'
import Cursor from './components/Cursor'
import CursorTrail from './components/CursorTrail'
import PageTransition from './components/PageTransition'
import Loader from './components/Loader'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="relative">
      <Loader />
      <PageTransition />
      <Cursor />
      <CursorTrail />
      <Navbar />
      <main>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Suspense fallback={<div className="grid place-items-center py-20 text-[var(--text-secondary)]">Loading…</div>}>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Contact />
          </Suspense>
        </motion.div>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}

export default App


