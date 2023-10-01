

import './Header.css'
import React from 'react';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <div className='header-container'>
        <h1>Breaking News</h1>
        <p>This is one of best breaking news</p>
        <p><Button variant="contained" color="warning">see the featured news below</Button></p>
    </div>
  )
}

export default Header