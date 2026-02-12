import { useState, useEffect } from 'react'

const Navbar = ({ isAdmin, onAdminClick }) => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <a href="#" className="nav-logo">
                    HA<span>.</span>
                </a>

                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="nav-link">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    {isAdmin && (
                        <button
                            className="nav-cta"
                            onClick={onAdminClick}
                            style={{
                                background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                                fontSize: '0.8rem',
                                padding: '8px 16px'
                            }}
                        >
                            ⚙️ Admin
                        </button>
                    )}
                    <a href="#contact" className="nav-cta">
                        Let's Talk
                    </a>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
