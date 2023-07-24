import React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";

import MenuItem from '@mui/material/MenuItem';


export default function CustomMenu() {

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.target.value);
  };

  return (
    <>
    <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        aria-label="Open to show more"
        title="Open to show more"
      >
      </IconButton>
      <Menu 
          value={handleClick} 
          onChange={handleClick}   
         >
          <MenuItem  onClick={(e) => handleClick(e)} />
          <MenuItem  onClick={(e) => handleClick(e)} />
          <MenuItem  onClick={(e) => handleClick(e)} />

      </Menu>
    </>
  );
}