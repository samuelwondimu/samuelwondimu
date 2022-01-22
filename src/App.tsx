import { Container, CssBaseline } from "@mui/material";
import React from "react";
import Home from "./components/Layout/Home";
import Portfoilo from "./components/Layout/Portfoilo";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Home />
        <Portfoilo />
      </Container>
    </>
  );
}
