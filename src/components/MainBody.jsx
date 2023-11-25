import React from "react";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";

function MainBody(){  
  return(
    <div className="main-body">
      <Intro />
      <About />
      <Projects />
      <Education />
    </div>
  )
}

export default MainBody