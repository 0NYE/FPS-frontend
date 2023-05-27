import React, { useState } from "react";
import { toast } from "react-toastify";

import { useAtom } from "jotai";

import { loginModalActiveAtom } from "@/atoms/modal";
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
  const [loginModalActive, setLoginModalActive] = useAtom(loginModalActiveAtom);
  const [inputWarnings, setInputWarnings] = useState({
    id: "",
    password: "",
  });
  const notifyError = () =>
    toast.error(
      "로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인해주세요."
    );

  const buttonClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    if ([idInput.value, passwordInput.value].includes("")) {
      setInputWarnings({
        id: idInput.value ? "" : "아이디를 입력해주세요!",
        password: passwordInput.value ? "" : "비밀번호를 입력해주세요!",
      });

      return;
    }

    fetch(`${domain}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        id: idInput.value,
        password: passwordInput.value,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        setUser(true);
        setLoginModalActive(false);
      })
      .catch((err) => {
        notifyError();
      });
  };

  return (
    <LoginFormLayout>
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
        로그인
      </Button>
    </LoginFormLayout>
  );
};

export default LoginForm;
