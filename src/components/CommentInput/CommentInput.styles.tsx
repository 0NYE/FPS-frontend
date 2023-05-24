import styled from "styled-components";

export const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 100%;
  height: 128px;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.grey2};
  border-radius: 8px;
  background: ${(props) => props.theme.colors.grey4};
`;

export const InputBox = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  font-size: 14px;
  resize: none;
  outline: none;

  ::placeholder {
    color: ${(props) => props.theme.colors.grey1};
    opacity: 0.7;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 68%;
  top: 78%;
  transform: translateY(-50%);
`;
