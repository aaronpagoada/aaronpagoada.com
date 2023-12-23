import React from "react";
import ProjectCard from "./ProjectCard";
import PizzaRat from "../img/PizzaRat.png"
import PagoadaDotCom from "../img/Website.png"
import DoctorHelp from "../img/DoctorHelp.png"
import Watson from "../img/Watson.png"
import "../component-styles/Projects.css"
const data = require("../data/Projects.json")

function Projects(){
  return(
    <div className="projects">
      <div className="projects-text">
        Ut id ante justo. Sed elementum eleifend nulla nec ullamcorper. Praesent porta eros vitae neque ultrices pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas porttitor neque at hendrerit congue. Fusce risus turpis, volutpat sit amet elit at, pharetra dapibus lectus. Fusce eleifend diam varius, mollis mauris a, pulvinar sapien. Duis id dui maximus, convallis urna id, cursus ligula. Cras turpis eros, vulputate at aliquam in, facilisis tempor nulla. Praesent in quam iaculis, suscipit orci quis, auctor diam. Aenean id ex vel orci placerat tincidunt. Sed sagittis metus ut vestibulum aliquam.
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