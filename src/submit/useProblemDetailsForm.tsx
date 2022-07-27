import { ChangeEvent, useState } from "react";
import { useUserData } from "../state/useUserData";

export function useProblemDetailsForm() {
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const { username } = useUserData();

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    if (newTitle !== null) {
      setTitle(newTitle);
    }
  };

  const onChangePrompt = (e: ChangeEvent<HTMLInputElement>) => {
    const newPrompt = e.target.value;
    if (newPrompt !== null) {
      setPrompt(newPrompt);
    }
  };

  return {
    title,
    prompt,
    onChangePrompt,
    onChangeTitle,
    username,
  };
}
