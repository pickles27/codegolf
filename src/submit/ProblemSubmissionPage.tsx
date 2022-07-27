import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { ProblemDetailsForm } from "./ProblemDetailsForm";
import { useProblemDetailsForm } from "./useProblemDetailsForm";

export function ProblemSubmissionPage() {
  const { title, onChangeTitle, prompt, onChangePrompt, username } =
    useProblemDetailsForm();
  return (
    <Box marginTop={1}>
      <Stack direction="row">
        <Box width="50vw" height="100vh">
          <ProblemDetailsForm
            onChangeTitle={onChangeTitle}
            onChangePrompt={onChangePrompt}
            prompt={prompt}
            title={title}
            username={username}
          />
        </Box>
        <Paper sx={{ height: "100%", overflow: "hidden" }}>
          <CodeMirror
            value={"//your code hereeee"}
            height="100vh"
            width="50vw"
            lang="javascript"
            theme="dark"
            onChange={(value, viewUpdate) => {
              console.log("value:", value);
              console.log("viewUpdate: ", viewUpdate);
            }}
          />
        </Paper>
      </Stack>
    </Box>
  );
}
