import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import SubLayout from './components/layouts/SubLayout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Work from './components/Work';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
					<Route element={<MainLayout />}> 
          	<Route index element={<Home />} />	
					</Route>
					<Route element={<SubLayout />}>
						<Route path='about' element={<About />} />
						<Route path='projects' element={<Projects />} />
						<Route path='education' element={<Education />} />
						<Route path='work' element={<Work />} />
					</Route>
				</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
