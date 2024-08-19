import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../img/apblock.png";
import SubDrawer from "../SubDrawer";
import '../../component-styles/MainLayout.css';

function MainLayout() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  let big = windowWidth > 1024 ? true : false;
  useEffect(() => {
    function handleResize(){
      setWindowWidth(window.innerWidth)
      windowWidth > 1024 ? big = true : big = false
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className="main-layout">
      <div className="navbar">
        <nav>
          <a href="#home">
            <img 
              src={logo}
              alt="AP Logo"
              height="45px"
            />
          </a>
					{big &&
						<div className="links">
							<a href="#about">About</a>
							<a href="#work">Work</a>
							<a href="#projects">Projects</a>
							<a href="#education">Education</a>
						</div>
					}
					{!big &&
						<div className="button">
							<SubDrawer />
						</div>
					}
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default MainLayout;