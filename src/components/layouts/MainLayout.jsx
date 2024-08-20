import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../../img/apblock.png";
import '../../component-styles/MainLayout.css';

function MainLayout() {
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
          <div className="links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default MainLayout;