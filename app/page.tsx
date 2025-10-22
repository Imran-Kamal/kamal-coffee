'use client'
// (keep 'use client' here if you have it)
import EmailSignup from '@/components/EmailSignup'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for in-page anchors
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href') || ''
        if (!href.startsWith('#')) return
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
      })
    })

    // Fade-in on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    document.querySelectorAll('.fade-in').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Parallax / micro motion on hero can
  useEffect(() => {
    const img = document.getElementById('hero-can') as HTMLImageElement | null
    if (!img) return
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8
      const y = (e.clientY / window.innerHeight - 0.5) * 8
      img.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.2}deg)`
    }
    const onLeave = () => {
      img.style.transform = `translate(0,0) rotate(0deg)`
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <main>
      {/* NAV */}
      <nav>
        <div className="nav-container">
          <div className="logo">KAMAL</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/story">Our Story</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <a href="/shop" className="cta-button">Shop Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-tagline">AUTHENTIC • SMOOTH • ELEVATED</div>
            <h1>Vietnamese Iced Coffee, Reimagined</h1>
            <p className="hero-description">
              The bold, nostalgic flavor of cà phê sữa đá — reimagined with oat milk
              and naturally sweetened with allulose. Smooth, modern, and beautifully simple.
            </p>
            <div className="hero-buttons">
              <a className="primary-btn" href="/shop">Order Now</a>
              <a className="secondary-btn" href="/story">Learn More</a>
            </div>
          </div>
          <div className="hero-image">
            <img
              id="hero-can"
              width={400}
              height={600}
              src={"/images/kamal%20coffee%20simple%20image%20first%20sketch%20front%20of%20can.jpeg"}
              alt="Kamal Coffee can"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <h2 className="section-title">Why Kamal Coffee?</h2>
        <div className="features-grid">
          <div className="feature-card fade-in">
            <div className="feature-icon">🌱</div>
            <h3>Plant-Based Bliss</h3>
            <p>Our condensed milk is crafted with premium oat milk—creamy, dairy-free, and kind to your body.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">🍃</div>
            <h3>Naturally Sweetened</h3>
            <p>Allulose delivers sweetness without the sugar crash. Bold flavor, guilt-free indulgence.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">☕</div>
            <h3>Authentic Taste</h3>
            <p>Made with Vietnamese robusta beans—true to tradition, elevated for today.</p>
          </div>
        </div>
      </section>

      {/* FOLLOW US */}
      <section className="follow">
        <div className="follow-container">
          <h2 className="section-title">Follow Us</h2>
          <p className="follow-sub">New drops, behind-the-scenes, and more.</p>
          <div className="social-row">
            <a className="social-pill" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            <a className="social-pill" href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TikTok</a>
            <a className="social-pill" href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </section>

      {/* ABOUT (teaser) */}
      <section className="about" id="about">
        <div className="about-container">
          <h2>Our Story</h2>
          <div className="lotus">🪷</div>
          <p>Born from a love of Vietnamese coffee culture and a desire to make it accessible for modern lifestyles.</p>
          <p>Kamal is our ode to cà phê sữa đá—crafted with oat milk and allulose so you get everything you love, with nothing you don’t.</p>
          <p><a className="secondary-btn" href="/story">Read the full story</a></p>
        </div>
      </section>
{/* Email signup */}
<EmailSignup />

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <div className="social-links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">📷</a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">🎵</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">▶️</a>
          </div>
          <p>© {new Date().getFullYear()} Kamal Coffee. All rights reserved.</p>
          <p>Made with allulose 🍃</p>
        </div>
      </footer>
    </main>
  )
}
