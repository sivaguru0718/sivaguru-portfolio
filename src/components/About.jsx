import { useReveal } from '../hooks/useAnimations'

export default function About() {
  const [headerRef, headerRevealed] = useReveal()
  const [contentRef, contentRevealed] = useReveal(0.2)

  return (
    <section className="about" id="about">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal-up ${headerRevealed ? 'revealed' : ''}`}>
          <span className="section-tag">Background</span>
          <h2 className="section-title">Beyond the <span className="gradient-text">Data</span></h2>
        </div>

        <div ref={contentRef} className={`about__content reveal-up ${contentRevealed ? 'revealed' : ''}`}>
          <div className="about__text">
            <h3 className="about__lead">From clinical pharmacy to data-driven decision making, my journey is defined by a passion for precision and insight.</h3>
            <p>With a foundation in Pharmacology (M.Pharm), I developed a meticulous approach to research, data validation, and clinical evaluation. However, my fascination with how data can solve complex problems led me to transition into Data Analytics.</p>
            <p>Today, I leverage tools like Python, SQL, and Power BI to transform messy, unstructured datasets into clear, actionable narratives. Whether it's analyzing 250,000+ patient records for risk stratification or building automated reporting pipelines, I bridge the gap between raw data and business strategy.</p>
            <p>I thrive at the intersection of domain knowledge and technical execution — ensuring that every dashboard I build and every query I write serves a tangible business purpose.</p>
          </div>
          
          <div className="about__highlights">
            <div className="about__highlight">
              <div className="about__highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4622a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
              </div>
              <div>
                <strong>Precision First</strong>
                <span>Rigorous data validation rooted in clinical research methodologies.</span>
              </div>
            </div>
            <div className="about__highlight">
              <div className="about__highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4622a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <strong>Business Value</strong>
                <span>Focusing on actionable insights that drive measurable outcomes.</span>
              </div>
            </div>
            <div className="about__highlight">
              <div className="about__highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4622a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <div>
                <strong>Continuous Learner</strong>
                <span>Always exploring new analytical frameworks and visualization techniques.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
