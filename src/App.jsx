import { useState, useEffect } from 'react'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminPanel from './components/AdminPanel'

function App() {
    const [isAdmin, setIsAdmin] = useState(false)
    const [adminPanelOpen, setAdminPanelOpen] = useState(false)

    // Secret admin toggle (Ctrl + Shift + A)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'A') {
                setIsAdmin(prev => !prev)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Scroll reveal animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <ParticleBackground />
            <Navbar
                isAdmin={isAdmin}
                onAdminClick={() => setAdminPanelOpen(true)}
            />
            <main>
                <Hero />
                <Projects isAdmin={isAdmin} />
                <Skills />
                <Experience />
                <Contact />
            </main>
            <Footer />

            {isAdmin && (
                <>
                    <div
                        className={`admin-overlay ${adminPanelOpen ? 'visible' : ''}`}
                        onClick={() => setAdminPanelOpen(false)}
                    />
                    <AdminPanel
                        isOpen={adminPanelOpen}
                        onClose={() => setAdminPanelOpen(false)}
                    />
                </>
            )}
        </>
    )
}

export default App
