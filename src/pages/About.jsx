import Reveal from '../components/Reveal'
import Frame from '../components/Frame'
import aboutPage from '../assets/about_page.png'

const stats = [
  { value: '12+', label: 'years in diplomatic service' },
  { value: '15', label: 'countries & missions' },
  { value: '05', label: 'languages' },
]

const principles = [
  {
    title: 'Dialogue',
    text: 'Every conflict starts where conversation ends. Listening comes first.',
  },
  {
    title: 'Rule of Law',
    text: 'The norms of international law are a reliable anchor in negotiations and decisions.',
  },
  {
    title: 'Respect',
    text: 'Cultural and national specificity always remains in focus.',
  },
]

export default function About() {
  return (
    <div className="page">
      <section className="page-hero scanlines">
        <div className="container">
          <Reveal>
            <p className="sys-label" style={{ marginBottom: '16px' }}>
              [File // About_001]
            </p>
            <h1 className="page-title">About me</h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <Reveal>
              <Frame className="portrait-frame">
                <div className="portrait crosshair">
                  <img src={aboutPage} alt="Portrait" className="portrait-img" loading="lazy" />
                </div>
                <div className="portrait-id">
                  <span className="sys-label">ID::RABBIT // Sector_07</span>
                  <span className="card-index">[010]</span>
                </div>
              </Frame>
            </Reveal>
            <Reveal delay={120} className="about-text">
              <p>
                I am a diplomat with more than twelve years of experience in international
                relations. I started my career in consular affairs and progressed to leading
                negotiation tracks on multilateral platforms.
              </p>
              <p>
                My work is about representing the country's interests, protecting citizens,
                and striking a balance between national priorities and the shared values of
                the global community. For me, every dialogue is a chance to build a lasting
                solution.
              </p>
              <p>
                Alongside my service, I teach international law and share negotiation
                practice with young colleagues and students.
              </p>
            </Reveal>
          </div>

          <div className="stats-grid">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
                <span className="card-index">[Data_{i}]</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="sys-label">[Core // Values]</p>
            <h2 className="section-title">Working principles</h2>
          </div>
          <div className="directions">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <Frame className="direction-card">
                  <div className="card-head">
                    <span className="card-index">[Val_{String(i + 1).padStart(2, '0')}]</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="card-foot">
                    <span className="sys-label">Core::On</span>
                  </div>
                </Frame>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}