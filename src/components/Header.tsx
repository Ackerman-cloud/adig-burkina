import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'active' : ''

  return (
    <header className="header">
      <div className="header-content">
        <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src="/WhatsApp Image 2025-06-22 à 17.44.38_10d8017f.jpg" alt="Logo ADIG" />
          <div className="logo-text">
            <h1>ADIG Guésbéogo</h1>
            <span>Boulsa — Province du Namentenga</span>
          </div>
        </NavLink>

        <button
          className="menu-toggle"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-wrapper${menuOpen ? ' open' : ''}`}>
          <ul className="nav" onClick={() => setMenuOpen(false)}>
            <li><NavLink to="/" className={linkClass} end>Accueil</NavLink></li>
            <li><NavLink to="/apropos" className={linkClass}>À Propos</NavLink></li>
            <li><NavLink to="/projets" className={linkClass}>Nos Projets</NavLink></li>
            <li><NavLink to="/soutenir" className={linkClass}>Soutenir</NavLink></li>
            <li><NavLink to="/actualites" className={linkClass}>Actualités</NavLink></li>
            <li><NavLink to="/galerie" className={linkClass}>Galerie</NavLink></li>
            <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
