import { Avatar, Box, CardHeader, Typography } from "@mui/material";
import { title } from "process";
import React from "react";

export default function Home() {
  return (
    <div>
      <Box
        sx={{
          background: "#333",
          padding: "2rem",
          color: "white",
          textAlign: "center",
          borderRadius: "0.5rem",
        }}
      >
        <Typography fontWeight={"bold"}>
          Hello, I am a Front-end Developer Based in Ethiopia
        </Typography>
      </Box>
      <CardHeader
        action={<Avatar aria-label="recipe">R</Avatar>}
        title="Samuel Wondimu"
        subheader="React / Typescript / NodeJS / Express / MongoDB / GraphQL"
      />

      <Box pt={10} />
      <Typography>About Me</Typography>
      <Typography variant="body1" component="p">
        I am a Front-end Developer with a passion for building web applications.
        I have a strong background in web development and have worked in a wide
        range of industries. I have a strong background in web development and
        have worked in a wide range of industries. I have a strong background in
        web development and have worked in a wide range of industries. I have a
        strong background in web development and have worked in a wide range of
        industries.
      </Typography>
    </div>
  );
}
