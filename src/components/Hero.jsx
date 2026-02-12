const Hero = () => {
    return (
        <section className="hero section" id="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge animate-fade-in-up">
                        <span>Available for opportunities</span>
                    </div>

                    <h1 className="hero-title animate-fade-in-up animate-delay-1">
                        Hi, I'm <span className="highlight">Hamid Ali</span><br />
                        Java Backend Developer
                    </h1>

                    <p className="hero-subtitle animate-fade-in-up animate-delay-2">
                        Crafting robust, scalable backend systems with Java, Spring Boot, and cloud technologies.
                        Passionate about clean code, microservices architecture, and building solutions that make a difference.
                    </p>

                    <div className="hero-buttons animate-fade-in-up animate-delay-3">
                        <a href="#projects" className="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                            View Projects
                        </a>
                        <a href="/resume.pdf" className="btn btn-secondary" target="_blank">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download CV
                        </a>
                    </div>

                    <div className="hero-stats animate-fade-in-up animate-delay-4">
                        <div className="stat">
                            <div className="stat-value">5+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">30+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">15+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                    </div>
                </div>

                <div className="hero-glow"></div>
            </div>
        </section>
    )
}

export default Hero
