import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Scroller from "../components/Scroller";
import { scrollerImages } from "../utils/galleryImages";
import WorkTimeline from "../components/WorkTimeline";
import EducationTimeline from "../components/EducationTimeline";

function AboutPage() {
  return (
    <div className='bg-white dark:bg-black px-4 md:px-20 min-h-screen'>
      <Header />
      <About />
      <Footer />
      <WorkTimeline />
      <EducationTimeline />
      <Scroller images={scrollerImages} title="Gallery" />
    </div>
  )
}

export default AboutPage;
