import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import SupportPage from './pages/SupportPage'
import NewsPage from './pages/NewsPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/apropos" element={<AboutPage />} />
            <Route path="/projets" element={<ProjectsPage />} />
            <Route path="/soutenir" element={<SupportPage />} />
            <Route path="/actualites" element={<NewsPage />} />
            <Route path="/galerie" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
