import React from "react";

import { ReactComponent as Error } from "@/assets/images/error.svg";
import {
  LabeledInputLayout,
  LabeledInputLabel,
  LabeledInputInput,
  LabeledInputWarningParagraph,
} from "@/components/LabeledInput/LabeledInput.styles";

interface LabeledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  warningText?: string;
}

const LabeledInput = ({ label, warningText, ...props }: LabeledInputProps) => {
  return (
    <LabeledInputLayout>
      <LabeledInputLabel htmlFor={props.id}>{label}</LabeledInputLabel>
      <LabeledInputInput {...props}></LabeledInputInput>
      {warningText && (
        <LabeledInputWarningParagraph>
          <Error />
          {warningText}
        </LabeledInputWarningParagraph>
      )}
    </LabeledInputLayout>
  );
};

export default LabeledInput;
