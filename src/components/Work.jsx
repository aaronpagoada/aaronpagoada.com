import React from "react";
import WorkTimeline from "./WorkTimeline";
import Slideshow from "./Slideshow";
import Bowery from "../img/bowery.jpeg"
import GC from "../img/gc.jpeg"
import Vertex from "../img/IMG_8196(1).jpg"
import "../component-styles/Work.css"

function Work(){
  const images = [Vertex, GC, Bowery]
  const captions = [
    "May 2024, Vertex summer interns, third row, fourth on right",
    "Jun 2023, GameChanger summer interns, third on left",
    "Aug 2022, Bowery Farming summer interns, first on left"
  ]

  return (
    <div className="work-page">
      <div className="work">
        <WorkTimeline />
        <Slideshow images={images} captions={captions} />
      </div>
    </div>
  )
}

export default Work