import React from "react";
import { Typography, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
import "../component-styles/About.css";

function About(){
  return(
    <div className="about-page">
      <div className="about">
        <div className="about-flex-container">
          <div className="about-text">
            <Typography variant="body1">
              Hi, I'm Aaron!
            </Typography>
            <br />
						<Typography variant="body1">
              I am a passionate software engineer with a strong background in web development.
            </Typography>
						<br />
            <Typography variant="body1">
              I've worked on software teams at <Link to="https://vrtx.com">Vertex Pharmaceuticals</Link>, <Link to="https://gc.com/">GameChanger</Link>, <Link to="https://bowery.co/">Bowery Farming</Link>, and <Link to="https://watchwire.ai/">WatchWire</Link>.
            </Typography>
            <br />
            <Typography variant="body1">
              I recently graduated from CUNY's Macaulay Honors College where I studied Computer Science and Information Security.
            </Typography>
            <br />
            <Typography variant="body1">
              I love being out in nature and enjoy bringing others to explore with me.
            </Typography>
            <br/>
            <IconButton href="https://www.linkedin.com/in/aaronpagoada">
              <LinkedInIcon sx={{ color: "black" }}/>
            </IconButton>
            <IconButton href="https://github.com/aaronpagoada">
              <GitHubIcon sx={{ color: "black" }}/>
            </IconButton>
          </div>
        </div>
      </div>  
    </div>
	)
}

export default About;