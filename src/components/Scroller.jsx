function Scroller({ images, title }) {
  return (
    <div className="pb-8">
      <h1 className="text-xl font-bold pb-4">{title}</h1>
      <div className="pb-4 text-stone-800 dark:text-white overflow-auto whitespace-nowrap">
        {images.map(image => (
          <div className="mr-8 p-1 border border-solid inline-block h-60 w-80">
            <img className="object-cover w-full h-full" src={image} />
          </div>
        ))}
        <div className="text-stone-800 bg-stone-100 dark:text-white dark:bg-stone-900 inline-block pt-27 pb-26.5 w-80 text-center align-top">
          View gal
        </div>
      </div >
    </div>
  )
}

export default Scroller;
