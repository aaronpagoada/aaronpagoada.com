import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Map from './components/Map';
//import MainBody from './components/MainBody';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='education' element={<Education />} />
          <Route path='map' element={<Map />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
