export default function TechMarquee() {
  const techs = [
    'Python', 'SQL', 'MySQL', 'Power BI', 'Excel',
    'Pandas', 'NumPy', 'DAX', 'Data Cleaning',
    'EDA', 'Feature Engineering', 'Data Visualization'
  ]

  return (
    <section className="marquee" id="techMarquee">
      <div className="marquee__track">
        <div className="marquee__content">
          {techs.map((tech, i) => (
            <span key={`t1-${i}`} style={{ display: 'contents' }}>
              <span className="marquee__item">{tech}</span>
              <span className="marquee__dot" />
            </span>
          ))}
        </div>
        <div className="marquee__content" aria-hidden="true">
          {techs.map((tech, i) => (
            <span key={`t2-${i}`} style={{ display: 'contents' }}>
              <span className="marquee__item">{tech}</span>
              <span className="marquee__dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
