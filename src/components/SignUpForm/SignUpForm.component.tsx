import React from "react";

import Button from "@/components/Button/Button.component";
import LabeledInput from "@/components/LabeledInput/LabeledInput.component";
import { SignUpFormLayout } from "@/components/SignUpForm/SignUpForm.styles";
import { domain } from "@/constants/api";
import { useInput } from "@/hooks/useInput";

const SignUpForm = () => {
  const nicknameInput = useInput("");
  const idInput = useInput("");
  const passwordInput = useInput("");

  const buttonClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    fetch(`${domain}/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        id: idInput.value,
        password: passwordInput.value,
        nickname: nicknameInput.value,
      }),
    })
      .then((response) => {
        alert("회원가입에 성공했습니다.");
        console.log("signup success!");
      })
      .catch((err) => {
        alert("회원가입에 실패했습니다.");
        console.error(err);
      });
  };

  return (
    <SignUpFormLayout>
      <LabeledInput
        label="닉네임"
        id="nickname"
        type="text"
        {...nicknameInput}
      />
      <LabeledInput label="아이디" id="id" type="email" {...idInput} />
      <LabeledInput
        label="비밀번호"
        id="password"
        type="password"
        {...passwordInput}
      />
      <Button variant="black" size="large" onClick={buttonClickHandler}>
        회원가입
      </Button>
    </SignUpFormLayout>
  );
};

export default SignUpForm;
