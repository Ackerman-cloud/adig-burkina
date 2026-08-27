interface Cause {
  id: number
  title: string
  description: string
  image: string
}

const causes: Cause[] = [
  {
    id: 1,
    title: "Encadrement & Soins des malades mentaux",
    description: "Soins médicaux, hygiène corporelle et vestimentaire mensuelle, appui alimentaire et réinsertion familiale des malades mentaux errants dans la province du Namentenga. Déjà 461 malades accompagnés.",
    image: "/adig-consultation-medicale.jpg",
  },
  {
    id: 2,
    title: "Construction du Centre d'Accueil et d'Hébergement",
    description: "Construction d'un centre d'accueil, d'hébergement et de cuisine sur le terrain d'un hectare borné au secteur 05 (Tangporé) à Boulsa pour l'assistance digne et continue des malades mentaux errants.",
    image: "/adig-evenement.jpg",
  },
  {
    id: 3,
    title: "Éducation & Alphabétisation des populations",
    description: "Ouverture et animation de centres d'alphabétisation (CFE, FTS, CBN2Jeunes) en partenariat avec le FONAENF dans les 8 communes du Namentenga. Déjà 1 920 personnes alphabétisées.",
    image: "/adig-education.jpg",
  },
  {
    id: 4,
    title: "Protection de l'Environnement & Reboisement",
    description: "Protection de 110 hectares de forêts villageoises (Belga, Bonam, Lilyala), aménagement de 210 ha de cordons pierreux et zaï, journées de reboisement et causeries éducatives.",
    image: "/adig-environnement-reboisement.jpg",
  },
  {
    id: 5,
    title: "Sensibilisation Santé & Mobilisation Sociale",
    description: "Causeries éducatives et émissions radio pour la lutte contre les IST/VIH/SIDA, la tuberculose, le paludisme, le tabagisme et les boissons frelatées dans les communes et établissements secondaires.",
    image: "/adig-preparatifs-soins.jpg",
  }
]

const Causes: React.FC = () => {
  return (
    <section className="section causes" id="causes">
      <div className="container">
        <div className="section-title">
          <h2>Nos Activités et Projets</h2>
          <p>
            Découvrez les projets que nous menons pour le développement
            et la dignité des communautés du Namentenga, Burkina Faso
          </p>
        </div>
        <div className="causes-grid">
          {causes.map((cause) => (
            <div key={cause.id} className="cause-card">
              <img src={cause.image} alt={cause.title} />
              <div className="cause-content">
                <h3>{cause.title}</h3>
                <p>{cause.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Causes
