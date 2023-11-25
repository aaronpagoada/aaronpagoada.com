import React from "react";
import "../component-styles/About.css";

function About(){
  return(
    <div className="about">
      <h3>About</h3>
      <div className="about-flex-container">
        <div className="image-box">
          <img src={require('../img/DSC00633.JPG')} alt="Blair Witch Stand" />
        </div>
        <div className="about-text">
          More info
        </div>
      </div>
    </div>
  )
}

export default About;