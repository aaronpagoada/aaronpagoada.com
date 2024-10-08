import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function SubDrawer(){
	const [isOpen, setIsOpen] = useState(false)

	return(
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
			<Drawer 
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
				<List>
					{['About', 'Work', 'Projects', 'Education'].map((linkText) => (
						<ListItem key={linkText} disablePadding>
              <a 
                href={`#${linkText.toLowerCase()}`}
                style={{ 
                  textDecoration: 'none',
                  color: '#000000',
                  width: '100%'
                }}  
              >
							  <ListItemButton>
									<ListItemText primary={linkText} />
							  </ListItemButton>
              </a>
						</ListItem>
					))}
				</List>
      </Drawer>
		</div>
	)
}

export default SubDrawer