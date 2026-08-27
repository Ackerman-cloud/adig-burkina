import { useState, useEffect, useCallback } from 'react'

interface GalleryImage {
  src: string
  caption: string
}

const images: GalleryImage[] = [
  { src: '/adig-salle-consultation.jpg',         caption: 'Salle de consultation médicale et suivi des soins' },
  { src: '/adig-preparatifs-soins.jpg',          caption: 'Matériel médical, tests de dépistage et équipements de santé' },
  { src: '/adig-consultation-medicale.jpg',      caption: 'Bureau de consultation médicale et prescriptions' },
  { src: '/adig-ceremonie-remise.jpg',           caption: 'Cérémonie officielle de remise de dons lors de la Journée des Malades' },
  { src: '/adig-distinction-officielle.jpg',      caption: 'Remise officielle de distinctions et de reconnaissances' },
  { src: '/adig-remise-officielle.jpg',          caption: 'Remise de vivres et matériels par les responsables d\'ADIG' },
  { src: '/adig-stock-vivres.jpg',               caption: 'Stocks de vivres et denrées pour l\'appui alimentaire' },
  { src: '/adig-dotation-communautaire.jpg',      caption: 'Dotations en vivres, nattes et fournitures aux bénéficiaires' },
  { src: '/adig-allocution-medias.jpg',          caption: 'Sensibilisation et allocution devant les médias' },
  { src: '/adig-point-presse.jpg',               caption: 'Point de presse et présentation des dons d\'assistance' },
  { src: '/adig-discours-officiels.jpg',          caption: 'Interventions des autorités et partenaires locaux' },
  { src: '/adig-education-classe.jpg',           caption: 'Séance d\'alphabétisation sous abri avec les bénéficiaires' },
  { src: '/adig-environnement-reboisement.jpg',  caption: 'Journée de reboisement et pépinière communautaire' },
  { src: '/adig-environnement-cordons.jpg',      caption: 'Aménagement de cordons pierreux pour la protection des sols' },
  { src: '/adig-environnement-zai.jpg',          caption: 'Travaux communautaires et techniques traditionnelles de zaï' },
  { src: '/adig-sante-mentale.jpg',              caption: 'Journée Mondiale de la Santé Mentale à Boulsa' },
  { src: '/adig-evenement.jpg',                  caption: 'Visite officielle du chantier du centre d\'accueil' },
  { src: '/adig-education.jpg',                  caption: 'Activités d\'alphabétisation et éducation non formelle' },
  { src: '/adig-evenement-2020.jpg',             caption: 'Célébration de la Journée de la Santé Mentale 2020' },
  { src: '/adig-rassemblement.jpg',              caption: 'Rassemblement communautaire ADIG' },
  { src: '/adig-distribution.jpg',               caption: 'Distribution de vivres aux malades mentaux' },
  { src: '/adig-g1.jpg',                         caption: 'Activités sur le terrain — Namentenga' },
  { src: '/adig-g6.jpg',                         caption: 'Accompagnement des familles bénéficiaires' },
  { src: '/adig-g7.jpg',                         caption: 'Actions de solidarité en province du Namentenga' },
]

const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null)

  const close = useCallback(() => setSelected(null), [])

  const prev = useCallback(() => {
    setSelected(i => (i === null ? null : (i - 1 + images.length) % images.length))
  }, [])

  const next = useCallback(() => {
    setSelected(i => (i === null ? null : (i + 1) % images.length))
  }, [])

  useEffect(() => {
    if (selected === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected, close, prev, next])

  return (
    <section className="section gallery" id="galerie">
      <div className="container">
        <div className="section-title">
          <h2>Galerie Photos</h2>
          <p>Retrouvez nos actions sur le terrain à travers ces photos des activités d'ADIG Guésbéogo</p>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => setSelected(i)}
              role="button"
              tabIndex={0}
              aria-label={img.caption}
              onKeyDown={e => e.key === 'Enter' && setSelected(i)}
            >
              <img src={img.src} alt={img.caption} loading="lazy" />
              <div className="gallery-item-overlay">
                <span className="gallery-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="lightbox"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Vue agrandie"
        >
          <button className="lightbox-close" onClick={close} aria-label="Fermer">✕</button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Image précédente"
          >
            ‹
          </button>

          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img
              className="lightbox-img"
              src={images[selected].src}
              alt={images[selected].caption}
            />
            <p className="lightbox-caption">{images[selected].caption}</p>
            <p className="lightbox-counter">{selected + 1} / {images.length}</p>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Image suivante"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery
