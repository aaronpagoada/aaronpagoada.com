import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import photoCycle from "../js/photoCycle";
import "../component-styles/About.css";

function About(){
	useEffect(() => {
		photoCycle()
	}, [])

  return(
    <div className="about">
      <h3>About</h3>
      <div className="about-flex-container">
        <div className="image-box">
          <img id="about-image" src={require('../img/BoweryInterns-16.jpg')} alt="Bowery Headshot" />
        </div>
        <div className="about-text">
          <Typography variant="body1">
            Hi, I'm Aaron!
          </Typography>
          <br />
					<Typography variant="body1">
            I recently graduated from Macaulay Honors College at John Jay College where I studied Computer Science and Information Security.
          </Typography>
          <br />
          <Typography variant="body1">
            In the past, I've interned on software teams at <Link to="https://gc.com/">GameChanger</Link>, <Link to="https://bowery.co/">Bowery Farming</Link>, and <Link to="https://watchwire.ai/">WatchWire</Link>. I've built modern web pages and created components to design specs. I've also integrated third-party app APIs with existing infrastructure and cleaned up data pipelines. I also worked in John Jay's Computer Science and Mathematics department as a peer mentor where I advised students every week on how to excel in school and establish the foundations for their future technical careers.
          </Typography>
          <br />
          <Typography variant="body1">
            I am a rock climbing coach and instructor at Brooklyn Boulders. I enjoy working with and teaching adults and children how to improve in the sport.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default About;