import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useAnimations'

export default function FeaturedAnalytics() {
  const [headerRef, headerRevealed] = useReveal()
  const [cardRef, cardRevealed] = useReveal(0.2)

  useEffect(() => {
    if (!cardRevealed || !cardRef.current) return
    const fills = cardRef.current.querySelectorAll('.featured__bar-fill')
    fills.forEach((fill, i) => {
      setTimeout(() => {
        fill.style.width = fill.dataset.width + '%'
      }, 300 + i * 300)
    })
  }, [cardRevealed])

  return (
    <section className="featured" id="featured">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal-up ${headerRevealed ? 'revealed' : ''}`}>
          <span className="section-tag">Case Study</span>
          <h2 className="section-title">Featured <span className="gradient-text">Analytics</span></h2>
        </div>

        <div ref={cardRef} className={`featured__card reveal-up ${cardRevealed ? 'revealed' : ''}`}>
          <div className="featured__visual">
            <div className="featured__viz">
              <div className="featured__viz-header">
                <span className="featured__viz-title">30-Day Readmission Risk Comparison</span>
                <span className="featured__viz-badge">Key Finding</span>
              </div>
              
              <div className="featured__bars">
                <div className="featured__bar-group">
                  <div className="featured__bar-label">High Utilization Patients</div>
                  <div className="featured__bar-track">
                    <div className="featured__bar-fill featured__bar-fill--high" data-width="77.51">
                      <span className="featured__bar-value">77.51%</span>
                    </div>
                  </div>
                </div>
                <div className="featured__bar-group">
                  <div className="featured__bar-label">Low Utilization Patients</div>
                  <div className="featured__bar-track">
                    <div className="featured__bar-fill featured__bar-fill--low" data-width="71.57">
                      <span className="featured__bar-value">71.57%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="featured__data-points">
                {[
                  { v: '18,000+', l: 'Patient Records' },
                  { v: '9', l: 'Engineered Features' },
                  { v: '5', l: 'Dashboard Pages' },
                  { v: 'SQL', l: 'Analytical Layer' }
                ].map((dp, i) => (
                  <div key={i} className="featured__data-point">
                    <span className="featured__dp-value">{dp.v}</span>
                    <span className="featured__dp-label">{dp.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="featured__info">
            <span className="featured__category">Healthcare Analytics</span>
            <h3 className="featured__title">Clinical Readmission Risk Analytics</h3>
            <p className="featured__desc">
              An end-to-end analytical workflow on 18,000+ patient records encompassing demographics, admission type, diagnosis, comorbidity, medication adherence, and 30-day readmission status. Includes feature engineering, SQL analytical layer, and a 5-page Power BI dashboard for risk segmentation and patient prioritization.
            </p>
            <div className="featured__techs">
              {['Python', 'SQL', 'MySQL', 'Power BI'].map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
            <div className="featured__actions">
              <a href="https://github.com/sivaguru0718/Clinical-Readmission-Risk-Analytics" target="_blank" rel="noopener noreferrer" className="btn btn--primary magnetic">
                <span>Explore Case Study</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://github.com/sivaguru0718/Clinical-Readmission-Risk-Analytics" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
