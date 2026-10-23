import { useReveal } from '../hooks/useAnimations'

export default function Certifications() {
  const [headerRef, headerRevealed] = useReveal()

  const certs = [
    { title: "Google Advanced Data Analytics Specialization", issuer: "Google" },
    { title: "Microsoft Power BI Data Analyst Specialization", issuer: "Microsoft" },
    { title: "Data Visualization with Python", issuer: "IBM" },
    { title: "Generative AI Leader Specialization", issuer: "Google" },
    { title: "Clinical Trials Operations Specialization", issuer: "Johns Hopkins University" },
    { title: "GCP Certification", issuer: "NIDA" }
  ]

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal-up ${headerRevealed ? 'revealed' : ''}`}>
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Professional <span className="gradient-text">Certifications</span></h2>
        </div>

        <div className="certs__grid">
          {certs.map((cert, i) => {
            const [ref, revealed] = useReveal(0.2)
            return (
              <div key={i} ref={ref} className={`cert-card reveal-up ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="cert-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4622a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15l-3 3-3-3V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10l-3 3-3-3z"/><path d="M9 7h6"/><path d="M9 11h6"/>
                  </svg>
                </div>
                <h3 className="cert-card__title">{cert.title}</h3>
                <span className="cert-card__issuer">{cert.issuer}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
