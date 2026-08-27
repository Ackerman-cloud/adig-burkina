import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const previewProjects = [
  {
    title: 'Soins & Encadrement des Malades Mentaux',
    description: 'Soins médicaux, hygiène corporelle et vestimentaire, appui alimentaire et réinsertion familiale des malades mentaux errants dans la province du Namentenga.',
    image: '/adig-salle-consultation.jpg',
  },
  {
    title: 'Éducation & Alphabétisation',
    description: 'Centres d\'alphabétisation (CFE, FTS, CBN2Jeunes) pour l\'éducation non formelle en partenariat avec le FONAENF. Plus de 1 920 personnes alphabétisées.',
    image: '/adig-education-classe.jpg',
  },
  {
    title: 'Protection de l\'Environnement',
    description: '110 ha de forêts villageoises protégées (Belga, Bonam, Lilyala), aménagement de 210 ha de cordons pierreux et zaï, et reboisement annuel.',
    image: '/adig-environnement-reboisement.jpg',
  },
]

const previewNews = [
  {
    title: 'Journée Mondiale de la Santé Mentale célébrée à Boulsa',
    date: '10 Octobre 2024 / 26 Janvier 2025',
    image: '/adig-sante-mentale.jpg',
  },
  {
    title: 'Visite du chantier du futur centre d\'accueil pour malades mentaux',
    date: '22 Février 2026',
    image: '/adig-evenement.jpg',
  },
  {
    title: 'Distribution de vivres et assistance aux malades mentaux',
    date: '22 Février 2026',
    image: '/adig-distribution.jpg',
  },
]

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      {/* Aperçu projets */}
      <section className="section causes" id="projets-preview">
        <div className="container">
          <div className="section-title">
            <h2>Nos Domaines d'Intervention</h2>
            <p>ADIG concentre ses actions sur 3 piliers majeurs au bénéfice des populations du Namentenga</p>
          </div>
          <div className="causes-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {previewProjects.map((p, i) => (
              <div key={i} className="cause-card">
                <img src={p.image} alt={p.title} />
                <div className="cause-content">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/projets" className="btn">Voir tous nos projets</Link>
          </div>
        </div>
      </section>

      {/* Bandeau À Propos */}
      <section className="section volunteer">
        <div className="container">
          <h2>À Propos d'ADIG Guésbéogo</h2>
          <p>
            Fondée en 2000, ADIG (<em>« regardons demain »</em> en Mooré) est implantée à Boulsa,
            Province du Namentenga. Elle compte 20 membres actifs et 26 groupements partenaires,
            et a accompagné plus de 10 000 bénéficiaires dont 461 malades mentaux et 1 920 personnes alphabétisées.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/apropos" className="btn">Découvrir l'association</Link>
            <Link to="/contact" className="btn btn-secondary">Nous contacter</Link>
          </div>
        </div>
      </section>

      {/* Aperçu actualités */}
      <section className="section blog">
        <div className="container">
          <div className="section-title">
            <h2>Dernières Actualités</h2>
            <p>Suivez nos actions sur le terrain</p>
          </div>
          <div className="blog-grid">
            {previewNews.map((n, i) => (
              <article key={i} className="blog-card">
                <img src={n.image} alt={n.title} />
                <div className="blog-content">
                  <div className="blog-meta"><span>{n.date}</span></div>
                  <h3>{n.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/actualites" className="btn">Toutes les actualités</Link>
          </div>
        </div>
      </section>

      {/* Aperçu galerie */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-title">
            <h2>Galerie Photos</h2>
            <p>Nos actions en images</p>
          </div>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {['/adig-salle-consultation.jpg', '/adig-ceremonie-remise.jpg', '/adig-environnement-reboisement.jpg', '/adig-education-classe.jpg',
              '/adig-stock-vivres.jpg', '/adig-evenement.jpg', '/adig-dotation-communautaire.jpg', '/adig-preparatifs-soins.jpg'].map((src, i) => (
              <div key={i} className="gallery-item" style={{ pointerEvents: 'none' }}>
                <img src={src} alt={`Photo ADIG ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/galerie" className="btn">Voir toute la galerie</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
