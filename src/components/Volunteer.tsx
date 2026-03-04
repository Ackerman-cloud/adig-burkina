const Volunteer: React.FC = () => {
  return (
    <section className="section volunteer" id="dons">
      <div className="container">
        <h2>Soutenez nos Actions</h2>
        <p>
          Rejoignez notre équipe de bénévoles ou apportez votre soutien financier
          pour contribuer au développement des communautés rurales du Namentenga.
          Ensemble, nous faisons la différence.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn">Devenir bénévole</a>
          <a href="mailto:adig.association@yahoo.com" className="btn btn-secondary">Faire un don</a>
        </div>
      </div>
    </section>
  )
}

export default Volunteer
