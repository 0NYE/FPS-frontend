import { useState } from "react";

import LoginForm from "@/components/LoginForm/LoginForm.component";
import Tab from "@/components/LoginModal/Tab/Tab.component";
import Modal from "@/components/Modal/Modal.component";
import SignUpForm from "@/components/SignUpForm/SignUpForm.component";

const modes = ["로그인", "회원가입"] as const;
type Mode = (typeof modes)[number];

const ModeFormMap: { [K in Mode]: () => JSX.Element } = {
  로그인: LoginForm,
  회원가입: SignUpForm,
};

interface LoginModalProps {
  isOpen: boolean;
  closeHandler: () => void;
}

const LoginModal = ({ isOpen, closeHandler }: LoginModalProps) => {
  const [currentMode, setCurrentMode] = useState<Mode>(modes[0]);
  const SelectedForm = ModeFormMap[currentMode];

  const tabOnChangeHandler = (selectedItem: string) => {
    setCurrentMode(selectedItem as Mode);
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler}>
      <Tab items={modes as unknown as string[]} onChange={tabOnChangeHandler} />
      <SelectedForm />
    </Modal>
  );
};

export default LoginModal;
