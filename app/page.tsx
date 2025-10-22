'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null)
  const tiltRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Smooth scrolling for nav links
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => {
      const onClick = (e: Event) => {
        e.preventDefault()
        const target = document.querySelector(a.getAttribute('href') || '')
        if (target) target.scrollIntoView({ behavior: 'smooth' })
      }
      a.addEventListener('click', onClick)
    })

    // Fade-in on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    document.querySelectorAll('.fade-in').forEach(el => io.observe(el))

    // Parallax tilt on mouse move over the hero
    const el = tiltRef.current
    const hero = heroRef.current
    if (el && hero) {
      let raf = 0
      const maxTilt = 10 // degrees
      const maxShift = 10 // px

      const handleMove = (e: MouseEvent) => {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect()
          const x = (e.clientX - rect.left) / rect.width // 0..1
          const y = (e.clientY - rect.top) / rect.height // 0..1
          const tiltX = (0.5 - y) * (maxTilt * 2)
          const tiltY = (x - 0.5) * (maxTilt * 2)
          const shiftX = (x - 0.5) * (maxShift * 2)
          const shiftY = (y - 0.5) * (maxShift * 2)
          el.style.transform =
            `translate(${shiftX}px, ${shiftY}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
        })
      }

      const handleLeave = () => {
        cancelAnimationFrame(raf)
        el.style.transform = 'translate(0,0) rotateX(0) rotateY(0)'
      }

      hero.addEventListener('mousemove', handleMove)
      hero.addEventListener('mouseleave', handleLeave)

      return () => {
        hero.removeEventListener('mousemove', handleMove)
        hero.removeEventListener('mouseleave', handleLeave)
        cancelAnimationFrame(raf)
      }
    }

    return () => io.disconnect()
  }, [])

  return (
    <main>
      {/* NAV */}
      <nav>
        <div className="nav-container">
          <div className="logo">KAMAL</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Benefits</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#" className="cta-button">Shop Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home" ref={heroRef}>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-tagline">AUTHENTIC • SMOOTH • ELEVATED</div>
            <h1>Vietnamese Iced Coffee, Reimagined</h1>
            <p className="hero-description">
              Experience the rich, bold taste of traditional Vietnamese coffee with a modern twist.
              Made with oat milk condensed milk and naturally sweetened with allulose.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">Order Now</button>
              <button className="secondary-btn">Learn More</button>
            </div>
          </div>

          {/* Can Stage: floating, tilt, glossy shimmer, and background backplate */}
          <div className="hero-image">
            <div className="can-stage floating-can">
              <div className="tilt-can" ref={tiltRef}>
                <img
                  src={`/images/kamal%20coffee%20simple%20image%20first%20sketch%20front%20of%20can.jpeg`}
                  alt="Kamal Coffee Can"
                  width={400}
                  height={600}
                  className="can-img"
                />
                {/* Shimmer overlay */}
                <span className="can-shimmer" aria-hidden="true" />
              </div>
            </div>
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
            <p>Our condensed milk is crafted with premium oat milk, delivering creamy richness without dairy. Perfect for those seeking a plant-based lifestyle.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">🍃</div>
            <h3>Naturally Sweetened</h3>
            <p>Sweetened with allulose, a rare natural sugar that provides sweetness without the calories or blood sugar spike. Guilt-free indulgence.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">☕</div>
            <h3>Authentic Taste</h3>
            <p>Made with premium Vietnamese robusta beans, we honor the traditional brewing method while creating a ready-to-drink experience.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">⚡</div>
            <h3>Ready to Enjoy</h3>
            <p>No brewing required. Just grab, shake, and enjoy authentic Vietnamese iced coffee anywhere, anytime.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">💪</div>
            <h3>Better Energy</h3>
            <p>Bold Vietnamese coffee provides sustained energy without the jitters. Start your day the Kamal way.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">🌍</div>
            <h3>Sustainably Sourced</h3>
            <p>We work directly with Vietnamese coffee farmers to ensure quality beans and fair practices.</p>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="product" id="product">
        <div className="product-container">
          <div className="product-images">
            <img src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='400' viewBox='0 0 200 400'%3E%3Crect fill='%23E8D5C4' width='200' height='400' rx='100'/%3E%3Ctext x='100' y='200' font-family='Arial' font-size='32' font-weight='bold' fill='%238B6F47' text-anchor='middle'%3EKAMAL%3C/text%3E%3C/svg%3E"} alt="Kamal Can 1" />
            <img src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='400' viewBox='0 0 200 400'%3E%3Crect fill='%238B6F47' width='200' height='400' rx='100'/%3E%3Ctext x='100' y='200' font-family='Arial' font-size='32' font-weight='bold' fill='%23E8D5C4' text-anchor='middle'%3EKAMAL%3C/text%3E%3C/svg%3E"} alt="Kamal Can 2" />
          </div>
          <div className="product-info">
            <h2>The Perfect Vietnamese Coffee Experience</h2>
            <p>Kamal brings you the authentic taste of Vietnamese iced coffee in a convenient, ready-to-drink format. Each can is carefully crafted to deliver the perfect balance of bold coffee and sweet, creamy goodness.</p>
            <p>Our unique blend combines traditional Vietnamese coffee culture with modern nutritional innovation, creating a beverage that's both nostalgic and forward-thinking.</p>
            <div className="ingredients">
              <h4>What Makes Us Different:</h4>
              <ul>
                <li>Premium Vietnamese Robusta Coffee</li>
                <li>Oat Milk-Based Condensed Milk</li>
                <li>Allulose Natural Sweetener</li>
                <li>No Artificial Flavors or Preservatives</li>
                <li>Lactose-Free & Vegan-Friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-container">
          <h2>Our Story</h2>
          <div className="lotus">🪷</div>
          <p>Kamal was born from a love of authentic Vietnamese coffee and a vision to make it accessible to everyone. We believe that great coffee should be enjoyed without compromise—whether you're dairy-free, watching your sugar intake, or simply seeking the best taste.</p>
          <p>Like the lotus flower that inspired our name, Kamal rises from tradition to create something beautiful and pure. We've reimagined Vietnamese iced coffee for the modern coffee lover, keeping the soul of the original while innovating for today's health-conscious consumer.</p>
          <p>Every can of Kamal represents our commitment to quality, authenticity, and sustainability. We work directly with Vietnamese coffee farmers, ensuring fair practices and the finest beans, while using plant-based ingredients that are better for you and the planet.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-container">
          <h2>Get In Touch</h2>
          <p>Have questions? Want to stock Kamal in your store? We'd love to hear from you.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <div className="social-links">
            <a href="#">📘</a>
            <a href="#">📷</a>
            <a href="#">🐦</a>
          </div>
          <p>© {new Date().getFullYear()} Kamal Coffee. All rights reserved.</p>
          <p>Made with allulose 🍃</p>
        </div>
      </footer>
    </main>
  )
}
