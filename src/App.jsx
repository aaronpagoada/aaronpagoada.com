import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
