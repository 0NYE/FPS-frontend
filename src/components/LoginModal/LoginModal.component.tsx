import { useState } from "react";
import ReactModal from "react-modal";

import { modalCustomStyles } from "@/components/LoginModal/LoginModal.styles";
import Tab from "@/components/LoginModal/Tab/Tab.component";

interface LoginModalProps {
  isOpen: boolean;
}

const modes = ["로그인", "회원가입"] as const;
type Mode = (typeof modes)[number];

const LoginModal = ({ isOpen }: LoginModalProps) => {
  const [currentMode, setCurrentMode] = useState<Mode>(modes[0]);

  const tabOnChangeHandler = (selectedItem: string) => {
    setCurrentMode(selectedItem as Mode);
  };

  return (
    <ReactModal isOpen={isOpen} style={modalCustomStyles}>
      <Tab items={modes as unknown as string[]} onChange={tabOnChangeHandler} />
    </ReactModal>
  );
};

export default LoginModal;
