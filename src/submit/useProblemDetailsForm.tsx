import { ChangeEvent, useState } from "react";
import { useUserData } from "../state/useUserData";

export function useProblemDetailsForm() {
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const { username } = useUserData();

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const changePrompt = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  return {
    title,
    prompt,
    changePrompt,
    changeTitle,
    username,
  };
}
