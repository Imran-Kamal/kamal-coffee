'use client';

import { useEffect } from 'react';

// UI bits
import AnnouncementBar from '@components/AnnouncementBar';
import Footer from '@components/Footer';
import EmailSignup from '@components/EmailSignup';

export default function Home() {
  // Smooth scrolling for on-page anchor links
  useEffect(() => {
    document
      .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      .forEach((a) => {
        a.addEventListener('click', (e) => {
          const href = a.getAttribute('href') || '';
          if (!href.startsWith('#')) return;
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
      });
  }, []);

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
          <a href="/shop" className="cta-button">Shop Now</a>
        </div>
      </nav>

      {/* Subtle announcement (dismissible) */}
      <AnnouncementBar />

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-tagline">AUTHENTIC • SMOOTH • ELEVATED</div>
            <h1>Vietnamese Iced Coffee, Reimagined</h1>
            <p className="hero-description">
              Experience the rich, bold taste of traditional Vietnamese coffee with a modern twist.
              Made with oat milk condensed milk and naturally sweetened with allulose.
            </p>
            <div className="hero-buttons">
              <a className="primary-btn" href="/shop">Order Now</a>
              <a className="secondary-btn" href="/story">Learn More</a>
            </div>
          </div>
          <div className="hero-image floating-can tilt-can">
            {/* Swap this image for your real can when ready */}
            <img
              src="/images/og.png"
              width={400}
              height={600}
              alt="Kamal Coffee — Vietnamese Iced Coffee"
              style={{ width: 400, height: 'auto' }}
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
            <p>
              Our condensed milk is crafted with premium oat milk — creamy richness without dairy.
              Perfect for a plant-based lifestyle.
            </p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">🍃</div>
            <h3>Naturally Sweetened</h3>
            <p>
              Sweetened with allulose for clean sweetness without the crash. Guilt-free indulgence.
            </p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">☕</div>
            <h3>Authentic Taste</h3>
            <p>
              Made with premium Vietnamese robusta beans, honoring tradition with modern craft.
            </p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">⚡</div>
            <h3>Ready to Enjoy</h3>
            <p>No brewing. Grab, shake, and enjoy anywhere.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">💪</div>
            <h3>Better Energy</h3>
            <p>Bold coffee for steady focus without the jitters.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">🌍</div>
            <h3>Sustainably Sourced</h3>
            <p>We work directly with Vietnamese farmers for quality and fairness.</p>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="product" id="product">
        <div className="product-container">
          <div className="product-images">
            <img src="/images/og.png" alt="Kamal Original" />
            <img src="/images/og.png" alt="Kamal Original" />
          </div>
          <div className="product-info">
            <h2>The Perfect Vietnamese Coffee Experience</h2>
            <p>
              Kamal brings you authentic Vietnamese iced coffee in a convenient, ready-to-drink
              format. The perfect balance of bold coffee and creamy, clean sweetness.
            </p>
            <p>
              Tradition meets nutrition: nostalgic flavor, modern ingredients.
            </p>
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
          <p>
            Kamal was born from a love of authentic Vietnamese coffee and a desire to make it
            accessible to everyone. We keep the soul of cà phê sữa đá while innovating for today.
          </p>
          <p>
            Like the lotus, we rise from tradition to create something beautiful and pure — with
            ingredients that are better for you and the planet.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-container">
          <h2>Get In Touch</h2>
          <p>Questions or wholesale? Drop us a note.</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* EMAIL SIGNUP (soft, above footer) */}
      <EmailSignup />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
