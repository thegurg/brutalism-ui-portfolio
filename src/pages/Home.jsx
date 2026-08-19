import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Frame from '../components/Frame'
import PixelBar from '../components/PixelBar'
import Icarus from '../components/Icarus'

const directions = [
  {
    idx: 'DIR_001',
    title: 'Diplomacy & Negotiations',
    text: 'Multilateral negotiations, interstate engagement and the search for lasting compromise.',
    load: 0.8,
  },
  {
    idx: 'DIR_002',
    title: 'International Law',
    text: 'Treaty work, consular affairs and consistent compliance with the norms of international law.',
    load: 0.9,
  },
  {
    idx: 'DIR_003',
    title: 'Public Diplomacy',
    text: 'Representing national interests through cultural and humanitarian initiatives.',
    load: 0.7,
  },
]

export default function Home() {
  return (
    <div className="page">
      <section className="hero scanlines">
        <Icarus />
        <div className="hud hud-tl">
          <span className="pixel-dot" />
          SYS::ONLINE
        </div>
        <div className="hud hud-tr">Coord // X:042 / Y:018</div>
        <div className="hud hud-bl">UI_Metadata // Portfolio_V2</div>
        <div className="hud hud-br">[001 / 006]</div>

        <div className="container">
          <Reveal>
            <Frame className="hero-center">
              <p className="sys-label hero-eyebrow">// Safarali Oripov — Diplomat</p>
              <h1 className="hero-title">
                Safarali
                <br />
                <span className="hero-title-outline">Oripov</span>
              </h1>
              <p className="hero-sub">Diplomat · International Relations</p>
              <div className="hero-data">
                <div className="data-row">
                  <span className="k">Status</span>
                  <span className="v">
                    <span className="pixel-dot" />
                    Active
                  </span>
                </div>
                <div className="data-row">
                  <span className="k">Focus</span>
                  <span className="v">Diplomacy / Negotiations</span>
                </div>
                <div className="data-row">
                  <span className="k">Load</span>
                  <PixelBar segments={10} value={0.9} />
                </div>
              </div>
              <div className="hero-actions">
                <Link to="/about" className="btn btn-primary">
                  About →
                </Link>
                <Link to="/contacts" className="btn">
                  Contact
                </Link>
              </div>
            </Frame>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="sys-label">[Dir // 001–003]</p>
            <h2 className="section-title">What I do</h2>
          </div>
          <div className="directions">
            {directions.map((d, i) => (
              <Reveal key={d.idx} delay={i * 90}>
                <Frame className="direction-card">
                  <div className="card-head">
                    <span className="card-index">[{d.idx}]</span>
                    <PixelBar segments={5} value={d.load} />
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <div className="card-foot">
                    <span className="sys-label">Mode::Active</span>
                    <span className="card-index">0{i + 1}:{i + 1}</span>
                  </div>
                </Frame>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal>
            <Frame className="data-panel">
              <div className="quote-top">
                <span className="sys-label">[Glitch_Data // Q_001]</span>
                <span className="card-index">▮▮▮▮▯</span>
              </div>
              <blockquote className="pull-quote">
                «Diplomacy is the art of speaking so as to remain heard, even when voices do
                not align.»
              </blockquote>
              <div className="quote-meta">
                <span className="sys-label">Status::Verified</span>
                <span className="sys-label">The principle I follow in my work</span>
              </div>
            </Frame>
          </Reveal>
        </div>
      </section>

      <section className="section cta">
        <div className="container">
          <Reveal>
            <p className="sys-label" style={{ marginBottom: '18px' }}>
              [Init_Contact]
            </p>
            <h2 className="cta-title">Ready for dialogue</h2>
            <p className="cta-text">Collaboration · Speaking · Consultations</p>
            <Link to="/contacts" className="btn btn-primary">
              Contact →
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}