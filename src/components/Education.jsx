import React from "react";
import EducationTimeline from "./EducationTimeline";
import Slideshow from "./Slideshow";
import SoccerHS from "../img/soccerhs2.jpg"
import WSC from "../img/wsc.jpg"
import Climbing from "../img/climbing.jpg"
import SoccerUni from "../img/socceruni.jpeg"
import "../component-styles/Education.css"

function Education(){
  const images = [SoccerUni, Climbing, WSC, SoccerHS]
  const captions = [
    "Sep 2022, John Jay goalkeepers, right",
    "Apr 2022, leading a John Jay Honors Program climbing day, squatting",
    "Jan 2019, World Scholar's Cup regional round in New York",
    "Sep 2018, Brooklyn Tech varsity soccer, orange jersey"
  ]

  return(
    <div className="education-page">
      <div className="education">
        <EducationTimeline />
        <Slideshow images={images} captions={captions}/>
      </div>
    </div>
  )
}

export default Education;