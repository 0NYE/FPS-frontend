import { useState } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return { value, onChange };
};
