import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Navbar from "./components/common/Navbar";
import Home from "./components/Layout/Home";
import Portfoilo from "./components/Layout/Portfoilo";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./theme/useTheme";

export default function App() {
  return (
    <>
      <ThemeContext>
        <CssBaseline />
        <Container
          maxWidth={"md"}
          sx={{ bgcolor: "background.default", color: "text.primary" }}
        >
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfoilo />} />
            </Route>
          </Routes>
        </Container>
      </ThemeContext>
    </>
  );
}
