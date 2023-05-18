import React from "react";

import {
  ButtonLayout,
  ButtonLayoutProps,
} from "@/components/Button/Button.styles";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonLayoutProps {}

const Button = (props: ButtonProps) => {
  console.log(props.size);
  return <ButtonLayout {...props}></ButtonLayout>;
};

export default Button;
