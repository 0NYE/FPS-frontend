import { useRef } from "react";

import { Overlay, Content } from "@/components/Modal/Modal.styles";

interface ModalProps {
  isOpen: boolean;
  closeHandler: () => void;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, closeHandler, children }: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const overlayMouseDownHandler: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    if (e.target === overlayRef.current) {
      closeHandler && closeHandler();
    }
  };

  return (
    <Overlay
      ref={overlayRef}
      visible={isOpen}
      onMouseDown={overlayMouseDownHandler}
    >
      <Content visible={isOpen}>{children}</Content>
    </Overlay>
  );
};

export default Modal;
