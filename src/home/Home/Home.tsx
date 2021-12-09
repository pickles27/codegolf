import React from "react";
import Container from "@mui/material/Container";
import { ProblemsList } from "./ProblemsList";

export const Home = () => (
  <Container>
    <ProblemsList styles={{ marginTop: 3 }} />
  </Container>
);
