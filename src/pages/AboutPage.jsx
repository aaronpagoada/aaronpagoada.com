import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Scroller from "../components/Scroller";

import shs from "../assets/img/soccerhs.jpg"
import shs2 from "../assets/img/soccerhs2.jpg"

function AboutPage() {
  const images = [shs, shs2]

  return (
    <div className='bg-white dark:bg-black px-4 md:px-20 min-h-screen'>
      <Header />
      <About />
      <Footer />
      <Scroller images={images} />
    </div>
  )
}

export default AboutPage;
