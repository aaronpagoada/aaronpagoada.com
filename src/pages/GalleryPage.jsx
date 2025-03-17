import GalleryFooter from "../components/Footer";
import Header from "../components/Header";
import ImageMasonry from "../components/ImageMasonry";

function GalleryPage() {
  return (
    <div className='bg-white dark:bg-black px-4 md:px-20 min-h-screen'>
      <Header />
      <ImageMasonry />
      <GalleryFooter />
    </div>

  )
}

export default GalleryPage;
