import { Box, Typography } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <div>
      <Box
        sx={{
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          padding: "2rem",
          color: "white",
          textAlign: "center",
          borderRadius: "0.5rem",
        }}
      >
        <Typography variant="h6">
          Hello, I am a Front-end Developer Based in Ethiopia
        </Typography>
      </Box>
    </div>
  );
}
