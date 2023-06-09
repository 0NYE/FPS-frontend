import { useState } from "react";

export const useTextArea = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};
