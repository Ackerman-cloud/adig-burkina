const About: React.FC = () => {
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
              n° <strong>PNMT_0015</strong> (renouvelé le 05 Octobre 2018).
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              ADIG compte <strong>20 membres actifs</strong> et regroupe <strong>26 groupements</strong> (dont 16 féminins et 10 mixtes),
              répartis dans les huit communes du Namentenga : Boala, Boulsa, Bouroum, Dargo, Nagbingou, Tougouri, Yalgo et Zeguedeguin.
              Elle est présidée par <strong>M. Blaise SANDOUIDI</strong>, avec <strong>Mme Madeleine SAWADOGO</strong> à la trésorerie.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Ses 3 domaines d'intervention prioritaires sont :
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: '#2d3748', lineHeight: 1.8 }}>
              <li><strong>1. Soins et encadrement psychosocial des malades mentaux errants</strong> : hygiène corporelle et vestimentaire, soins médicaux, appui alimentaire mensuel, réinsertion familiale, organisation annuelle de la Journée Mondiale de la Santé Mentale, et projet de construction d'un centre d'accueil d'1 hectare. (<strong>461 malades accompagnés</strong>).</li>
              <li><strong>2. Éducation et Alphabétisation</strong> : ouverture et gestion de 64 centres d'alphabétisation (CFE, FTS, CBN2Jeunes) en partenariat avec le FONAENF (<strong>1 920 personnes alphabétisées</strong>).</li>
              <li><strong>3. Protection de l'Environnement</strong> : protection de 110 hectares de forêts villageoises (Belga 50 ha, Bonam 40 ha, Lilyala 20 ha), aménagement de 210 ha de cordons pierreux et zaï, 210 fosses fumières, don de 100 plaques solaires avec le FEM/ONG, et reboisement annuel.</li>
            </ul>
            <p style={{ marginBottom: '1.5rem' }}>
              Au total, <strong>plus de 10 000 personnes</strong> bénéficient directement des sensibilisations, formations et encadrements d'ADIG et de ses partenaires (FONAENF, FEM/ONG, OCADES Kaya, Ministère de la Santé, Ministère de la Solidarité, Ministère de la Justice, Menschen Ohne Kentten et Cercle des Amis de St. Camille en Allemagne, Sœurs pour Sœurs Tond laa Taaba, District Sanitaire de Boulsa).
            </p>

            <div className="about-distinctions" style={{ background: '#f0f7f0', borderLeft: '4px solid #2c5530', padding: '1rem 1.5rem', borderRadius: '0 8px 8px 0', marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#2c5530', marginBottom: '0.5rem' }}>Distinctions et Conventions Officielles</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>🏅 <strong>Chevalier de l'ordre du mérite de la santé et de l'action sociale</strong> — 27 décembre 2019</li>
                <li>🕊️ <strong>Ambassadeur pour la Paix Universelle</strong> — 27 décembre 2022</li>
                <li>📜 <strong>Certificat de Reconnaissance</strong> — Ministère de l'Administration Territoriale (02/12/2017)</li>
                <li>📜 <strong>Attestation de Reconnaissance</strong> — Commune de Tougouri (28/12/2018)</li>
                <li>📄 <strong>Convention de Partenariat</strong> — Ministère de la Solidarité (depuis 2016, renouvelée le 26/11/2024)</li>
                <li>📄 <strong>Convention de Collaboration</strong> — Ministère de la Santé (depuis 2017, renouvelée le 26/12/2023)</li>
                <li>📄 <strong>Convention de Collaboration</strong> — Ministère de la Justice et des Droits Humains (08/08/2023)</li>
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
