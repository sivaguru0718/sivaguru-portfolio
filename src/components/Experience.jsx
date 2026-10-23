import { useReveal } from '../hooks/useAnimations'

export default function Experience() {
  const [headerRef, headerRevealed] = useReveal()
  const [cardRef, cardRevealed] = useReveal(0.2)

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal-up ${headerRevealed ? 'revealed' : ''}`}>
          <span className="section-tag">Career</span>
          <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
        </div>

        <div className="timeline">
          <div className="timeline__line" />
          
          <div className="timeline__item">
            <div className="timeline__marker">
              <div className="timeline__dot" />
            </div>
            <div ref={cardRef} className={`timeline__card reveal-up ${cardRevealed ? 'revealed' : ''}`}>
              <div className="timeline__date">
                <span className="timeline__period">Dec 2024 — Jan 2025</span>
                <span className="timeline__location">Kizhur / Villupuram District, Tamil Nadu</span>
              </div>
              <h3 className="timeline__role">Regulatory Affairs Intern</h3>
              <span className="timeline__company">Wellous Pharma Private Limited</span>
              
              <ul className="timeline__responsibilities">
                <li>Coordinated regulatory affairs workflows, compliance documentation, and pharmaceutical product lifecycle management within a data governance framework.</li>
                <li>Managed license-handling documentation and organized regulatory submissions in alignment with industry standards and Good Clinical Practice (GCP) guidelines.</li>
                <li>Applied pharmaceutical compliance, data governance, and quality documentation standards to regulatory record-keeping relevant to data management.</li>
              </ul>
              
              <div className="timeline__tags">
                {['Regulatory Affairs', 'Data Governance', 'Compliance', 'GCP', 'Quality Documentation'].map(t => <span key={t} className="tech-tag tech-tag--sm">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
