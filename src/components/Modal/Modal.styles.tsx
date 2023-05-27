import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fall = keyframes`
  0% {
    transform: translate(-50%, -250%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`;

export const Content = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: none;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 12px 0px;
  overflow: hidden;
  animation: ${fadeIn} 500ms ease, ${fall} 500ms ease;
`;

export const Overlay = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 500ms ease;
`;
