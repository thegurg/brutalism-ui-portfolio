import Reveal from '../components/Reveal'
import PixelBar from '../components/PixelBar'

const education = [
  {
    period: '2008 — 2010',
    idx: 'EDU_001',
    place: 'Diplomatic Academy of the MFA',
    degree: "Master's in International Relations",
    note: 'Specialization: foreign policy and diplomacy.',
  },
  {
    period: '2003 — 2008',
    idx: 'EDU_002',
    place: 'MGIMO University (MFA of Russia)',
    degree: "Bachelor's in International Law",
    note: 'Faculty of International Law.',
  },
]

const languages = [
  { name: 'Russian', level: 'Native', pct: 100 },
  { name: 'English', level: 'C1 · Advanced', pct: 92 },
  { name: 'Persian', level: 'C1 · Advanced', pct: 92 },
  { name: 'Tajik', level: 'Native', pct: 100 },
  { name: 'Uzbek', level: 'Native', pct: 100 },
  { name: 'German', level: 'A1 · Beginner', pct: 30 },
]

const skills = [
  'Negotiation',
  'International law',
  'Consular work',
  'Public speaking',
  'Diplomatic correspondence',
  'Foreign policy analysis',
  'Working with international organizations',
  'Intercultural communication',
]

export default function Education() {
  return (
    <div className="page">
      <section className="page-hero scanlines">
        <div className="container">
          <Reveal>
            <p className="sys-label" style={{ marginBottom: '16px' }}>
              [File // Education_001]
            </p>
            <h1 className="page-title">Professional journey</h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="sys-label">[Data // Education]</p>
            <h2 className="section-title">Academic background</h2>
          </div>
          <div className="timeline">
            {education.map((item, i) => (
              <Reveal key={item.idx} delay={i * 90}>
                <div className="timeline-row">
                  <span className="timeline-period">{item.period}</span>
                  <span className="card-index">[{item.idx}]</span>
                  <div className="timeline-card">
                    <h3>{item.place}</h3>
                    <p className="timeline-degree">{item.degree}</p>
                    <p className="timeline-note">{item.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="sys-label">[Data // Languages]</p>
            <h2 className="section-title">Language map</h2>
          </div>
          <div className="languages">
            {languages.map((lang, i) => (
              <Reveal key={lang.name} delay={i * 70}>
                <div className="language">
                  <div className="language-head">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                  <PixelBar segments={10} value={lang.pct / 100} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="sys-label">[Data // Skills]</p>
            <h2 className="section-title">Professional skills</h2>
          </div>
          <ul className="skills">
            {skills.map((skill, i) => (
              <Reveal key={skill} delay={i * 50} as="li" className="skill">
                <span className="card-index">[S_{String(i + 1).padStart(2, '0')}]</span>
                {skill}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}