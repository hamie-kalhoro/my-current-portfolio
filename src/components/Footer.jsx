const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: '🐙', href: 'https://github.com/hamidali', label: 'GitHub' },
        { icon: '💼', href: 'https://linkedin.com/in/hamidali', label: 'LinkedIn' },
        { icon: '🐦', href: 'https://twitter.com/hamidali', label: 'Twitter' },
    ]

    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="footer-text">
                    © {currentYear} Hamid Ali. Built with ❤️ and lots of ☕
                </p>

                <div className="footer-socials">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            className="social-link"
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
