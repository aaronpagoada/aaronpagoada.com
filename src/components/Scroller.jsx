function Scroller({ length }) {
  const items = new Array(length)

  for (let i = 0; i < items.length; i++) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    items[i] = randomColor
  }

  console.log(items)

  return (
    <div className="pb-8 text-gray-800 dark:text-white overflow-auto whitespace-nowrap">
      {items.map(item => (
        <div className="mr-8 p-1 border border-solid inline-block h-48 w-72" style={{ backgroundColor: `#${item}` }}>
          #{item}
        </div>
      ))
      }
    </div >
  )
}

export default Scroller;
