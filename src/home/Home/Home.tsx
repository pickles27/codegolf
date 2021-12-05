import React from "react";
import { mockSubmissions } from "../../mockData";
import { PreviewCard } from "../PreviewCard";
import Grid from "@mui/material/Grid";

export const Home = () => (
  <Grid container spacing="20" justifyContent="center" marginY="1rem">
    {mockSubmissions.map((submission) => (
      <Grid item key={submission._id}>
        <PreviewCard {...submission} />
      </Grid>
    ))}
  </Grid>
);
