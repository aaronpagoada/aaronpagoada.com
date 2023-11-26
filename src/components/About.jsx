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
          <p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ultrices nibh. Aenean vel orci sem. Curabitur pellentesque placerat nunc et consequat. Quisque porttitor arcu lectus, in pellentesque erat fringilla at. Integer lobortis mi nec ex ornare, quis aliquam magna vestibulum. Phasellus magna lorem, porta sit amet erat in, hendrerit rutrum diam. Donec tincidunt tellus vestibulum urna accumsan sodales. Nunc et laoreet diam. Mauris vitae leo ultricies lectus gravida tincidunt. Aliquam mi sapien, consectetur eget massa eget, varius posuere urna. Sed pharetra cursus lectus non mattis. Mauris ac ex eu tortor elementum fermentum. Integer aliquet sapien sed posuere commodo. Duis ac odio euismod, posuere turpis id, eleifend mi. Nullam commodo convallis lorem. Vivamus vehicula nisi eros.
					</p>
					<p>
						Ut id ante justo. Sed elementum eleifend nulla nec ullamcorper. Praesent porta eros vitae neque ultrices pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas porttitor neque at hendrerit congue. Fusce risus turpis, volutpat sit amet elit at, pharetra dapibus lectus. Fusce eleifend diam varius, mollis mauris a, pulvinar sapien. Duis id dui maximus, convallis urna id, cursus ligula. Cras turpis eros, vulputate at aliquam in, facilisis tempor nulla. Praesent in quam iaculis, suscipit orci quis, auctor diam. Aenean id ex vel orci placerat tincidunt. Sed sagittis metus ut vestibulum aliquam.
					</p>
        </div>
      </div>
    </div>
  )
}

export default About;