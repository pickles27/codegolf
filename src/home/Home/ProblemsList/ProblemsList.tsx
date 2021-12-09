import { SxProps } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";
import { mockSubmissions } from "../../../mockData";
import { ProblemPreview } from "./ProblemPreview";

interface ProblemsListProps {
  styles: SxProps;
}

export function ProblemsList({ styles }: ProblemsListProps) {
  return (
    <Box sx={styles}>
      <Typography marginBottom={1} variant="h4">
        Problems
      </Typography>
      {mockSubmissions.map((submission, index) => (
        <ProblemPreview
          showDarkBackground={shouldShowDarkBackground(index)}
          key={submission._id}
          {...submission}
        />
      ))}
    </Box>
  );
}

function shouldShowDarkBackground(index: number) {
  return index % 2 !== 0;
}
