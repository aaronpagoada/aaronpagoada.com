import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';

function App2() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App2;
