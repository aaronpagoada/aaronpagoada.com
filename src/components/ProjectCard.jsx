import React from "react";
import { Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import PythonLogo from "../img/Python.png"
import JavascriptLogo from "../img/javascript.png"
import ReactLogo from "../img/logo192.png"
import "../component-styles/ProjectCard.css"

function ProjectCard({ name, description, language, photo }){
  let languageIcon;

  switch(language){
    case "python":
      languageIcon = PythonLogo
      break
    case "javascript":
      languageIcon = JavascriptLogo
      break
    case "react":
      languageIcon = ReactLogo
      break
  }

  return (
    <div className="project-card">
      <img src={photo} alt={photo}/>
      <div className="project-info-box">
        <div className="project-info-text">
          <Typography color="white" variant="h5">{name}</Typography>
          <Typography color="white" variant="caption">{description}</Typography>
        </div>
        <div className="project-info-logos">  
          <img src={languageIcon} alt={language}/>
          <GitHubIcon sx={{ color: "white"}}/>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard