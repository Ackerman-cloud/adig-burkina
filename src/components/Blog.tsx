interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  comments: number
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Journée Mondiale de la Santé Mentale célébrée à Boulsa",
    excerpt: "ADIG a organisé sa journée annuelle de sensibilisation sur la santé mentale à Boulsa, en collaboration avec le District Sanitaire, le Haut-Commissariat et la Mairie, rassemblant des centaines de participants.",
    date: "10 Octobre 2024",
    author: "Équipe ADIG",
    comments: 18,
    image: "/adig-sante-mentale.jpg"
  },
  {
    id: 2,
    title: "Visite du chantier du futur centre d'accueil pour malades mentaux",
    excerpt: "Des responsables, autorités et partenaires ont visité le terrain d'un hectare à Boulsa destiné à la construction d'un centre d'accueil et d'hébergement pour les malades mentaux errants dans la commune.",
    date: "22 Février 2026",
    author: "Équipe ADIG",
    comments: 9,
    image: "/adig-evenement.jpg"
  },
  {
    id: 3,
    title: "Distribution de vivres et assistance aux malades mentaux en milieu rural",
    excerpt: "Les équipes d'ADIG poursuivent leurs tournées régulières pour apporter un appui alimentaire, une assistance et un soutien continu aux personnes vulnérables et malades mentaux dans les communes du Namentenga.",
    date: "22 Février 2026",
    author: "Équipe ADIG",
    comments: 14,
    image: "/adig-distribution.jpg"
  }
]

const Blog: React.FC = () => {
  return (
    <section className="section blog" id="blog">
      <div className="container">
        <div className="section-title">
          <h2>Actualités</h2>
          <p>
            Suivez nos dernières actions sur le terrain et découvrez l'impact
            de nos projets dans les communautés du Namentenga
          </p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} />
              <div className="blog-content">
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <span>{post.comments} commentaires</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={`#blog-${post.id}`} className="btn" style={{ marginTop: '1rem' }}>
                  Lire la suite
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
