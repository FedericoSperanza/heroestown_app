import React from "react";
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

function Header(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
          </IconButton>
          <Typography variant="h6" color="inherit">
            Heroes of the Earth
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
