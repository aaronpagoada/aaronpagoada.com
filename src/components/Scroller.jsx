import { Link } from "react-router-dom";

function Scroller({ images, title }) {
  return (
    <div className="pb-8 text-stone-800 dark:text-white">
      <h1 className="text-xl font-bold pb-4">{title}</h1>
      <div className="pb-4 overflow-auto whitespace-nowrap">
        {images.map(image => (
          <div className="mr-8 p-1 border border-solid inline-block h-60 w-80">
            <img className="object-cover w-full h-full" src={image} loading="lazy" />
          </div>
        ))}
        <Link to="/gallery">
          <div className="group relative text-stone-800 bg-stone-100 dark:text-white dark:bg-stone-900 inline-block pt-27 pb-26.5 w-80 text-center align-top">
            <span>
              View gallery
              <span className="absolute ml-2 opacity-0 transition group-hover:opacity-100 group-hover:translate-x-4">→</span>
            </span>
          </div>
        </Link>
      </div >
    </div>
  )
}

export default Scroller;
