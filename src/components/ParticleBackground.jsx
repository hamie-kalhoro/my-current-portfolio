import { useEffect, useRef } from 'react'

const ParticleBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId
        let particles = []
        let mouse = { x: null, y: null, radius: 150 }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Mouse tracking
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x
            mouse.y = e.y
        })

        window.addEventListener('mouseout', () => {
            mouse.x = null
            mouse.y = null
        })

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 3 + 1
                this.baseX = this.x
                this.baseY = this.y
                this.density = (Math.random() * 30) + 1
                this.speedX = (Math.random() - 0.5) * 0.5
                this.speedY = (Math.random() - 0.5) * 0.5
                this.color = this.getRandomColor()
            }

            getRandomColor() {
                const colors = [
                    'rgba(0, 245, 255, 0.8)',   // Cyan
                    'rgba(168, 85, 247, 0.7)',  // Purple
                    'rgba(59, 130, 246, 0.7)',  // Blue
                    'rgba(34, 197, 94, 0.5)',   // Green
                ]
                return colors[Math.floor(Math.random() * colors.length)]
            }

            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = this.color
                ctx.fill()

                // Glow effect
                ctx.shadowBlur = 15
                ctx.shadowColor = this.color
            }

            update() {
                // Mouse interaction
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x
                    let dy = mouse.y - this.y
                    let distance = Math.sqrt(dx * dx + dy * dy)
                    let forceDirectionX = dx / distance
                    let forceDirectionY = dy / distance
                    let maxDistance = mouse.radius
                    let force = (maxDistance - distance) / maxDistance
                    let directionX = forceDirectionX * force * this.density
                    let directionY = forceDirectionY * force * this.density

                    if (distance < mouse.radius) {
                        this.x -= directionX
                        this.y -= directionY
                    }
                }

                // Float movement
                this.x += this.speedX
                this.y += this.speedY

                // Boundary check with wrap-around
                if (this.x > canvas.width + 10) this.x = -10
                if (this.x < -10) this.x = canvas.width + 10
                if (this.y > canvas.height + 10) this.y = -10
                if (this.y < -10) this.y = canvas.height + 10

                this.draw()
            }
        }

        // Initialize particles
        const init = () => {
            particles = []
            const numberOfParticles = Math.min((canvas.width * canvas.height) / 12000, 150)
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle())
            }
        }

        // Draw connections between particles
        const connectParticles = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x
                    let dy = particles[a].y - particles[b].y
                    let distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 120) {
                        let opacity = 1 - (distance / 120)
                        ctx.strokeStyle = `rgba(0, 245, 255, ${opacity * 0.3})`
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(particles[a].x, particles[a].y)
                        ctx.lineTo(particles[b].x, particles[b].y)
                        ctx.stroke()
                    }
                }
            }
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw gradient background overlay
            const gradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, canvas.width / 2
            )
            gradient.addColorStop(0, 'rgba(0, 245, 255, 0.03)')
            gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.02)')
            gradient.addColorStop(1, 'transparent')
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            particles.forEach(particle => particle.update())
            connectParticles()

            animationFrameId = requestAnimationFrame(animate)
        }

        init()
        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return <canvas ref={canvasRef} id="particles-canvas" />
}

export default ParticleBackground
