import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Scroller from "../components/Scroller";

function AboutPage() {
  return (
    <div className='bg-white dark:bg-black px-4 md:px-20 min-h-screen'>
      <Header />
      <About />
      <Footer />
      <Scroller length={6} />
    </div>
  )
}

export default AboutPage;
