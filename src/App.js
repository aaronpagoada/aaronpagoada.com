import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/'>
					<Route element={<MainLayout />}> 
          	<Route index element={<Main />} />	
					</Route>
				</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
