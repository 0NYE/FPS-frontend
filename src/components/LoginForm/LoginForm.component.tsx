import React from "react";

import { useAtom } from "jotai";

import { userAtom } from "@/atoms/user";
import Button from "@/components/Button/Button.component";
import LabeledInput from "@/components/LabeledInput/LabeledInput.component";
import { LoginFormLayout } from "@/components/LoginForm/LoginForm.style";
import { domain } from "@/constants/api";
import { useInput } from "@/hooks/useInput";

const LoginForm = () => {
  const idInput = useInput("");
  const passwordInput = useInput("");
  const [user, setUser] = useAtom(userAtom);

  const buttonClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    fetch(`${domain}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        id: idInput.value,
        password: passwordInput.value,
      }),
    })
      .then((response) => {
        alert("로그인에 성공했습니다.");
        setUser(true);
        console.log("login success!");
      })
      .catch((err) => {
        alert("로그인에 실패했습니다.");
        console.error(err);
      });
  };

  return (
    <LoginFormLayout>
      <LabeledInput label="아이디" id="id" type="email" {...idInput} />
      <LabeledInput
        label="비밀번호"
        id="password"
        type="password"
        {...passwordInput}
      />
      <Button variant="black" size="large" onClick={buttonClickHandler}>
        로그인
      </Button>
    </LoginFormLayout>
  );
};

export default LoginForm;
