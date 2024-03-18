import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar() {
  return (
    <AppBar position="static" style={{ height: '4rem', marginTop : '1.5rem', marginLeft : '1rem', backgroundColor: '#333333' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography style={{ fontSize: '40px', fontWeight: 'bold', fontStyle: 'italic', color: '#FFFFFF' }}>
          User Information App
        </Typography>
        <IconButton
          aria-label="GitHub repository"
          href="https://github.com/kunalMore23/user-info"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#FFFFFF' }} // Change GitHub icon color to white
        >
          <GitHubIcon fontSize="large" style={{ fontSize: '2rem' }} /> {/* Increase GitHub icon size */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
