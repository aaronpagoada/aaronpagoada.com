import React, { useState } from 'react'
import "../component-styles/Slideshow.css"

function Slideshow() {
  const colors = ["#0088FE", "#00C49F", "#FFBB28"]
  const [index, setIndex] = useState(0)

  return (
    <div className='slideshow'>
      <div 
        className="slides-container"
        style={{ transform: `translateX(${-index * 100}%)` }}  
      >
        {
          colors.map((color, index) => (
            <div className="slide" key={index} style={{ backgroundColor: `${color}` }} />
          ))
        }
      </div>
      <div className="slideshow-dots">
        {
          colors.map((_, idx) => (
            <div className='dot' key={idx} onClick={() => {
              setIndex(idx)
            }}></div>
          ))
        }
      </div>
    </div>
  )
}

export default Slideshow