const Hero: React.FC = () => {
  return (
    <section className="hero" id="accueil">
      <div className="hero-content">
        <h1>Association pour le Développement Intégré Guésbéogo</h1>
        <p>
          Depuis 2000, ADIG accompagne les populations vulnérables de la Province du Namentenga
          à travers la santé mentale, l'alphabétisation, l'élevage, l'agriculture
          et la protection de l'environnement.
        </p>
        <div className="hero-buttons">
          <a href="#causes" className="btn">Découvrir nos projets</a>
          <a href="#contact" className="btn btn-secondary">Nous contacter</a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="hero-stats-grid">
          <div className="hero-stat">
            <strong>25+</strong>
            <span>Ans d'existence</span>
          </div>
          <div className="hero-stat">
            <strong>10 000+</strong>
            <span>Personnes bénéficiaires</span>
          </div>
          <div className="hero-stat">
            <strong>26</strong>
            <span>Groupements membres</span>
          </div>
          <div className="hero-stat">
            <strong>8</strong>
            <span>Communes couvertes</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
