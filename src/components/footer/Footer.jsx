import React from "react";
import {AppBar,Toolbar,Typography,Container} from '@material-ui/core';
import './Footer.css';
function Footer(props) {
  return (
    <div className="footer">
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit" class="textFooter">
              &copy; 2021 - Federico Speranza - Heroes Corp
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Footer;
