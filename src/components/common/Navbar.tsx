import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  AppBar,
  Box,
  Button,
  Paper,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { useChangeTheme } from "../../theme/useTheme";
import { CodeRounded, GitHub, WorkOutline } from "@mui/icons-material";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 5 }}
    >
      {"Copyright © "}
      samuelwondimu {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Navbar() {
  const theme = useTheme();
  const changeTheme = useChangeTheme();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color={"primary"} elevation={0}>
          <Paper elevation={0} sx={{ borderRadius: 0 }}>
            <Toolbar>
              <Box
                sx={{
                  flexGrow: 1,
                }}
              >
                <Button
                  sx={{
                    color: "text.primary",
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                  component={Link}
                  to="/"
                  startIcon={<CodeRounded fontSize={"large"} />}
                  size="large"
                >
                  Samuel Wondimu
                </Button>
                <Button
                  sx={{ color: "text.primary", textTransform: "none" }}
                  component={Link}
                  to="/portfolio"
                >
                  Works
                </Button>
                <Button
                  sx={{ color: "text.primary", textTransform: "none" }}
                  component={Link}
                  to="/"
                  startIcon={<GitHub />}
                >
                  Source Code
                </Button>
              </Box>

              <IconButton
                sx={{ ml: 1 }}
                onClick={changeTheme.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Toolbar>
          </Paper>
        </AppBar>
      </Box>
      <Box>
        <Outlet />
      </Box>
      <Copyright />
    </>
  );
}
