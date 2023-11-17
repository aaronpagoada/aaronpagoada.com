import React, { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import logo from "../img/269f1dbe9cf5a4bedbd2ed10f35d4dec.png";
import '../component-styles/Navbar.css';

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  let big = windowWidth > 1320 ? true : false;
  useEffect(() => {
    function handleResize(){
      setWindowWidth(window.innerWidth)
      windowWidth > 1320 ? big = true : big = false
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className="navbar">
      <nav>
        <img 
          src={logo}
          alt="AP Logo"
          height="50px"
          width="50px"
        />
        {big &&
          <div className="links">
            <a href="#about-section">About</a>
            <a href="#projects-section">Projects</a>
            <a href="#education-section">Education</a>
            <a href="#map-section">Map</a>
          </div>
        }
        {!big &&
          <div className="button">
            <IconButton aria-label="open-links">
              <MenuIcon 
                fontSize="large"
                sx={{ color: "#00ce11"}}
              />
            </IconButton>
          </div>
        } 
        
      </nav>
    </div>
  )
}

export default Navbar;