import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Scroller from "../components/Scroller";
import galleryImages from "../utils/galleryImages";

function AboutPage() {
  return (
    <div className='bg-white dark:bg-black px-4 md:px-20 min-h-screen'>
      <Header />
      <About />
      <Footer />
      <Scroller images={galleryImages} title="Gallery" />
    </div>
  )
}

export default AboutPage;
