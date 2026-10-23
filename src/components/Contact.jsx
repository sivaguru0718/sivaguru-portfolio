import { useState } from 'react'
import { useReveal } from '../hooks/useAnimations'

export default function Contact() {
  const [headerRef, headerRevealed] = useReveal()
  const [contentRef, contentRevealed] = useReveal(0.2)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target)
    // IMPORTANT: Get your free access key from https://web3forms.com/ and replace 'YOUR_ACCESS_KEY_HERE'
    formData.append("access_key", "40ee1171-4ede-4896-acd3-908afc8cbfb9")
    
    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      })
      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
      } else {
        console.error("Form submission failed", data)
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form", error)
      alert("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal-up ${headerRevealed ? 'revealed' : ''}`}>
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Start a <span className="gradient-text">Conversation</span></h2>
        </div>

        <div ref={contentRef} className={`contact__content reveal-up ${contentRevealed ? 'revealed' : ''}`}>
          {!isSuccess && (
            <div className="contact__info">
              <div className="contact__info-card">
                <div className="contact__info-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4622a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  <div>
                    <span className="contact__info-label">Email</span>
                    <a href="mailto:sivaguru0718@gmail.com" className="contact__info-value">sivaguru0718@gmail.com</a>
                  </div>
                </div>
                <div className="contact__info-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4622a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <div>
                    <span className="contact__info-label">Phone</span>
                    <a href="tel:+918680830645" className="contact__info-value">+91 86808 30645</a>
                  </div>
                </div>
                <div className="contact__info-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4622a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <div>
                    <span className="contact__info-label">Location</span>
                    <span className="contact__info-value">Coimbatore, Tamil Nadu (Any Location / Flexible)</span>
                  </div>
                </div>
              </div>

              <div className="contact__social">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="https://github.com/sivaguru0718" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>
            </div>
          )}

          {!isSuccess ? (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="form-input" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="form-input" required placeholder="john@example.com" />
              </div>
              <div className="form-group form-group--full">
                <label className="form-label" htmlFor="subject">Subject</label>
                <select id="subject" name="subject" className="form-input form-select" required defaultValue="">
                  <option value="" disabled>Select a subject...</option>
                  <option value="opportunity">Job Opportunity</option>
                  <option value="project">Project Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group form-group--full">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-input form-textarea" required placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
              </button>
            </form>
          ) : (
            <div className="contact__success show">
              <div className="contact__success-icon">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="30" stroke="#34d399" strokeWidth="4" />
                  <path d="M18 32l10 10 20-20" stroke="#34d399" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="contact__success-title">Message Sent!</h3>
              <p className="contact__success-desc">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
