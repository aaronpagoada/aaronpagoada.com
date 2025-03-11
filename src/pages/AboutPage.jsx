import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Scroller from "../components/Scroller";
import Eventline from "../components/Eventline";
import galleryImages from "../utils/galleryImages";
import work from "../data/Work.json"
import education from "../data/Education.json"

function AboutPage() {
  return (
    <div className='bg-white dark:bg-black px-4 md:px-20 min-h-screen'>
      <Header />
      <About />
      <Footer />
      <Eventline title="Work" items={work.work} />
      <Eventline title="Education" items={education.education} />
      <Scroller images={galleryImages} title="Gallery" />
    </div>
  )
}

export default AboutPage;
