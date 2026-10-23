import { useReveal } from '../hooks/useAnimations'

export default function Workflow() {
  const [headerRef, headerRevealed] = useReveal()
  const steps = [
    { num: '01', title: 'Understand', desc: 'Understand the business or analytical question and identify the relevant data.', icon: <><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></> },
    { num: '02', title: 'Clean', desc: 'Perform data cleaning, validation, standardization, and transformation.', icon: <><path d="M4 7h16M4 12h16M4 17h10"/></> },
    { num: '03', title: 'Explore', desc: 'Perform exploratory data analysis and statistical analysis to identify patterns.', icon: <><path d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4V3"/><path d="m7 14 4-4 4 4 6-6"/></> },
    { num: '04', title: 'Engineer', desc: 'Create meaningful derived features for deeper analysis.', icon: <><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></> },
    { num: '05', title: 'Analyze', desc: 'Use SQL/MySQL and analytical techniques to identify relationships and risk patterns.', icon: <><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2" fill="#d4622a"/><circle cx="16" cy="12" r="2" fill="#d4622a"/><circle cx="10" cy="18" r="2" fill="#d4622a"/></> },
    { num: '06', title: 'Visualize', desc: 'Transform findings into Power BI dashboards, KPI reporting, and clear visualizations.', icon: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></> },
    { num: '07', title: 'Communicate', desc: 'Present decision-ready insights in a way that non-technical stakeholders can understand.', icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></> }
  ]

  return (
    <section className="workflow" id="workflow">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal-up ${headerRevealed ? 'revealed' : ''}`}>
          <span className="section-tag">Process</span>
          <h2 className="section-title">How I Work With <span className="gradient-text">Data</span></h2>
        </div>

        <div className="workflow__pipeline">
          <div className="workflow__line" />
          
          {steps.map((step, i) => {
            const [ref, revealed] = useReveal(0.2)
            return (
              <div key={i} ref={ref} className={`workflow__step reveal-up ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="workflow__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4622a" strokeWidth="1.5">
                    {step.icon}
                  </svg>
                </div>
                <div className="workflow__step-content">
                  <span className="workflow__step-num">{step.num}</span>
                  <h3 className="workflow__step-title">{step.title}</h3>
                  <p className="workflow__step-desc">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
