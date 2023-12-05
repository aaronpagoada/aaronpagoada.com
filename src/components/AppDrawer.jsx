import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import '../component-styles/AppDrawer.css';

function AppDrawer(){
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <IconButton
        onClick={() => setIsOpen(true)}
        aria-label="open-links"
      >
        <MenuIcon 
          fontSize="large"
          sx={{ color: "#ffffff"}}
        />
      </IconButton>
      <Drawer 
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
				<List>
					{['About', 'Projects', 'Education', 'Map'].map((linkText) => (
						<ListItem key={linkText} disablePadding>
							<ListItemButton>
								<Link to={`/${linkText.toLowerCase()}`}>
									<ListItemText primary={linkText} />
								</Link>
							</ListItemButton>
						</ListItem>
					))}
				</List>
      </Drawer>
    </div>
  )
}

export default AppDrawer