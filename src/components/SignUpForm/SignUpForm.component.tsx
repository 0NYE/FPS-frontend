import React, { useState } from "react";

import Button from "@/components/Button/Button.component";
import LabeledInput from "@/components/LabeledInput/LabeledInput.component";
import { SignUpFormLayout } from "@/components/SignUpForm/SignUpForm.styles";
import { domain } from "@/constants/api";
import { useInput } from "@/hooks/useInput";

const SignUpForm = () => {
  const nicknameInput = useInput("");
  const idInput = useInput("");
  const passwordInput = useInput("");
  const [inputWarnings, setInputWarnings] = useState({
    nickname: "",
    id: "",
    password: "",
  });

  const buttonClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (
      [nicknameInput.value, idInput.value, passwordInput.value].includes("")
    ) {
      setInputWarnings({
        nickname: nicknameInput.value ? "" : "닉네임을 입력해주세요!",
        id: idInput.value ? "" : "아이디를 입력해주세요!",
        password: passwordInput.value ? "" : "비밀번호를 입력해주세요!",
      });

      return;
    }

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
        placeholder="닉네임을 입력해주세요"
        warningText={inputWarnings.nickname}
        {...nicknameInput}
      />
      <LabeledInput
        label="아이디"
        id="id"
        type="email"
        placeholder="아이디를 입력해주세요"
        warningText={inputWarnings.id}
        {...idInput}
      />
      <LabeledInput
        label="비밀번호"
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        warningText={inputWarnings.password}
        {...passwordInput}
      />
      <Button variant="blue" size="large" onClick={buttonClickHandler}>
        회원가입
      </Button>
    </SignUpFormLayout>
  );
};

export default SignUpForm;
