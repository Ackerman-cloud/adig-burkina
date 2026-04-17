interface Cause {
  id: number
  title: string
  description: string
  raised: number
  goal: number
  image: string
  lastDonation: string
}

const causes: Cause[] = [
  {
    id: 1,
    title: "Encadrement des malades mentaux",
    description: "Soins sanitaires, hygiène corporelle et vestimentaire, appui alimentaire et réinsertion familiale des malades mentaux errants dans la province du Namentenga.",
    raised: 5000000,
    goal: 24680000,
    image: "/adig-sante-mentale.jpg",
    lastDonation: "il y a 3 jours"
  },
  {
    id: 2,
    title: "Sensibilisation Santé",
    description: "Causeries éducatives et émissions radio pour la lutte contre les IST/VIH/SIDA, le paludisme, le tabagisme et les boissons alcoolisées frelatées dans les communes du Namentenga.",
    raised: 300000,
    goal: 1250000,
    image: "/adig-consultation.jpg",
    lastDonation: "il y a 1 semaine"
  },
  {
    id: 3,
    title: "Alphabétisation des populations",
    description: "Ouverture de centres d'alphabétisation (CFE, FTS, CBN2Jeune) en partenariat avec le FONAENF pour l'éducation non formelle des adultes dans les 8 communes.",
    raised: 313500,
    goal: 9634262,
    image: "/adig-rassemblement.jpg",
    lastDonation: "il y a 5 jours"
  },
  {
    id: 4,
    title: "Protection de l'environnement",
    description: "Causeries éducatives, journées de reboisement et protection de forêts villageoises dans les villages de Belga, Bonam et Lilyala (110 hectares protégés).",
    raised: 200000,
    goal: 710000,
    image: "/nature-tree.png",
    lastDonation: "il y a 2 jours"
  },
  {
    id: 5,
    title: "Élevage et Pisciculture",
    description: "Embouche bovine, pisciculture et production de miel au profit des familles démunies et des malades mentaux stabilisés accompagnés en AGR (Activités Génératrices de Revenus).",
    raised: 1500000,
    goal: 11928000,
    image: "/adig-distribution.jpg",
    lastDonation: "il y a 4 jours"
  },
  {
    id: 6,
    title: "Agriculture et Transformation locale",
    description: "Jardinage, fabrication de soumbala et beurre de karité pour les groupements féminins de l'association. Formation aux techniques agricoles modernes (cordons pierreux, zaï).",
    raised: 1050000,
    goal: 7050000,
    image: "/gardening.png",
    lastDonation: "il y a 1 jour"
  }
]

const Causes: React.FC = () => {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0
    }).format(amount)
  }

  return (
    <section className="section causes" id="causes">
      <div className="container">
        <div className="section-title">
          <h2>Nos Activités et Projets</h2>
          <p>
            Découvrez les projets que nous menons pour le développement
            des communautés rurales du Namentenga, Burkina Faso
          </p>
        </div>
        <div className="causes-grid">
          {causes.map((cause) => {
            const progressPercentage = Math.min((cause.raised / cause.goal) * 100, 100)
            return (
              <div key={cause.id} className="cause-card">
                <img src={cause.image} alt={cause.title} />
                <div className="cause-content">
                  <h3>{cause.title}</h3>
                  <p>{cause.description}</p>
                  <div className="progress-info">
                    <span>Dernier soutien {cause.lastDonation}</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="donation-info">
                    <span className="raised">
                      {formatAmount(cause.raised)} collectés sur {formatAmount(cause.goal)}
                    </span>
                    <a href="#contact" className="btn">Soutenir</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Causes
