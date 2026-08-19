import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', idx: '00' },
  { to: '/about', label: 'About', idx: '01' },
  { to: '/education', label: 'Education & Skills', idx: '02' },
  { to: '/contacts', label: 'Contact', idx: '03' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)} aria-label="Home">
          <span className="logo-mark">AV</span>
        </Link>
        <nav className={open ? 'nav-links is-open' : 'nav-links'}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'nav-link is-active' : 'nav-link'
              }
              onClick={() => setOpen(false)}
            >
              <span className="nav-idx">[{link.idx}]</span>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          className={open ? 'nav-toggle is-open' : 'nav-toggle'}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}