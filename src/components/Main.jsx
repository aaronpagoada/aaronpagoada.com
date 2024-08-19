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
			<section id="about" className="about-container">
				<About />
			</section>
			<div id="work" className="work-container">
				<Work />
			</div>
			<div id="projects" className="projects-container">
				<Projects />
			</div>
			<div id="education" className="education-container">
				<Education />
			</div>	
		</div>
	)
}

export default Main