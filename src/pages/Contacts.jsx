import Reveal from '../components/Reveal'
import Frame from '../components/Frame'

const contacts = [
  { label: 'Email', value: 'somebullshit@email.com', href: 'mailto:somebullshit@email.com' },
  { label: 'Phone', value: '+1 (234) 567-78-90', href: 'tel:+1234567890' },
]

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Telegram', href: 'https://t.me' },
  { label: 'X', href: 'https://x.com' },
]

export default function Contacts() {
  return (
    <div className="page">
      <section className="page-hero scanlines">
        <div className="container">
          <Reveal>
            <p className="sys-label" style={{ marginBottom: '16px' }}>
              [Channel // Contact_001]
            </p>
            <h1 className="page-title">Let's connect</h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contacts-grid">
            <Reveal className="contact-info">
              <p className="contact-intro">
                Open to collaboration, lectures and consultations. Write to me — I will reply
                within one business day.
              </p>
              <div className="contact-list">
                {contacts.map((item) => (
                  <div key={item.label} className="contact-item">
                    <span className="sys-label">[{item.label}]</span>
                    <a className="contact-value" href={item.href}>
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
              <div className="socials">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    className="btn"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.label} →
                  </a>
                ))}
              </div>
              <a className="btn btn-primary" href="#">
                Download CV ↓
              </a>
            </Reveal>

            <Reveal delay={150}>
              <Frame className="contact-form">
                <p className="sys-label" style={{ marginBottom: '4px' }}>
                  [Input_Form // Encrypted]
                </p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="contact-form-fields">
                    <label>
                      Name
                      <input type="text" placeholder="Your name" required />
                    </label>
                    <label>
                      Email
                      <input type="email" placeholder="you@example.com" required />
                    </label>
                    <label>
                      Message
                      <textarea rows="5" placeholder="Describe your request" required />
                    </label>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Send →
                  </button>
                </form>
              </Frame>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}