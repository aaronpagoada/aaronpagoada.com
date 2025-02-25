import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className='bg-white dark:bg-black px-4 md:px-20 h-screen'>
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default App
