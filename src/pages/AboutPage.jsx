import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Scroller from "../components/Scroller";
import galleryImages from "../utils/galleryImages";
import Timeline from "../components/Timeline";

function AboutPage() {
  return (
    <div className='bg-white dark:bg-black px-4 md:px-20 min-h-screen'>
      <Header />
      <About />
      <Footer />
      <Timeline title="Work" />
      <Timeline title="Education" />
      <Scroller images={galleryImages} title="Gallery" />
    </div>
  )
}

export default AboutPage;
