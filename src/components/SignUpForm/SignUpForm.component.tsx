import React from "react";

import Button from "@/components/Button/Button.component";
import LabeledInput from "@/components/LabeledInput/LabeledInput.component";
import { SignUpFormLayout } from "@/components/SignUpForm/SignUpForm.styles";

const SignUpForm = () => {
  return (
    <SignUpFormLayout>
      <LabeledInput label="닉네임" id="nickname" type="text" />
      <LabeledInput label="아이디" id="id" type="email" />
      <LabeledInput label="비밀번호" id="password" type="password" />
      <Button variant="black" size="large">
        회원가입
      </Button>
    </SignUpFormLayout>
  );
};

export default SignUpForm;
