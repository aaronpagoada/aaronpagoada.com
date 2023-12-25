import React from "react";
import { Typography } from "@mui/material";
import EducationTimeline from "./EducationTimeline";
import Forensics from "../img/forensics.jpg"
import WSC from "../img/wsc.jpg"
import Climbing from "../img/climbing.jpg"
import "../component-styles/Education.css"

function Education(){
  return(
    <div className="education">
      <h3>Education</h3>
			<EducationTimeline />
			<div className="education-photos">
        <div>
          <img src={Forensics} alt="Forensics" />
          <Typography variant="caption">Dec 2018, forensics lab, middle</Typography>
        </div>
        <div>
          <img src={WSC} alt="WSC" />
          <Typography variant="caption">Jan 2019, World Scholar's Cup regional round in New York</Typography>
        </div>
				<div>
          <img src={Climbing} alt="Climbing" />
          <Typography variant="caption">Apr 2022, leading a climbing outing for my peers in the John Jay Honors Program, squatting</Typography>
        </div>
      </div>
		</div>
  )
}

export default Education;