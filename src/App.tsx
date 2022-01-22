import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Navbar from "./components/common/Navbar";
import Home from "./components/Layout/Home";
import Portfoilo from "./components/Layout/Portfoilo";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ width: 600 }}>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfoilo />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}
