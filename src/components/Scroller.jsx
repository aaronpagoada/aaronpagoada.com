function Scroller({ images }) {
  //const items = new Array(length)

  //for (let i = 0; i < items.length; i++) {
  //let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  //items[i] = randomColor
  //}

  console.log(images)

  return (
    <div className="pb-8 text-gray-800 dark:text-white overflow-auto whitespace-nowrap">
      {images.map(image => (

        <div className="mr-8 p-1 border border-solid inline-block h-54 w-72">
          <img className="object-cover h-full" src={image} />
        </div>
      ))
      }
    </div >
  )
}

export default Scroller;
