import { useState, type FormEvent } from 'react'

const partners = [
  'Haut-Commissariat du Namentenga',
  'Mairie de la Commune de Boulsa',
  'Ministère de la Santé du Burkina Faso',
  'Ministère de la Solidarité et de l\'Action Humanitaire',
  'Ministère de la Justice et des Droits Humains',
  'FONAENF (Alphabétisation & Éducation Non Formelle)',
  'FEM/ONG',
  'OCADES / RBC Kaya',
  'Menschen Ohne Kentten — Allemagne',
  'Cercle des Amis de St. Camille — Allemagne',
  'District Sanitaire de Boulsa',
  'SAPAD',
]

const distinctions = [
  { year: '2019', label: 'Chevalier de l\'ordre du mérite de la santé et de l\'action sociale' },
  { year: '2022', label: 'Ambassadeur pour la Paix Universelle' },
  { year: '2017', label: 'Certificat de Reconnaissance — Ministère de l\'Administration Territoriale' },
  { year: '2016', label: 'Convention de Partenariat — Ministère de la Solidarité' },
  { year: '2017', label: 'Convention de Collaboration — Ministère de la Santé' },
  { year: '2023', label: 'Convention de Collaboration — Ministère de la Justice' },
]

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`)
    const subj = encodeURIComponent(subject || 'Contact depuis le site ADIG')
    window.location.href = `mailto:adig.association@yahoo.com?subject=${subj}&body=${body}`
  }

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }))

  return (
    <section className="section contact-section" id="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Contactez-nous</h2>
          <p>Vous souhaitez nous rejoindre, nous soutenir ou en savoir plus ? Écrivez-nous.</p>
        </div>

        <div className="contact-grid">
          {/* Colonne gauche */}
          <div className="contact-left">

            {/* Coordonnées */}
            <div className="contact-info-block">
              <h3>Nos coordonnées</h3>
              <ul className="contact-info-list">
                <li>
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Adresse</strong>
                    <p>BP 292 Boulsa, secteur 05 (Tangporé)<br />Province du Namentenga<br />Région du Centre-Nord, Burkina Faso</p>
                  </div>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Téléphone</strong>
                    <p>
                      <a href="tel:+22670361097">+226 70 36 10 97</a><br />
                      <a href="tel:+22679554320">+226 79 55 43 20</a>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="contact-icon">💬</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <p><a href="https://wa.me/22653861272">+226 53 86 12 72</a></p>
                  </div>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:adig.association@yahoo.com">adig.association@yahoo.com</a></p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Distinctions */}
            <div className="contact-info-block">
              <h3>Reconnaissances & Distinctions</h3>
              <ul className="distinctions-list">
                {distinctions.map((d, i) => (
                  <li key={i}>
                    <span className="distinction-year">{d.year}</span>
                    <span>{d.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partenaires */}
            <div className="contact-info-block">
              <h3>Nos Partenaires</h3>
              <div className="partners-grid">
                {partners.map((p, i) => (
                  <div key={i} className="partner-tag">{p}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="contact-right">
            <div className="contact-info-block">
              <h3>Envoyez-nous un message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={set('name')}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={form.email}
                      onChange={set('email')}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select id="subject" value={form.subject} onChange={set('subject')}>
                    <option value="">Choisir un sujet...</option>
                    <option value="Bénévolat">Devenir bénévole</option>
                    <option value="Don ou partenariat">Don ou partenariat</option>
                    <option value="Demande d'information">Demande d'information</option>
                    <option value="Presse / Média">Presse / Média</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Votre message..."
                    value={form.message}
                    onChange={set('message')}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-contact">
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Carte */}
            <div className="contact-info-block map-block">
              <h3>Notre localisation — Boulsa, Namentenga</h3>
              <div className="map-embed">
                <iframe
                  title="Localisation ADIG Boulsa"
                  src="https://maps.google.com/maps?q=Boulsa,Burkina+Faso&z=13&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
