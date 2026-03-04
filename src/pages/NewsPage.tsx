import Blog from '../components/Blog'

const NewsPage: React.FC = () => (
  <>
    <div className="page-hero">
      <div className="container">
        <h1>Actualités</h1>
        <p>Suivez les dernières actions et activités d'ADIG Guésbéogo sur le terrain</p>
      </div>
    </div>
    <Blog />
  </>
)

export default NewsPage
