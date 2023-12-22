import React from "react";
import ProjectCard from "./ProjectCard";
import "../component-styles/Projects.css"
import PizzaRat from "../img/PizzaRat.png"

function Projects(){
  return(
    <div className="projects">
      <div className="projects-text">
        Ut id ante justo. Sed elementum eleifend nulla nec ullamcorper. Praesent porta eros vitae neque ultrices pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas porttitor neque at hendrerit congue. Fusce risus turpis, volutpat sit amet elit at, pharetra dapibus lectus. Fusce eleifend diam varius, mollis mauris a, pulvinar sapien. Duis id dui maximus, convallis urna id, cursus ligula. Cras turpis eros, vulputate at aliquam in, facilisis tempor nulla. Praesent in quam iaculis, suscipit orci quis, auctor diam. Aenean id ex vel orci placerat tincidunt. Sed sagittis metus ut vestibulum aliquam.
      </div>
      <div className="projects-cards">
        <ProjectCard 
          name="Pizza Rat"
          description="An MTA-based Discord bot"
          languages="python"
          photo={PizzaRat}  
        />
        <ProjectCard 
          languages="javascript"
        />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects;