import React, { useEffect } from "react";
import titleCycle from "../js/titleCycle";
import "../component-styles/Intro.css";

function Intro(){
  useEffect(() => {
    titleCycle()
  }, [])

  return (
    <div className="intro">
      <h1>Aaron Pagoada</h1>
      <div className="intro-text">
        <h2 id="title" className="active">Software Engineer</h2>
      </div>
    </div>
  )
}

export default Intro