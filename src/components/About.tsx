interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="section" id="apropos">
      <div className="container">
        <div className="section-title">
          <h2>À Propos de Nous</h2>
          <p>Fondée en 2000, ADIG œuvre depuis plus de 25 ans pour les populations vulnérables du Namentenga</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Association pour le Développement Intégré Guésbéogo</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>ADIG</strong> — dont le nom <em>GUESBEOGO</em> signifie <em>"regardons demain"</em> en langue Mooré —
              est une association créée en <strong>2000</strong> dans le souci d'aider les populations démunies.
              Son siège social est basé à <strong>Boulsa, secteur 05 (Tangporé)</strong>, chef-lieu de la Province du
              Namentenga, Région du Centre-Nord du Burkina Faso. Elle est officiellement reconnue sous le récépissé
              n° <strong>PNMT_0015</strong>.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              ADIG se <strong>compose de 26 groupements</strong> (dont 16 groupements féminins et 10 mixtes), répartis dans les
              huit communes du Namentenga : Boala, Boulsa, Bouroum, Dargo, Nagbingou, Tougouri, Yalgo et Zeguedeguin.
              Ses domaines d'intervention couvrent la <strong>santé mentale</strong>, la <strong>santé</strong>,
              l'<strong>alphabétisation</strong>, l'<strong>environnement</strong>, l'<strong>élevage</strong>,
              l'<strong>agriculture</strong> et la transformation des produits locaux.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Grâce à ses partenaires (FONAENF, OCADES, FEM/ONG, Ministère de la Santé, Menschen Ohne Kentten –
              Allemagne, Cercle des Amis de St. Camille – Allemagne, et les services provinciaux du Namentenga),
              ADIG a déjà touché <strong>plus de 10 000 personnes</strong>, dont 461 malades mentaux accompagnés
              et 1 920 personnes alphabétisées.
            </p>

            <div className="about-distinctions" style={{ background: '#f0f7f0', borderLeft: '4px solid #2c5530', padding: '1rem 1.5rem', borderRadius: '0 8px 8px 0', marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#2c5530', marginBottom: '0.5rem' }}>Distinctions et Reconnaissances</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>🏅 <strong>Chevalier de l'ordre du mérite de la santé et de l'action sociale</strong> — 27 décembre 2019</li>
                <li>🕊️ <strong>Ambassadeur pour la Paix Universelle</strong> — 27 décembre 2022</li>
                <li>📜 <strong>Certificat de Reconnaissance</strong> — Ministère de l'Administration Territoriale, 2017</li>
                <li>📄 <strong>Convention de Partenariat</strong> — Ministère de la Solidarité, depuis 2016</li>
                <li>📄 <strong>Convention de Collaboration</strong> — Ministère de la Santé, depuis 2017</li>
              </ul>
            </div>

            <div className="about-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
              <div style={{ background: '#2c5530', color: 'white', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>25+</div>
                <div style={{ fontSize: '0.9rem' }}>Ans d'existence</div>
              </div>
              <div style={{ background: '#2c5530', color: 'white', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>10 000+</div>
                <div style={{ fontSize: '0.9rem' }}>Personnes bénéficiaires</div>
              </div>
              <div style={{ background: '#2c5530', color: 'white', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>26</div>
                <div style={{ fontSize: '0.9rem' }}>Groupements membres</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img
              src="/adig-groupe.jpg"
              alt="ADIG - Photo de groupe - Équipe et membres"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
