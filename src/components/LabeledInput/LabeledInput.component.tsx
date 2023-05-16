import React from "react";

import {
  LabeledInputLayout,
  LabeledInputLabel,
  LabeledInputInput,
} from "@/components/LabeledInput/LabeledInput.styles";

interface LabeledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const LabeledInput = ({ label, ...props }: LabeledInputProps) => {
  return (
    <LabeledInputLayout>
      <LabeledInputLabel htmlFor={props.id}>{label}</LabeledInputLabel>
      <LabeledInputInput {...props}></LabeledInputInput>
    </LabeledInputLayout>
  );
};

export default LabeledInput;
