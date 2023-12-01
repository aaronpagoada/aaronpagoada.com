import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

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
          sx={{ color: "#00ce11"}}
        />
      </IconButton>
      <Drawer 
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <h2>About</h2>
      </Drawer>
    </div>
  )
}

export default AppDrawer