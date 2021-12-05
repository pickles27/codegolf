import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export interface PreviewCardProps {
  author: string;
  prompt: string;
  title: string;
}

export const PreviewCard = ({ author, prompt, title }: PreviewCardProps) => (
  <Card sx={{ width: "18rem", height: "14rem", padding: "2rem" }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <CardContent
        sx={{
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" noWrap fontSize="20">
          {title}
        </Typography>
        <Typography variant="caption" noWrap>
          {author}
        </Typography>
        <Typography variant="subtitle1" noWrap>
          {prompt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Challenge</Button>
      </CardActions>
    </Box>
  </Card>
);
