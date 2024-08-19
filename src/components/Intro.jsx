import React, { useEffect } from "react";
import titleCycle from "../js/titleCycle";
import "../component-styles/Intro.css";

function Intro(){
  useEffect(() => {
    titleCycle()
  }, [])

  return (
    <div className="intro">
			<div className="intro-photo">
					<div className="intro-photo-backdrop"></div>
					<img id="about-image" src={require('../img/BoweryInterns-16.png')} alt="Bowery Headshot" />
			</div>
			<div className="intro-text">
				<h1>Aaron Pagoada</h1>
      	<div className="intro-text-titles">
        	<h2 id="title" className="active">Software Engineer</h2>
      	</div>
			</div>
    </div>
  )
}

export default Intro