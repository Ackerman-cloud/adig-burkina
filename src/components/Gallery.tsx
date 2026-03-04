import { useState, useEffect, useCallback } from 'react'

interface GalleryImage {
  src: string
  caption: string
}

const images: GalleryImage[] = [
  { src: '/adig-sante-mentale.jpg',  caption: 'Journée Mondiale de la Santé Mentale à Boulsa' },
  { src: '/adig-evenement.jpg',      caption: 'Visite officielle du chantier du centre d\'accueil' },
  { src: '/adig-soins.jpg',          caption: 'Soins et hygiène pour les malades mentaux' },
  { src: '/adig-communaute.jpg',     caption: 'Visite et suivi en milieu communautaire' },
  { src: '/adig-consultation.jpg',   caption: 'Consultation et suivi des bénéficiaires' },
  { src: '/adig-rassemblement.jpg',  caption: 'Rassemblement communautaire ADIG' },
  { src: '/adig-distribution.jpg',   caption: 'Distribution de vivres aux malades mentaux' },
  { src: '/adig-g1.jpg',             caption: 'Activités sur le terrain — Namentenga' },
  { src: '/adig-g2.jpg',             caption: 'Activités sur le terrain — Namentenga' },
  { src: '/adig-g3.jpg',             caption: 'Visite des responsables et partenaires' },
  { src: '/adig-g4.jpg',             caption: 'Actions communautaires ADIG 2026' },
  { src: '/adig-g5.jpg',             caption: 'Suivi des malades mentaux réinsérés' },
  { src: '/adig-g6.jpg',             caption: 'Accompagnement des familles bénéficiaires' },
  { src: '/adig-g7.jpg',             caption: 'Actions de solidarité en province du Namentenga' },
  { src: '/adig-g8.jpg',             caption: 'Activités ADIG — Boulsa 2026' },
  { src: '/adig-g9.jpg',             caption: 'Groupements féminins ADIG en activité' },
  { src: '/adig-g10.jpg',            caption: 'Groupements féminins ADIG en activité' },
  { src: '/adig-g11.jpg',            caption: 'Activités de terrain — juillet 2025' },
  { src: '/adig-g12.jpg',            caption: 'Activités de terrain — juillet 2025' },
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
