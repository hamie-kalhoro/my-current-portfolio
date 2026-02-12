import { useState } from 'react'

const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Microservices Platform',
        description: 'Scalable e-commerce backend with microservices architecture, handling 10K+ concurrent users with 99.9% uptime.',
        image: '/projects/ecommerce.jpg',
        tags: ['Java', 'Spring Boot', 'Kafka', 'Docker', 'Kubernetes'],
        github: 'https://github.com/hamidali',
        demo: '#',
    },
    {
        id: 2,
        title: 'Real-time Chat Application',
        description: 'WebSocket-based chat system with end-to-end encryption, supporting group chats and file sharing.',
        image: '/projects/chat.jpg',
        tags: ['Node.js', 'Socket.io', 'MongoDB', 'Redis'],
        github: 'https://github.com/hamidali',
        demo: '#',
    },
    {
        id: 3,
        title: 'Payment Gateway Integration',
        description: 'Secure payment processing system integrated with Stripe and PayPal, handling $1M+ transactions monthly.',
        image: '/projects/payment.jpg',
        tags: ['Java', 'Spring Security', 'PostgreSQL', 'REST API'],
        github: 'https://github.com/hamidali',
        demo: '#',
    },
    {
        id: 4,
        title: 'Task Management System',
        description: 'Enterprise task management with real-time collaboration, Kanban boards, and analytics dashboard.',
        image: '/projects/task.jpg',
        tags: ['Spring Boot', 'React', 'MySQL', 'Docker'],
        github: 'https://github.com/hamidali',
        demo: '#',
    },
]

const ProjectCard = ({ project, isAdmin }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)

    return (
        <div className="project-card glass-card reveal">
            <div className={`project-image ${!imageLoaded ? 'loading' : ''}`}>
                {!imageError ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(168, 85, 247, 0.2))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem'
                    }}>
                        💻
                    </div>
                )}
                <div className="project-overlay">
                    <div className="project-links">
                        <a href={project.github} className="btn btn-secondary" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                        <a href={project.demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                    {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
                {isAdmin && (
                    <button
                        className="btn btn-secondary"
                        style={{ marginTop: '16px', padding: '8px 16px', fontSize: '0.85rem' }}
                    >
                        ✏️ Edit Project
                    </button>
                )}
            </div>
        </div>
    )
}

const Projects = ({ isAdmin }) => {
    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Portfolio</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A selection of my recent work showcasing backend excellence and full-stack capabilities
                    </p>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} isAdmin={isAdmin} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
