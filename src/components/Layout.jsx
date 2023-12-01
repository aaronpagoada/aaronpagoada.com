import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import AppDrawer from "./AppDrawer";
import logo from "../img/269f1dbe9cf5a4bedbd2ed10f35d4dec.png";
import '../component-styles/Layout.css';

function Layout() {
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
    <div className="layout">
      <div className="navbar">
        <nav>
          <Link to="/">
            <img 
              src={logo}
              alt="AP Logo"
              height="50px"
              width="50px"
            />
          </Link>
          {big &&
            <div className="links">
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/education">Education</Link>
              <Link to="/map">Map</Link>
            </div>
          }
          {!big &&
            <div className="button">
              <AppDrawer />
            </div>
          } 
          
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout;