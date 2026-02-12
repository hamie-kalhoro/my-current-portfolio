const experienceData = [
    {
        id: 1,
        title: 'Senior Backend Developer',
        company: 'Tech Solutions Inc.',
        date: '2022 - Present',
        description: [
            'Led development of microservices architecture serving 1M+ daily active users',
            'Reduced API response times by 60% through optimization and caching strategies',
            'Mentored junior developers and conducted code reviews',
            'Implemented CI/CD pipelines reducing deployment time by 80%',
        ],
    },
    {
        id: 2,
        title: 'Java Developer',
        company: 'Digital Innovations Ltd.',
        date: '2020 - 2022',
        description: [
            'Developed RESTful APIs for enterprise resource planning systems',
            'Designed and implemented database schemas for high-traffic applications',
            'Collaborated with cross-functional teams to deliver projects on time',
            'Integrated third-party payment gateways and authentication systems',
        ],
    },
    {
        id: 3,
        title: 'Software Engineer',
        company: 'StartupHub',
        date: '2018 - 2020',
        description: [
            'Built full-stack applications using Java/Spring Boot and React',
            'Implemented real-time features using WebSocket and Redis pub/sub',
            'Managed AWS infrastructure and deployment processes',
            'Participated in agile development and sprint planning',
        ],
    },
]

const Experience = () => {
    return (
        <section className="experience section" id="experience">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Career Path</span>
                    <h2 className="section-title">Work Experience</h2>
                    <p className="section-subtitle">
                        My professional journey building impactful software solutions
                    </p>
                </div>

                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <div key={item.id} className="timeline-item reveal" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-card">
                                <span className="timeline-date">{item.date}</span>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-company">{item.company}</p>
                                <div className="timeline-description">
                                    <ul>
                                        {item.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
