import React, { useState } from 'react'
import { Typography } from '@mui/material'
import "../component-styles/Slideshow.css"

function Slideshow({ images, captions }) {
  const [index, setIndex] = useState(0)

  return (
    <div className='slideshow'>
      <div 
        className="slides-container"
        style={{ transform: `translateX(${-index * 100}%)` }}  
      >
        {images.map((image) => (
          <img src={image} />
        ))}
        <div 
          className="captions"
        >
          {captions.map((caption) => (
            <Typography variant="caption">{caption}</Typography>
          ))}
        </div>
      </div>
      <div className="slideshow-dots">
        {images.map((_, idx) => (
          <div 
            className={`dot${index === idx ? " active" : ""}`} 
            key={idx} 
            onClick={() => {
              setIndex(idx)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow