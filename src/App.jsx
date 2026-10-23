import { useState, useEffect, useRef, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import FeaturedAnalytics from './components/FeaturedAnalytics'
import Projects from './components/Projects'
import Workflow from './components/Workflow'
import Results from './components/Results'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const glowRef = useRef({ x: 0, y: 0 })

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Smooth glow follow
  useEffect(() => {
    let animId
    const animate = () => {
      glowRef.current.x += (mousePos.x - glowRef.current.x) * 0.08
      glowRef.current.y += (mousePos.y - glowRef.current.y) * 0.08
      const el = document.getElementById('mouseGlow')
      if (el) {
        el.style.left = glowRef.current.x + 'px'
        el.style.top = glowRef.current.y + 'px'
      }
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [mousePos])

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="mouse-glow" id="mouseGlow" />
      <div className="grain-overlay" />

      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <FeaturedAnalytics />
        <Projects />
        <Workflow />
        <Results />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
