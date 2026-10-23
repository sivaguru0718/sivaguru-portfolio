import { useReveal, useCountUp } from '../hooks/useAnimations'

function ResultCard({ target, suffix, label, delay }) {
  const [ref, revealed] = useReveal(0.3)
  const value = useCountUp(target, 2000, revealed)

  return (
    <div ref={ref} className={`result-card reveal-up ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <span className="result-card__value">{value.toLocaleString()}{suffix}</span>
      <span className="result-card__label">{label}</span>
    </div>
  )
}

export default function Results() {
  return (
    <section className="results" id="results">
      <div className="container">
        <div className="results__grid">
          <ResultCard target={253680} suffix="+" label="Total Records Analyzed" delay={0.1} />
          <ResultCard target={5} suffix="+" label="Analytical Projects Delivered" delay={0.2} />
          <ResultCard target={15} suffix="+" label="EDA Visualizations Created" delay={0.3} />
          <ResultCard target={9} suffix="+" label="Complex Dashboard Pages" delay={0.4} />
          <ResultCard target={6} suffix="" label="Iterative Feature Refinements" delay={0.5} />
          <ResultCard target={3} suffix="+" label="Advanced Technical Skills" delay={0.6} />
        </div>
      </div>
    </section>
  )
}
