import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../img/apblock.png";
import '../../component-styles/MainLayout.css';

function MainLayout() {
  return (
    <div className="main-layout">
      <div className="navbar">
        <nav>
          <Link to="/">
            <img 
              src={logo}
              alt="AP Logo"
              height="45px"
            />
          </Link>
          <div className="links">
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/education">Education</Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default MainLayout;