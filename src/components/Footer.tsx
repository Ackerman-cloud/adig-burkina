import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>À Propos d'ADIG</h3>
            <p>
              L'Association pour le Développement Intégré Guésbéogo (ADIG) œuvre depuis 2000
              pour l'amélioration des conditions de vie des populations vulnérables de la Province
              du Namentenga, Burkina Faso. <em>GUESBEOGO</em> signifie <em>"regardons demain"</em> en langue Mooré.
            </p>
          </div>

          <div className="footer-section">
            <h3>Liens Rapides</h3>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/apropos">À Propos</Link></li>
              <li><Link to="/projets">Nos Projets</Link></li>
              <li><Link to="/soutenir">Soutenir</Link></li>
              <li><Link to="/actualites">Actualités</Link></li>
              <li><Link to="/galerie">Galerie</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Nos Domaines</h3>
            <ul>
              <li><Link to="/projets">Santé Mentale</Link></li>
              <li><Link to="/projets">Santé & Sensibilisation</Link></li>
              <li><Link to="/projets">Alphabétisation</Link></li>
              <li><Link to="/projets">Environnement</Link></li>
              <li><Link to="/projets">Élevage & Pisciculture</Link></li>
              <li><Link to="/projets">Agriculture & Transformation</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contactez-nous</h3>
            <ul>
              <li>📍 Boulsa, secteur 05 (Tangporé)<br />Province du Namentenga, Burkina Faso</li>
              <li>📞 <a href="tel:+22670361097">+226 70 36 10 97</a></li>
              <li>📞 <a href="tel:+22679554320">+226 79 55 43 20</a></li>
              <li>💬 <a href="https://wa.me/22653861272">WhatsApp : +226 53 86 12 72</a></li>
              <li>✉️ <a href="mailto:adig.association@yahoo.com">adig.association@yahoo.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 ADIG Guésbéogo — Récépissé PNMT_0015. Tous droits réservés. |
            Développé avec ❤️ pour le développement durable
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
