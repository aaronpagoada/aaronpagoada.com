import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import SubDrawer from "../SubDrawer";
import logo from "../../img/apblock.png";
import '../../component-styles/SubLayout.css';

function SubLayout(){
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
		<div className="sub-layout">
			<div className="navbar">
				<nav>
					<Link to="/">
						<img 
							src={logo}
							alt="AP Logo"
							height="45px"
						/>
					</Link>
					{big &&
						<div className="links">
							<Link to="/about">About</Link>
							<Link to="/work">Work</Link>
							<Link to="/projects">Projects</Link>
							<Link to="/education">Education</Link>
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

export default SubLayout