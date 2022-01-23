import { GitHub, Web } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const works = [
  {
    title: "React-Redux-Typescript-Boilerplate",
    description:
      "A React-Redux-Typescript-Boilerplate is a boilerplate for a React-Redux-Typescript application.",
    image: "https://source.unsplash.com/random",
    url: "",
  },
  {
    title: "React-Redux-Typescript-Boilerplate",
    description:
      "A React-Redux-Typescript-Boilerplate is a boilerplate for a React-Redux-Typescript application.",
    image: "https://source.unsplash.com/random",
    url: "",
  },
  {
    title: "React-Redux-Typescript-Boilerplate",
    description:
      "A React-Redux-Typescript-Boilerplate is a boilerplate for a React-Redux-Typescript application.",
    image: "https://source.unsplash.com/random",
    url: "",
  },
];

export default function Portfoilo() {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Works
      </Typography>

      <Grid container spacing={2}>
        {works.map((work) => (
          <Grid item key={work.title} xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={work.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {work.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {work.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" startIcon={<Web />}>
                  Live Privew
                </Button>
                <Button size="small" variant="contained" startIcon={<GitHub />}>
                  source code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
