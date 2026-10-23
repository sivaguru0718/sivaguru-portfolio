import { useReveal } from '../hooks/useAnimations'

export default function Projects() {
  const [headerRef, headerRevealed] = useReveal()
  const [p1Ref, p1Revealed] = useReveal(0.2)
  const [p2Ref, p2Revealed] = useReveal(0.2)

  return (
    <section className="projects" id="projects">
      <style>{`
        .proj-viz { width: 100%; height: 100%; }
        .data-line { stroke-dasharray: 600; stroke-dashoffset: 600; transition: stroke-dashoffset 2s ease-out; }
        .project-card:hover .data-line { stroke-dashoffset: 0; }
        .data-point { transform: scale(0); transform-origin: center; transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .project-card:hover .data-point { transform: scale(1); }
        .bar-group rect { transform: scaleY(0); transform-origin: bottom; transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .project-card:hover .bar-group rect { transform: scaleY(1); }
      `}</style>

      <div className="container">
        <div ref={headerRef} className={`section-header reveal-up ${headerRevealed ? 'revealed' : ''}`}>
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Data Analytics <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">Real-world analytical workflows involving data cleaning, transformation, feature engineering, SQL analysis, EDA, and Power BI visualization.</p>
        </div>

        <div className="projects__grid">
          {/* Project 1 */}
          <article ref={p1Ref} className={`project-card reveal-up ${p1Revealed ? 'revealed' : ''}`}>
            <div className="project-card__visual">
              <div className="project-card__chart">
                <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="proj-viz">
                  <defs>
                    <linearGradient id="proj1-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d4622a" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#d4622a" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  <path d="M0,30 L300,30 M0,60 L300,60 M0,90 L300,90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Data Area */}
                  <path d="M0,100 Q40,90 80,60 T160,40 T240,50 T300,20 L300,120 L0,120 Z" fill="url(#proj1-grad)" />
                  
                  {/* Data Line */}
                  <path d="M0,100 Q40,90 80,60 T160,40 T240,50 T300,20" fill="none" stroke="#d4622a" strokeWidth="3" className="data-line" />
                  
                  {/* Data Points */}
                  <circle cx="80" cy="60" r="4" fill="#f0883e" className="data-point" style={{ transitionDelay: '0.4s' }} />
                  <circle cx="160" cy="40" r="4" fill="#f0883e" className="data-point" style={{ transitionDelay: '0.8s' }} />
                  <circle cx="240" cy="50" r="4" fill="#f0883e" className="data-point" style={{ transitionDelay: '1.2s' }} />
                  <circle cx="300" cy="20" r="4" fill="#f0883e" className="data-point" style={{ transitionDelay: '1.6s' }} />
                </svg>
              </div>
              <div className="project-card__metric">
                <span className="project-card__metric-value">18K+</span>
                <span className="project-card__metric-label">Patient Records</span>
              </div>
            </div>
            <div className="project-card__body">
              <span className="project-card__category">Healthcare Analytics</span>
              <h3 className="project-card__title">Clinical Readmission Risk Analytics</h3>
              <p className="project-card__desc">Consolidated and prepared 18,000+ patient records, engineered nine derived features, and built a SQL analytical layer in MySQL. Developed a 5-page Power BI dashboard surfacing a 77.51% 30-day readmission rate for high-utilization patients.</p>
              <div className="project-card__techs">
                {['Python', 'SQL', 'MySQL', 'Power BI'].map(t => <span key={t} className="tech-tag tech-tag--sm">{t}</span>)}
              </div>
              <div className="project-card__highlights">
                {['9 Engineered Features', '5-Page Dashboard', 'Risk Segmentation'].map(h => <span key={h} className="project-card__highlight">{h}</span>)}
              </div>
              <div className="project-card__actions">
                <a href="https://github.com/sivaguru0718/Clinical-Readmission-Risk-Analytics" target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article ref={p2Ref} className={`project-card reveal-up ${p2Revealed ? 'revealed' : ''}`}>
            <div className="project-card__visual">
              <div className="project-card__chart">
                <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="proj-viz">
                  {/* Grid lines */}
                  <path d="M0,30 L300,30 M0,60 L300,60 M0,90 L300,90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                  
                  <g className="bar-group">
                    {/* Group 1 */}
                    <rect x="30" y="50" width="16" height="70" fill="#d4622a" opacity="0.9" rx="2" style={{ transitionDelay: '0.1s' }} />
                    <rect x="52" y="30" width="16" height="90" fill="#f0883e" opacity="0.7" rx="2" style={{ transitionDelay: '0.15s' }} />
                    
                    {/* Group 2 */}
                    <rect x="100" y="60" width="16" height="60" fill="#d4622a" opacity="0.9" rx="2" style={{ transitionDelay: '0.2s' }} />
                    <rect x="122" y="20" width="16" height="100" fill="#f0883e" opacity="0.7" rx="2" style={{ transitionDelay: '0.25s' }} />
                    
                    {/* Group 3 */}
                    <rect x="170" y="40" width="16" height="80" fill="#d4622a" opacity="0.9" rx="2" style={{ transitionDelay: '0.3s' }} />
                    <rect x="192" y="50" width="16" height="70" fill="#f0883e" opacity="0.7" rx="2" style={{ transitionDelay: '0.35s' }} />
                    
                    {/* Group 4 */}
                    <rect x="240" y="70" width="16" height="50" fill="#d4622a" opacity="0.9" rx="2" style={{ transitionDelay: '0.4s' }} />
                    <rect x="262" y="40" width="16" height="80" fill="#f0883e" opacity="0.7" rx="2" style={{ transitionDelay: '0.45s' }} />
                  </g>
                </svg>
              </div>
              <div className="project-card__metric">
                <span className="project-card__metric-value">253K+</span>
                <span className="project-card__metric-label">Records Processed</span>
              </div>
            </div>
            <div className="project-card__body">
              <span className="project-card__category">Healthcare Analytics</span>
              <h3 className="project-card__title">Healthcare Risk Analytics — Diabetes & Stroke</h3>
              <p className="project-card__desc">Standardized 253,680 diabetes records and 5,110 stroke records. Constructed features through six iterative refinement cycles, created SQL transformation queries, and conducted 15 EDA visualizations with a 4-page Power BI dashboard.</p>
              <div className="project-card__techs">
                {['Python', 'SQL', 'Power BI'].map(t => <span key={t} className="tech-tag tech-tag--sm">{t}</span>)}
              </div>
              <div className="project-card__highlights">
                {['253K+ Records', '15 EDA Visuals', '4-Page Dashboard'].map(h => <span key={h} className="project-card__highlight">{h}</span>)}
              </div>
              <div className="project-card__actions">
                <a href="https://github.com/sivaguru0718/healthcare-risk-analytics" target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
