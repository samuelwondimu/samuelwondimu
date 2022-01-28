import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { title } from "process";
import React from "react";



export default function Home() {
  return (
    <Stack direction={"column"} spacing={5}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.secondary",
          padding: "2rem",
          textAlign: "center",
          borderRadius: "0.5rem",
          border: "1px solid",
          mt: 5,
        }}
      >
        <Typography fontWeight={"bold"}>
          Hello, I am a Front-end Developer Based in Ethiopia
        </Typography>
      </Box>

      <CardHeader
        action={
          <Avatar
            aria-label="recipe"
            sx={{ width: 76, height: 76 }}
            src={
              "https://lh3.googleusercontent.com/ogw/ADea4I5-BV92fd6AHWMOEmtYS_X8jIlLOiwZlP4kwMMU=s83-c-mo"
            }
          />
        }
        title={
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            Samuel Wondimu
          </Typography>
        }
        subheader="React / Typescript / NodeJS / Express / MongoDB / GraphQL"
      />
      <Box>
        <Typography variant={"h5"}>About Me</Typography>
        <Typography variant="body1" component="p">
          I am a Front-end Developer with a passion for building web
          applications. I have a strong background in web development and have
          worked in a wide range of industries. I have a strong background in
          web development and have worked in a wide range of industries. I have
          a strong background in web development and have worked in a wide range
          of industries. I have a strong background in web development and have
          worked in a wide range of industries.
        </Typography>
      </Box>

      <Box>
        <Typography variant={"h5"}>On The Web</Typography>
        <Stack direction={"column"} spacing={2}>
          <Button
            sx={{ width: 250, textTransform: "none" }}
            variant="contained"
            startIcon={<GitHub />}
          >
            @samuelwondimu
          </Button>
          <Button
            sx={{ width: 250, textTransform: "none" }}
            variant="contained"
            startIcon={<Twitter />}
          >
            @samuelwondimu
          </Button>
          <Button
            sx={{ width: 250, textTransform: "none" }}
            variant="contained"
            startIcon={<LinkedIn />}
          >
            LinkedIn Profile
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
