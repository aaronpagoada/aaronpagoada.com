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
        <span className="title active">Software engineer </span>
        <span className="title inactive">Climber </span>
        <span className="title inactive">Hiker </span>
        <span className="title inactive">Soccer player </span>
        <span className="title inactive">Builder </span>
      </div>
    </div>
  )
}

export default Intro