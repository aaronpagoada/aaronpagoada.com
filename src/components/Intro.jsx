import React, { useEffect } from "react";
import "../component-styles/Intro.css";
import titleCycle from "../js/titleCycle";

function Intro(){
  useEffect(() => {
    titleCycle()
  }, [])

  return (
    <div className="intro">
      <h1>Aaron Pagoada</h1>
      <div className="intro-text">
        <h2 id="title" className="active">Software engineer</h2>
      </div>
    </div>
  )
}

export default Intro