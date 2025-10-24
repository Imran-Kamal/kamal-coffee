export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Contact</h1>
          <p>Wholesale, retail, or general questions—we’d love to hear from you.</p>
        </div>
      </section>

      <section className="contact-wrap">
        <form
          className="contact-form card"
          action="https://formspree.io/f/YOUR_FORMSPREE_ID"
          method="POST"
        >
          <label>
            Your Name
            <input name="name" type="text" required />
          </label>

          <label>
            Email
            <input name="email" type="email" required />
          </label>

          <label>
            Topic
            <select name="topic" defaultValue="General">
              <option>General</option>
              <option>Retail inquiry</option>
              <option>Wholesale inquiry</option>
            </select>
          </label>

          <label>
            Message
            <textarea name="message" rows={6} required />
          </label>

          <button className="primary-btn" type="submit">Send</button>
        </form>
      </section>
    </main>
  )
}
