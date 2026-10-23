import { useReveal } from '../hooks/useAnimations'

export default function Skills() {
  const [headerRef, headerRevealed] = useReveal()
  const [gridRef, gridRevealed] = useReveal(0.2)

  const skillCategories = [
    {
      title: "Programming & Query",
      icon: <><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></>,
      skills: ["Python", "SQL", "MySQL", "R — Basic"]
    },
    {
      title: "Data Analytics",
      icon: <><path d="M3 3v18h18"/><path d="M18 9l-5 5-4-4-6 6"/></>,
      skills: ["Pandas", "NumPy", "Data Cleaning", "Data Validation", "Data Wrangling", "Feature Engineering", "Exploratory Data Analysis", "Statistical Analysis"]
    },
    {
      title: "Visualization & BI",
      icon: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
      skills: ["Power BI", "DAX", "Excel", "Dashboard Development", "KPI Reporting", "Data Visualization", "Business Intelligence"]
    },
    {
      title: "Tools & Quality",
      icon: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.4 0l-2.83-2.83a1 1 0 0 1 0-1.4l7.1-7.1a6 6 0 0 1 9.36-7.94z"/></>,
      skills: ["VS Code", "Jupyter Notebook", "Data Integrity", "Quality Assurance", "Problem Solving"]
    },
    {
      title: "Domain Expertise",
      icon: <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>,
      skills: ["Healthcare Analytics", "Risk Segmentation", "Clinical Data", "Utilization Analysis", "Patient Priority Scoring"]
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal-up ${headerRevealed ? 'revealed' : ''}`}>
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Technical <span className="gradient-text">Toolkit</span></h2>
        </div>

        <div ref={gridRef} className="skills__grid">
          {skillCategories.map((category, i) => (
            <div key={i} className={`skill-card reveal-up ${gridRevealed ? 'revealed' : ''}`} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="skill-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4622a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {category.icon}
                </svg>
              </div>
              <h3 className="skill-card__title">{category.title}</h3>
              <div className="skill-card__items">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
