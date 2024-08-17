import React from "react";
import Intro from "./Intro";
import About from "./About";
import Work from "./Work";
import Projects from "./Projects";
import Education from "./Education";
import "../component-styles/Main.css"

function Main() {
	return (
		<div className="main-container">
			<div className="intro-container">
				<div className="intro-overlay"></div>
				<Intro />
			</div>
			<div className="about-container">
				<About />
			</div>
			<div className="work-container">
				<Work />
			</div>
			<div className="projects-container">
				<Projects />
			</div>
			<div className="education-container">
				<Education />
			</div>	
		</div>
	)
}

export default Main