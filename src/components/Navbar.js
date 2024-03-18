import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar() {
  return (
    <AppBar position="static" style={{ height: '4rem' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography style={{ fontSize: '40px', fontWeight: 'bold', fontStyle: 'italic' }}>
          User Information App
        </Typography>
        <IconButton
          aria-label="GitHub repository"
          href="https://github.com/your-username/your-repository"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}


export default Navbar;
