import React from 'react';
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material';

import FlexBetween from 'components/Flexbetween';
import { useDispatch } from ' react-redux';
import { setMode } from 'state';
import profileImage from 'assets/profile.png';
import { useTheme, AppBar, Toolbar } from '@emotion/react';

function Navbar() {
    const dispatch = useDispatch();

    const theme = useTheme;

  return (
  <AppBar
    sx={{
      position: "static",
      background: "none",
      boxShadow: "none"
    }}
    >

    <Toolbar sx={{ justifyContent: "space-between" }}>
    {/* LEFT SIDE */}
    </Toolbar>
  </AppBar>
  )
}

export default Navbar