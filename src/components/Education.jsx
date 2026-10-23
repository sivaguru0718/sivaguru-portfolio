import { useReveal } from '../hooks/useAnimations'

export default function Education() {
  const [headerRef, headerRevealed] = useReveal()

  const education = [
    {
      degree: "Master of Pharmacy (M.Pharm)",
      specialization: "Pharmacology",
      institution: "PSG College of Pharmacy, Coimbatore",
      year: "2025 — 2027 (Expected)",
      score: "CGPA: 8.53"
    },
    {
      degree: "Bachelor of Pharmacy (B.Pharm)",
      specialization: "Pharmacy",
      institution: "Sri Ramakrishna Institute of Paramedical Sciences College of Pharmacy, Coimbatore",
      year: "2021 — 2025",
      score: "CGPA: 8.41"
    },
    {
      degree: "Higher Secondary (HSC)",
      specialization: "Science",
      institution: "St. Joseph's Matriculation Higher Secondary School",
      year: "2019 — 2020",
      score: "Percentage: 74%"
    }
  ]

  return (
    <section className="education" id="education">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal-up ${headerRevealed ? 'revealed' : ''}`}>
          <span className="section-tag">Academic</span>
          <h2 className="section-title">Education <span className="gradient-text">Background</span></h2>
        </div>

        <div className="education__grid">
          {education.map((edu, i) => {
            const [ref, revealed] = useReveal(0.2)
            return (
              <div key={i} ref={ref} className={`edu-card reveal-up ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <span className="edu-card__badge">{i === 0 ? 'EXPECTED' : 'GRADUATED'}</span>
                <h3 className="edu-card__degree">{edu.degree}</h3>
                <span className="edu-card__specialization">{edu.specialization}</span>
                <span className="edu-card__institution">{edu.institution}</span>
                <div className="edu-card__meta">
                  <span className="edu-card__year">{edu.year}</span>
                  <span className="edu-card__score">{edu.score}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
