import { useEffect, useRef } from 'react'
import { useReveal, useCountUp } from '../hooks/useAnimations'

function StatCounter({ target, suffix, label, start }) {
  const value = useCountUp(target, 2000, start)
  return (
    <div className="hero__stat">
      <span className="hero__stat-number">{value.toLocaleString()}{suffix}</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  )
}

function PanelKpiCounter({ target, label, changeTxt, changeType, start }) {
  const value = useCountUp(target, 2000, start)
  return (
    <div className="panel-kpi">
      <span className="panel-kpi__label">{label}</span>
      <span className="panel-kpi__value">{value.toLocaleString()}</span>
      <span className={`panel-kpi__change ${changeType}`}>{changeTxt}</span>
    </div>
  )
}

export default function Hero() {
  const canvasRef = useRef(null)
  const panelRef = useRef(null)
  const [statsRef, statsRevealed] = useReveal(0.3)
  const [panelRevRef, panelRevealed] = useReveal(0.2)
  const [badgeRef, badgeRevealed] = useReveal()
  const [titleRef, titleRevealed] = useReveal()
  const [subRef, subRevealed] = useReveal()
  const [btnsRef, btnsRevealed] = useReveal()

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let particles = []
    const count = 60
    const connDist = 150
    let w, h, animId

    const resize = () => {
      w = canvas.parentElement.offsetWidth
      h = canvas.parentElement.offsetHeight
      canvas.width = w
      canvas.height = h
    }

    const init = () => {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5,
        o: Math.random() * 0.4 + 0.1,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < connDist) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(212,98,42,${(1 - d / connDist) * 0.15})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,98,42,${p.o})`
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()
    const onResize = () => { resize(); init() }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])

  // Panel chart animations
  useEffect(() => {
    if (!panelRevealed || !panelRef.current) return
    const el = panelRef.current
    el.querySelectorAll('.line-chart__line, .line-chart__area, .line-chart__dot').forEach(e => e.classList.add('animated'))
    el.querySelectorAll('.bar-chart__bar').forEach((b, i) => setTimeout(() => b.classList.add('animated'), i * 100))
    el.querySelectorAll('.panel-risk__fill').forEach(f => setTimeout(() => { f.style.width = f.dataset.width + '%' }, 500))
  }, [panelRevealed])

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      const content = document.querySelector('.hero__content')
      const panel = document.querySelector('.hero__panel')
      if (content && y < window.innerHeight) {
        content.style.transform = `translateY(${y * 0.1}px)`
        content.style.opacity = 1 - y / (window.innerHeight * 0.8)
      }
      if (panel && y < window.innerHeight) {
        panel.style.transform = `translateY(${y * 0.15}px)`
        panel.style.opacity = 1 - y / (window.innerHeight * 0.7)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero">
      <canvas className="hero__canvas" ref={canvasRef} />
      <div className="hero__grid-bg" />

      <div className="hero__inner container">
        <div className="hero__content">
          <div ref={badgeRef} className={`hero__badge reveal-up ${badgeRevealed ? 'revealed' : ''}`}>
            <span className="hero__badge-dot" />
            Available for Opportunities
          </div>

          <h1 ref={titleRef} className={`hero__title reveal-up ${titleRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.15s' }}>
            I Turn Complex Data Into<br />
            <span className="gradient-text">Clear, Actionable Insights.</span>
          </h1>

          <p ref={subRef} className={`hero__subtitle reveal-up ${subRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.3s' }}>
            Data Analyst skilled in Python, SQL, MySQL, Power BI, and Excel — specializing in data cleaning, validation, wrangling, feature engineering, EDA, and dashboard development.
          </p>

          <div ref={btnsRef} className={`hero__buttons reveal-up ${btnsRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.45s' }}>
            <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="btn btn--outline" onClick={() => scrollTo('contact')}>
              <span>Let's Connect</span>
            </button>
          </div>

          <div ref={statsRef} className={`hero__stats reveal-up ${statsRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.6s' }}>
            <StatCounter target={253} suffix="K+" label="Records Analyzed" start={statsRevealed} />
            <StatCounter target={18} suffix="K+" label="Patient Records" start={statsRevealed} />
            <StatCounter target={5} suffix="+" label="Analytical Projects" start={statsRevealed} />
            <StatCounter target={2} suffix="" label="Power BI Dashboards" start={statsRevealed} />
          </div>
        </div>

        <div ref={panelRevRef} className={`hero__panel reveal-up ${panelRevealed ? 'revealed' : ''}`}>
          <div className="analytics-panel" ref={panelRef}>
            <div className="panel-header">
              <div className="panel-header__left">
                <span className="panel-dot" />
                <span className="panel-title">Analytics Overview</span>
              </div>
              <span className="panel-status">● Live</span>
            </div>

            <div className="panel-kpis">
              <PanelKpiCounter target={253680} label="Total Records" changeTxt="+12.4%" changeType="positive" start={panelRevealed} />
              <PanelKpiCounter target={18000} label="Patient Cohort" changeTxt="Active" changeType="positive" start={panelRevealed} />
              <div className="panel-kpi">
                <span className="panel-kpi__label">Readmission Rate</span>
                <span className="panel-kpi__value panel-kpi__value--accent">77.51<span className="panel-kpi__unit">%</span></span>
                <span className="panel-kpi__change negative">High Risk</span>
              </div>
              <PanelKpiCounter target={9} label="Features Engineered" changeTxt="Derived" changeType="positive" start={panelRevealed} />
            </div>

            <div className="panel-charts">
              <div className="panel-chart">
                <span className="panel-chart__label">Trend Analysis</span>
                <svg className="line-chart" viewBox="0 0 240 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d4622a" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#d4622a" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path className="line-chart__area" d="M0,65 Q30,55 60,50 T120,30 T180,35 T240,15 L240,80 L0,80Z" fill="url(#lg1)"/>
                  <path className="line-chart__line" d="M0,65 Q30,55 60,50 T120,30 T180,35 T240,15" fill="none" stroke="#d4622a" strokeWidth="2"/>
                  <circle className="line-chart__dot" cx="240" cy="15" r="3" fill="#d4622a"/>
                </svg>
              </div>
              <div className="panel-chart">
                <span className="panel-chart__label">Risk Distribution</span>
                <svg className="bar-chart" viewBox="0 0 240 80" preserveAspectRatio="none">
                  {[{x:10,y:45,h:35,o:.4},{x:42,y:25,h:55,o:.6},{x:74,y:35,h:45,o:.5},{x:106,y:10,h:70,o:.9},{x:138,y:20,h:60,o:.7},{x:170,y:40,h:40,o:.45},{x:202,y:15,h:65,o:.8}].map((b,i) => (
                    <rect key={i} className="bar-chart__bar" x={b.x} y={b.y} width="24" height={b.h} rx="3" fill="#d4622a" opacity={b.o}/>
                  ))}
                </svg>
              </div>
            </div>

            <div className="panel-risk">
              <div className="panel-risk__row">
                <span className="panel-risk__label">High Utilization</span>
                <div className="panel-risk__bar">
                  <div className="panel-risk__fill panel-risk__fill--high" data-width="77.51"><span>77.51%</span></div>
                </div>
              </div>
              <div className="panel-risk__row">
                <span className="panel-risk__label">Low Utilization</span>
                <div className="panel-risk__bar">
                  <div className="panel-risk__fill panel-risk__fill--low" data-width="71.57"><span>71.57%</span></div>
                </div>
              </div>
            </div>

            <div className="panel-footer">
              {['Python','SQL','Power BI','MySQL'].map(t => <span key={t} className="panel-tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
