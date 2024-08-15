import React from "react";
import { Typography } from "@mui/material";
import EducationTimeline from "./EducationTimeline";
import SoccerHS from "../img/soccerhs2.jpg"
import WSC from "../img/wsc.jpg"
import Climbing from "../img/climbing.jpg"
import SoccerUni from "../img/socceruni.jpeg"
import "../component-styles/Education.css"

function Education(){
  return(
    <div className="education-page">
      <div className="education">
        <EducationTimeline />
        <div className="education-photos">
          <div>
            <img src={SoccerUni} alt="JJ Soccer" />
            <Typography variant="caption">Sep 2022, John Jay goalkeepers, right</Typography>
          </div>
          <div>
            <img src={Climbing} alt="Climbing" />
            <Typography variant="caption">Apr 2022, leading a climbing outing for my peers in the John Jay Honors Program, squatting</Typography>
          </div>
          <div>
            <img src={WSC} alt="WSC" />
            <Typography variant="caption">Jan 2019, World Scholar's Cup regional round in New York</Typography>
          </div>
          <div>
            <img src={SoccerHS} alt="BTHS Soccer" />
            <Typography variant="caption">Sep 2018, Brooklyn Tech varsity soccer, orange jersey</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;