import { useState } from "react";
import ReactModal, { Props } from "react-modal";

import LoginForm from "@/components/LoginForm/LoginForm.component";
import { modalCustomStyles } from "@/components/LoginModal/LoginModal.styles";
import Tab from "@/components/LoginModal/Tab/Tab.component";
import SignUpForm from "@/components/SignUpForm/SignUpForm.component";

const modes = ["로그인", "회원가입"] as const;
type Mode = (typeof modes)[number];

const ModeFormMap: { [K in Mode]: () => JSX.Element } = {
  로그인: LoginForm,
  회원가입: SignUpForm,
};

const LoginModal = (props: Props) => {
  const [currentMode, setCurrentMode] = useState<Mode>(modes[0]);
  const SelectedForm = ModeFormMap[currentMode];

  const tabOnChangeHandler = (selectedItem: string) => {
    setCurrentMode(selectedItem as Mode);
  };

  return (
    <ReactModal
      isOpen={props.isOpen}
      style={modalCustomStyles}
      onRequestClose={props.onRequestClose}
    >
      <Tab items={modes as unknown as string[]} onChange={tabOnChangeHandler} />
      <SelectedForm />
    </ReactModal>
  );
};

export default LoginModal;
