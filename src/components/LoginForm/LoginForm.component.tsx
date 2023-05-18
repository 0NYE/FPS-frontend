import React from "react";

import Button from "@/components/Button/Button.component";
import LabeledInput from "@/components/LabeledInput/LabeledInput.component";
import { LoginFormLayout } from "@/components/LoginForm/LoginForm.style";

const LoginForm = () => {
  return (
    <LoginFormLayout>
      <LabeledInput label="아이디" id="id" type="email" />
      <LabeledInput label="비밀번호" id="password" type="password" />
      <Button variant="black" size="large">
        로그인
      </Button>
    </LoginFormLayout>
  );
};

export default LoginForm;
