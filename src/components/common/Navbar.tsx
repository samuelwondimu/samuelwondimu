import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "none" }} elevation={0}>
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button component={Link} to="/">
                samuel wondimu
              </Button>
              <Button component={Link} to="/portfolio">
                Portfolio
              </Button>
              <Button component={Link} to="/about">
                About
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
}
