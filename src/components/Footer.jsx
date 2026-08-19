import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', idx: '00' },
  { to: '/about', label: 'About', idx: '01' },
  { to: '/education', label: 'Education & Skills', idx: '02' },
  { to: '/contacts', label: 'Contact', idx: '03' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-mark">AV</span>
          <p className="sys-label">Diplomat // International Relations</p>
        </div>
        <nav className="footer-links">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              [{link.idx}] {link.label}
            </Link>
          ))}
        </nav>
        <div className="footer-meta">
          <span className="sys-label">[END_OF_TRANSMISSION]</span>
          <p className="footer-copy">© {new Date().getFullYear()} Alexander Volkov</p>
        </div>
      </div>
    </footer>
  )
}