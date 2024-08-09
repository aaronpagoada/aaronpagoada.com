import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import '../component-styles/MainDrawer.css';

function MainDrawer(){
  return (
    <div>
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
    </div>
  )
}

export default MainDrawer