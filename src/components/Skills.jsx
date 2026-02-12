const skillsData = [
    {
        category: 'Backend Development',
        icon: '⚡',
        skills: [
            { name: 'Java', icon: '☕' },
            { name: 'Spring Boot', icon: '🍃' },
            { name: 'Spring MVC', icon: '🌐' },
            { name: 'Spring Security', icon: '🔒' },
            { name: 'Hibernate', icon: '💾' },
            { name: 'Node.js', icon: '💚' },
        ],
    },
    {
        category: 'Database & Storage',
        icon: '🗄️',
        skills: [
            { name: 'PostgreSQL', icon: '🐘' },
            { name: 'MySQL', icon: '🐬' },
            { name: 'MongoDB', icon: '🍃' },
            { name: 'Redis', icon: '⚡' },
            { name: 'Elasticsearch', icon: '🔍' },
        ],
    },
    {
        category: 'DevOps & Cloud',
        icon: '☁️',
        skills: [
            { name: 'Docker', icon: '🐳' },
            { name: 'Kubernetes', icon: '☸️' },
            { name: 'AWS', icon: '☁️' },
            { name: 'CI/CD', icon: '🔄' },
            { name: 'Jenkins', icon: '🔧' },
            { name: 'Git', icon: '📦' },
        ],
    },
    {
        category: 'Architecture & Tools',
        icon: '🏗️',
        skills: [
            { name: 'Microservices', icon: '🔗' },
            { name: 'REST API', icon: '🌐' },
            { name: 'GraphQL', icon: '◈' },
            { name: 'Kafka', icon: '📨' },
            { name: 'RabbitMQ', icon: '🐰' },
            { name: 'gRPC', icon: '⚙️' },
        ],
    },
]

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Expertise</span>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">
                        Technologies I work with to build scalable, high-performance applications
                    </p>
                </div>

                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div key={category.category} className="skill-category glass-card reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                            <h3 className="skill-category-title">
                                <span className="skill-category-icon">{category.icon}</span>
                                {category.category}
                            </h3>
                            <div className="skill-list">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="skill-item">
                                        <span>{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
