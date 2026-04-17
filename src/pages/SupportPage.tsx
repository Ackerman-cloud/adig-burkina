import { Link } from 'react-router-dom'

const SupportPage: React.FC = () => (
  <>
    <div className="page-hero">
      <div className="container">
        <h1>Soutenir ADIG</h1>
        <p>Votre soutien permet à ADIG d'accompagner les populations vulnérables du Namentenga</p>
      </div>
    </div>

    <section className="section" style={{ background: '#EBF6FC' }}>
      <div className="container">
        <div className="contact-grid">

          {/* Don financier */}
          <div className="contact-info-block">
            <h3>Faire un don financier</h3>
            <p style={{ color: '#4a5568', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              Votre contribution financière permet à ADIG de financer ses activités : soins aux malades
              mentaux, alphabétisation, élevage, protection de l'environnement et agriculture durable.
            </p>
            <ul className="contact-info-list">
              <li>
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:adig.association@yahoo.com">adig.association@yahoo.com</a></p>
                </div>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Téléphone / WhatsApp</strong>
                  <p>
                    <a href="tel:+22670361097">+226 70 36 10 97</a><br />
                    <a href="https://wa.me/22653861272">WhatsApp : +226 53 86 12 72</a>
                  </p>
                </div>
              </li>
            </ul>
            <a
              href="mailto:adig.association@yahoo.com?subject=Don%20financier"
              className="btn"
              style={{ marginTop: '1.5rem', display: 'inline-block' }}
            >
              Contacter pour un don
            </a>
          </div>

          {/* Bénévolat */}
          <div className="contact-info-block">
            <h3>Devenir bénévole</h3>
            <p style={{ color: '#4a5568', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              Rejoignez notre équipe de bénévoles passionnés. Que vous soyez professionnel de santé,
              éducateur, agent d'agriculture, communicant ou simplement motivé, votre engagement compte.
            </p>
            <ul className="contact-info-list">
              <li>
                <span className="contact-icon">🤝</span>
                <div>
                  <strong>Activités bénévoles</strong>
                  <p>Sensibilisation santé, alphabétisation, agriculture, accompagnement social</p>
                </div>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Lieu</strong>
                  <p>Boulsa et communes du Namentenga, Burkina Faso</p>
                </div>
              </li>
            </ul>
            <Link to="/contact" className="btn" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
              Rejoindre l'équipe
            </Link>
          </div>

        </div>

        {/* Besoins 2025 */}
        <div className="contact-info-block" style={{ marginTop: '2rem' }}>
          <h3>Besoins prioritaires 2025</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
            {[
              { label: 'Encadrement malades mentaux', amount: '24 680 000 FCFA' },
              { label: 'Centre d\'accueil (construction)', amount: '87 958 488 FCFA' },
              { label: 'Élevage & Pisciculture', amount: '11 928 000 FCFA' },
              { label: 'Alphabétisation', amount: '9 320 762 FCFA' },
              { label: 'Agriculture & Transformation', amount: '7 050 000 FCFA' },
              { label: 'Transport (motos)', amount: '3 000 000 FCFA' },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#EBF6FC',
                border: '1px solid #c0dff0',
                borderRadius: '8px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
              }}>
                <span style={{ fontWeight: 600, color: '#074E78', fontSize: '0.9rem' }}>{item.label}</span>
                <span style={{ color: '#CC2222', fontWeight: 700 }}>{item.amount}</span>
              </div>
            ))}
          </div>
          <p style={{ color: '#5a7080', fontSize: '0.88rem', marginTop: '1rem' }}>
            Budget total 2025 : <strong>149 210 750 FCFA</strong> dont 147 397 250 FCFA à rechercher auprès de partenaires.
          </p>
        </div>
      </div>
    </section>
  </>
)

export default SupportPage
