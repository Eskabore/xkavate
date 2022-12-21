import React from 'react';
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined } from '@mui/icons-material';

import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profileImage from 'assets/profile.jpg';

import { useTheme , IconButton, InputBase, AppBar, Toolbar, Box, Button } from '@mui/material';

function Navbar() {
    const dispatch = useDispatch();

    const theme = useTheme();

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

    <FlexBetween>
      <IconButton onClick={() => console.log('open/close sidebar')}>
        <MenuIcon  />
      </IconButton>

      <FlexBetween
      backgroundColor={theme.palette.background.alt}
      borderRadius="9px"
      gap="3rem"
      p="0.1rem 1.5rem"
      >

      <InputBase placeholder="Search..." />
      <IconButton>
        <Search />
      </IconButton>
      </FlexBetween>
    </FlexBetween>

    {/* RIGHT SIDE */}
    <FlexBetween gap="1.5rem">
      <IconButton onClick={() => dispatch(setMode())}>
        { theme.palette.mode === 'dark' ? (
          <DarkModeOutlined
          sx={ { fontSize: "25px" } } />
        ) : (
          <LightModeOutlined
          sx={ { fontSize: "25px" } } />
        )}
      </IconButton>

      <IconButton>
        <SettingsOutlined
        sx={ { fontSize: "25px" } } />
      </IconButton>

      <FlexBetween>
            <Button

              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
            <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />

            </Button>
            </FlexBetween>
    </FlexBetween>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar