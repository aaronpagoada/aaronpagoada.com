import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom"
import ProjectCard from "./ProjectCard";
import PizzaRat from "../img/PizzaRat.png"
import PagoadaDotCom from "../img/Website.png"
import DoctorHelp from "../img/DoctorHelp.png"
import Watson from "../img/Watson.png"
import Scout from '../img/logo.svg'
import "../component-styles/Projects.css"
const data = require("../data/Projects.json")

function Projects(){
  return(
    <div className="projects">
      <div className="projects-text">
        <Typography variant="body1">
					Professionally, I've used React, TypeScript, JavaScript, Python, and Elixir. My personal projects are mostly built with some set of these languages.
				</Typography>
				<br/>
				<Typography variant="body1">
					All of my projects are hosted on <Link to="https://github.com/aaronpagoada"> my Github</Link>.
				</Typography>
      </div>
      <div className="projects-cards">
        {data.projects.map((project) => {
          let projectImage;

          switch(project.photo){
            case "pizzarat":
              projectImage = PizzaRat
              break
            case "pagoadadotcom":
              projectImage = PagoadaDotCom
              break
            case "doctorhelp":
              projectImage = DoctorHelp
              break
            case "watson":
              projectImage = Watson
              break
						case "scout":
							projectImage = Scout
          }

          return (
            <ProjectCard 
              name={project.name}
              description={project.description}
              language={project.language}
              photo={projectImage}
              link={project.link}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects;