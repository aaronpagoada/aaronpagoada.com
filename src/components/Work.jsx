import React from "react";
import { Typography } from "@mui/material";
import WorkTimeline from "./WorkTimeline";
import Bowery from "../img/bowery.jpeg"
import GC from "../img/gc.jpeg"
import Vertex from "../img/IMG_8196(1).jpg"
import "../component-styles/Work.css"

function Work(){
  return (
    <div className="work-page">
      <div className="work">
        <h3>Work</h3>
        <WorkTimeline />
        <div className="work-photos">
          <div>
            <img src={Bowery} alt="Bowery" />
            <Typography variant="caption">Aug 2022, Bowery Farming summer interns, first on left</Typography>
          </div>
          <div>
            <img src={GC} alt="GameChanger" />
            <Typography variant="caption">Jun 2023, GameChanger summer interns, third on left</Typography>
          </div>
          <div>
            <img src={Vertex} alt="Vertex" />
            <Typography variant="caption">May 2024, Vertex summer interns, third row, fourth on right</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work