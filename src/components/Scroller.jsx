function Scroller({ images, title }) {
  return (
    <div className="pb-8">
      <h1 className="text-xl font-bold pb-4">{title}</h1>
      <div className="pb-4 text-gray-800 dark:text-white overflow-auto whitespace-nowrap">
        {images.map(image => (
          <div className="mr-8 p-1 border border-solid inline-block h-54 w-72">
            <img className="object-cover h-full" src={image} />
          </div>
        ))}
      </div >
    </div>
  )
}

export default Scroller;
