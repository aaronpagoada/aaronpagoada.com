import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import '../component-styles/MainDrawer.css';

function MainDrawer(){
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <IconButton
        onClick={() => setIsOpen(!isOpen)}
        aria-label="open-links"
      >
        <MenuIcon 
          fontSize="large"
          sx={{ color: "#ffffff"}}
        />
      </IconButton>
			{isOpen && 
				<div className="drawer">
					<div className="drawer-links">
						<List>
							{['About', 'Projects', 'Education', 'Work'].map((linkText) => (
								<ListItem key={linkText} disablePadding>
									<ListItemButton>
										<Link 
											to={`/${linkText.toLowerCase()}`}
											style={{ 
												textDecoration: 'none',
												color: '#000000',
											}}  
										>
											<ListItemText primary={linkText} />
										</Link>
									</ListItemButton>
								</ListItem>
							))}
						</List>	
					</div>
				</div>
			}
    </div>
  )
}

export default MainDrawer