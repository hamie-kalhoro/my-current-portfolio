import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })

        setTimeout(() => setSubmitted(false), 5000)
    }

    const contactLinks = [
        {
            icon: '✉️',
            label: 'Email',
            value: 'hamid.ali@example.com',
            href: 'mailto:hamid.ali@example.com',
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'linkedin.com/in/hamidali',
            href: 'https://linkedin.com/in/hamidali',
        },
        {
            icon: '🐙',
            label: 'GitHub',
            value: 'github.com/hamidali',
            href: 'https://github.com/hamidali',
        },
        {
            icon: '📍',
            label: 'Location',
            value: 'Available Worldwide',
            href: '#',
        },
    ]

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">Let's Work Together</h2>
                    <p className="section-subtitle">
                        Have a project in mind? Let's discuss how I can help bring your ideas to life
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info reveal">
                        <h3>Contact Information</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas,
                            or opportunities to be part of your vision. Feel free to reach out!
                        </p>
                        <div className="contact-links">
                            {contactLinks.map((link) => (
                                <a key={link.label} href={link.href} className="contact-link" target="_blank" rel="noreferrer">
                                    <span className="contact-link-icon">{link.icon}</span>
                                    <div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{link.label}</div>
                                        <div style={{ fontWeight: '500' }}>{link.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <form className="contact-form glass-card reveal" onSubmit={handleSubmit}>
                        {submitted && (
                            <div style={{
                                padding: '16px',
                                background: 'rgba(34, 197, 94, 0.1)',
                                border: '1px solid rgba(34, 197, 94, 0.3)',
                                borderRadius: '12px',
                                marginBottom: '24px',
                                color: '#22c55e',
                                textAlign: 'center'
                            }}>
                                ✅ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="form-input"
                                placeholder="Project Inquiry"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="form-submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <span className="spinner" style={{
                                        display: 'inline-block',
                                        width: '16px',
                                        height: '16px',
                                        border: '2px solid transparent',
                                        borderTopColor: 'currentColor',
                                        borderRadius: '50%',
                                        animation: 'spin 0.8s linear infinite',
                                        marginRight: '8px'
                                    }}></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}>
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </section>
    )
}

export default Contact
