import React from "react";
import { Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import PythonLogo from "../img/Python.png"
import JavascriptLogo from "../img/javascript.png"
import "../component-styles/ProjectCard.css"

function ProjectCard({ name, description, languages, photo }){
  let languageIcon;

  switch(languages){
    case "python":
      languageIcon = PythonLogo
      break
    case "javascript":
      languageIcon = JavascriptLogo
      break
  }

  return (
    <div className="project-card">
      <img src={photo}/>
      <div className="project-info-box">
        <div className="project-info-text">
          <Typography color="white" variant="h5">{name}</Typography>
          <Typography color="white" variant="caption">{description}</Typography>
        </div>
        <div className="project-info-logos">  
          <img src={languageIcon} />
          <GitHubIcon sx={{ color: "white"}}/>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard